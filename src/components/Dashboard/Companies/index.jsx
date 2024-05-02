/* eslint-disable react/prop-types */
import { yellow } from "@mui/material/colors";
import "./styles.css";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

function Companies({ companies }) {
  return (
    <div className="overview-data-box">
      <div className="overview-data-heading">
        <p>Bitcoin Holdings</p>
        <CurrencyBitcoinIcon sx={{ color: yellow[700] }} />
      </div>
      <div className="overview-data-body">
        <div className="data-element">
          <p className="element-info">{companies[0]?.name}</p>
          <p className="element-info-value">{companies[0]?.total_holdings}</p>
        </div>
        <div className="data-element">
          <p className="element-info">{companies[1]?.name}</p>
          <p className="element-info-value">{companies[1]?.total_holdings}</p>
        </div>
        <div className="data-element">
          <p className="element-info">{companies[2]?.name}</p>
          <p className="element-info-value">{companies[2]?.total_holdings}</p>
        </div>
      </div>
    </div>
  );
}

export default Companies;
