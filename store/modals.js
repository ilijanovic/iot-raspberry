export const state = () => ({
  moduleOptions: false,
})

export const mutations = {
  SET_MODULE_OPTIONS(state, payload) {
    state.moduleOptions = payload
  },
}

export const getters = {
  moduleState: (state) => state.moduleOptions,
}
