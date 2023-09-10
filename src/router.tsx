import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/404";
import { ViewList } from "./pages/ViewList";
import { TaskManagerListPage } from "./pages/TaskMangerListPage";
import { ViewListItem } from "./pages/ViewListItem";
import { TaskItem } from "./types/task";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { path: "/", element: <TaskManagerListPage /> },
        { path: "/list", element: <ViewList /> },
        { path: "/list/:id", element: <ViewListItem /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ],
  { basename: "/task-manager" }
);
