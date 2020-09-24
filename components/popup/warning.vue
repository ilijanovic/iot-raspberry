<template>
  <div class="overlay">
    <transition name="popup-bounce">
      <div v-if="show" class="warning">
        <p>{{ message }}</p>
        <div class="buttons">
          <primary @click.native="close">Nein</primary>
          <primary @click.native="deleteModule" class="yes">Ja</primary>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import primary from '@/components/buttons/primary'
export default {
  props: ['message', 'id'],
  components: {
    primary,
  },
  methods: {
    close() {
      this.$store.commit('modals/CLOSE_MODAL', 'warning')
    },
    deleteModule() {
      this.$store.commit('DELETE_MODULE', this.id)
      this.$store.commit('modals/CLOSE_MODAL', 'warning')
    },
  },
  data() {
    return { show: false }
  },
  created() {
    this.$nextTick(() => {
      this.show = true
    })
  },
}
</script>

<style lang="scss" scoped>
.overlay {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  backdrop-filter: blur(2px);
  display: flex;
  .yes {
    color: var(--red);
    background: var(--background-light);
    border: 1px solid var(--red);
    &:hover {
      color: white;
      background: var(--red);
    }
  }
  .buttons {
    margin: 20px 0;
    display: flex;
    justify-content: space-evenly;
    button {
      min-width: 80px;
    }
  }
  .warning {
    width: 400px;
    max-width: 95%;
    min-height: 100px;
    border-radius: 6px;
    background: var(--background-light);
    margin: auto;
    padding: 15px;
    text-align: center;
  }
}
</style>