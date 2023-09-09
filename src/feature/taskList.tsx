import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TaskItem } from "../types/task";

export interface TaskState {
  tasks: TaskItem[];
}

const initialState: TaskState = {
  tasks: [],
};
//taskSlice
export const taskReducer = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    createAction: (state, action) => {
      const newTask: TaskItem = {
        id: state.tasks.length,
        text: action.payload,
        isDone: false,
      };
      state.tasks = [...state.tasks, newTask];
    },
    updateAction: (state) => {},
    deleteAction: (state, action: PayloadAction<number>) => {},
  },
});

export const { createAction, updateAction, deleteAction } = taskReducer.actions;

export default taskReducer.reducer;
