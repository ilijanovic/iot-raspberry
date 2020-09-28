<template>
  <div class="options">
    <div class="header">
      <h2>Modul auswählen</h2>
      <closeButton
        @click.native="$store.commit('modals/SET_MODULE_OPTIONS', false)"
      />
    </div>
    <diagrammDropdown @setDiagramm="setDiagramm" />
    <div class="preview">
      <transition name="fade" mode="out-in">
        <component :key="selectedPreview" :is="selectedPreview"></component>
      </transition>
    </div>
  </div>
</template>
<script>
import closeButton from '@/components/buttons/close'
import diagrammDropdown from '@/components/dropdowns/chartDropdown'
import linePreview from '@/components/previews/lineDiagramm'
import donutPreview from '@/components/previews/donutDiagramm'
export default {
  data() {
    return {
      selectedPreview: 'linePreview',
    }
  },
  methods: {
    setDiagramm(diagramm) {
      this.selectedPreview = diagramm
    },
  },

  components: {
    closeButton,
    diagrammDropdown,
    linePreview,
    donutPreview,
  },
}
</script>
<style lang="scss" scoped>
.options {
  overflow: scroll;
  position: fixed;
  background: var(--background-light);
  border-radius: 10px;
  max-width: 600px;
  max-height: 90vh;
  width: 95%;
  left: 50%;
  top: 50%;
  height: 800px;
  box-shadow: var(--shadow);
  padding: 10px;
  border: 1px solid var(--border-color);
  will-change: transform, opacity;
  transform: translate3d(-50%, -50%, 0);
  z-index: 100;
  .preview {
    max-height: 200px;
  }
  .header {
    margin-bottom: 15px;
    border-bottom: 1px solid var(--border-color);
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      color: var(--dark-blue);
    }
  }
}
</style>
