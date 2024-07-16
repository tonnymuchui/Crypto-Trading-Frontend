import { Button } from "@/components/ui/button";
import React from "react";
import ReactApexChart from "react-apexcharts";

export const StockChart = () => {
  const searies = [
    {
      data: [
        [232.23, 433.33],
        [332.43, 4443],
        [1523.56, 1632.78],
        [734.56, 823.44],
        [45.67, 56.78],
        [123.45, 234.56],
        [89.34, 98.76],
        [5678.12, 6789.34],
        [345.67, 456.78],
        [2345.67, 3456.78],
        [76.54, 87.65],
        [456.78, 567.89],
      ],
    },
  ];
  const options = {
    charts: {
      id: "area date-time",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    colors: ["#FF1654"],
    markers: {
      colors: ["#FFF"],
      strokeColor: ["#FFF"],
      size: 0,
      strokeWidth: 1,
      style: "hollow",
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.8,
        opacityTo: 0.9,
        stops: [0, 100],
      },
      grid: {
        borderColor: "#47535E",
        strokeDashArray: 4,
        show: true,
      },
    },
  };
  const timeSeries = [
    {
      keywords: "Digital Currency Daily",
      key: "Time Series Daily",
      label: "1 Day",
      value: 1,
    },
    {
      keywords: "Digital Currency Daily",
      key: "Time Series Daily",
      label: "7 Days",
      value: 7,
    },
    {
      keywords: "Digital Currency Daily",
      key: "Time Series Daily",
      label: "30 Days",
      value: 30,
    },
  ];

  const [activeLabel, setActiveLabel] = React.useState("1 Day");

  const handleActiveLabel = (value) => {
    setActiveLabel(value);
  };
  return (
    <div>
    <div className="space-x-3">
      {timeSeries.map((item) => (
        <Button
          key={item.label}
          variant={activeLabel === item.label ? "" : "outline"}
          onClick={() => handleActiveLabel(item.label)}
        >
          {item.label}
        </Button>
      ))}
    </div>
    <div id="chart-timelines">
      <ReactApexChart
        options={options}
        series={searies}
        type="area"
        height={350}
      />
    </div>
  </div>
);
};