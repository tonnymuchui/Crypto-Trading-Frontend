import { Button } from "@/components/ui/button";
import React from "react";
import ReactApexChart from "react-apexcharts";

export const StockChart = () => {
  // Updated series data with correct format
  const series = [
    {
      name: "Price",
      data: [
        { x: new Date("2024-07-01").getTime(), y: 1232.23 },
        { x: new Date("2024-07-02").getTime(), y: 1433.33 },
        { x: new Date("2024-07-03").getTime(), y: 332.43 },
        { x: new Date("2024-07-04").getTime(), y: 1443 },
        { x: new Date("2024-07-05").getTime(), y: 1523.56 },
        { x: new Date("2024-07-06").getTime(), y: 1632.78 },
        { x: new Date("2024-07-07").getTime(), y: 734.56 },
        { x: new Date("2024-07-08").getTime(), y: 1823.44 },
        { x: new Date("2024-07-09").getTime(), y: 1245.67 },
        { x: new Date("2024-07-10").getTime(), y: 2856.78 },
        { x: new Date("2024-07-11").getTime(), y: 1123.45 },
        { x: new Date("2024-07-12").getTime(), y: 2234.56 },
      ],
    },
  ];

  const options = {
    chart: {
      id: "area-date-time",
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
      strokeColor: ["#FF1654"],
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
        opacityTo: 0.5,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#47535E",
      strokeDashArray: 4,
      show: true,
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
          series={series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};
