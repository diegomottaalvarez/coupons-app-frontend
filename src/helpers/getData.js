const BASE_URL = 'http://localhost:4000/api/coupons';

const PROMOTION_TYPES = {
  PERCENT_OFF: 'percent-off',
  BUY_ONE_GET_ONE: 'buy-one-get-one',
  FREE_GIFT: 'free-gift',
  FREE_SHIPPING: 'free-shipping',
  DOLLAR_OFF: 'dollar-off',
};

const getCouponsByType = async () => {
  try {
    const data = await fetch(`${BASE_URL}/count-coupons-by-type`);
    const coupons = await data.json();
    return coupons;
  } catch (error) {
    console.error("Couldn't get coupons by type");
  }
};

const getDiscountStatistics = async (promotion_type) => {
  try {
    const data = await fetch(
      `${BASE_URL}/discount-statistics?promotion_type=${promotion_type}`
    );
    const statistics = await data.json();
    return statistics;
  } catch (error) {
    console.error("Couldn't get stadistics");
  }
};

export { getCouponsByType, getDiscountStatistics, PROMOTION_TYPES };