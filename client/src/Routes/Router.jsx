import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import AllVisas from "../Components/AllVisas/AllVisas";
import AddVisa from "../Components/AddVisa/AddVisa";
import MyApplications from "../Components/MyApplications/MyApplications";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import Error from "../Components/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allVisas",
        element: <AllVisas></AllVisas>,
      },
      {
        path: "/addVisa",
        element: <AddVisa></AddVisa>,
      },
      {
        path: "/myApplications",
        element: <MyApplications></MyApplications>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Router;
