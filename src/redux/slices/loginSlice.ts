import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface userInfoType {
  name: string;
  email: string;
  photoUrl: string;
}

const loginState: userInfoType = {
  name: '',
  email: '',
  photoUrl: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState: { value: loginState },
  reducers: {
    login: (state, action: PayloadAction<userInfoType>) => {
      state.value = action.payload;
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
