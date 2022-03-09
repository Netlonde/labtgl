import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthRedux";
import { modalLogoutOpen } from "./ModalLogoutRedux"
import { modalResponsiveOptions } from "./ModalResponsiveOptionsRedux";
import { listBetSlice } from "./ListBetRedux";

const store = configureStore({
  reducer: { auth: authSlice.reducer,
             modalLogout: modalLogoutOpen.reducer,
             modalResponsiveOptions: modalResponsiveOptions.reducer,
             listBet: listBetSlice.reducer}
});


export default store;
