<template>
  <div class="line">
    <canvas ref="canvas"></canvas>
    <div class="chartOptions">
      <div class="inputsection">
        <div class="inputbox">
          <small>Beschreibung</small>
          <input v-model="dataset" @keyup="changeDataset" />
        </div>
        <div class="inputbox">
          <small>Modul Name</small>
          <input v-model="name" />
        </div>
      </div>
      <div class="inputsection">
        <small>Hintergrundfarbe</small>
        <chartColor @setColor="setBackground" />
        <small>Randfarbe</small>
        <chartColor @setColor="setBorder" />
      </div>
    </div>

    <div
      style="
        display: flex;
        justify-content: space-evenly;
        padding: 15px;
        text-align: right;
      "
    >
      <add :loading="saving" @click.native="save" style="margin-left: auto"
        >Speichern</add
      >
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
import chartColor from '@/components/dropdowns/line/chartColors'
import add from '@/components/buttons/primary'

export default {
  components: {
    chartColor,
    add,
  },
  data: () => ({
    chart: null,
    name: '',
    dataset: 'My First dataset ',
    saving: false,
    borderColor: '#bdc3c7',
    backgroundColor: '#34495e',
  }),
  methods: {
    async save() {
      this.saving = true
      let data = await this.$axios.$post('/api/addModule', {
        name: this.name,
        dataset: this.dataset,
        borderColor: this.borderColor,
        backgroundColor: this.backgroundColor,
        type: 'lineChart',
        chartType: 'line',
      })
      try {
        this.$store.commit('ADD_MODULE', data)
        this.$store.commit('modals/SET_MODULE_OPTIONS', false)
      } catch (err) {}
      this.saving = false
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
        type: 'line',
        data: {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
          ],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: '#34495e',
              borderColor: '#bdc3c7',
              data: [0, 10, 5, 2, 20, 30, 45],
            },
          ],
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
    width: 260px;
    margin: 0 5px;
  }
}
@media screen and(max-width: 620px) {
  .inputsection {
    width: 100% !important;
  }
}
</style>
