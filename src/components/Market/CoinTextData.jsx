import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

const CoinTextData = ({ prices }) => {

    const { coinId } = useParams();
    const [response, setResponse] = useState([]);
    const [coinChange, setcoinChange] = useState([]);
    const [symbol, setsymbol] = useState([]);
    const [coinImg, setcoinImg] = useState([]);
    const [coinName, setcoinName] = useState([]);
    const [coinDescription, setcoinDescription] = useState([]);

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `https://api.coingecko.com/api/v3/coins/${coinId}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`,
            headers: { accept: 'application/json', 'x-cg-demo-api-key': import.meta.env.VITE_DataApiKey }
        };

        axios
            .request(options)
            .then(function (response) {
                // console.log(response.data);
                if (response.data) {
                    setResponse(response.data);
                    setsymbol(response.data.symbol);
                    setcoinImg(response.data.image.large);
                    setcoinName(response.data.name);
                    setcoinDescription(response.data.description.en);
                    setcoinChange(response.data.market_data.ath_change_percentage[symbol]);
                }
            })
            .catch(function (error) {
                console.error(error);
            });

    }, [coinId, symbol])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-black p-6">
          <div className="w-full max-w-xl bg-gray-900 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] p-8 transform transition-all">
            {/* Icon and Name */}
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mb-6 text-center sm:text-left">
              <img src={coinImg} alt={coinName} className="w-16 h-16 rounded-full border border-gray-600 mb-4 sm:mb-0" />
              <div>
                <h2 className="text-3xl font-bold text-white">{coinName}</h2>
                <p className="text-lg text-gray-400">{symbol}</p>
              </div>
            </div>
    
            {/* Price and Change Percentage */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <div className="mb-4 sm:mb-0 text-center sm:text-left">
                <p className="text-2xl font-semibold text-white">${prices.toLocaleString()}</p>
                <p className={`text-lg font-medium ${coinChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {coinChange >= 0 ? '+' : ''}{coinChange}% (24h)
                </p>
              </div>
              <span className="text-lg font-semibold text-gray-400">Rank #{response.market_cap_rank}</span>
            </div>
    
            {/* Description */}
            <p className="text-gray-300 text-base mt-4 text-center sm:text-left">
              {coinDescription}
            </p>
          </div>
        </div>
      );
}

export default CoinTextData


// src={coinImg} alt={coinName}
// coinName
// symbol
// coinDescription
// response.market_cap_rank
// coinChange
// prices