import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

// Register the required components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const CryptoChart = ({ id = "bitcoin" }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
        );
        const data = await response.json();
        setChartData(data.prices);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchChartData();
  }, [id]);

  const data = {
    labels: chartData.map((point) => new Date(point[0]).toLocaleDateString()),
    datasets: [
      {
        label: "Price (USD)",
        data: chartData.map((point) => point[1]),
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1, // Optional: Smooth curve
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h1>Crypto Chart</h1>
      {chartData.length > 0 ? <Line data={data} /> : <p>Loading chart...</p>}
    </div>
  );
};

export default CryptoChart;
