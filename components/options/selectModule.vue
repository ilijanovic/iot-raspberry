<template>
  <div class="options">
    <div class="header">
      <h2>Modul auswählen</h2>
      <closeButton @click.native="$store.commit('modals/SET_MODULE_OPTIONS', false)" />
    </div>
    <diagrammDropdown />
    <div class="preview">
      <component :is="selectedPreview"></component>
    </div>
  </div>
</template>
<script>
import closeButton from '@/components/buttons/close'
import diagrammDropdown from '@/components/dropdowns/chartDropdown'
import linePreview from '@/components/previews/lineDiagramm'
export default {
  data() {
    return {
      selectedPreview: 'linePreview',
    }
  },
  components: {
    closeButton,
    diagrammDropdown,
    linePreview,
  },
}
</script>
<style lang="scss" scoped>
.options {
  overflow: visible;
  position: fixed;
  background: var(--background-light);
  border-radius: 10px;
  max-width: 600px;
  width: 95%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-height: 700px;
  box-shadow: var(--shadow);
  padding: 10px;
  border: 1px solid var(--border-color);
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
