import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "@pages/login";
import ForgotPassword from "@pages/forgotPassword";
import SignUp from "@pages/signUp";
import Home from "@pages/home";

function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )

}

export default AppRoutes
