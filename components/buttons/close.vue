<template>
  <XIcon size="2x" class="btn" />
</template>
<script>
import { XIcon } from 'vue-feather-icons'
export default {
  components: {
    XIcon,
  },
}
</script>
<style lang="scss" scoped>
.btn {
  box-sizing: border-box;
  color: var(--light-blue);
  cursor: pointer;
  padding: 3px;
  border-radius: 6px;
  transition: 100ms;
  &:hover {
    background: var(--dark-blue);
    color: white;
  }
  &:active {
    transform: scale(0.98);
  }
}
</style>
