<template>
  <CouponsByType :coupons="couponsByType" />
  <StatisticsByPromotionType
    :statistics="statistics"
    @selectedPromotion="setPromotionType"
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
      promotion_type: { type: String },
    };
  },
  methods: {
    async getCoupons() {
      this.couponsByType = await getCouponsByType();
    },
    async getStatistics(promotion_type) {
      this.statistics = await getDiscountStatistics(promotion_type);
    },
    setPromotionType(promotion_type) {
      this.promotion_type = promotion_type;
      this.getStatistics(promotion_type);
    },
  },
  created() {
    this.getCoupons();
    this.setPromotionType(PROMOTION_TYPES.DOLLAR_OFF);
  },
};
</script>
<style></style>
