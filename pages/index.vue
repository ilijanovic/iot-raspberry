<template>
  <div class="container">
    <addModule
      @click.native="$store.commit('modals/SET_MODULE_OPTIONS', true)"
    />
    <div class="module"></div>
  </div>
</template>

<script>
import addModule from '@/components/module/add'
export default {
  components: {
    addModule,
  },
}
</script>

<style lang="scss" scoped>
.module {
  width: 100%;
  margin: 20px auto;
  max-width: 900px;
  padding: 15px;
}
</style>
