/* eslint-disable react/prop-types */
import "./styles.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Tooltip } from "@mui/material";
import { reduceNumbers } from "../../../functions/reduceNumbers";

function List({ coin }) {
  return (
    <tr className="list-row">
      <Tooltip title="Coin info" placement="bottom">
        <td className="info-flex">
          <img src={coin.image} className="coin-logo td-logo" />
          <div className="name-col">
            <p className="coin-symbol td-symbol">{coin.symbol}</p>
            <p className="coin-name td-coin-name">{coin.name}</p>
            <p className="coin-price-responsive">
              ${coin.current_price.toLocaleString()}
            </p>
          </div>
        </td>
      </Tooltip>

      <td className="crypto-price-flex">
        <h3 className="coin-price td-price">Price :</h3>
        <h3 className="coin-price-num td-price-num">
          ${coin.current_price.toLocaleString()}
        </h3>
      </td>
      <Tooltip title="Price change in 24h" placement="bottom-start">
        <td>
          {coin.market_cap_change_percentage_24h >= 0 ? (
            <td>
              <div className="chip-flex">
                <div className="price-chip">
                  {coin.market_cap_change_percentage_24h.toFixed(2)}%
                </div>
                <div className="icon-chip td-icon">
                  <TrendingUpIcon />
                </div>
              </div>
            </td>
          ) : (
            <td>
              <div className="chip-flex">
                <div className="price-chip chip-red">
                  {coin.market_cap_change_percentage_24h.toFixed(2)}%
                </div>
                <div className="icon-chip icon-red td-icon">
                  <TrendingDownIcon />
                </div>
              </div>
            </td>
          )}
        </td>
      </Tooltip>
      <Tooltip title="Total Volume" placement="bottom">
        <td>
          <p className="total-volume td-right-align td-volume">
            ${coin.total_volume.toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip title="Market Cap" placement="bottom">
        <td>
          <p className="market-cap td-right-align td-market-cap">
            ${coin.market_cap.toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip title="Market Cap" placement="bottom">
        <td className="market-cap-responsive">
          <p className="market-cap td-right-align">
            ${reduceNumbers(coin.market_cap)}
          </p>
        </td>
      </Tooltip>
    </tr>
  );
}

export default List;
