export const state = () => ({
  moduleOptions: false,
  warning: true,
  warningMessage: 'warning!',
})

export const mutations = {
  /**
   *
   * Open / closes the select component for the Diagramms "selectModule.vue"
   *
   * @param {Object} state - State of the current store
   * @param {Boolean} payload - Toggle the visibility of the component  with true / false
   */

  SET_MODULE_OPTIONS(state, payload) {
    state.moduleOptions = payload
  },

  /**
   *
   * Displays an warning popup modal
   * with a message and "Yes" or "No" answer
   *
   * @param {Object} state - State of the current store
   * @param {Boolean} status - Set "true" to activate warning
   * @param {String} message - Warning message that will be displayed
   */

  SET_WARNING(state, message) {
    state.warning = true
    state.warningMessage = message
  },

  /**
   *
   * Closes the modal
   *
   * @param {Object} state - State of the current store
   * @param {String} type - The type of the modal "warning", "error" ...
   */

  CLOSE_MODAL(state, type) {
    if (!state[type]) throw Error('That type of modal does not exist: ' + type)
    state[type] = false
  },
}

export const getters = {
  moduleState: (state) => state.moduleOptions,
  warning: (state) => state.warning,
}
