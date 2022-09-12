import { createSlice } from '@reduxjs/toolkit';
// import { ActionFn, RootState } from '../store/configureStore';

export interface TodoItem {
  id: string;
  content: string;
}

export type TodoStateProps = TodoItem[];

const initialState: TodoStateProps = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: { type: string; payload: TodoItem }) => {
      state.push(action.payload);
      return state;
    },
    remove: (state, action: { type: string; payload: string }) => state.filter((item) => item.id !== action.payload),
  },
});

export const getTodos = (state: TodoStateProps) => state;

export const getTodoById = (state: TodoStateProps, id: string) => state.find((item) => item.id === id);

export const { add, remove } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
