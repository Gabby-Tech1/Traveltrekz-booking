import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterAuthReducerTypes } from "../../interface/interface.exports";
import { RegisterAuthThunk } from "../thunks/auth.thunkApi";

//set initialState for the auth functionality
const initialState: RegisterAuthReducerTypes = {
  userName: "",
  userEmail: "",
  userPassword: "",
  loading: false,
  success: false,
  error: false,
};

export const authReducer = createSlice({
  name: "auth/slice",
  initialState,
  reducers: {
    updateUserName: (
      state: RegisterAuthReducerTypes,
      action: PayloadAction<string>
    ) => {
      state.userName = action.payload;
    },
    updateUserEmail: (
      state: RegisterAuthReducerTypes,
      action: PayloadAction<string>
    ) => {
      state.userEmail = action.payload;
    },
    updateUserPassword: (
      state: RegisterAuthReducerTypes,
      action: PayloadAction<string>
    ) => {
      state.userPassword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(RegisterAuthThunk.rejected, (state) => {
        state.success = false;
        state.loading = false;
        state.error = true;
      })
      .addCase(RegisterAuthThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(RegisterAuthThunk.fulfilled, (state) => {
        state.success = true;
        state.error = false;
        state.loading = false;
      });
  },
});

export const {
  updateUserName,
  updateUserEmail,
  updateUserPassword,
} = authReducer.actions;

export default authReducer.reducer;
