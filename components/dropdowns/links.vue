<template>
  <div tabindex="0" @blur="open = false" :class="{ open }" class="dropdown">
    <div @click="open = !open" class="selectbox">
      <UserIcon />
      <p class="selected">{{ user }}</p>
      <ChevronDownIcon
        :style="{ transform: open ? 'rotate(180deg)' : '' }"
        size="2x"
      />
    </div>
    <div v-if="open" class="drop">
      <nuxt-link
        tag="div"
        :to="option.url"
        class="option"
        v-for="option in options"
        :key="option.value"
      >
        {{ option.text }}
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import { ChevronDownIcon, UserIcon } from 'vue-feather-icons'
export default {
  props: ['user'],
  data() {
    return {
      open: false,
      selected: 'Liniendiagramm',
      options: [{ url: '/logout', text: 'Logout' }],
    }
  },
  components: { UserIcon, ChevronDownIcon },
}
</script>
<style lang="scss" scoped>
.dropdown {
  position: relative;
  padding: 8px;
  outline: none;
  border: 1px solid var(--border-color);
  min-width: 150px;
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
    z-index: 10;
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
