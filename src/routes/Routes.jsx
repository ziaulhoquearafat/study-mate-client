import { createBrowserRouter } from "react-router";
import Login from "../auth/Login";
import Register from "../auth/Register";
import MainLayout from "../Layout/MainLayout";
import CreatePartnerProfile from "../pages/CreatePartnerProfile";
import FindPartners from "../pages/FindPartners";
import Home from "../pages/Home";
import MyConnections from "../pages/MyConnections";
import NotFoundPage from "../pages/NotFoundPage";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/create-partner-profile",
        Component: CreatePartnerProfile,
      },
      {
        path: "/my-connections",
        Component: MyConnections,
      },
      {
        path: "/find-partners",
        Component: FindPartners,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);

export default router;
