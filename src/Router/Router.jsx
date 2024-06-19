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
import { getOneContest, getParticipatedContestData } from "../Api/contestApi";
import ManageContest from "../Components/Dashboard/Admin/ManageContest";
import ContestDetails from "../Pages/AllContest/ContestDetails/ContestDetails";
import Payment from "../Payment/Payment";
import MyParticipatedContest from "../Components/Dashboard/User/MyParticipatedContest";
import SubmitContestTask from "../Components/Dashboard/User/SubmitContestTask";
import ContestSubmitted from "../Components/Dashboard/Creator/ContestSubmitted/ContestSubmitted";
import IndivisualContestSubmissions from "../Components/Dashboard/Creator/ContestSubmitted/IndivisualContestSubmissions";
import MyWinningContest from "../Components/Dashboard/User/MyWinningContest";
import MyProfile from "../Components/Dashboard/User/MyProfile";
import AdminRoute from "./AdminRoute";
import CreatorRoute from "./CreatorRoute";
import AboutUs from "../Pages/AboutUs/AboutUs";

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
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contestDetails/:id",
        element: (
          <PrivateRoute>
            <ContestDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getOneContest(params.id),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
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
          <AdminRoute>
            <ManageUser />
          </AdminRoute>
        ),
      },
      {
        path: "manage-contest",
        element: (
          <AdminRoute>
            <ManageContest />
          </AdminRoute>
        ),
      },
      {
        path: "add-contest",
        element: (
          <CreatorRoute>
            <AddContest />
          </CreatorRoute>
        ),
      },
      {
        path: "myCreated-contest",
        element: (
          <CreatorRoute>
            <MyCreatedContest />
          </CreatorRoute>
        ),
      },
      {
        path: "contest-submitted-page",
        element: (
          <CreatorRoute>
            <ContestSubmitted />
          </CreatorRoute>
        ),
      },
      {
        path: "individual-contest-submitted-page/:id",
        element: (
          <CreatorRoute>
            <IndivisualContestSubmissions />
          </CreatorRoute>
        ),
        loader: ({ params }) => getOneContest(params.id),
      },
      {
        path: "individual-contest-submitted-page",
        element: (
          <CreatorRoute>
            <IndivisualContestSubmissions />
          </CreatorRoute>
        ),
      },
      {
        path: "editMyCreated-contest/:id",
        element: (
          <CreatorRoute>
            <EditMyCreatedContest />
          </CreatorRoute>
        ),
        loader: ({ params }) => getOneContest(params.id),
      },
      {
        path: "myParticipatedContest",
        element: (
          <PrivateRoute>
            <MyParticipatedContest />
          </PrivateRoute>
        ),
      },
      {
        path: "submit-contest-task/:id",
        element: (
          <PrivateRoute>
            <SubmitContestTask />
          </PrivateRoute>
        ),
        loader: ({ params }) => getParticipatedContestData(params.id),
      },
      {
        path: "myWinning-contest",
        element: (
          <PrivateRoute>
            <MyWinningContest />
          </PrivateRoute>
        ),
      },
      {
        path: "myProfile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
