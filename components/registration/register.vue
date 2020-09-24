<template>
  <div class="login">
    <div class="header">
      <h2>Registrierung</h2>
    </div>
    <div class="inputbox">
      <small>Name</small>
      <input v-model="name" />
    </div>
    <div class="inputbox">
      <small>Passwort</small>
      <input type="password" v-model="password" />
    </div>
    <div class="inputbox">
      <small>Passwort wiederholen</small>
      <input type="password" v-model="passwordAgain" />
    </div>
    <div class="inputbox" style="justify-content: space-between; display: flex">
      <textButton @click.native="$emit('setcomponent', 'login')"
        >schon registriert?</textButton
      >
      <primary @click.native="register">Registrieren</primary>
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
  }),
  components: {
    primary,
    textButton,
  },
  methods: {
    register() {
      this.$axios.$post('/api/register', {
        name: 'ifaruki',
        password: 12345678,
        passwordAgain: 12345678,
      })
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
}
</style>