import { FaLaptopCode, FaLightbulb, FaRocket, FaSearch } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f7fffe] to-[#e9f9f8]">
      {/* Heading */}
      <div className="w-11/12 mx-auto text-center max-w-6xl">
        <h2 className="font-montserrat text-4xl mb-10 text-center font-bold text-[#05305a]">
          How It Works
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          A simple 4-step process to start your journey — learn, practice, and
          grow as a skilled web developer.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="bg-white flex flex-col justify-center items-center space-y-2 p-8 rounded-2xl shadow-md text-center">
          <FaLightbulb className="w-10 h-10 text-[#05305a]" />
          <h3 className="text-lg font-semibold font-montserrat">
            Step 1: Sign Up
          </h3>
          <p className="text-[#555]">
            Create your account to access the platform.
          </p>
        </div>
        <div className="bg-white flex flex-col justify-center items-center space-y-2 p-8 rounded-2xl shadow-md text-center">
          <FaLaptopCode className="w-10 h-10 text-[#05305a]" />
          <h3 className="text-lg font-semibold font-montserrat">
            Step 2: Create Your Profile
          </h3>
          <p className="text-[#555]">
            Add your subjects, skills and availability.
          </p>
        </div>
        <div className="bg-white flex flex-col justify-center items-center space-y-2 p-8 rounded-2xl shadow-md text-center">
          <FaSearch className="w-10 h-10 text-[#05305a]" />
          <h3 className="text-lg font-semibold font-montserrat">
            Step 3: Find Study Partners
          </h3>
          <p className="text-[#555]">
            Search and filter partners based on subject and location.
          </p>
        </div>
        <div className="bg-white flex flex-col justify-center items-center space-y-2 p-8 rounded-2xl shadow-md text-center">
          <FaRocket className="w-10 h-10 text-[#05305a]" />
          <h3 className="text-lg font-semibold font-montserrat">
            Step 4: Connect & Learn
          </h3>
          <p className="text-[#555]">
            Send request or message to your partner and start learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
