<template>
  <div class="add">
    <h2>IoT</h2>
    <primary> Hinzufügen </primary>
  </div>
</template>
<script>
import primary from '@/components/buttons/primary'
export default {
  components: {
    primary,
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
