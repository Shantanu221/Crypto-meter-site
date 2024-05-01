import { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import axios from "axios";

function DashboardPage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    // const options = {
    //   method: "GET",
    //   url: "https://api.coingecko.com/api/v3/coins/markets",
    //   params: { vs_currency: "usd", order: "market_cap_desc" },
    //   headers: {
    //     accept: "application/json",
    //     "x-cg-demo-api-key": "CG-LtKkFVa2LQMqW8PFNtCXPMBw",
    //   },
    // };

    // axios
    //   .get(options)
    //   .then((res) => console.log(res))
    //   .catch((e) => console.log(e));
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-LtKkFVa2LQMqW8PFNtCXPMBw",
      },
    };

    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCoins(response);
        console.log([...coins, ...response]);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Header />
      <TabsComponent coins={coins}/>
    </div>
  );
}

export default DashboardPage;
