import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import AddRecipes from "../Pages/AddRecipes";
import MyRecipes from "../Pages/MyRecipes ";
import AllRecipes from "../Pages/AllRecipes";
import Details from "../Pages/Details";
import PrivateRoute from "./PrivateRoute";
import Error from "../Components/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error />,
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
        element: (
          <PrivateRoute>
            <AddRecipes></AddRecipes>
          </PrivateRoute>
        ),
      },
      {
        path: "/recipes",
        Component: AllRecipes,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-recipes",
        element: (
          <PrivateRoute>
            <MyRecipes></MyRecipes>
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <Error />,
  },
]);
