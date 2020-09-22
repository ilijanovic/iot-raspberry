<template>
  <div class="line">
    <canvas ref="canvas"></canvas>
    <div class="chartOptions">
      <div class="inputsection">
        <div class="inputbox">
          <small>Beschreibung</small>
          <input v-model="dataset" @keyup="changeDataset" />
        </div>
      </div>
      <div class="inputsection">
        <small>Hintergrundfarbe</small>
        <chartColor @setBackground="setBackground" />
        <small>Randfarbe</small>
        <borderColor @setBorder="setBorder" />
      </div>
    </div>
    <div style="padding: 15px; text-align: right">
      <add>Speichern</add>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
import chartColor from '@/components/dropdowns/line/chartColorDropdown'
import borderColor from '@/components/dropdowns/line/chartBorderColor'
import add from '@/components/buttons/primary'
export default {
  components: {
    chartColor,
    borderColor,
    add,
  },
  data: () => ({
    chart: null,
    dataset: 'My First dataset ',
  }),
  methods: {
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
        options: {},
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
