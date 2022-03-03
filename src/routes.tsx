import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "@pages/login";
import ForgotPassword from "@pages/forgotPassword";

function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
      </Routes>
    </BrowserRouter>
  )

}

export default AppRoutes
