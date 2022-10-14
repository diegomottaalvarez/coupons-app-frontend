<template>
  <div class="chart-container">
    <canvas id="couponsByTypeChart"></canvas>
  </div>
</template>
<script>
import Chart from 'chart.js/auto';
import createPolarAreaChart from '../helpers/getPolarAreaChart';
export default {
  props: {
    coupons: { type: Object },
  },
  methods: {
    loadChart() {
      const total = Object.values(this.coupons).reduce(
        (acc, current) => acc + current,
        0
      );
      const config = createPolarAreaChart(
        this.coupons,
        `${total} coupons in total`
      );
      const myChart = new Chart(
        document.getElementById('couponsByTypeChart'),
        config
      );
    },
  },
  mounted() {
    this.loadChart();
  },
};
</script>
<style scoped>
div.chart-container {
  position: relative;
  width: 35vw;
}

@media (max-width: 1217px) {
  div.chart-container {
    width: 60vw;
  }
}

@media (max-width: 800px) {
  div.chart-container {
    width: 75vw;
  }
}
</style>
