<template>
  <div class="add">
    <h2>IoT</h2>
    <p v-if="user">Benutzer: {{ user }}</p>
    <primary> Hinzufügen </primary>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import primary from '@/components/buttons/primary'
export default {
  components: {
    primary,
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
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  h2 {
    color: var(--text-dark);
  }
}
</style>
