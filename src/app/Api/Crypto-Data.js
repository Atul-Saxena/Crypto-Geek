import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': import.meta.env.VITE_DataApiKey
  }
};

export const Response = await axios
  .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   }
// );

//   console.log(response.data[0].id);

export const ChartData = async (id) => {
  const options1 = {
    method: 'GET',
    url: `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365&interval=daily&precision=2`,
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': import.meta.env.VITE_DataApiKey
    }
  };

  const response = await axios
    .request(options1)
    .then(function (response) {
      // return response.data;
      // console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
    return response;
}