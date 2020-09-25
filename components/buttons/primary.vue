<template>
  <button>
    <slot></slot>
    <ringLoader v-if="loading" />
  </button>
</template>
<script>
import ringLoader from '@/components/loading/smallRing'
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: { ringLoader },
}
</script>
<style lang="scss" scoped>
button {
  background: var(--light-blue);
  color: var(--text-light);
  border: none;
  padding: 8px 15px;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: 100ms;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: var(--dark-blue);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: none;
  }
}
</style>
