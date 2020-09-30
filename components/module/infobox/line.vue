<template>
  <div class="info">
    <div class="infobox">
      <p>JSON POST request boilerplate to <b>/api/module/setData</b></p>
      <primary @click.native="open = !open">Anzeigen</primary>
    </div>
    <br />
    <textarea
      :class="{ show: open }"
      resize="none"
      v-html="JSON.stringify(code, null, 2)"
    ></textarea>
  </div>
</template>
<script>
import primary from '@/components/buttons/primary'
export default {
  props: ['id'],
  data() {
    return {
      open: false,
      code: {
        id: this.id,
        chart: 'line',
        data: { label: 'test', dataPoint: 13 },
      },
    }
  },
  components: {
    primary,
  },
}
</script>

<style lang="scss" scoped>
textarea {
  width: 100%;
  height: 100%;
  resize: none;
  height: 200px;
  white-space: nowrap;
  opacity: 0;
  max-height: 0px;
  transition: 300ms;
}
.infobox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.show {
  opacity: 1 !important;
  max-height: 200px !important;
}
</style>
