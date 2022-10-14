<template>
  <div class="statistics-promotion-container">
    <h2>Coupon Statistics</h2>
    <div class="filters-container">
      <label for="checkbox"
        ><input
          type="checkbox"
          id="checkbox"
          v-model="filterByRetailer"
          @change="$emit('filterByRetailer', filterByRetailer)"
        />Filter by Retailer
      </label>
      <select
        v-model="selectedPromotionType"
        @change="$emit('selectedPromotion', selectedPromotionType)"
      >
        <option disabled value="">Please select one</option>
        <option :value="PROMOTION_TYPES.DOLLAR_OFF">{{
          parsePromotionTypeName(PROMOTION_TYPES.DOLLAR_OFF)
        }}</option>
        <option :value="PROMOTION_TYPES.PERCENT_OFF">{{
          parsePromotionTypeName(PROMOTION_TYPES.PERCENT_OFF)
        }}</option>
      </select>
    </div>
    <div class="statistics-promotion-container">
      <StatisticsByPromotionTypeChart
        :statistics="statistics"
        :selectedPromotionType="selectedPromotionType"
        :filterByRetailer="filterByRetailer"
    /></div>
  </div>
</template>

<script>
import { PROMOTION_TYPES, parsePromotionTypeName } from '../helpers/dataUtils';
import StatisticsByPromotionTypeChart from '../charts/StatisticsByPromotionTypeChart.vue';

export default {
  props: {
    statistics: { type: Object },
    selectedPromotionType: {
      type: String,
    },
    filterByRetailer: { type: Boolean },
  },
  data() {
    {
      return {
        PROMOTION_TYPES: PROMOTION_TYPES,
      };
    }
  },
  methods: {
    parsePromotionTypeName: parsePromotionTypeName,
  },
  emits: ['selectedPromotion', 'filterByRetailer'],
  components: { StatisticsByPromotionTypeChart },
};
</script>
<style scoped>
.filters-container {
  display: flex;
  justify-content: space-evenly;
}

@media (max-width: 1217px) {
  .statistics-promotion-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
