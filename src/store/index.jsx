import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/UserSlice";

const store = configureStore({ reducer: { list: userSlice } });

export default store;
