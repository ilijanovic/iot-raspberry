<template>
  <div class="module">
    <div class="head">
      <h3>{{ module.name }}</h3>
      <div class="status"></div>
    </div>
    <div class="content">
      <div class="chart">
        <div style="width: 100%">
          <p>
            <b>Socket ID:</b> <small>{{ module.socketId }}</small>
          </p>
          <div class="line"></div>
          <component :id="module.socketId" :is="module.type" />
        </div>

        <div style="flex: 1" :class="{ canvas: open }">
          <canvas style="margin-left: auto" ref="canvas"></canvas>
        </div>
      </div>
      <div class="buttonbox">
        <trash @click.native="deleteModule(module._id)" />

        <primary @click.native="toggleChart" class="btn"
          >Ansehen<ChevronsDownIcon
            style="margin-left: 10px"
            :style="{ transform: !open ? 'rotate(180deg)' : '' }"
            size="1.3x"
        /></primary>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from 'chart.js'
import primary from '@/components/buttons/primary'
import { ChevronsDownIcon, Edit3Icon } from 'vue-feather-icons'
import trash from '@/components/buttons/trash'
import lineChart from '@/components/module/infobox/line'
import donutChart from '@/components/module/infobox/donut'
import { minimizeOptions, defaultOptions } from '@/static/js/chartoptions'
import socket from '@/plugins/socket'
export default {
  props: ['module'],
  components: {
    primary,
    lineChart,
    donutChart,
    ChevronsDownIcon,
    Edit3Icon,
    trash,
  },
  data: () => ({
    open: true,
    average: 12.2,
    chart: null,
  }),
  methods: {
    toggleChart() {
      this.open = !this.open
      requestAnimationFrame(() => {
        this.chart.resize()
        requestAnimationFrame(() => {
          this.chart.resize()
        })
      })

      if (!this.open) {
        this.chart.options = defaultOptions
      } else {
        this.chart.options = minimizeOptions
      }
    },
    deleteModule(id) {
      this.$store.commit('modals/SET_WARNING', {
        message:
          'Wollen Sie wirklich dieses Modul löschen? \n  Die gespeicherten Daten werden unwiederruflich gelöscht',
        id,
      })
    },

    addDatapoint({ label, type, dataPoint, index }) {
      if (type === 'line') {
        this.chart.data.labels.push(label)
        this.chart.data.datasets[0].data.push(dataPoint)
        if (this.chart.data.labels.length >= 10) {
          this.chart.data.labels.shift()
          this.chart.data.datasets[0].data.shift()
        }
      }
      if (type === 'pie') {
        this.chart.data.datasets[0].data[index] = dataPoint
      }

      this.chart.update()
    },
  },
  mounted() {
    this.$nextTick(() => {
      let ctx = this.$refs.canvas.getContext('2d')
      let { chartType, dataOptions, socketId } = Object.freeze(this.module)

      this.chart = new Chart(ctx, {
        type: chartType,
        data: dataOptions,
        options: minimizeOptions,
      })
      socket.on(socketId, (data) => {
        this.addDatapoint(data)
      })
    })
  },
}
</script>
<style lang="scss" scoped>
.module {
  width: 100%;
  min-height: 200px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow);
  border-radius: 6px;
  margin-bottom: 20px;
  background: var(--background-light);
  .line {
    border-top: 1px solid #dadada;
    width: 100%;
    margin: 10px 0;
  }
  .head {
    background: var(--light-blue);
    border-radius: 6px 6px 0 0;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;
  }
  h3 {
    color: var(--text-light);
  }
  .content {
    padding: 10px;
    .status {
      border-radius: 50%;
      width: 20px;
      height: 20px;
      background: rgb(0, 185, 0);
    }
    .buttonbox {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
    }
    .btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
.chart {
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
}
.canvas {
  max-width: 300px;
}
</style>
