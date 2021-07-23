export const state = () => ({
  token: localStorage.getItem('access_token') || null,
  user: JSON.parse(localStorage.getItem('user')) || null,
  courses: [],
  user_activities: [],
})

export const getters = {
  loggedIn(state) {
    return state.token !== null
  },
  getToken(state) {
    return state.token
  },
  getRoles(state) {
    if (state.user !== null) {
      return state.user.roles
    }
    return null
  },
  getUser(state) {
    return state.user
  }
}

export const actions = {
  retrieveToken(context, credentials) {
    return new Promise((resolve, reject) => {
      this.$axios.post('login', {
        email: credentials.username,
        password: credentials.password
      }).then(response => {
        localStorage.setItem('access_token', response.data.tokens.access_token)
        localStorage.setItem('user', JSON.stringify(response.data.tokens.user))
        context.commit('retrieveSession', response.data.tokens)
        resolve(response)
      }).catch((error) => {
        reject(error.response)
      })
    })
  },
  destroyToken(context) {
    if (context.getters.loggedIn) {
      localStorage.removeItem('access_token')
      localStorage.removeItem('user')
      context.commit('destroyToken')
    }
  }
}

export const mutations = {
  retrieveSession(state, data) {
    state.token = data.access_token
    state.user = data.user
  },
  destroyToken(state) {
    state.token = null
  },

}
