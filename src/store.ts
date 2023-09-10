import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./feature/taskList";
import { loadFromLocalStorage, saveToLocalStorage } from "./helpers/storage";

export const store = configureStore({
  reducer: {
    taskList: taskReducer,
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
