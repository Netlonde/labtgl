import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: {},
  isLoggedIn: Boolean(localStorage.getItem('token'))
}


const authSlice = createSlice({
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

const store = configureStore({
  reducer: { auth: authSlice.reducer }
});

export const authActions = authSlice.actions;

export default store;
