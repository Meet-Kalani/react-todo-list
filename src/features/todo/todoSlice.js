import { createSlice } from "@reduxjs/toolkit";

export const { actions, reducer } = createSlice({
  name: "todo",
  initialState: {
    value: JSON.parse(localStorage.getItem("todos")) || [],
  },
  reducers: {
    mapTodoToLocalStorage: (state, action) => {
      state.value = action.payload;
    },
    insertTodo: (state, action) => {
      state.value.push({
        id: Date.now(),
        text: action.payload,
        isCompleted: false,
      });
    },
    discardTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload.id);
    },
    markTodoAsCompleted: (state, action) => {
      const todo = state.value.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.isCompleted = true;
      }
    },
  },
});

export const { insertTodo, discardTodo, markTodoAsCompleted } = actions;

export default reducer;
