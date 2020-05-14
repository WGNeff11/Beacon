import axios from 'axios'

const state = {
  cases: [],
  // secondMostCases: 0,
  // total_cases: 0,
  // positive_cases_per_state: [],
  // deaths_per_state: [],
  // death_rate_per_state: []
  bubbleData: [],
  mapOption: 'Case Count'

}

const getters = {

  getBubbleData: state => state.bubbleData,
  getTotalCases: function(state) {
    var totalCases = 0
    // state.cases.forEach(function(us_state, totalCases) {
    //   totalCases = totalCases + us_state.positive
    // })
    for(var i = 0; i < state.cases.length; i++) {
      totalCases = totalCases + state.cases[i].positive
    }
    return totalCases
  },
  getPositiveCasesPerState: function(state) {
    var positiveCases = [["State", "Positive Cases"]]
    var us_string = 'US-'
    for(var i = 0; i < state.cases.length; i++) {
      positiveCases[i + 1] = [us_string.concat(state.cases[i].state), parseInt(state.cases[i].positive, 10)]
    }
    // console.log(typeof positiveCases[1][1])
    return positiveCases
    // .sort(compareSecondColumn)

  },
  getNegativeTestsPerState: function(state) {
    var positiveCases = [["State", "Negative Cases"]]
    var us_string = 'US-'
    for(var i = 0; i < state.cases.length; i++) {
      var falseCases = parseInt(state.cases[i].tested) - parseInt(state.cases[i].positive)
      positiveCases[i + 1] = [us_string.concat(state.cases[i].state), falseCases]
    }
    // console.log(typeof positiveCases[1][1])
    return positiveCases
    // .sort(compareSecondColumn)

  },

  getDeathsPerState: function(state) {
    var deathCases = []
    var us_string = 'US-'
    deathCases[0] = ["State", "Number of Deaths"]
    for(var i = 0; i < state.cases.length; i++) {
      deathCases[i + 1] = [us_string.concat(state.cases[i].state), parseInt(state.cases[i].deaths)]
    }
    // console.log(deathCases)
    return deathCases

  },
  getDeathRatePerState: function(state) {
    var deathRate = []
    var us_string = 'US-'
    deathRate[0] = ["State", "Death Percentage"]
    for(var i = 0; i < state.cases.length; i++) {
      var percent = parseInt(state.cases[i].deaths) / parseInt(state.cases[i].positive)
      deathRate[i + 1] = [us_string.concat(state.cases[i].state), percent]
    }
    return deathRate
  },

}

const actions = {
  async fetchCases({ commit }) {
    const response = await axios.get(
      'http://localhost:8081/cases'
    );
    commit('setCases', response.data);
  },
  async fetchBubbleData({commit}) {
    const response = await axios.get(
      'http://localhost:8081/cases_information'
    );
    commit('setBubbleData', response.data)
  }
}

const mutations = {
  setCases: (state, cases) => (state.cases = cases),
  setBubbleData: (state, bubbleData) => (state.bubbleData = bubbleData)
}


// function compareSecondColumn(a, b) {
//     if (a[1] === b[1]) {
//         return 0;
//     }
//     else {
//         return (a[1] > b[1]) ? -1 : 1;
//     }
// }

export default {
  state,
  getters,
  actions,
  mutations
}