import { createSlice } from '@reduxjs/toolkit'


const initialState = { count: 0, show: true }
const conuterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        plus: (state) => {
            state.count++;
        },
        plusFive: (state, action) => {
            state.count = state.count + action.payload;
        },
        minus: (state) => {
            state.count--;
        },
        toggle: (state) => {
            state.show = !state.show
        },
    }
})

export const counterActions = conuterSlice.actions;
export default conuterSlice.reducer;
