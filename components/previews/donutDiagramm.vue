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
      <div style="width: 100%">
        <transition-group name="popup-list" tag="div">
          <div v-for="(set, i) in dataSets" :key="set.id" class="inputsection">
            <div class="inputbox">
              <small>Beschreibung</small>
              <input @keyup="setDesc($event, i)" :value="set.description" />
            </div>
            <div class="inputbox">
              <small>Hintergrundfarbe</small>
              <chartColor @setColor="setColor($event, i)" />
            </div>
            <div style="flex: none">
              <br />
              <trash
                style="color: #c0392b; cursor: pointer"
                size="1.8x"
                @click.native="remove(i)"
              />
            </div></div
        ></transition-group>
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
import trash from '@/components/buttons/trash'
export default {
  components: {
    chartColor,
    primary,
    trash,
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
  mounted() {
    this.$nextTick(() => {
      this.addSet()
    })
  },
  methods: {
    setDesc(e, i) {
      let val = e.target.value
      this.chart.data.labels[i] = val
      this.updateChart()
    },
    setColor(color, index) {
      this.setBackground(color, index)
    },
    remove(i) {
      this.dataSets.splice(i, 1)
      this.chart.data.datasets[0].data.splice(i, 1)
      this.chart.data.datasets[0].backgroundColor.splice(i, 1)
      this.chart.data.labels.splice(i, 1)
      this.updateChart()
    },
    addSet() {
      if (this.dataSets.length >= this.maxSets) return

      this.dataSets.push({
        id: Math.random(),
        color: this.backgroundColor,
        description: 'data...',
      })
      this.chart.data.datasets[0].data.push(1)
      this.chart.data.datasets[0].backgroundColor.push(this.backgroundColor)
      this.chart.data.labels.push('data...')
      this.updateChart()
    },
    save() {
      this.saving = true
      this.$store.commit('ADD_MODULE', {
        name: this.name,
        dataset: this.dataset,
        borderColor: this.borderColor,
        backgroundColor: this.backgroundColor,
        type: 'donutChart',
      })
      this.$store.commit('modals/SET_MODULE_OPTIONS', false)
    },
    updateChart() {
      this.chart.update()
    },

    setBackground(color, i) {
      this.chart.data.datasets[0].backgroundColor[i] = color
      this.updateChart()
    },
  },
  created() {
    this.$nextTick(() => {
      let ctx = this.$refs.canvas.getContext('2d')
      this.chart = new Chart(ctx, {
        type: 'pie',
        data: {
          datasets: [
            {
              data: [],
              backgroundColor: [],
            },
          ],

          labels: [],
        },
      })
    })
  },
  destroyed(){
    
    this.chart.destroy();
  }
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
    align-items: center;
    div {
      flex: 1;
      margin: 0 5px;
    }
  }
}
</style>
