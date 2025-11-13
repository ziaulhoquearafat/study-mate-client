import { useContext, useEffect, useState } from "react";
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

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="bg-[#05305a] relative z-50 dark:bg-gray-950">
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
          <p className="text-xl md:text-2xl uppercase font-montserrat font-bold text-white">
            Study<span className="text-amber-300">Mate</span>
          </p>
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

                  {/* ---- */}

                  <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input
                      onChange={(e) => handleTheme(e.target.checked)}
                      type="checkbox"
                      className="theme-controller"
                      value="synthwave"
                      defaultChecked={localStorage.getItem("theme") === "dark"}
                    />

                    {/* sun icon */}
                    <svg
                      className="swap-off h-10 w-10 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                      className="swap-on h-10 w-10 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                  {/* ---- */}
                </ul>
              </div>
            </div>
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
