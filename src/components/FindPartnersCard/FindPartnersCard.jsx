import { Link } from "react-router";

const FindPartnersCard = ({ partner }) => {
  const { profileimage, subject, studyMode, experienceLevel, _id } = partner;

  return (
    <div className="border-2 border-gray-200 rounded-2xl shadow-sm p-5 w-full max-w-sm mx-auto hover:shadow-md transition-all duration-300 hover:-translate-y-2 bg-white/80 dark:bg-gray-800">
      <div className="flex flex-col items-center gap-3">
        <img
          src={profileimage}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border"
        />

        <h2 className="text-2xl font-semibold capitalize font-montserrat text-center">
          {subject}
        </h2>

        <div className="flex flex-col gap-1 text-sm text-gray-600 text-center">
          <p className="dark:text-white font-bold">
            Study Mode:{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              {studyMode}
            </span>
          </p>
          <p className="dark:text-white font-bold">
            Experience:{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              {experienceLevel}
            </span>
          </p>
        </div>

        <Link
          to={`/partner-details/${_id}`}
          className="btn btn-outline btn-primary rounded-full mt-2 font-montserrat"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default FindPartnersCard;
