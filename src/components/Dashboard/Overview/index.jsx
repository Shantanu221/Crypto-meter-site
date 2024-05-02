/* eslint-disable react/prop-types */
import "./styles.css";
import OverviewData from "../GlobalData";
import Trending from "../Trending";
import Companies from "../Companies";

function Overview({ overview, trending, companies }) {
  return (
    <>
      <div className="live-crypto-label">
        <p className="live-label-1">
          Cryptocurrency <span className="price-live">Prices Live.</span>
        </p>
        <p className="live-label-2">Top Coins by Market Cap</p>
      </div>
      <div className="live-overview-data">
        <OverviewData overview={overview} />
        <Trending trending={trending} />
        <Companies companies={companies} />
      </div>
    </>
  );
}

export default Overview;
