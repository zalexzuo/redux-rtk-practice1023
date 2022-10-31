import { createSlice } from "@reduxjs/toolkit";

const initialState = { counterValue: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state){
            state.counterValue++;
        },
        decrement(state){
            state.counterValue--;
        },
        resetValue(state){
            state.counterValue = 0;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;