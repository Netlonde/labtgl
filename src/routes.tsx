import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "@pages/login";
import ForgotPassword from "@pages/forgotPassword";
import SignUp from "@pages/signUp";

function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/sign-up" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  )

}

export default AppRoutes
