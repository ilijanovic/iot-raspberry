<template>
  <div class="login">
    <div class="header">
      <h2>Login</h2>
    </div>
    <div class="inputbox">
      <small>Name</small>
      <input @keypress.enter="login" v-model="name" />
    </div>
    <div class="inputbox">
      <small>Passwort</small>
      <input @keypress.enter="login" type="password" v-model="password" />
    </div>
    <div class="inputbox" style="justify-content: space-between; display: flex">
      <textButton @click.native="$emit('setcomponent', 'register')"
        >Registrieren</textButton
      >
      <primary :class="{ disabled: logging }" @click.native="login">
        <p style="margin-right: 5px">Login</p>
        <ringLoader v-if="loading" />
      </primary>
    </div>
    <div class="inputbox">
      <transition name="popup-bounce">
        <p class="err" v-if="errorMessage">{{ errorMessage }}</p>
        <p class="success" v-if="success">Erfolgreich eingeloggt!</p>
      </transition>
    </div>
  </div>
</template>

<script>
import primary from '@/components/buttons/primary'
import textButton from '@/components/buttons/text'
import ringLoader from '@/components/loading/smallRing'
export default {
  data: () => ({
    name: '',
    password: '',
    errorMessage: null,
    success: false,
    logging: false,
    loading: false,
  }),
  methods: {
    async login() {
      this.errorMessage = null
      this.logging = true
      this.loading = true
      try {
        let { user, token } = await this.$axios.$post('/api/login', {
          name: this.name,
          password: this.password,
        })
        this.success = true
        setTimeout(() => {
          this.$router.push('/dashboard')
        }, 1500)
        let { name, modules } = user
        this.$store.commit('SET_LOGIN', true)
        this.$store.commit('SET_USER', name)
        this.$store.commit('SET_MODULES', modules)
      } catch ({ response: { data } }) {
        this.errorMessage = data.message
        this.logging = false
      }
      this.loading = false
    },
  },
  components: {
    primary,
    textButton,
    ringLoader,
  },
}
</script>

<style lang="scss" scoped>
.login {
  max-width: 500px;
  margin: 50px auto;
  width: 95%;
  .header {
    background: var(--light-blue);
    color: white;
    border-radius: 6px 6px 0 0;
    padding: 10px;
  }
  .inputbox {
    margin: 10px;
  }
  box-shadow: var(--shadow);
  padding-bottom: 10px;
  .err {
    color: white;
    background: var(--red);
    padding: 8px;
    border-radius: 6px;
    margin: 10px 0;
  }
  .success {
    color: white;
    background: var(--green);
    padding: 8px;
    border-radius: 6px;
    margin: 10px 0;
  }
}
</style>
