import { createSlice, configureStore } from "@reduxjs/toolkit";
import auth from "@services/auth";

const initialState = {
  user: {},
  token: {}
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LOGIN(state, action){
      (async function loginToApp(){
        try{
          const {login} = auth();
          const resLogin = await login(action.payload);
          const token = resLogin.token.token;
          alert('logou');
          localStorage.setItem('token', JSON.stringify(token));
        }catch{
          alert('erro');
        }
      })();

    },
    REGISTER(state, action){
      (async function registerToApp(){
        try{
          const {register} = auth();
          const resRegister = await register(action.payload);
          alert('logou');
          console.log(resRegister);
        }catch{
          alert('erro');
        }
      })();

    }
  }
})

const store = configureStore({
  reducer: { counter: authSlice.reducer }
});

export const authActions = authSlice.actions;

export default store;
