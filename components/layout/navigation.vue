<template>
  <div class="add">
    <h2>IoT</h2>
    <primary
      class="addbutton"
      @click.native="$store.commit('modals/SET_MODULE_OPTIONS', true)"
      >Hinzufügen</primary
    >
    <linkDropdown :user="user" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import primary from '@/components/buttons/primary'
import linkDropdown from '@/components/dropdowns/links'
export default {
  components: {
    primary,
    linkDropdown,
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
}
</script>
<style lang="scss" scoped>
.add {
  width: 100%;
  min-height: 60px;
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow);
  display: flex;
  position: sticky;
  top: 0;
  background: var(--background-light);
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  z-index: 11;
  h2 {
    color: var(--text-dark);
  }
  .addbutton {
    margin-left: auto;
    margin-right: 10px;
  }
}
</style>
