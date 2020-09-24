export const state = () => ({
  modules: [],
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
}

export const getters = {
  modules: (state) => state.modules,
}
