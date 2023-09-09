import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/404";
import { ViewList } from "./pages/ViewList";
import { TaskManagerListPage } from "./pages/TaskMangerListPage";
import { ViewListItem } from "./pages/ViewListItem";
import { TaskItem } from "./types/task";

const tasks: TaskItem[] = [
  { id: 0, text: "TAsk 0", isDone: false },
  { id: 1, text: "TAsk 01", isDone: true },
  { id: 2, text: "TAsk 02", isDone: false },
  { id: 3, text: "TAsk 03", isDone: true },
];

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { path: "/", element: <TaskManagerListPage /> },
        { path: "/list", element: <ViewList tasks={tasks} /> },
        { path: "/list/:id", element: <ViewListItem tasks={tasks} /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ],
  { basename: "/task-manager" }
);

// export const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Layout />,
//       errorElement: <NotFound />,
//       children: [
//         { path: "/", element: <ViewList tasks={tasks} /> },

//         {
//           path: "/task-manager",
//           element: <TaskManagerListPage />,
//         },
//         {
//           path: "/list/:id",
//           element: <ViewListItem tasks={tasks} />,
//         },
//       ],
//     },
//     { path: "*", element: <NotFound /> },
//   ],
//   { basename: "/task-manager" }
// );
