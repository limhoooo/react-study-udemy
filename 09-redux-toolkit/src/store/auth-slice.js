
import { createSlice } from '@reduxjs/toolkit';


const initialState = { auth: false }
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.auth = action.payload
        }
    }
})


export const authAction = authSlice.actions;
export default authSlice.reducer;