/* eslint-env node */
const Pool = require('pg').Pool
const config = require('./config/config')

const pool = new Pool({
	user: config.db.username,
	host: config.db.options.host,
	database: config.db.database,
	password: config.db.password,
	port: 5432,
})



// getExperts response example:
// {
//     "user_id": "233364902",
//     "name": "Atul Gawande",
//     "location": "Boston, MA",
//     "profile_image_url": "http://pbs.twimg.com/profile_images/842116703634972672/rZyNr1AN_normal.jpg",
//     "lat": 42.3372857930981,
//     "long": -71.0664550171898,
//     "expertise": "Doctor"
// },

const getExperts = (request, response) => {
    pool.query('SELECT user_id, name, location, profile_image_url, lat, long, expertise FROM accounts WHERE accounts.expertise IS NOT NULL ORDER BY name ASC', (error, results) => {
        if (error) {
            throw error
        }
    response.status(200).json(results.rows)
    })
}


const getTweets = (request, response) => {
	pool.query('SELECT * FROM tweets', (error, results) => {
        if (error) {
            throw error
        }
    response.status(200).json(results.rows)
    })
}
const worldMapExperts = (request, response) => {
	pool.query('SELECT name, lat, long, profile_image_url FROM accounts', (error, results) => {
        if (error) {
            throw error
        }
    response.status(200).json(results.rows)
    })
}
const expertTableTweets = (request, response) => {
    pool.query('SELECT accounts.name, tweets.status_id, tweets.created_at, accounts.profile_image_url, accounts.screen_name, accounts.name, tweets.text, tweets.favorite_count, tweets.retweet_count, tweets.sentiment, accounts.expertise FROM tweets JOIN accounts ON tweets.user_id = accounts.user_id WHERE accounts.expertise IS NOT NULL LIMIT 100', (error, results) => {
        if (error) {
            throw error
        }
    response.status(200).json(results.rows)
    })
}

const nonExpertTableTweets = (request, response) => {
    pool.query('SELECT accounts.name, tweets.status_id, tweets.created_at, accounts.profile_image_url, accounts.screen_name, accounts.name, tweets.text, tweets.favorite_count, tweets.retweet_count, tweets.sentiment FROM tweets JOIN accounts ON tweets.user_id = accounts.user_id WHERE tweets.state IS NOT NULL LIMIT 200', (error, results) =>{
        if (error) {
            throw error
        }
    response.status(200).json(results.rows)
    })
}


const sentimentDate = (request, response) => {
    pool.query({
        // rowMode: 'array',
        text: "SELECT AVG(sentiment) AS sentiment, EXTRACT(week FROM created_at) AS week_created FROM tweets WHERE EXTRACT(year FROM created_at) = 2020 AND sentiment IS NOT NULL AND state IS NULL GROUP BY week_created ORDER BY week_created ASC"
    }, (error, results) => {
        if(error) {
            throw error
        }
        var newArr = []
        newArr[0] = [results.fields[0].name, results.fields[1].name]
        results.rows.forEach(function(item, index) {
            // const date = new Date(item.created_at)
            // const year = date.getFullYear();
            // var month = date.getMonth()+1;
            // var dt = date.getDate();
            // if (dt < 10) {
            //   dt = '0' + dt;
            // }
            // if (month < 10) {
            //   month = '0' + month;
            // }
            // const full_date = year+'-'+month+'-'+dt
            newArr[index + 1] = [item.week_created, item.sentiment]
          })
        response.status(200).send(newArr)
    })
}

const getCaseCount = (request, response) => {
    pool.query('SELECT * FROM cases ORDER BY positive DESC', (error, results) => {
        if (error) {
            throw error
        }
    response.status(200).json(results.rows)
    })
}



const postmanTester = (request, response) => {
    pool.query("SELECT DISTINCT user_id FROM tweets WHERE state IS NULL" , (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const storedRecs = (request, response) => {

    const vals = [request.body.s_name, request.body.s_handle, request.body.s_expertise, request.body.s_zip, request.body.s_recName, request.body.s_recEmail]

    pool.query("INSERT INTO recs(exp_name, exp_twitter_handle, exp_expertise, rec_zip_code, rec_name, rec_email) VALUES ($1, $2, $3, $4, $5, $6)", vals, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getExpertises = (request, response) => {
    pool.query("SELECT DISTINCT expertise FROM accounts WHERE expertise IS NOT NULL;" , (error, results) => {
        if (error) {
            throw error
        }
        var makeArray = []
        results.rows.forEach(function(item, index) {
                makeArray[index] = item.expertise

            
        })
        response.status(200).send(makeArray)
    })
}

const filterExpTweets = (request) => {
    console.log(request.body)
    // pool.query('SELECT accounts.name, tweets.status_id, tweets.created_at, accounts.profile_image_url, accounts.screen_name, accounts.name, tweets.text, tweets.favorite_count, tweets.retweet_count, tweets.sentiment FROM tweets JOIN accounts ON tweets.user_id = accounts.user_id WHERE tweets.favorite_count >= 300 AND accounts.expertise = {1}', request.body.s_expertise, (error, results) => {
    //     if (error) {
    //         throw error
    //     }
    // response.status(200).json(results.rows)
    // })
}

const getSentiment_Favorite = (request, response) => {
    pool.query("SELECT favorite_count, sentiment FROM tweets WHERE state IS NULL AND sentiment > -1.0 AND sentiment < 1.0", (error, results) => {
        if (error) {
            throw error
        }
        var newArr = []
        newArr[0] = [results.fields[0].name, results.fields[1].name]
        results.rows.forEach(function(item, index) {
            newArr[index + 1] = [parseInt(item.favorite_count), item.sentiment]
          })
        response.status(200).send(newArr)
    })
}

const getCaseInformation = (request, response) => {
    pool.query("SELECT tweets.state, positive, deaths, sentiment, CAST(deaths AS FLOAT)/positive as death_rate, tested FROM (SELECT state, avg(sentiment) as sentiment FROM tweets WHERE state IS NOT NULL GROUP BY tweets.state) AS tweets INNER JOIN cases ON tweets.state = cases.state;", (error, results) => {
        if (error) {
            throw error
        }
        var newArr = []
        newArr[0] = [results.fields[0].name, results.fields[1].name, results.fields[2].name, results.fields[3].name, results.fields[4].name, results.fields[5].name ]
        results.rows.forEach(function(item, index) {
            newArr[index + 1] = [item.state, parseInt(item.positive), parseInt(item.deaths), item.sentiment, item.death_rate, parseInt(item.tested)]
          })
        response.status(200).send(newArr)

    })
}

module.exports = {
	getExperts,
    getTweets,
    getCaseCount,
    worldMapExperts,
    expertTableTweets,
    sentimentDate,
    postmanTester,
    storedRecs,
    getExpertises,
    getSentiment_Favorite,
    getCaseInformation,
    nonExpertTableTweets,
    filterExpTweets
}