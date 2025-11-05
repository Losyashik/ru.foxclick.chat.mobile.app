import User from "@/types/User";
import { createSlice } from "@reduxjs/toolkit";

const initUser: User = {
  auth: false,
  isLoading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState: initUser,
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
