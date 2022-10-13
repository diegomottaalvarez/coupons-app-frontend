<template>
  <CouponsByType :coupons="couponsByType" />
</template>

<script>
import {
  getCouponsByType,
  getDiscountStatistics,
  PROMOTION_TYPES,
} from './helpers/getStatistics';
import CouponsByType from './components/CouponsByType.vue';

export default {
  name: 'App',
  components: {
    CouponsByType,
  },
  data() {
    return {
      couponsByType: { type: Object },
    };
  },
  methods: {
    async getCoupons() {
      this.couponsByType = await getCouponsByType();
    },
    getStatistics() {
      console.log(getDiscountStatistics(PROMOTION_TYPES.DOLLAR_OFF));
    },
  },
  created() {
    this.getCoupons();
    this.getStatistics();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
