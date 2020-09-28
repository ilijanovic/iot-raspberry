<template>
  <div>
    <transition name="fade">
      <warning :id="id" :message="warningMessage" v-if="warningState" />
    </transition>
    <transition name="popup">
      <selectModule v-if="state" />
    </transition>
    <Nuxt />
  </div>
</template>
<script>
import selectModule from '@/components/options/selectModule'
import warning from '@/components/popup/warning'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      state: 'modals/moduleState',
      warningState: 'modals/warning',
      id: 'modals/moduleID',
      warningMessage: 'modals/warningMessage',
    }),
  },
  components: {
    selectModule,
    warning,
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
  --shadow: 0 0 10px -6px black;
  --text-light: white;
  --text-dark: #192a56;
  --background-light: white;
  --red: rgb(192, 57, 43);
  --green: #27ae60;
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
  padding: 5px 0;
  display: block;
}

input,
textarea {
  display: block;
  border: none;
  border: 1px solid var(--border-color);
  padding: 15px;
  width: 100%;
  outline: none;
  border-radius: 6px;
} /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(206, 206, 206);
  border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(173, 173, 173);
}

.disabled {
  color: grey !important;
  background: lightgrey !important;
  pointer-events: none !important;
  border-color: lightgrey !important;
  box-shadow: none !important;
}
</style>
