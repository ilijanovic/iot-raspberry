<template>
  <div class="container">
    <addModule
      @click.native="$store.commit('modals/SET_MODULE_OPTIONS', true)"
    />
    <div class="modules">
      <transition-group name="popup-list">
        <module v-for="(mod, i) in modules" :module="mod" :key="i" />
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import addModule from '@/components/module/add'
import module from '@/components/module/module'
export default {
  layout: 'dashboard',
  middleware: ['auth'],
  components: {
    addModule,
    module,
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
