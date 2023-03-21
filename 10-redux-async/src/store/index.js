
import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

const stroe = configureStore({
    reducer: {
        ui: uiSlice,
        cart: cartSlice
    }
})

export default stroe;