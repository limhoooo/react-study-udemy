import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';
import lodingSlice from './loding-slice';

const store = configureStore({
  reducer: { ui: uiSlice, cart: cartSlice, loding: lodingSlice },
});

export default store;
