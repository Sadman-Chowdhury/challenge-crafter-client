import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "./../ErrorPage";
import Home from "./../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AllContest from "../Pages/AllContest/AllContest";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import ManageUser from "../Components/Dashboard/Admin/ManageUser";
import AddContest from "../Components/Dashboard/Creator/AddContest/AddContest";
import MyCreatedContest from "../Components/Dashboard/Creator/MyCreatedContest/MyCreatedContest";
import EditMyCreatedContest from "../Components/Dashboard/Creator/MyCreatedContest/EditMyCreatedContest";
import { getOneContest } from "../Api/contestApi";
import ManageContest from "../Components/Dashboard/Admin/ManageContest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allContest",
        element: <AllContest />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),

    children: [
      {
        path: "manage-user",
        index: true,
        element: (
          <PrivateRoute>
            <ManageUser />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-contest",
        element: (
          <PrivateRoute>
            <ManageContest />
          </PrivateRoute>
        ),
      },
      {
        path: "add-contest",
        element: (
          <PrivateRoute>
            <AddContest />
          </PrivateRoute>
        ),
      },
      {
        path: "myCreated-contest",
        element: (
          <PrivateRoute>
            <MyCreatedContest />
          </PrivateRoute>
        ),
      },
      {
        path: "editMyCreated-contest/:id",
        element: (
          <PrivateRoute>
            <EditMyCreatedContest />
          </PrivateRoute>
        ),
        loader: ({ params }) => getOneContest(params.id),
      },
    ],
  },
]);
