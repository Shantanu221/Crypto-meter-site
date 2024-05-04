import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import CoinHeader from "../components/CoinPage/CoinHeader";
import LineChart from "../components/CoinPage/LineChart";
import { coinDate } from "../functions/convertDate";
import { Height } from "@mui/icons-material";
import { boxSizing, maxWidth } from "@mui/system";

function CoinPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState({});
  const [days, setDays] = useState(12);
  const [chartData, setChartData] = useState({});

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-LtKkFVa2LQMqW8PFNtCXPMBw",
    },
  };

  useEffect(() => {
    if (id) {
      fetch(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&developer_data=false`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          //   console.log(response);
          setCoinData(response);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    }
    fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setChartData({
          labels: response.prices?.map((p) => coinDate(p[0])),
          datasets: [
            {
              label: "Price Chart",
              data: response.prices?.map((p) => p[1]),
              borderColor: "#E8A317",
              borderWidth: 1,
              tension: 0.05,
              backgroundColor: response.prices
                ? "transparent"
                : "rgba(58,128,233,0.1)",
              pointRadius: 2,
            },
          ],
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [id]);

  //   useEffect(() => {
  //     fetch(
  //       `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
  //       options
  //     )
  //       .then((response) => response.json())
  //       .then((response) => {
  //         console.log(response);
  //         setChartData({
  //           labels: response.prices.map((p) => coinDate(p[0])),
  //           datasets: [
  //             {
  //               label: response.prices.map((p) => p[1]),
  //               data: [1, 2, 3, 4, 5],
  //               borderColor: "#3a80e9",
  //               tension: 0.25,
  //               backgroundColor: response.prices
  //                 ? "transparent"
  //                 : "rgba(58,128,233,0.1)",
  //               pointRadius: 2,
  //             },
  //           ],
  //         });
  //         setIsLoading(false);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         setIsLoading(false);
  //       });
  //   }, [id, days]);

  return (
    <div>
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
          <div className="chart-wrapper">
            <LineChart chartData={chartData} />
          </div>
        </>
      )}
    </div>
  );
}

export default CoinPage;
