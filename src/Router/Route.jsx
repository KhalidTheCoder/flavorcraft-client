import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import AddRecipes from "../Pages/AddRecipes";
import MyRecipes from "../Pages/MyRecipes ";
import AllRecipes from "../Pages/AllRecipes";
import Details from "../Pages/Details";

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
      {
        path: "/addRecipes",
        Component: AddRecipes,
      },
      {
        path: "/recipes",
        Component: AllRecipes,
      },
      {
        path: "/details/:id",
        Component: Details,
      },
      {
        path: "/my-recipes",
        Component: MyRecipes,
      },
    ],
  },
]);
