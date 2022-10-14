import { PROMOTION_TYPES, parsePromotionTypeName } from './dataUtils';

const parseSingleDataToChart = (statistics, promotionType) => {
  const { min, max, average, total } = statistics;
  const labels = [
    `Statistics for ${parsePromotionTypeName(
      promotionType
    )}: ${total} coupons total`,
  ];
  const parsedData = { min: [min], max: [max], average: [average] };
  return { labels, parsedData, yText: getYAxeLabel(promotionType) };
};

const parseRetailersDataToChart = (retailerStatistics, promotionType) => {
  const min = Object.values(retailerStatistics).map((item) => item.min);
  const max = Object.values(retailerStatistics).map((item) => item.max);
  const average = Object.values(retailerStatistics).map((item) => item.average);
  const total = Object.values(retailerStatistics).map((item) => item.total);
  const labels = Object.keys(retailerStatistics).map(
    (item, index) =>
      `${item[0].toUpperCase()}${item.substring(1)}: ${total[index]} coupons`
  );

  const parsedData = { min, max, average, total };

  return {
    labels,
    parsedData,
    yText: getYAxeLabel(promotionType),
  };
};

const getYAxeLabel = (promotionType) => {
  return promotionType === PROMOTION_TYPES.DOLLAR_OFF ? '$' : '%';
};

const createStackedBarChart = (
  statistics,
  promotionType,
  title,
  retailer = false
) => {
  const { labels, parsedData, yText } = retailer
    ? parseRetailersDataToChart(statistics, promotionType)
    : parseSingleDataToChart(statistics, promotionType);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'min',
        data: parsedData.min,
        backgroundColor: '#DBEBC0',
      },
      {
        label: 'average',
        data: parsedData.average,
        backgroundColor: '#C3B299',
      },
      {
        label: 'max',
        data: parsedData.max,
        backgroundColor: '#523249',
      },
    ],
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: title,
        },
        tooltip: {
          position: 'nearest',
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: false,
          display: true,

          ticks: {
            beginAtZero: true,
            callback: function (value, index, values) {
              return value + yText;
            },
          },
        },
      },
    },
  };

  return config;
};

export default createStackedBarChart;
