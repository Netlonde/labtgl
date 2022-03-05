import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  bets: {}
}

const listBetSlice = createSlice({
  name: 'bets',
  initialState,
  reducers: {
    LISTMYBETS(state, action){

    }
  }
})
