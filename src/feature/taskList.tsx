import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TaskItem } from "../types/task";

export interface TaskState {
  tasks: TaskItem[];
}

const initialState: TaskState = {
  tasks: [],
};

export const taskReducer = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
      const newTask: TaskItem = {
        id: state.tasks.length,
        text: action.payload,
        isDone: false,
      };
      state.tasks = [...state.tasks, newTask];
    },
    updateAction: (state, action: PayloadAction<TaskItem>) => {
      const updatedTasks = state.tasks.map((el) => {
        if (el.id === action.payload.id) {
          el.isDone = !el.isDone;
        }
        return el;
      });
      state.tasks = updatedTasks;
    },
    deleteAction: (state, action: PayloadAction<number>) => {
      const filteredTasks = state.tasks.filter((el) => {
        return el.id !== action.payload;
      });
      state.tasks = filteredTasks;
    },
  },
});

export const { createAction, updateAction, deleteAction } = taskReducer.actions;

export default taskReducer.reducer;
