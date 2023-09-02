import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isLoggedIn: boolean;
}

const authState: AuthState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'user',
  initialState: { ...authState },
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = authSlice.actions;
export default authSlice.reducer;
