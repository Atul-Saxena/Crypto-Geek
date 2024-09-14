import { json, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar'
import {ChartData, Response, CoinData} from '../app/Api/Crypto-Data'

const CoinInfo = () => {

  const { coinId } = useParams();

  const CryptoData = CoinData(coinId);
  const getCoinData = ChartData(coinId);

  console.log(getCoinData);
  
  return (
    <div>
      <Navbar/>
      <h1 className='text-3xl font-bold first-letter:uppercase'>{coinId}</h1>
    </div>
  )
}

export default CoinInfo