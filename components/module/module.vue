<template>
  <div class="module">
    <div class="head">
      <h3>{{ module.name }}</h3>
      <div class="status"></div>
    </div>
    <div class="content">
      <div class="buttonbox">
        <primary class="btn"
          >Ansehen<EyeIcon style="margin-left: 10px" size="1.3x"
        /></primary>
        <primary class="btn"
          >Bearbeiten<Edit3Icon style="margin-left: 10px" size="1.3x"
        /></primary>
      </div>
    </div>
  </div>
</template>
<script>
import primary from '@/components/buttons/primary'
import { EyeIcon, Edit3Icon } from 'vue-feather-icons'
export default {
  props: ['module'],
  components: {
    primary,
    EyeIcon,
    Edit3Icon,
  },
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
  canvas {
    height: 100%;
  }
  .head {
    background: var(--light-blue);
    border-radius: 6px 6px 0 0;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;
  }
  h3 {
    color: var(--text-light);
  }
  .content {
    padding: 10px;
    .status {
      border-radius: 50%;
      width: 20px;
      height: 20px;
      background: rgb(0, 185, 0);
    }
    .buttonbox {
      display: flex;
      justify-content: space-between;
    }
    .btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
