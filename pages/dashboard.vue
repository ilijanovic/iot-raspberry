<template>
  <div class="container">
    <navigation />
    <div class="modules">
      <transition-group name="popup-list">
        <module
          v-for="mod in modules"
          :module="mod"
          :key="mod._id.toString()"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import navigation from '@/components/layout/navigation'
import module from '@/components/module/module'
export default {
  layout: 'dashboard',
  middleware: ['auth'],
  components: {
    navigation,
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
