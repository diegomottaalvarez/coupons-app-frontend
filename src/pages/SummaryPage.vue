<template>
  <h1>Coupons Data</h1>
  <div class="main-container">
    <CouponsByType v-if="couponsByType" :coupons="couponsByType" />
    <StatisticsByPromotionType
      v-if="statistics"
      :statistics="statistics"
      :filterByRetailer="filterByRetailer"
      :selectedPromotionType="promotionType"
      @selectedPromotion="setPromotionType"
      @filterByRetailer="setFilterByRetailer"
    />
  </div>
</template>

<script>
import { getCouponsByType, getDiscountStatistics } from '../helpers/getData';
import { PROMOTION_TYPES } from '../helpers/dataUtils';
import CouponsByType from '../components/CouponsByType.vue';
import StatisticsByPromotionType from '../components/StatisticsByPromotionType';

export default {
  name: 'App',
  components: {
    CouponsByType,
    StatisticsByPromotionType,
  },
  data() {
    return {
      couponsByType: null,
      statistics: null,
      PROMOTION_TYPES: PROMOTION_TYPES,
      promotionType: null,
      filterByRetailer: null,
    };
  },
  methods: {
    async getCoupons() {
      this.couponsByType = await getCouponsByType();
    },
    async getStatistics() {
      this.statistics = await getDiscountStatistics(
        this.promotionType,
        this.filterByRetailer
      );
    },
    setPromotionType(promotionType) {
      this.promotionType = promotionType;
      this.getStatistics();
    },

    setFilterByRetailer(filter) {
      this.filterByRetailer = filter;
      this.getStatistics();
    },
  },
  created() {
    this.promotionType = PROMOTION_TYPES.DOLLAR_OFF;
    this.getCoupons();
    this.getStatistics();
  },
};
</script>
<style scoped>
@import '../assets/styles/styles.css';

.main-container {
  display: flex;
  margin: 2rem 5rem;
  justify-content: space-evenly;
}

@media (max-width: 1217px) {
  .main-container {
    flex-direction: column;
  }
}
</style>
