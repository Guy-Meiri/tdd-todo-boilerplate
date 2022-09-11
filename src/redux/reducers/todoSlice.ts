import { createSlice } from '@reduxjs/toolkit';
// import { ActionFn, RootState } from '../store/configureStore';

export type TodoStateProps = string[];

const initialState: TodoStateProps = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: { type: string; payload: string }) => {
      state.push(action.payload);
    },
  },
});

export const getTodos = (state: TodoStateProps) => state;

export const { add } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
