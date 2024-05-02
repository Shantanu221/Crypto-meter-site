/* eslint-disable react/prop-types */
import { orange } from "@mui/material/colors";
import "./styles.css";
import WhatshotIcon from "@mui/icons-material/Whatshot";

function Trending({ trending }) {
  return (
    <div className="overview-data-box">
      <div className="overview-data-heading">
        <p>Trending</p>
        <WhatshotIcon sx={{ color: orange[900] }} />
      </div>
      <div className="overview-data-body">
        <div className="data-element">
          <div className="logo-image-class">
            <img src={trending[0]?.item.small} alt="img" />
            <p className="trending-crypto-name">{trending[0]?.item.name}</p>
          </div>
          <p className="element-crypto-price">
            ${trending[0]?.item.data.price.toFixed(6)}
          </p>
        </div>
        <div className="data-element">
          <div className="logo-image-class">
            <img src={trending[1]?.item.small} alt="img" />
            <p className="trending-crypto-name">{trending[1]?.item.name}</p>
          </div>
          <p className="element-crypto-price">
            ${trending[1]?.item.data.price.toFixed(6)}
          </p>
        </div>
        <div className="data-element">
          <div className="logo-image-class">
            <img src={trending[2]?.item.small} alt="img" />
            <p className="trending-crypto-name">{trending[2]?.item.name}</p>
          </div>
          <p className="element-crypto-price">
            ${trending[2]?.item.data.price.toFixed(6)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Trending;
