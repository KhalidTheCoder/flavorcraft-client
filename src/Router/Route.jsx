import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: SignIn,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
