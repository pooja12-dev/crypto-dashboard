import React, { useEffect, useState } from "react";
import { fetchCryptoData } from "../services/Api";

const CryptoList = () => {
  const [cryptoList, setCryptoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCryptoData();
      setCryptoList(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Crypto List</h1>
      <ul>
        {cryptoList.map((crypto) => (
          <li key={crypto.id}>
            <img src={crypto.image} alt={crypto.name} width={30} />
            <span>
              {crypto.name} ({crypto.symbol.toUpperCase()})
            </span>
            : ${crypto.current_price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoList;
