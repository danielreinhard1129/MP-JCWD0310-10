import { User } from "@/types/user.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// interface userState {
//   id: number;
//   email: string;
//   username: string;
//   role: string;
// }

const initialState: Pick<User, "id" | "username" | "email" | "role"> = {
  id: 0,
  username: "",
  email: "",
  role: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    logoutAction: (state) => {
      state.id = 0;
      state.username = "";
      state.email = "";
      state.role = "";
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;
