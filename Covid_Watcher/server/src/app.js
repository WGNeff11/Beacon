/* eslint-env node */
const express = require("express")
const morgan = require("morgan")
const body_parser = require("body-parser")
const cors = require('cors')
// const config = require('./config/config')
const db = require('./queries')
const port = 8081

const app = express()
app.use(morgan('combined'))
app.use(body_parser.json())
app.use(cors())

// require('./routes')(app)

// Get Request Links
app.get('/experts', db.getExperts)
app.get('/tweets', db.getTweets)
app.get('/experts_filtered', db.worldMapExperts)
app.get('/tweets_formatted', db.expertTableTweets)
app.get('/sentiment_date', db.sentimentDate)
app.get('/cases', db.getCaseCount)
app.get('/postman_test', db.postmanTester)
app.get('/expertises', db.getExpertises)
app.get('/sentiment_favorites', db.getSentiment_Favorite)
app.get('/cases_information', db.getCaseInformation)
app.get('/non_expert_tweets_formatted', db.nonExpertTableTweets)

// Post Request Links
app.post('/storedRecs', db.storedRecs)

app.listen(port, () => {
	console.log(`App running on port ${port}.`)
  })