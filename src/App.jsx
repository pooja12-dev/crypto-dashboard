import React from "react";
import CryptoList from "./components/CryptoList";
import CryptoChart from "./components/CryptoChart";

const App = () => {
  return (
    <div>
      <CryptoList />
      <CryptoChart />
    </div>
  );
};

export default App;
