const chartData = {
  height: 350,
  type: "line",
  options: {
    chart: {
      id: "line-chart",
      stacked: false,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
    },
    stroke: {
      curve: "smooth",
      width: 5,
    },
    responsive: [
      {
        breakpoint: 300,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    legend: {
      show: true,
      fontSize: "14px",
      fontFamily: `'Poppins', sans-serif`,
      position: "bottom",
      offsetX: 20,
      labels: {
        useSeriesColors: false,
      },
      markers: {
        width: 16,
        height: 16,
        radius: 5,
      },
      itemMargin: {
        horizontal: 15,
        vertical: 8,
      },
    },
    fill: {
      type: "solid",
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
    },
  },
  seriesDay: [
    {
      name: "Main",
      data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75],
    },
    {
      name: "BTC",
      data: [35, 15, 90, 35, 10, 40, 80, 25, 15, 85, 25, 30],
    },
    {
      name: "ETH",
      data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10],
    },
  ],
  seriesMonth: [
    {
      name: "Main",
      data: [25, 125, 35, 35, 35, 80, 35, 20, 35, 35, 15, 75],
    },
    {
      name: "BTC",
      data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 25, 25, 75],
    },
    {
      name: "ETH",
      data: [34, 145, 35, 35, 20, 105, 100, 10, 85, 45, 30, 10],
    },
  ],
  seriesYear: [
    {
      name: "Main",
      data: [45, 125, 35, 65, 45, 132, 35, 20, 35, 4, 15, 90],
    },
    {
      name: "BTC",
      data: [35, 15, 15, 35, 65, 98, 80, 188, 65, 85, 25, 75],
    },
    {
      name: "ETH",
      data: [35, 145, 35, 35, 132, 105, 100, 10, 65, 45, 30, 10],
    },
  ],
};

export default chartData;
