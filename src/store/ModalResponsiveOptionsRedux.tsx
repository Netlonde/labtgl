import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false
}

export const modalResponsiveOptions = createSlice({
  name: 'modalresponsiveoptions',
  initialState,
  reducers: {
    ISMODALOPEN(state, action){
      state.modalOpen = action.payload;
    }
  }
})

export const modalResponsiveOptionsActions = modalResponsiveOptions.actions;
