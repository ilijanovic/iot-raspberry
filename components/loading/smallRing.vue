<template>
  <div class="loader"></div>
</template>
<style lang="scss" scoped>
.loader {
  border-radius: 100%;

  border: 2px solid #fff;
  border-bottom-color: transparent;
  height: 14px;
  width: 14px;
  background: 0 0 !important;
  display: inline-block;
  -webkit-animation: rotate 0.75s 0s linear infinite;
  animation: rotate 0.45s 0s linear infinite;
}

@keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg) scale(1);
    transform: rotate(360deg) scale(1);
  }
}
</style>
