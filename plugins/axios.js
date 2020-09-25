export default function ({ $axios, store }) {
  if (process.client) {
    $axios.setToken(store.state.token, 'Bearer')
  }
}
