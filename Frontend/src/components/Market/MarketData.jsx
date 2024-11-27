import React, {useState}from 'react'
import { Response } from '../../app/Api/Crypto-Data'
import { Link } from 'react-router-dom'

const MarketData = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const CryptoData = Response.data;
    const filteredCoins = CryptoData.filter(
        (coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        
    );

    return (
        <div className="flex flex-col w-full bg-gray-900 pt-8">
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 z-20">
                    <header className="text-center text-white">
                        <h2 className="text-xl font-bold sm:text-3xl ">Crypto Collection</h2>

                        <p className="mx-auto mt-4 max-w-md text-gray-400">
                            Pick your favourite Cryptocurrency and get it in your wallet after learning how to do it and the things behind the procedure here
                        </p>

                        <div className="relative w-full mt-4">
                            <input
                                type="text"
                                placeholder={"Search Crypto"}
                                className="w-70 z-40 bg-white hover:bg-gray-300 outline-none text-black font-bold py-2 px-4 rounded-2xl pl-10"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />

                        </div>                    </header>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCoins.map((coin) => (
                            <div key={coin.id} className="flex flex-col m-10 justify-center items-center bg-gray-800 rounded-lg shadow-xl transition hover:border-pink-500/10 hover:shadow-blue-500/50 p-4 z-40">
                                <img src={coin.image} className="h-[100px] w-[100px] rounded-t-md object-cover" alt={coin.name} />
                                <h3 className="text-lg font-bold mt-2 text-white">{coin.name}</h3>
                                <p className="text-gray-400">{coin.current_price} $</p>
                                <p className="text-gray-400">Rank: {coin.market_cap_rank}</p>
                                <Link to={`/market/${coin.id}`}>
                                    <button className="w-full bg-white hover:bg-gray-700 text-black hover:text-white font-bold py-2 px-4 rounded-full mt-4">
                                        View Market
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MarketData


