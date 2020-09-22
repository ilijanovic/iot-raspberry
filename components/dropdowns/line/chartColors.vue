<template>
  <div tabindex="0" @blur="open = false" :class="{open}" class="dropdown">
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
      >
        <p>{{ option.text }}</p>
        <div style="width: 30px; height: 30px" :style="{background: option.value}"></div>
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
      this.$emit('setColor', value)
    },
  },
  data() {
    return {
      open: false,
      selected: 'Wet Asphalt',
      options: [
        {
          text: 'Wet Asphalt',
          value: '#34495e',
        },
        {
          text: 'Orange',
          value: '#f39c12',
        },
        {
          text: 'Green Sea',
          value: '#16a085',
        },
        {
          text: 'Belize Hole',
          value: '#2980b9',
        },
        {
          text: 'Pomegranate',
          value: '#c0392b',
        },
        {
          text: 'Wisteria',
          value: '#8e44ad',
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
  padding: 7px;
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
    display: flex;
    background: var(--background-light);
    justify-content: space-between;
    &:hover {
      background: #ececec;
    }
  }
  .drop {
    z-index: 10;
    width: calc(100% + 2px);
    top: 100%;
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
