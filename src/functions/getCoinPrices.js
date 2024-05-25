import axios from "axios";

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     "x-cg-demo-api-key": "CG-LtKkFVa2LQMqW8PFNtCXPMBw",
//   },
// };

export const getCoinPrices = (id, days) => {
  const prices = axios({
    url: `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
    method: "get",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-LtKkFVa2LQMqW8PFNtCXPMBw",
    },
  })
    .then((response) => {
      return response.data;
    })

    .catch((err) => {
      console.error(err);
    });

  return prices;
};
