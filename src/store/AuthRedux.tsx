import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: {},
  isLoggedIn: Boolean(localStorage.getItem('token'))
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LOGIN(state, action){
      const token = action.payload.token || localStorage.getItem('token');
      state.token = token;
      state.isLoggedIn = true;
    },

    REGISTER(state, action){
      state.token = (action.payload.token)
    },

    LOGOUT(state){
      state.token = {};
      state.isLoggedIn = false;
    }
  }
})

export const authActions = authSlice.actions;

