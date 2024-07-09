// src/app/store.ts

import { configureStore } from "@reduxjs/toolkit";
import joinReducer from "../redux/joinSlice";

const store = configureStore({
  reducer: {
    join: joinReducer,
    // 다른 reducer들도 필요하면 여기에 추가
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
