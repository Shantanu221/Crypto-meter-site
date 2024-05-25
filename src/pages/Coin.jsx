/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import CoinHeader from "../components/CoinPage/CoinHeader";
import LineChart from "../components/CoinPage/LineChart";
import { coinDate } from "../functions/convertDate";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import MarketInfo from "../components/CoinPage/MarketInfo";
import CoinInfo from "../components/CoinPage/CoinInfo";
import SelectDays from "../components/CoinPage/SelectDays";

function CoinPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState({});
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});

  const handleDaysChange = async (event) => {
    setDays(event.target.value);
    const price = await getCoinPrices(id, event.target.value);

    setChartData({
      labels: price?.prices?.map((p) => coinDate(p[0])),
      datasets: [
        {
          label: "Price Chart",
          data: price.prices?.map((p) => p[1]),
          borderColor: "#E8A317",
          borderWidth: 1,
          tension: 0.025,
          backgroundColor: price.prices
            ? "transparent"
            : "rgba(58,128,233,0.1)",
          pointRadius: 0,
        },
      ],
    });
    setIsLoading(false);
  };

  useEffect(() => {
    if (id) {
      getData();
    }
  }, []);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      setCoinData(data);
      const price = await getCoinPrices(id, days);
      setChartData({
        labels: price?.prices?.map((p) => coinDate(p[0])),
        datasets: [
          {
            label: "Price Chart",
            data: price.prices?.map((p) => p[1]),
            borderColor: "#E8A317",
            borderWidth: 1,
            tension: 0.025,
            backgroundColor: price.prices
              ? "transparent"
              : "rgba(58,128,233,0.1)",
            pointRadius: 0,
          },
        ],
      });
      setIsLoading(false);
    }
  }

  return (
    <div style={{ paddingBottom: "2rem" }}>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CoinHeader
            image={coinData.image?.large}
            name={coinData.name}
            symbol={coinData.symbol}
            price={coinData.market_data?.current_price.usd}
            rank={coinData.market_cap_rank}
          />
          <SelectDays days={days} handleDaysChange={handleDaysChange} />
          <div className="chart-wrapper">
            <LineChart chartData={chartData} />
          </div>
          <MarketInfo data={coinData} />
          <CoinInfo data={coinData} />
        </>
      )}
    </div>
  );
}

export default CoinPage;
