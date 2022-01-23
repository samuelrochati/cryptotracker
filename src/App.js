import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">
          Cryptocurrency Prices by Market Cap - Top 100
        </h1>

        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>

        <table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">IMAGE</th>
              <th scope="col">CRYPTO</th>
              <th scope="col">SYMBOL</th>
              <th scope="col">PRICE</th>
              <th scope="col">24H VOLUME</th>
              <th scope="col">24H % CHANGE</th>
              <th scope="col">MKT CAP</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((coin) => {
              return (
                <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  volume={coin.total_volume}
                  marketcap={coin.market_cap}
                  priceChange={coin.price_change_percentage_24h}
                  rank={coin.market_cap_rank}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
