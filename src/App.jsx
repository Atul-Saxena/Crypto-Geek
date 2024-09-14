import { useState, useEffect } from 'react'
import './App.css'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import About from './pages/About'
import Market from './pages/market'
import Wallet from './pages/wallet'
import HelpSupport from './pages/HelpSupport'
import EmailVerify from './pages/emailverify'
import CoinInfo from './pages/CoinInfo'
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './app/store/firebase'

function App() {
  const [users, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        setUser(user);
        console.log("signed in");
      } else{
        setUser(null);
        console.log("not signed");
      }
    })
  
  }, []);

  if(users===null){
    return (
      <Routers>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Routers>
    )
  }
  else{
    const verify = users.emailVerified
    return (
      <Routers>
        <Routes>
          <Route path='/' element={verify?<Home/>:<EmailVerify/>} />
          <Route path='/about' element={verify?<About/>:<EmailVerify/>} />
          <Route path='/market' element={verify?<Market/>:<EmailVerify/>} />
          <Route path='/market/:coinId' element={verify?<CoinInfo/>:<EmailVerify/>} />
          <Route path='/wallet' element={verify?<Wallet/>:<EmailVerify/>} />
          <Route path='/help&Support' element={verify?<HelpSupport/>:<EmailVerify/>} />
        </Routes>
      </Routers>
    )
  }

    
}

export default App
