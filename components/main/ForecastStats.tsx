import React from "react";
import { StyledForecastStats } from "./styled";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ForecastStasts = ({ forecastData }: { forecastData: any }) => {
  if (!forecastData) {
    return <div>Loading...</div>;
  }

  const sevenDayForecast = forecastData.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = item;
    }
    return acc;
  }, {});

  const sevenDayData = Object.values(sevenDayForecast).slice(0, 7);

  const data = {
    labels: sevenDayData.map((item) =>
      new Date(item.dt * 1000).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Temperature (°C)",
        data: sevenDayData.map((item) => item.main.temp),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Weather Forecast for the next 7 days",
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: "Temperature (°C)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
    },
  };

  return (
    <StyledForecastStats>
      <Line
        options={options}
        data={data}
        style={{ width: "100%", height: "100%" }}
      />
    </StyledForecastStats>
  );
};

export default ForecastStasts;
