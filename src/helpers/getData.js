const BASE_URL = 'http://localhost:4000/api/coupons';

const getCouponsByType = async () => {
  try {
    const data = await fetch(`${BASE_URL}/count-coupons-by-type`);
    const coupons = await data.json();
    return coupons;
  } catch (error) {
    console.error("Couldn't get coupons by type");
  }
};

const getDiscountStatistics = async (
  promotionType,
  filterByRetailer = false
) => {
  const URL = filterByRetailer
    ? `${BASE_URL}/discount-statistics-by-retailer?promotion_type=${promotionType}`
    : `${BASE_URL}/discount-statistics?promotion_type=${promotionType}`;
  try {
    const data = await fetch(URL);
    const statistics = await data.json();
    return statistics;
  } catch (error) {
    console.error("Couldn't get stadistics");
  }
};

export { getCouponsByType, getDiscountStatistics };
