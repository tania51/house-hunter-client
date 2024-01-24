import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Registration";
import OwnerDashBoard from "../Pages/DashBoards/OwnerDashBoard/OwnerDashBoard";
import RenterDashBoard from "../Pages/DashBoards/RenterDashBoard/RenterDashBoard";
import OwnerDashBoardContent from "../Pages/DashBoards/OwnerDashBoard/OwnerDashBoardContent/OwnerDashBoardContent";
import AddHouse from "../Pages/DashBoards/OwnerDashBoard/AddHouse/AddHouse";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/register",
      element: <Register></Register>
    },
    {
      path: "/owner-dashboard",
      element: <OwnerDashBoard></OwnerDashBoard>,
      children: [
        {
          path: "/owner-dashboard",
          element: <OwnerDashBoardContent></OwnerDashBoardContent>
        },
        {
          path: "addHouse",
          element: <AddHouse></AddHouse>
        }
      ]
    },
    {
      path: "/renter-dashboard",
      element: <RenterDashBoard></RenterDashBoard>
    }
  ]);

export default router;