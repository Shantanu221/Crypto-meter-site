/* eslint-disable react/prop-types */
import "./styles.css";

function CoinHeader({ image, name, symbol, price, rank }) {
  return (
    <div className="coin-header">
      <div className="coin-logo-name-symbol">
        <img src={image} alt="image" className="coin-header-logo" />
        <div>
          <p className="coin-header-coin-name">{name}</p>
          <p className="coin-header-coin-symbol">{symbol?.toUpperCase()}</p>
        </div>
      </div>
      <p className="coin-header-coin-price">${price?.toLocaleString()}</p>
      <p className="coin-header-coin-rank">Market Cap rank : {rank}</p>
    </div>
  );
}

export default CoinHeader;
