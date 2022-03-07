import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: {},
  isLoggedIn: Boolean(localStorage.getItem('token'))
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LOGIN(state, action){
      const user = action.payload.user || localStorage.getItem('user');
      const token = action.payload.token || localStorage.getItem('token');

      localStorage.setItem('user', JSON.stringify(user));

      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },

    REGISTER(state, action){
      state.user = (action.payload.user)
      state.token = (action.payload.token)
    }
  }
})

export const authActions = authSlice.actions;

