
import { createSlice } from '@reduxjs/toolkit';
import { fetchCartData, sendCartData } from './cart-slice';

const lodingSlice = createSlice({
    name: 'loding',
    initialState: { notification: null },
    extraReducers: builder => {
        builder
            .addMatcher(
                action => [fetchCartData.pending.type, sendCartData.pending.type].includes(action.type),
                (state) => {
                    state.notification = 'pending'
                }
            )
            .addMatcher(
                action => [fetchCartData.fulfilled.type, sendCartData.fulfilled.type].includes(action.type),
                (state) => {
                    state.notification = 'success'
                }
            )
            .addMatcher(
                action => [fetchCartData.rejected.type, sendCartData.rejected.type].includes(action.type),
                (state) => {
                    state.notification = 'error'
                }
            )
    }
})

export const uiActions = lodingSlice.actions;
export default lodingSlice.reducer;
