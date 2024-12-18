import { useState, useEffect } from 'react'
import './App.css'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Market from './pages/market'
import HelpSupport from './pages/HelpSupport'
import EmailVerify from './pages/emailverify'
import Tutorial from './pages/Tutorial'
import NotFound from './pages/NotFound'
import CoinInfo from './pages/CoinInfo'
import Profile from './pages/Profile'
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth,useFirebase } from './app/Firebase/FirebaseContext'

function App() {
  const [users, setUser] = useState(null)
  const [verify, setverify] = useState(false)
  const firebase = useFirebase();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if(user){
        setUser(user);
        firebase.setUserinfo(user);
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
          <Route path='/market' element={verify?<Market/>:<EmailVerify/>} />
          <Route path='/market/:coinId' element={verify?<CoinInfo/>:<EmailVerify/>} />
          <Route path='/help&Support' element={verify?<HelpSupport/>:<EmailVerify/>} />
          <Route path='/learn-crypto' element={verify?<Tutorial/>:<EmailVerify/>} />
          <Route path='/profile' element={verify?<Profile/>:<EmailVerify/>} />
          <Route path='*' element={verify?<NotFound/>:<EmailVerify/>} />
        </Routes>
      </Routers>
    )
  }

    
}

export default App
