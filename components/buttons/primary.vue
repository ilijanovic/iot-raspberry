<template>
  <button>
    <slot></slot>
  </button>
</template>

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
  &:hover {
    background: var(--dark-blue);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: none;
  }
}
</style>
