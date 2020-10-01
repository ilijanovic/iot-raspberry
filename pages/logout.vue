<script>
export default {
  async asyncData({ $axios, redirect, store }) {
    await $axios.$post('/api/logout')
    store.commit('SET_LOGIN', false)
    redirect('/')
  },
}
</script>