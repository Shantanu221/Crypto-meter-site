import axios from "axios";

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     "x-cg-demo-api-key": "CG-LtKkFVa2LQMqW8PFNtCXPMBw",
//   },
// };

export const getCoinData = (id) => {
  const mydata = axios({
    url: `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&developer_data=false`,
    method: "get",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-LtKkFVa2LQMqW8PFNtCXPMBw",
    },
  })
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })

    .catch((err) => {
      console.error(err);
    });
  return mydata;
};
