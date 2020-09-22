<template>
  <div>
    <transition name="popup">
      <selectModule v-if="state" />
    </transition>
    <Nuxt />
  </div>
</template>
<script>
import selectModule from '@/components/options/selectModule'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      state: 'modals/moduleState',
    }),
  },
  components: {
    selectModule,
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

:root {
  --light-blue: #273c75;
  --dark-blue: #192a56;
  --border-color: #dadada;
  --shadow: 0 0 10px -4px black;
  --text-light: white;
  --text-dark: #192a56;
  --background-light: white;
}

.popup-enter-active,
.popup-leave-active {
  transition: 300ms;
}
.popup-enter, .popup-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(0.8) translate(-50%, -50%) !important;
}

small {
  color: grey;
  font-size: 15px;
}
</style>
