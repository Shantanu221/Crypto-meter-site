import { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
// import axios from "axios";
import Overview from "../components/Dashboard/Overview";
import Search from "../components/Dashboard/Search";
import PaginationControlled from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import BackToTop from "../components/Common/BackToTop";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [overview, setOverview] = useState([]);
  const [trending, setTrending] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    let previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  let filterCoins = coins.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-LtKkFVa2LQMqW8PFNtCXPMBw",
      },
    };

    fetch("https://api.coingecko.com/api/v3/global", options)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.data);
        setOverview(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-LtKkFVa2LQMqW8PFNtCXPMBw",
      },
    };

    fetch("https://api.coingecko.com/api/v3/search/trending", options)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.coins);
        setTrending(response.coins);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-LtKkFVa2LQMqW8PFNtCXPMBw",
      },
    };

    fetch(
      "https://api.coingecko.com/api/v3/companies/public_treasury/bitcoin",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.companies);
        setCompanies(response.companies);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
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
        // console.log(response);
        setCoins(response);
        setPaginatedCoins(response.slice(0, 10));
        // console.log([...coins, ...response]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Overview
            overview={overview}
            trending={trending}
            companies={companies}
          />
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent coins={search ? filterCoins : paginatedCoins} />
          <PaginationControlled
            page={page}
            handlePageChange={handlePageChange}
          />
        </div>
      )}
    </>
  );
}

export default DashboardPage;
