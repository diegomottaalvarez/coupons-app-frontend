<template>
  <CouponsByType :coupons="couponsByType" />
  <StatisticsByPromotionType
    :statistics="statistics"
    @selectedPromotion="setPromotionType"
    @filterByRetailer="filterByRetailer"
  />
</template>

<script>
import {
  getCouponsByType,
  getDiscountStatistics,
  PROMOTION_TYPES,
} from '../helpers/getData';
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
      couponsByType: { type: Object },
      statistics: { type: Object },
      promotionType: { type: String },
    };
  },
  methods: {
    async getCoupons() {
      this.couponsByType = await getCouponsByType();
    },
    async getStatistics(promotionType, filterByRetailer) {
      this.statistics = await getDiscountStatistics(
        promotionType,
        filterByRetailer
      );
    },
    setPromotionType(promotionType, filterByRetailer = false) {
      this.promotionType = promotionType;
      this.getStatistics(promotionType, filterByRetailer);
    },

    filterByRetailer(filter) {
      this.getStatistics(this.promotionType, filter);
    },
  },
  created() {
    this.getCoupons();
    this.setPromotionType(PROMOTION_TYPES.DOLLAR_OFF);
  },
};
</script>
<style></style>
