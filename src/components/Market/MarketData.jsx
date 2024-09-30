import React, {useState}from 'react'
import { Response } from '../../app/Api/Crypto-Data'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Link } from 'react-router-dom'

const MarketData = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const CryptoData = Response.data;
    const filteredCoins = CryptoData.filter(
        (coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        
    );

    return (
        <div className="flex flex-col w-full bg-gray-900">
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center text-white">
                        <h2 className="text-xl font-bold sm:text-3xl">Product Collection</h2>

                        <p className="mx-auto mt-4 max-w-md text-gray-400">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                            dicta incidunt est ipsam, officia dolor fugit natus?
                        </p>

                        <div className="relative w-full mt-4">
                            <input
                                type="text"
                                placeholder={"Search Crypto"}
                                className="w-70 bg-white hover:bg-gray-300 outline-none text-black font-bold py-2 px-4 rounded-2xl pl-10"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {/* <div className="absolute inset-y-0 left-0 flex items-center px-4">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div> */}
                        </div>                    </header>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCoins.map((coin) => (
                            <div className="flex flex-col m-10 justify-center items-center bg-gray-800 rounded-lg shadow-lg p-4">
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


