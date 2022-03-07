import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { RootStateOrAny, useSelector } from "react-redux";

import Login from "@pages/login";
import ForgotPassword from "@pages/forgotPassword";
import SignUp from "@pages/signUp";
import Home from "@pages/home";

function AppRoutes(){

  function Private({children}: any){
    const isLoggedIn = useSelector((state: RootStateOrAny) => state.auth.isLoggedIn);

    if(!isLoggedIn) return(<Navigate to="/login" />);

    if(window.location.href === 'http://localhost:3000/') return(<Navigate to="/login" />);

    console.log(window.location.href)

    return children;
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Private />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/home" element={<Private> <Home /> </Private>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default AppRoutes
