<template>
  <div class="container">
    <navigation />
    <div class="modules">
      <transition-group name="popup-list">
        <module
          tag="div"
          v-for="mod in modules"
          :key="mod._id.toString()"
          :module="mod"
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
.popup-list-move {
  transition: all 200ms;
}
</style>
