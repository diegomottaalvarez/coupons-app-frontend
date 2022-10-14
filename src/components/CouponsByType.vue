<template>
  <div class="coupons-type-container">
    <h2>Coupons by Type</h2>
    <CouponsByTypeChart v-if="coupons" :coupons="coupons" />
  </div>
</template>
<script>
import CouponsByTypeChart from '../charts/CouponsByTypeChart.vue';
export default {
  props: {
    coupons: { type: Object },
  },
  components: { CouponsByTypeChart, CouponsByTypeChart },
};
</script>
<style scoped>
.coupons-type-container {
  display: flex;
  flex-direction: column;
}

@media (max-width: 1217px) {
  .coupons-type-container {
    align-items: center;
  }
}
</style>
