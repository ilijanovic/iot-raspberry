<template>
  <div class="module">
    <div class="head">
      <h3>{{name}}</h3>
    </div>
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
  .head {
    background: var(--light-blue);
    border-radius: 6px 6px 0 0;
  }
  h3 {
    padding: 10px 20px;
    color: var(--text-light);
  }
}
</style>
