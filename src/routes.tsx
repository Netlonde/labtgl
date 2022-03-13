import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { RootStateOrAny, useSelector } from "react-redux";

import Login from "@pages/login";
import ForgotPassword from "@pages/forgotPassword";
import SignUp from "@pages/signUp";
import Home from "@pages/home";
import NewBets from "@pages/newBets";
import Account from "@pages/account";
import Page404 from "@pages/404";

function AppRoutes(){

  function Private({children}: any){
    const isLoggedIn = useSelector((state: RootStateOrAny) => state.auth.isLoggedIn);
    if(!isLoggedIn) return(<Navigate to="/login" />);
    if(window.location.href === 'http://localhost:3000/') return(<Navigate to="/login" />);

    return children;
  }

  function IsLogged({children}: any){
    const isLoggedIn = useSelector((state: RootStateOrAny) => state.auth.isLoggedIn);
    if(isLoggedIn) return(<Navigate to="/home" />);

    return children;
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<IsLogged> <Login /> </IsLogged>}/>
        <Route path="/" element={<IsLogged> <Private /> </IsLogged>}/>
        <Route path="/account" element={<Account />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/home" element={<Private> <Home /> </Private>}/>
        <Route path="/new-bets" element={<Private> <NewBets /> </Private>}/>
        <Route path="*" element={<Page404 />}/>
      </Routes>
    </BrowserRouter>
  )

}

export default AppRoutes
