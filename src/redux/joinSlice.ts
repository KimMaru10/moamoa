import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1, // 초기 진행 단계 설정
};

const joinSlice = createSlice({
  name: "join",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export const { setStep } = joinSlice.actions;

export default joinSlice.reducer;
