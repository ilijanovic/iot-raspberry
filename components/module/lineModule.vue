<template>
  <div class="module">
    <p>{{ name }}</p>
  </div>
</template>
<script>
export default {
  props: ['name'],
}
</script>
<style lang="scss" scoped>
.module {
  width: 100%;
  height: 200px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow);
  border-radius: 6px;
  margin-bottom: 20px;
}
</style>
