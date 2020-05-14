library(tidyverse)
library(rtweet)
library(RPostgres)
library(DBI)
library(RPostgreSQL)
library(ggmap)
library(sentimentr)
register_google(key = "AIzaSyCr1pd2Pvv9sabCSnzkdn4KuupK-cWHX1M")

#con <- dbConnect(RPostgres::Postgres(),dbname = 'covidTwitter')
con <- dbConnect(RPostgres::Postgres(),dbname = 'covidTwitter')

#drv <- dbDriver("PostgreSQL")


API = create_token(app = "Coronavirus Expert Tracker", consumer_key = "FPX9PAwDiKsxFHjl0yE5koHw0", consumer_secret = "7ilAGLyV5Fo6065GmVXRUFPLmxs40CNfrgD26NdlE90F5n7f6Q", 
                   access_token = "498357991-2x1uoFOlJOmN4S97eX48hEuHnfqzXleA9CI9VLZ2",
                   access_secret = "5aS5Y483XPS3RoWHfCiPVS03Hd4Alhx2s7WEtSL3ztbRC")

experts = c("realDonaldTrump", "robinhanson", "EricRWeinstein", "SamHarrisOrg", "JoeBiden", "SteveFDA", "_HannahRitchie", "CDCDirector", "trvrb", "aetiology", "WHO")

# Populates the accounts, experts tables
tmls <- get_timelines(experts, n = 1)

expert_bios = tmls %>% select(user_id, screen_name, name, location, description, profile_url, 
                              profile_image_url, followers_count, statuses_count) %>%
  mutate(expertise = c("Global Leader", "Academic", "Rationalist", "Rationalist", "Global Leader",
                       "Global Leader", "Academic", "Global Leader", "Academic", "Academic", 
                       "Global Leader")) %>% 
  mutate(user_id = as.numeric(user_id),
         followers_count = as.numeric(followers_count),
         statuses_count = as.numeric(statuses_count))

expert_bios = expert_bios %>% mutate(location = ifelse(user_id == 116994659, 'Los Angeles, CA',
                                                       ifelse(user_id == 33152005, 'San Francisco, CA', location)))

lat_noise = runif(nrow(expert_bios), -.05, .05)
lon_noise = runif(nrow(expert_bios), -.05, .05)
coords = geocode(gsub('[[:punct:] ]+',' ', expert_bios$location), output = "latlona", source = "google")
expert_bios = expert_bios %>% mutate(lat = coords$lat+lat_noise, long = coords$lon + lon_noise)

dbAppendTable(con, dbQuoteIdentifier(con, "accounts"), expert_bios %>% select(-expertise))

dbAppendTable(con, dbQuoteIdentifier(con, "experts"), expert_bios %>% select(user_id, expertise))



# Populates tweets table
experts = expert_res$screen_name
tweets <- get_timelines(experts, n = 1000) %>% filter(!is_retweet)

tweet_insert = tweets %>% select(status_id, user_id, created_at, text, favorite_count, retweet_count) %>% filter(str_detect(text, "https", negate = T))

keywords = c("cov", "coro", "doctor", "med", "disease", "death", "case", "vir", "crisis", "pandemic", "nurse", "social distancing")
final_insert = tweet_insert %>% filter(str_detect(text, keywords[1]))
for(i in c(2:length(keywords))){
  final_insert = rbind(final_insert, (tweet_insert %>% filter(str_detect(text, keywords[i]))))
}
final_insert = final_insert  %>% distinct(status_id, .keep_all = T) %>% 
  mutate(sentiment = sentiment_by(text)$ave_sentiment)
dbAppendTable(con, dbQuoteIdentifier(con, "tweets"), final_insert)