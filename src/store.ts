import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./feature/taskList";

export const store = configureStore({
  reducer: {
    taskList: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
