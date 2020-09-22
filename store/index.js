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
}

export const getters = {
  modules: (state) => state.modules,
}
