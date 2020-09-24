<template>
  <div>
    <Trash2Icon style="color: #c0392b; cursor: pointer" size="1.8x" />
  </div>
</template>

<script>
import { Trash2Icon } from 'vue-feather-icons'
export default {
  components: {
    Trash2Icon,
  },
}
</script>

<style scoped lang="scss">
div {
  &:active {
    transform: scale(0.98);
    box-shadow: none;
  }
}
</style>