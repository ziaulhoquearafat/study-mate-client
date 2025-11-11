import { createBrowserRouter } from "react-router";
import Login from "../auth/Login";
import Register from "../auth/Register";
import MainLayout from "../Layout/MainLayout";
import CreatePartnerProfile from "../pages/CreatePartnerProfile";
import FindPartners from "../pages/FindPartners";
import Home from "../pages/Home";
import MyConnections from "../pages/MyConnections";
import NotFoundPage from "../pages/NotFoundPage";
import PartnerDetails from "../pages/PartnerDetails";
import UserDetails from "../pages/UserDetails";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

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
        element: (
          <PrivateRouter>
            <CreatePartnerProfile></CreatePartnerProfile>
          </PrivateRouter>
        ),
      },
      {
        path: "/my-connections",
        element: (
          <PrivateRouter>
            <MyConnections></MyConnections>
          </PrivateRouter>
        ),
      },
      {
        path: "/find-partners",
        Component: FindPartners,
        loader: () => fetch("http://localhost:3000/partner"),
      },
      {
        path: "/partner-details/:id",
        element: (
          <PrivateRouter>
            <PartnerDetails></PartnerDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/user-details",
        element: (
          <PrivateRouter>
            <UserDetails></UserDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);

export default router;
