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
      <primary @click.native="login">Login</primary>
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
export default {
  data: () => ({
    name: '',
    password: '',
    errorMessage: null,
    success: false,
  }),
  methods: {
    async login() {
      this.errorMessage = null
      try {
        await this.$axios.$post('/api/login', {
          name: this.name,
          password: this.password,
        })
        this.success = true
        setTimeout(() => {
          this.$router.push('/dashboard')
        }, 1500)
        this.$store.commit('SET_LOGIN', true)
      } catch ({ response: { data } }) {
        this.errorMessage = data.message
      }
    },
  },
  components: {
    primary,
    textButton,
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
