import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
  rank,
}) => {
  return (
    <tr>
      <td data-label="#">{rank}</td>
      <td data-label="Image">
        <img src={image} alt="Crypto" />
      </td>
      <td data-label="Name">{name}</td>
      <td data-label="Symbol">
        <p className="coin-symbol">{symbol}</p>
      </td>
      <td data-label="Price">${price}</td>
      <td data-label="Volume">${volume.toLocaleString()}</td>
      <td data-label="Price Change">
        {priceChange < 0 ? (
          <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
        ) : (
          <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
        )}
      </td>
      <td data-label="MarketCap">${marketcap.toLocaleString()}</td>
    </tr>
  );
};

export default Coin;
