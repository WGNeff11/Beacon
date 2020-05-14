CREATE TABLE accounts
(user_id bigint NOT NULL PRIMARY KEY,
 screen_name VARCHAR(50) NOT NULL,
 name VARCHAR(50) NOT NULL,
 location VARCHAR(50),
 lat FLOAT,
 long FLOAT,
 description VARCHAR(500),
 profile_url VARCHAR(500),
 profile_image_url VARCHAR(500),
 followers_count INTEGER,
 statuses_count INTEGER,
 expertise VARCHAR(50)
);

CREATE TABLE tweets
(status_id bigint PRIMARY KEY,
 user_id bigint NOT NULL,
 created_at timestamp NOT NULL,
 text VARCHAR(1000) NOT NULL,
 favorite_count bigint,
 retweet_count bigint,
 sentiment float,
 state VARCHAR(50)
);


CREATE TABLE cases
(state VARCHAR(2),
 seconds_since_Epoch bigint,
 tested bigint,
 positive bigint,
 deaths bigint,
 PRIMARY KEY(state, seconds_since_Epoch)
);

-- constraints follow form of respective industry standards
--twitter handle must start with @, be alphanumeric, no more than 15 characters
--zip code must be standard US 5-digit
--email address must be in valid form and end in valid domain
CREATE TABLE recs
(exp_name VARCHAR(50) NOT NULL CHECK (exp_name ~* '^[a-zA-Z\s]*$'),
exp_twitter_handle VARCHAR(50) NOT NULL CHECK (exp_twitter_handle ~* '^@(\w){1,15}$'),
exp_expertise VARCHAR(50) NOT NULL CHECK (exp_expertise ~* '^[a-zA-Z\s]*$'),
rec_zip_code VARCHAR(50) NOT NULL CHECK (rec_zip_code ~* '^\d{5}$'),
rec_name VARCHAR(50) NOT NULL CHECK (rec_name ~* '^[a-zA-Z\s]*$'),
rec_email VARCHAR(50) NOT NULL CHECK (rec_email ~* '^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$'),
PRIMARY KEY(rec_email, exp_twitter_handle)
);
