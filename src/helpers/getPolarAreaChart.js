import { parsePromotionTypeName } from '../helpers/dataUtils';

const createPolarAreaChart = (coupons, title) => {
  const labels = Object.keys(coupons).map((item) =>
    parsePromotionTypeName(item)
  );
  const couponsData = Object.values(coupons);
  const colors = [
    '#A63446BF',
    '#BBD686BF',
    '#0C6291BF',
    '#4083dbBF',
    '#E6AF2EBF',
    '#FFBCB5BF',
  ];
  const data = {
    labels,
    datasets: [
      {
        label: 'Coupons data',
        data: couponsData,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: 'polarArea',
    data,
    responsive: true,
    options: {
      plugins: {
        title: {
          display: true,
          text: title,
        },
      },
    },
  };

  return config;
};
export default createPolarAreaChart;
