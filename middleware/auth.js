export default function ({ store, redirect }) {
  if (!store.getters.logged) return redirect('/')
}
