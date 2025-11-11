import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12">
      <h1 className="text-9xl font-extrabold text-[#007180] mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 text-center mb-6 max-w-md">
        The page you're looking for doesn't exist or has been moved. Don't
        worry, you can go back to the homepage.
      </p>
      <Link
        to="/"
        className="bg-[#007180] hover:bg-[#00575b] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
