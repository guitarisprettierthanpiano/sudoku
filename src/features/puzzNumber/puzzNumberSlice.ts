import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 1,
};

export const counterSlice = createSlice({
  name: 'puzzleNumber',
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    increment: (state) => {
      if (state.value === 5) {
        state.value = 1;
      } else {
        state.value += 1;
      }
    },
    decrement: (state) => {
      if (state.value === 1) {
        state.value = 5;
      } else {
        state.value -= 1;
      }
    },
    one: (state) => {
      state.value = 1;
    },
    two: (state) => {
      state.value = 2;
    },
    three: (state) => {
      state.value = 3;
    },
    four: (state) => {
      state.value = 4;
    },
    five: (state) => {
      state.value = 5;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, one, two, three, four, five } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.puzzleNumber.value;

export default counterSlice.reducer;
