<template>
  <div class="dropdown">
    <div @click="open = !open" class="selectbox">
      <p class="selected">{{ selected }}</p>
      <ChevronDownIcon
        :style="{ transform: open ? 'rotate(180deg)' : '' }"
        size="2x"
      />
    </div>
    <div v-if="open" class="drop">
      <div
        @click="selectDiagramm(option)"
        class="option"
        v-for="option in options"
        :key="option.value"
      >
        {{ option.text }}
      </div>
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
  padding: 15px;
  border: 1px solid var(--border-color);
  cursor: pointer;

  .selectbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .option {
    padding: 15px;
    margin: 0 -16px;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    background: var(--background-light);
    &:hover {
      background: #ececec;
    }
  }
  .drop {
    width: calc(100% - 30px);
    position: absolute;
    &:last-child {
      border-bottom: 1px solid var(--border-color);
    }
  }
}
</style>
