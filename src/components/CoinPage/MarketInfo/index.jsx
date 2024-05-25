/* eslint-disable react/prop-types */

import { Tooltip } from "@mui/material";
import "./styles.css";

function MarketInfo({ data }) {
  return (
    <div className="market-info-container">
      <p className="market-info-label">Market Info</p>
      <div className="market-feautures-items">
        <div className="market-feature-tooltip-value">
          <div className="feature-tooltip">
            <p className="market-feature">Market cap</p>
            <Tooltip
              title="Market cap is the total value of all the circulating coins/tokens."
              placement="top"
            >
              <p className="common-tooltip">!</p>
            </Tooltip>
          </div>
          <p className="market-feature-value">
            ${data?.market_data.market_cap.usd.toLocaleString()}
          </p>
        </div>
        <div className="market-feature-tooltip-value">
          <div className="feature-tooltip">
            <p className="market-feature">Diluted Market Cap</p>
            <Tooltip
              title="Diluted market cap is the total value of all coins/tokens that will ever exist."
              placement="top"
            >
              <p className="common-tooltip">!</p>
            </Tooltip>
          </div>
          <p className="market-feature-value">
            ${data?.market_data.fully_diluted_valuation.usd.toLocaleString()}
          </p>
        </div>
        <div className="market-feature-tooltip-value">
          <div className="feature-tooltip">
            <p className="market-feature">24h Change</p>
            <Tooltip
              title="Percent change in price over the day."
              placement="top"
            >
              <p className="common-tooltip">!</p>
            </Tooltip>
          </div>
          <p
            className={
              data?.market_data.price_change_percentage_24h >= 0
                ? "market-feature-value value-green"
                : "market-feature-value value-red"
            }
          >
            {data?.market_data.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
        <div className="market-feature-tooltip-value">
          <div className="feature-tooltip">
            <p className="market-feature">1h Change</p>
            <Tooltip
              title="Percent change in price over the last hour."
              placement="top"
            >
              <p className="common-tooltip">!</p>
            </Tooltip>
          </div>
          <p
            className={
              data?.market_data.price_change_percentage_1h_in_currency.usd >= 0
                ? "market-feature-value value-green"
                : "market-feature-value value-red"
            }
          >
            {data?.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
              2
            )}
            %
          </p>
        </div>
        <div className="market-feature-tooltip-value">
          <div className="feature-tooltip">
            <p className="market-feature">24h High</p>
            <Tooltip
              title="Highest price over the last 24 hours."
              placement="top"
            >
              <p className="common-tooltip">!</p>
            </Tooltip>
          </div>
          <p className="market-feature-value value-green">
            ${data?.market_data.high_24h.usd.toLocaleString()}
          </p>
        </div>

        <div className="market-feature-tooltip-value">
          <div className="feature-tooltip">
            <p className="market-feature">24h Low</p>
            <Tooltip
              title="Lowest price over the last 24 hours."
              placement="top"
            >
              <p className="common-tooltip">!</p>
            </Tooltip>
          </div>
          <p className="market-feature-value value-red">
            ${data?.market_data.low_24h.usd.toLocaleString()}
          </p>
        </div>
        <div className="market-feature-tooltip-value">
          <div className="feature-tooltip">
            <p className="market-feature">Circulating Supply</p>
            <Tooltip
              title="The current float of coin/tokens that have been issued."
              placement="top"
            >
              <p className="common-tooltip">!</p>
            </Tooltip>
          </div>
          <p className="market-feature-value">
            {data?.market_data.circulating_supply.toLocaleString()}
          </p>
        </div>
        <div className="market-feature-tooltip-value">
          <div className="feature-tooltip">
            <p className="market-feature">Max Supply</p>
            <Tooltip
              title="The total amount of coins/tokens that will exist according to project's codebase"
              placement="top"
            >
              <p className="common-tooltip">!</p>
            </Tooltip>
          </div>
          <p className="market-feature-value">
            {data?.market_data.max_supply
              ? data?.market_data.max_supply.toLocaleString()
              : "Uncapped"}
          </p>
        </div>
        <div className="market-feature-tooltip-value">
          <div className="feature-tooltip">
            <p className="market-feature">Algorithm</p>
            <Tooltip title="Algorithm used in this crypto." placement="top">
              <p className="common-tooltip">!</p>
            </Tooltip>
          </div>
          <p className="market-feature-value">
            {data?.hashing_algorithm ? data.hashing_algorithm : "--"}
          </p>
        </div>
        <div className="market-feature-tooltip-value">
          <div className="feature-tooltip">
            <p className="market-feature">Genesis Block Date</p>
            <Tooltip
              title="The genesis is the date of first block or first time a token was seen on network."
              placement="top"
            >
              <p className="common-tooltip">!</p>
            </Tooltip>
          </div>
          <p className="market-feature-value">
            {data?.genesis_date ? data.genesis_date : "--"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MarketInfo;
