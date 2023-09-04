import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/normalize.scss";
import "./assets/scss/style.scss";
import { TaskManagerList } from "./pages/TaskManagerList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TaskManagerList />
  </React.StrictMode>
);
