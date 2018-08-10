const state = {
  info: {
    id: '',
    name: '',
    password: ''
  }
}

const mutations = {
  SAVE_USER_DATA (state, data) {
    state.info = Object.assign({}, data)
  },
  REMOVE_USER_DATA (state) {
    state.info = {}
    state.pharmacy = {}
  }
}

const actions = {
  saveUserData ({ commit }, data) {
    console.log(data)
    commit('SAVE_USER_DATA', data)
  },
  pharmacyInfo ({ commit }, data) {
    return new Promise((resolve, reject) => {
      commit('SAVE_PHARMACY_INFO', data)
      resolve()
    })
  }
}

export default {
  state,
  mutations,
  actions
}
