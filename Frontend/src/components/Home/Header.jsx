import React from 'react'
import Spotlight from "./Spotlight";


const Header = () => {

  console.log("hey")
  return (<>
    <div className="min-h-screen w-full rounded-b-full flex items-center justify-center bg-gray-900 antialiased bg-grid-white/[0.02] relative overflow-hidden pt-24 md:pt-0 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 z-50"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full md:px-12">

        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 via-sky-300 to-white bg-opacity-50">
          Crypto Geek <br className="hidden md:block" /> Gateway to learn the Future of Finance.
        </h1>
        <p className="mt-11 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          A platform where you are the crypto geek and can explore the world of crypto as much as you want.
        </p>
      </div>
    </div>
  </>
  );
}

export default Header;