select distinct tweets.user_id from tweets where sentiment > 0;

select distinct tweets.user_id from tweets where sentiment < 0;

select distinct tweets.user_id from tweets where sentiment > 0;

select distinct experts.screen_name from experts where experts.followers_count < 100000;