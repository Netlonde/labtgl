import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myBets: {},
  bets: {}
}

export const listBetSlice = createSlice({
  name: 'bets',
  initialState,
  reducers: {
    LISTMYBETS(state, action){
      state.myBets = action.payload;
    },

    LISTREGISTREDBETS(state, action){
      state.bets = action.payload;
    },

  }
})

export const listBetActions = listBetSlice.actions;
