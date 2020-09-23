<template>
  <div class="line">
    <canvas ref="canvas"></canvas>
    <div class="chartOptions">
      <div style="display: flex; justify-content: space-between; width: 100%">
        <primary
          :class="{ disabled: dataSets.length === maxSets }"
          @click.native="addSet"
          >Datensatz hinzufügen</primary
        >
        <small>{{ dataSets.length }} / {{ maxSets }}</small>
      </div>
      <transition-group name="popup-list">
        <div v-for="set in dataSets" :key="set.id" class="inputsection">
          <div class="inputbox">
            <small>Beschreibung</small>
            <input v-model="dataset" @keyup="changeDataset" />
          </div>
          <div class="inputbox">
            <small>Hintergrundfarbe</small>
            <chartColor />
          </div></div
      ></transition-group>
    </div>

    <div
      style="
        display: flex;
        justify-content: space-evenly;
        padding: 15px;
        text-align: right;
      "
    >
      <spinner v-if="saving" />
      <primary
        :class="{ disabled: saving }"
        @click.native="save"
        style="margin-left: auto"
        v-if="dataSets.length > 0"
        >Speichern</primary
      >
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
import chartColor from '@/components/dropdowns/line/chartColors'
import primary from '@/components/buttons/primary'
import spinner from '@/components/spinner/popup'

export default {
  components: {
    chartColor,
    primary,
    spinner,
  },
  data: () => ({
    chart: null,
    name: '',
    dataSets: [],
    maxSets: 5,
    saving: false,
    borderColor: '#bdc3c7',
    backgroundColor: '#34495e',
    componentName: 'lineModule',
  }),
  methods: {
    addSet() {
      if (this.dataSets.length >= this.maxSets) return
      this.dataSets.push({
        id: Math.random(),
      })
    },
    save() {
      this.saving = true
      this.$store.commit('ADD_MODULE', {
        name: this.name,
        dataset: this.dataset,
        borderColor: this.borderColor,
        backgroundColor: this.backgroundColor,
        componentName: this.componentName,
      })
      this.$store.commit('modals/SET_MODULE_OPTIONS', false)
    },
    changeDataset() {
      this.chart.data.datasets[0].label = this.dataset
      this.updateChart()
    },
    updateChart() {
      this.chart.update()
    },
    setBorder(color) {
      this.chart.data.datasets[0].borderColor = color
      this.updateChart()
    },
    setBackground(color) {
      this.chart.data.datasets[0].backgroundColor = color
      this.updateChart()
    },
  },
  mounted() {
    this.$nextTick(() => {
      let ctx = this.$refs.canvas.getContext('2d')
      this.chart = new Chart(ctx, {
        type: 'pie',
        data: {
          datasets: [
            {
              data: [10, 20, 30],
              backgroundColor: ['#34495e', '#2980b9', '#c0392b'],
            },
          ],

          labels: ['Red', 'Yellow', 'Blue'],
        },
      })
    })
  },
}
</script>

<style lang="scss" scoped>
.chartOptions {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  padding: 10px;
  .inputsection {
    margin: 10px 5px;
    display: flex;
    flex-flow: wrap;
    width: 100%;
    justify-content: space-evenly;
    div {
      flex: 1;
      margin: 0 5px;
    }
  }
}
</style>
