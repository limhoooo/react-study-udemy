import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../api';

export const fetchCartData = createAsyncThunk(
  'cart/fetchCartData',
  async () => {
    const response = await API.get('https://react-test-d49b3-default-rtdb.firebaseio.com//cart.json');
    return response.data;
  }
)
export const sendCartData = createAsyncThunk(
  'cart/sendCartData',
  async (cart) => {
    const body = JSON.stringify({
      items: cart.items,
      totalQuantity: cart.totalQuantity,
    })
    const response = await API.put('https://react-test-d49b3-default-rtdb.firebaseio.com//cart.json', body);
    return response.data;
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: {
      items: [],
      totalQuantity: 0,
      changed: false,
      test: ''
    },
    notification: {}
  },
  reducers: {
    test: (state) => {
      state.test = 'test'
      console.log(state.test);
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItem.items.find((item) => item.id === newItem.id);
      state.cartItem.totalQuantity++;
      state.cartItem.changed = true;
      if (!existingItem) {
        state.cartItem.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItem.items.find((item) => item.id === id);
      state.cartItem.totalQuantity--;
      state.cartItem.changed = true;
      if (existingItem.quantity === 1) {
        state.cartItem.items = state.cartItem.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
  // move loding-slice.js 

  // extraReducers: {
  //   [fetchCartData.pending]: (state, action) => {
  //     state.notification.status = 'pending';
  //   },
  //   [fetchCartData.fulfilled]: (state, action) => {
  //     state.cartItem.totalQuantity = action.payload.totalQuantity;
  //     state.cartItem.items = action.payload.items;
  //     state.notification.status = 'success';
  //   },
  //   [fetchCartData.rejected]: (state, action) => {
  //     state.notification.status = 'error';
  //   },
  //   [sendCartData.pending]: (state, action) => {
  //     state.notification.status = 'pending';
  //   },
  //   [sendCartData.fulfilled]: (state, action) => {
  //     state.notification.status = 'success';
  //   },
  //   [sendCartData.rejected]: (state, action) => {
  //     state.notification.status = 'error';
  //   },
  // }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
