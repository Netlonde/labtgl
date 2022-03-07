import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthRedux";
import { modalLogoutOpen } from "./ModalLogoutRedux"
import { modalResponsiveOptions } from "./ModalResponsiveOptionsRedux";

const store = configureStore({
  reducer: { auth: authSlice.reducer,
             modalLogout: modalLogoutOpen.reducer,
             modalResponsiveOptions: modalResponsiveOptions.reducer }
});


export default store;
