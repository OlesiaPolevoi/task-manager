import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/scss/normalize.scss";
import "./assets/scss/style.scss";
import { TaskManagerPage } from "./pages/TaskMangerPage";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header/Header";
import { TaskItem } from "./types/task";
import { NotFound } from "./pages/404";
import { ItemDescription } from "./pages/ItemDescription";
import { Layout } from "./layouts/Layout";

const tasks: TaskItem[] = [
  { id: 0, text: "TAsk 0", isDone: false },
  { id: 1, text: "TAsk 01", isDone: true },
  { id: 2, text: "TAsk 02", isDone: false },
  { id: 3, text: "TAsk 03", isDone: true },
];

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { path: "/", element: <HomePage tasks={tasks} /> },

        {
          path: "/task-manager",
          element: <TaskManagerPage />,
        },
        {
          path: "/list/:id",
          element: <ItemDescription tasks={tasks} />,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ],
  { basename: "/task-manager" }
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
