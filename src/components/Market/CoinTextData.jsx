import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

const CoinTextData = () => {

    const { coinId } = useParams();
    const [response, setResponse] = useState([]);
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
                setResponse(response.data);
                setcoinImg(response.data.image.large);
                setcoinName(response.data.name);
                setcoinDescription(response.data.description.en);
            })
            .catch(function (error) {
                console.error(error);
            });

    }, [])

    return (
        <div className=" items-center justify-center md:flex-row md:items-start md:justify-between md:space-x-6 md:space-y-0 space-y-6 md:p-6 p-4 shadow-lg">
            <div className="flex items-center justify-center space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold ">{coinName}</h1>
                <img src={coinImg} alt={coinName} className="w-[100px] md:w-[100px] h-[100px] rounded-lg ml-8" />
            </div>
            <div className=" md:pl-6 xl:pl-12">
                <p className="text-lg md:text-xl xl:text-2xl text-center">{coinDescription}</p>
            </div>
        </div>
    )
}

export default CoinTextData