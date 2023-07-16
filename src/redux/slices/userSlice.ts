import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface userType {
  name: string;
  email: string;
  photoUrl: string;
}

const userState: userType = {
  name: '',
  email: '',
  photoUrl: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: userState },
  reducers: {
    user: (state, action: PayloadAction<userType>) => {
      state.value = action.payload;
    },
  },
});

export const { user } = userSlice.actions;
export default userSlice.reducer;
