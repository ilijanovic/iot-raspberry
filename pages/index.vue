<template>
  <div>
    <transition name="swap" mode="out-in">
      <component :key="comp._id" @setcomponent="setcomponent" :is="comp" />
    </transition>
  </div>
</template>
<script>
import login from '@/components/registration/login'
import register from '@/components/registration/register'
export default {
  data: () => ({
    comp: 'login',
  }),
  methods: {
    setcomponent(comp) {
      this.comp = comp
    },
  },
  components: {
    login,
    register,
  },
}
</script>
