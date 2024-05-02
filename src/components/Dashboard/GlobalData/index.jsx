/* eslint-disable react/prop-types */
import { blue } from "@mui/material/colors";
import "./styles.css";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

function OverviewData({ overview }) {
  return (
    <div className="overview-data-box">
      <div className="overview-data-heading">
        <p>Overview</p>
        <TrendingFlatIcon sx={{ color: blue[500] }} />
      </div>
      <div className="overview-data-body">
        <div className="data-element">
          <p className="element-info">Market Cap chage(24h)</p>
          <p
            className={`market-cap-change ${
              overview.market_cap_change_percentage_24h_usd < 0 &&
              "red-market-cap"
            }`}
          >
            {overview.market_cap_change_percentage_24h_usd?.toFixed(2)}%
          </p>
        </div>
        <div className="data-element">
          <p className="element-info">Active CryptoCurrencies</p>
          <p className="element-info-value">
            {overview.active_cryptocurrencies}
          </p>
        </div>
        <div className="data-element">
          <p className="element-info">Ongoing ICOs</p>
          <p className="element-info-value">{overview.ongoing_icos}</p>
        </div>
      </div>
    </div>
  );
}

export default OverviewData;
