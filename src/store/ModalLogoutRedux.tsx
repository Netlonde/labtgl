import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false
}

export const modalLogoutOpen = createSlice({
  name: 'modalLogout',
  initialState,
  reducers: {
    ISMODALOPEN(state, action){
      state.modalOpen = action.payload;
    }
  }
})

export const modalLogoutActions = modalLogoutOpen.actions;
