
import { createSlice } from '@reduxjs/toolkit';

const initialState = { count: 0, show: true }
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count++;
        },
        incrementFive: (state, action) => {
            state.count = state.count + action.payload
        },
        decrement: (state) => {
            state.count--;
        },
        toggle: (state) => {
            state.show = !state.show
        }
    }
})

export const counterAction = counterSlice.actions;
export default counterSlice.reducer;