
import { createSlice } from '@reduxjs/toolkit';

const initialState = { email: '', passWord: '', auth: false }
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        isLogin: (state, action) => {
            state.auth = action.payload
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer;