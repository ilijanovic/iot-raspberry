<template>
  <div class="login">
    <div class="header">
      <h2>Registrierung</h2>
    </div>
    <div class="inputbox">
      <small>Name</small>
      <input @keypress.enter="register" v-model="name" />
    </div>
    <div class="inputbox">
      <small>Passwort</small>
      <input @keypress.enter="register" type="password" v-model="password" />
    </div>
    <div class="inputbox">
      <small>Passwort wiederholen</small>
      <input
        @keypress.enter="register"
        type="password"
        v-model="passwordAgain"
      />
    </div>
    <div class="inputbox" style="justify-content: space-between; display: flex">
      <textButton @click.native="$emit('setcomponent', 'login')"
        >schon registriert?</textButton
      >
      <primary
        :loading="loading"
        :class="{ disabled: logging }"
        @click.native="register"
      >
        <p style="margin-right: 5px">Registrieren</p>
      </primary>
    </div>
    <div class="inputbox">
      <transition name="popup-bounce">
        <p class="err" v-if="errorMessage">{{ errorMessage }}</p>
        <p class="success" v-if="success">Erfolgreich registriert!</p>
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
    passwordAgain: '',
    errorMessage: null,
    success: false,
    logging: false,
    loading: false,
  }),
  components: {
    primary,
    textButton,
  },
  methods: {
    async register() {
      this.errorMessage = null
      this.logging = true
      this.loading = true
      try {
        await this.$axios.$post('/api/register', {
          name: this.name,
          password: this.password,
          passwordAgain: this.passwordAgain,
        })
        setTimeout(() => {
          this.$router.push('/dashboard')
        }, 2500)
        this.success = true
      } catch ({ response: { data } }) {
        this.errorMessage = data.message
        this.logging = false
      }
      this.loading = false
    },
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
