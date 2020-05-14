import axios from "axios"

const state = {
  experts: [],
  show_form: false,
  expertises: [],

}

const getters = {
  getExperts: state => state.experts,
  getShowForm: state => state.show_form,
  getExpertises: state => state.expertises
}

const actions = {
  async fetchExperts({commit}) {
    const response = await axios.get(
      "http://localhost:8081/experts"
    );
    commit('setExperts', response.data)
  },

  toggleShowForm({commit}, payload) {
    commit('toggleShowForm', payload)

  },
  async fetchExpertises({commit}) {
    const response = await axios.get(
      "http://localhost:8081/expertises"
    );
    commit('setExpertises', response.data)
    commit('setSelectedExpertises', response.data)
  },

  

}

const mutations = {
  setExperts: (state, experts) => (state.experts = experts),
  toggleShowForm: (state, payload) => (state.show_form = payload),
  setExpertises: (state, expertises) => (state.expertises = expertises)

}

export default {
  state,
  actions,
  getters,
  mutations
}