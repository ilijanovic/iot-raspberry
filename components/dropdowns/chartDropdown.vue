<template>
  <div tabindex="0" @blur="open =false" :class="{open}" class="dropdown">
    <div @click="open = !open" class="selectbox">
      <p class="selected">{{ selected }}</p>
      <ChevronDownIcon :style="{ transform: open ? 'rotate(180deg)' : '' }" size="2x" />
    </div>
    <div v-if="open" class="drop">
      <div
        @click="selectDiagramm(option)"
        class="option"
        v-for="option in options"
        :key="option.value"
      >{{ option.text }}</div>
    </div>
  </div>
</template>
<script>
import { ChevronDownIcon } from 'vue-feather-icons'
export default {
  methods: {
    selectDiagramm({ value, text }) {
      this.selected = text
      this.open = false
    },
  },
  data() {
    return {
      open: false,
      selected: 'Liniendiagramm',
      options: [
        {
          text: 'Liniendiagramm',
          value: 'line',
        },
        {
          text: 'Tortendiagramm',
          value: 'donut',
        },
      ],
    }
  },
  components: {
    ChevronDownIcon,
  },
}
</script>
<style lang="scss" scoped>
.dropdown {
  position: relative;
  padding: 8px;
  outline: none;
  border: 1px solid var(--border-color);
  cursor: pointer;
  border-radius: 6px;
  .selectbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .option {
    padding: 10px;
    width: 100%;

    background: var(--background-light);

    &:hover {
      background: #ececec;
    }
  }
  .drop {
    width: calc(100% + 2px);
    top: 100%;
    z-index: 10;
    left: -1px;
    position: absolute;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
  }
}
.open {
  border-radius: 6px 6px 0 0;
}
</style>
