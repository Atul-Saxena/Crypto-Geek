import Navbar from '../components/Navbar'
import CoinTextData from '../components/Market/CoinTextData'
import HistoricChart from '../components/Market/HistoricChart'
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CoinInfo = () => {
  const { coinId } = useParams();
  const [data, setdata] = useState([]);

  useEffect(() => {

    const options = {
      method: 'GET',
      url: `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=65&interval=daily&precision=2`,
      headers: { accept: 'application/json', 'x-cg-demo-api-key': import.meta.env.VITE_DataApiKey }
    };

    axios
      .request(options)
      .then(function (response) {
        // setdata(response.data.prices.map((price) => ({
        //   x: price[0],
        //   y: price[1]
        // })));
        // console.log(response.data);
        setdata(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

  }, [coinId])

  // console.log(data);


  return (
    <div>
      <Navbar />
      {/* <HistoricChart data={data}/> */}
      <CoinTextData/>
    </div>
  )
}

export default CoinInfo