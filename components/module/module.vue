<template>
  <div class="module">
    <div class="head">
      <h3>{{ module.name }}</h3>
    </div>
    <canvas ref="canvas"></canvas>
  </div>
</template>
<script>
import Chart from 'chart.js'
export default {
  props: ['module'],
  chart: null,
  created() {
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
.module {
  width: 100%;
  height: 200px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow);
  border-radius: 6px;
  margin-bottom: 20px;
  .head {
    background: var(--light-blue);
    border-radius: 6px 6px 0 0;
  }
  h3 {
    padding: 10px 20px;
    color: var(--text-light);
  }
}
</style>
