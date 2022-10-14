<template>
  <div class="chart-container">
    <canvas id="statisticsByPromotionChart"></canvas>
  </div>
</template>
<script>
import Chart from 'chart.js/auto';
import createStackedBarChart from '../helpers/getStackedBarChart';
export default {
  props: {
    statistics: { type: Object },
    selectedPromotionType: { type: String },
    filterByRetailer: { type: Boolean },
  },
  data() {
    return {
      chart: null,
    };
  },
  methods: {
    loadChart() {
      const config = createStackedBarChart(
        this.statistics,
        this.selectedPromotionType,
        'Statistics By Promotion',
        this.filterByRetailer
      );
      (config.options.animation = {
        onComplete: function () {
          this.stackedBarChartLoaded = true;
        },
      }),
        (this.chart = new Chart(
          document.getElementById('statisticsByPromotionChart'),
          config
        ));
    },
    reloadChart() {
      if (!this.chart.stackedBarChartLoaded) {
        setTimeout(() => {
          this.reloadChart();
        }, 1000);
      } else {
        this.chart.destroy();
        this.loadChart();
      }
    },
  },
  mounted() {
    this.loadChart();
  },

  watch: {
    statistics() {
      this.reloadChart();
    },
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
