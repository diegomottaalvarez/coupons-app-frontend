<template>
  <h1>Statistics</h1>
  <select
    v-model="selectedPromotionType"
    @change="$emit('selectedPromotion', selectedPromotionType)"
  >
    <option disabled value="">Please select one</option>
    <option>{{ PROMOTION_TYPES.DOLLAR_OFF }}</option>
    <option>{{ PROMOTION_TYPES.PERCENT_OFF }}</option>
  </select>
  <div v-if="statistics">{{ statistics }}</div>
</template>
<script>
import { PROMOTION_TYPES } from '../helpers/getData';

export default {
  props: {
    statistics: { type: Object },
  },
  data() {
    {
      return {
        selectedPromotionType: PROMOTION_TYPES.DOLLAR_OFF,
        PROMOTION_TYPES: PROMOTION_TYPES,
      };
    }
  },
  emits: ['selectedPromotion'],
};
</script>
<style></style>
