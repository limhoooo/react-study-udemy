import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
  PayloadAction,
} from "@reduxjs/toolkit";
import { API } from "../api";
import Todo from "../models/todo";

interface TodoState {
  item: Todo[];
  loading: boolean;
}

const initialState: TodoState = {
  item: [],
  loading: false,
};

export const fetchTodo = createAsyncThunk(
  "todo/fetchTodo",
  async (): Promise<Todo[]> => {
    const response = await API.get(`/todos.json`);
    const arryData = Object.values(response.data).map((item: any) => ({
      text: item.text,
      id: item.id,
    }));
    return arryData;
  }
);

export const postTodo = createAsyncThunk(
  "todo/postTodo",
  async (text: string) => {
    const data = {
      text,
      id: new Date().toISOString(),
    };
    await API.post(`/todos.json`, data);
  }
);

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
  extraReducers: {
    [fetchTodo.pending.type]: (state: TodoState) => {
      state.loading = true;
    },
    [fetchTodo.fulfilled.type]: (
      state: TodoState,
      action: PayloadAction<Todo[]>
    ) => {
      state.item = action.payload;
      state.loading = false;
    },
    [postTodo.pending.type]: (state: TodoState) => {
      state.loading = true;
    },
    [postTodo.fulfilled.type]: (state: TodoState) => {
      state.loading = false;
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
