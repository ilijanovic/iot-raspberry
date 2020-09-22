<template>
  <div class="container">
    <addModule
      @click.native="$store.commit('modals/SET_MODULE_OPTIONS', true)"
    />
    <div class="modules">
      <component :is="mod.componentName" v-for="(mod, i) in modules" :key="i" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import addModule from '@/components/module/add'
import lineModule from '@/components/module/lineModule'
export default {
  components: {
    addModule,
    lineModule,
  },
  computed: {
    ...mapGetters({
      modules: 'modules',
    }),
  },
}
</script>

<style lang="scss" scoped>
.modules {
  width: 100%;
  margin: 20px auto;
  max-width: 900px;
  padding: 15px;
}
</style>
