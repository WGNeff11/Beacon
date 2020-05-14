import axios from "axios";



// Components that use this store module: 

// Expert Dropdown from @/components/experts/ExpertDropdown.vue
// Expert Scatter Plot from @/components/experts/ExpertScatterplot.vue
// Sentiment Graph from @/components/graphs/SentimentGraph.vue
// Expert Tweets from @/components/experts/ExpertTweets.vue



// State of charts data
const state = {
  sentiment_date: [], //data for sentiment graph
  sentiment_favorites: [], //data for scatter plot
  expert_name: '', //string entered in charts search bar
  expert_tweets: [], //tweets only by experts
  selected_expertises: []
}


// Call these in order to get data from store

const getters = {

  getSentimentDate: state => state.sentiment_date,  //returns data for sentiment graph 

  getSentimentFavorites: state => state.sentiment_favorites, //returns data for scatter plot

  getExpertName: state => state.expert_name, //returns experts name that is typed at chart 

  getSelectedExpertises: state => state.selected_expertises, //returns expertise types specified by user im Charts.vue

  // Filters experts tweets and only contains those with positive sentiment and are tweeted by a user with a name that is similar
  // to the one typed by user
  positiveExpertTweets: function(state) {
    return state.expert_tweets.filter(function(u) {
      return (u.sentiment >= 0 && u.sentiment <= 1.0 && u.name.includes(state.expert_name) && state.selected_expertises.includes(u.expertise))
    })
  },
  // Filters experts tweets and only contains those with negative sentiment and are tweeted by a user with a name that is similar
  // to the one typed by user
  negativeExpertTweets: function(state) {
    return state.expert_tweets.filter(function(u) {
      return (u.sentiment < 0 && u.sentiment >= -1.0 && u.name.includes(state.expert_name) && state.selected_expertises.includes(u.expertise))
    })
  },

}

const actions = {

  // Fetch data from backend for sentiment graph
  async fetchSentimentDate({commit}) {
    const response = await axios.get(
      "http://localhost:8081/sentiment_date"
    );
    commit('setSentimentDate', response.data)
  },


  // fetch data from backend for scatter plot

  async fetchSentimentFavorites({commit}) {
    const response = await axios.get(
      "http://localhost:8081/sentiment_favorites"
    );
    commit('setSentimentFavorites', response.data)
  },

  //Updates expert name 
  updateExpertName({ commit }, expert_name) {
    commit('setExpertName', expert_name)
  },

  // update selected expertises

  updateSelectedExpertises({commit}, expertises) {
    commit('setSelectedExpertises', expertises)
  },

  //fetch data from backend for experts tweets table
  async fetchExpertTweets({ commit }) {
    const response = await axios.get(
      'http://localhost:8081/tweets_formatted'
    );
    commit('setExpertTweets', response.data)
  },
  
}


// Each of these called by action in order to mutate (update) the state of the store module
const mutations = {
  setSentimentDate: (state, sentimentDate) => (state.sentiment_date = sentimentDate),
  setSentimentFavorites: (state, sentimentFavorites) => (state.sentiment_favorites = sentimentFavorites),
  setExpertName: (state, expert_name) => (state.expert_name = expert_name),
  setExpertTweets: (state, expert_tweets) => (state.expert_tweets = expert_tweets),
  setSelectedExpertises: (state, expertises) => (state.selected_expertises = expertises)
}

export default {
  state,
  getters,
  actions,
  mutations
}