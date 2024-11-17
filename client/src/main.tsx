import "./index.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Login from "./pages/Login.tsx";
import Error from "./pages/Error.tsx";
import TaskList from "./pages/TaskList.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <TaskList />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <h1>Signup Page</h1>
      }
    ]
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
