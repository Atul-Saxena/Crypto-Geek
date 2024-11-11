import { useState, useEffect } from 'react'
import './App.css'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import About from './pages/About'
import Market from './pages/market'
import HelpSupport from './pages/HelpSupport'
import EmailVerify from './pages/emailverify'
import Tutorial from './pages/Tutorial'
import NotFound from './pages/NotFound'
import CoinInfo from './pages/CoinInfo'
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from './app/Firebase/FirebaseContext'

function App() {
  const [users, setUser] = useState(null)
  const [verify, setverify] = useState(false)

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if(user){
        setUser(user);
        if(user.emailVerified){
          setverify(true)
        }
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
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Routers>
    )
  }
  else{
    
    return (
      <Routers>
        <Routes>
          <Route path='/' element={verify?<Home/>:<EmailVerify/>} />
          <Route path='/about' element={verify?<About/>:<EmailVerify/>} />
          <Route path='/market' element={verify?<Market/>:<EmailVerify/>} />
          <Route path='/market/:coinId' element={verify?<CoinInfo/>:<EmailVerify/>} />
          <Route path='/help&Support' element={verify?<HelpSupport/>:<EmailVerify/>} />
          <Route path='/learn-crypto' element={verify?<Tutorial/>:<EmailVerify/>} />
          <Route path='*' element={verify?<NotFound/>:<EmailVerify/>} />
        </Routes>
      </Routers>
    )
  }

    
}

export default App
