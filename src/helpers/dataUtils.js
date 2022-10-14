const PROMOTION_TYPES = {
  PERCENT_OFF: 'percent-off',
  BUY_ONE_GET_ONE: 'buy-one-get-one',
  FREE_GIFT: 'free-gift',
  FREE_SHIPPING: 'free-shipping',
  DOLLAR_OFF: 'dollar-off',
};

const parsePromotionTypeName = (promotionType) => {
  return promotionType.split('-').map((item) => {
    return `${item[0].toUpperCase()}${item.substring(1)}`;
  }).join` `;
};

export { PROMOTION_TYPES, parsePromotionTypeName };
