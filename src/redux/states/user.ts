import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  access_token: '',
  refresh_token: '',
  expires_date: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addAccessToken: (state, action) => {
      return { ...state, access_token: action.payload };
    },
  },
});

export const { addAccessToken } = userSlice.actions;

export default userSlice.reducer;
