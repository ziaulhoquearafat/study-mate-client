import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [show, setShow] = useState();
  const handleShowPassword = () => {
    setShow(!show);
  };

  const { createAccountFunc, ProfileUpdateFunc, googleSignIn, setLoading } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({ email, password, photoURL, displayName });

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password must have at least 6 characters, including one uppercase and one lowercase letter."
      );
    }
    createAccountFunc(email, password)
      .then((result) => {
        ProfileUpdateFunc(displayName, photoURL).then(() => {
          console.log(result.user);
          setLoading(false);
          toast.success("Registration Successfully");
          navigate("/");
        });
      })
      .catch((err) => {
        console.log(err.mesage);
        toast.error(err.message);
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.messagge);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        setLoading(false);
        toast.success("Registration Successfull");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.messagge);
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-[#ffffff] min-h-screen flex flex-col justify-center items-center p-4 sm:p-10">
      <div>
        <h1 className="text-3xl font-extrabold uppercase font-montserrat text-[#282c3d] text-center mb-3">
          Create An Account
        </h1>
      </div>

      <div className="w-full max-w-sm sm:max-w-md border-2 border-gray-200 shadow-2xl rounded-xl px-6 py-8 bg-white">
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset space-y-2">
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full outline-0 rounded-full"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="label">Photo</label>
              <input
                type="text"
                name="photo"
                className="input input-bordered w-full outline-0 rounded-full"
                placeholder="Your PhotoURL"
              />
            </div>
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full outline-0 rounded-full"
                placeholder="example@mail.com"
              />
            </div>
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                className="input input-bordered w-full outline-0 rounded-full"
                placeholder="●●●●●●"
              />
              <span
                className="absolute right-5 top-8"
                onClick={handleShowPassword}
              >
                {show ? <FaEye /> : <IoIosEyeOff />}
              </span>
            </div>

            <div className="pt-4">
              <button className="btn w-full hover:bg-[#012244] bg-[#05305a] text-white font-semibold">
                Register
              </button>
            </div>

            <div>
              <p>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#ec5951] hover:text-[#28807e] font-medium underline"
                >
                  Login
                </Link>
              </p>
            </div>

            <div>
              {/* Google */}
              <button
                onClick={handleGoogleSignIn}
                type="button"
                className="btn bg-white w-full text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Register with Google
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
