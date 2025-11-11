import { useContext } from "react";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { Link, NavLink } from "react-router";
import { GridLoader } from "react-spinners";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, setUser, LogOutFunc, loading } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/find-partners"}>Find Partners</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/create-partner-profile"}>
              Create Partner Profile
            </NavLink>
          </li>
          <li>
            <NavLink to={"/my-connections"}>My Connections</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogOut = () => {
    console.log("clicked");
    LogOutFunc()
      .then(() => {
        toast.success("LogOut Successfull");
        setUser(null);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="bg-[#05305a]">
      <div className="navbar w-11/12 mx-auto shadow-sm p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-montserrat"
            >
              {links}
            </ul>
          </div>
          <a className="text-xl md:text-2xl uppercase font-montserrat font-bold text-white">
            StudyMate
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-montserrat text-base font-semibold text-white">
            {links}
          </ul>
        </div>
        {loading ? (
          <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
            <GridLoader color="#007180" />
          </div>
        ) : user ? (
          <div className="navbar-end flex gap-2 items-center">
            <div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-12 rounded-full">
                    <img
                      alt=""
                      src={
                        user.photoURL ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 font-montserrat font-semibold rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to={"/user-details"}>
                      <CgProfile /> Profile
                    </Link>
                  </li>
                  <li>
                    <a onClick={handleLogOut}>
                      <IoIosLogOut /> Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <button onClick={handleLogOut} className="btn btn-primary text-white">
            Log Out
          </button> */}
          </div>
        ) : (
          <div className="navbar-end flex gap-3 font-montserrat">
            <Link to={"/login"} className="btn btn-secondary text-white">
              Login
            </Link>
            <Link to={"/register"} className="btn btn-primary text-white">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
