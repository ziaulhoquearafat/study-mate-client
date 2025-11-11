import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { GridLoader } from "react-spinners";
import { AuthContext } from "../context/AuthContext";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-white/80 z-50">
        <GridLoader color="#007180" />
      </div>
    );
  }
  if (!user) {
    return <Navigate to={"/login"} state={location.pathname} />;
  }
  return children;
};
export default PrivateRouter;
