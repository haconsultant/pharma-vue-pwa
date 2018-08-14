const state = {
  info: {
    id: '',
    name: '',
    password: ''
  },
  logged: false
}

const mutations = {
  LOGIN (state, data) {
    state.info = Object.assign({}, data)
  },
  IS_LOGGED (state, data) {
    state.logged = Object.assign({}, data)
  }
}

const actions = {
  userLogin ({ commit }, data) {
    console.log(data)
    return new Promise((resolve, reject) => {
      commit('SAVE_USER_DATA', data)
      commit('IS_LOGGED', true)
      resolve()
    })
  },
  userLogout ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('IS_LOGGED', false)
      resolve()
    })
  }
}

export default {
  state,
  mutations,
  actions
}
