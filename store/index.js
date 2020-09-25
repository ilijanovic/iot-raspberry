export const state = () => ({
  logged: false,
  modules: [],
  user: null,
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

  DELETE_MODULE(state, id) {
    let index = state.modules.findIndex((module) => module.id === id)
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
}

export const getters = {
  modules: (state) => state.modules,
  logged: (state) => state.logged,
  user: (state) => state.user,
}
