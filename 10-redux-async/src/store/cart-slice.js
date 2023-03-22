import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCartData = createAsyncThunk(
  'cart/fetchCartData',
  async () => {
    const response = await fetch('https://react-test-d49b3-default-rtdb.firebaseio.com//cart.json');
    const data = await response.json();
    return data;
  }
)
export const sendCartData = createAsyncThunk(
  'cart/sendCartData',
  async (cart) => {
    const response = await fetch(
      'https://react-test-d49b3-default-rtdb.firebaseio.com//cart.json',
      {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      }
    );
    const data = await response.json();
    return data;
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: {
      items: [],
      totalQuantity: 0,
      changed: false,
    },
  },
  reducers: {
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
  extraReducers: {
    [fetchCartData.fulfilled]: (state, action) => {
      state.cartItem.totalQuantity = action.payload.totalQuantity;
      state.cartItem.items = action.payload.items;
    },
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
