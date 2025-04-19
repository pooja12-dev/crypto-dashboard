import axios from "axios";
import { cryptoListMock, chartDataMock } from "../mock/mockData";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const fetchCryptoData = async () => {
  try {
    if (process.env.NODE_ENV === "development") {
      console.log("Using mock data for crypto list.");
      return cryptoListMock; // Return mock data in development
    }
    const response = await axios.get(`${BASE_URL}/coins/markets`, {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 10,
        page: 1,
        sparkline: false,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching crypto list:", error);
    return [];
  }
};

export const fetchChartData = async (id = "bitcoin") => {
  try {
    if (process.env.NODE_ENV === "development") {
      console.log("Using mock data for chart.");
      return chartDataMock; // Return mock data in development
    }
    const response = await axios.get(`${BASE_URL}/coins/${id}/market_chart`, {
      params: {
        vs_currency: "usd",
        days: 7,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching chart data:", error);
    return null;
  }
};
