import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const UserDetails = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="py-12 bg-[#dee6f0] min-h-screen dark:bg-gray-900">
      <div className="w-11/12 mx-auto max-w-6xl bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-10 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Profile Image */}
          <div className="w-full md:w-1/3">
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-full h-[400px] rounded-xl object-cover shadow-md border border-gray-200"
            />
          </div>

          {/* Details */}
          <div className="">
            <h1 className="text-4xl font-bold text-[#05305a] dark:text-white mb-2 border-b pb-3">
              {user.displayName}
            </h1>

            <h1 className="text-base font-bold text-[#05305a] dark:text-white mb-6 pb-3">
              e-mail: {user.email}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
