export const strict = false

export const state = () => ({
  logged: false,
  modules: [],
  user: null,
  token: null,
})

export const mutations = {
  /**
   *
   * @param {Object} payload -  New Module that will be added:  { name, dataset, borderColor, backgroundColor, name}
   *
   */
  ADD_MODULE(state, payload) {
    state.modules.push(payload)
  },

  /**
   *
   * Deletes an Module from the list
   *
   * @param {Object} state - State of the current store
   * @param {String} id -  MongoDB Object ID. Its the id of the module that needs to be deleted
   */

  async DELETE_MODULE(state, id) {
    let index = state.modules.findIndex((module) => module._id === id)
    if (index !== -1) {
      state.modules.splice(index, 1)
    }
  },

  /**
   *
   * Loggs in or loggs off the user
   *
   * @param {Object} state - State of the current store
   * @param {Boolean} payload -  Set "true" if you want to login otherwise "false"
   */

  SET_LOGIN(state, payload) {
    state.logged = payload
  },

  /**
   *
   * Sets the modules thats being displayed
   *
   * @param {Object} state - State of the current store
   * @param {Array} modules -  Array of objects. Containing data about the module
   */

  SET_MODULES(state, modules) {
    state.modules = modules
  },

  /**
   *
   * Sets the username
   *
   * @param {Object} state - State of the current store
   * @param {String} user - Name of the logged user
   */

  SET_USER(state, user) {
    state.user = user
  },
  /**
   *
   * Sets an token
   *
   * @param {Object} state - State of the current store
   * @param {String} token - JWT token
   */
  SET_TOKEN(state, token) {
    state.token = token
  },
}

export const actions = {
  /**
   *
   * This is a special Nuxt function
   * It gets executed only once after a page refresh
   *
   */

  async nuxtServerInit({ commit }, { req }) {
    let { getTokenFromCookie } = await import('../api/helper/cookie')
    let { verifyToken, decode } = await import('../api/helper/token')
    let { getModules } = await import('../api/helper/module')
    let token = getTokenFromCookie(req)
    if (!token) return
    if (await verifyToken(token)) {
      let { name, _id } = decode(token)
      let modules = await getModules(_id)
      commit('SET_USER', name)
      commit('SET_LOGIN', true)
      commit('SET_MODULES', modules)
      commit('SET_TOKEN', token)
    }
  },

  async DELETE_MODULE({ commit }, id) {
    try {
      await this.$axios.$post('/api/deleteModule', {
        moduleId: id,
      })
      commit('DELETE_MODULE', id)
    } catch (err) {}
  },
}

export const getters = {
  modules: (state) => state.modules,
  logged: (state) => state.logged,
  user: (state) => state.user,
}
