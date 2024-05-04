/* eslint-disable react/prop-types */
import "./styles.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Link } from "react-router-dom";

function Grid({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div
        className={`grid-container ${
          coin.market_cap_change_percentage_24h < 0 && "grid-container-red"
        }`}
      >
        <div className="info-flex">
          <img src={coin.image} className="coin-logo" />
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </div>
        {coin.market_cap_change_percentage_24h >= 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {coin.market_cap_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip">
              <TrendingUpIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip chip-red">
              {coin.market_cap_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip icon-red">
              <TrendingDownIcon />
            </div>
          </div>
        )}
        <div className="crypto-price-flex">
          <h3 className="coin-price">Price :</h3>
          <h3 className="coin-price-num">
            ${coin.current_price.toLocaleString()}
          </h3>
        </div>
        <p className="total-volume">
          Total volume : ${coin.total_volume.toLocaleString()}
        </p>
        <p className="market-cap">
          Market Cap : ${coin.market_cap.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}

export default Grid;
