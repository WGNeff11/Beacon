import axios from 'axios'

const state = {
  tweets: [],
  sentimentVals: [-1, 1]
}

const getters = {
  allTweets: state => state.tweets,
  sentimentVals: state => state.sentimentVals,
  positiveTweets: function(state) {
    return state.tweets.filter(function(u) {
      return (u.sentiment >= 0 && u.sentiment <= state.sentimentVals[1])
    })
  },
  negativeTweets: function(state) {
    return state.tweets.filter(function(u) {
      return (u.sentiment < 0 && u.sentiment >= state.sentimentVals[0])
    })
  },


}

const actions = {
  async fetchTweets({ commit }) {
    const response = await axios.get(
      'http://localhost:8081/non_expert_tweets_formatted'
    );
    commit('setTweets', response.data)
  },

  updateSentimentVals({ commit }, newVals) {
    commit('updateSentimentValues', newVals)
  }
  
}

const mutations = {
  setTweets: (state, tweets) => (state.tweets = tweets),
  updateSentimentValues: (state, newVals) => (state.sentimentVals = newVals)
}

export default {
  state,
  getters,
  actions,
  mutations
}