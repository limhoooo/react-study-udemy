import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
  PayloadAction,
} from "@reduxjs/toolkit";
import Todo from "../models/todo";

interface TodoState {
  item: Todo[];
}

const initialState: TodoState = {
  item: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      const item = { text: action.payload, id: new Date().toISOString() };
      state.item = [...state.item, item];
      console.log(state);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.item = state.item.filter((item) => item.id !== action.payload);
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
