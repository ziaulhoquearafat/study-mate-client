import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const CreatePartnerProfile = () => {
  const { user } = useContext(AuthContext);

  const handleCreatePartnerSubmit = (e) => {
    e.preventDefault();
    const partnerProfileInfo = {
      name: e.target.name.value,
      profileimage: e.target.profileimage.value,
      subject: e.target.subject.value,
      studyMode: user ? "Online" : "Offline",
      availabilityTime: e.target.availabilityTime.value,
      location: e.target.location.value,
      experienceLevel: e.target.experienceLevel.value,
      rating: 0,
      partnerCount: 0,
      email: e.target.email.value,
    };

    fetch("http://localhost:3000/partner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(partnerProfileInfo),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Partner Profile Created Successfully!");
        e.target.reset();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="bg-[#dee6f0] dark:bg-gray-950 py-10 px-4">
      <div className="max-w-2xl mx-auto border border-gray-300 shadow-xl rounded-2xl bg-white dark:bg-gray-900 dark:border-gray-700">
        <form
          className="py-10 px-6 sm:px-10"
          onSubmit={handleCreatePartnerSubmit}
        >
          {/* Title */}
          <h1 className="text-center text-2xl sm:text-4xl font-montserrat font-extrabold text-[#05305a] dark:text-white mb-8">
            Create Partner Profile
          </h1>

          {/* Form Fields */}
          <fieldset className="fieldset space-y-4">
            {/* Name */}
            <div>
              <label className="label text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full rounded-full outline-none focus:ring-2 focus:ring-[#05305a]"
                placeholder="Your Name"
              />
            </div>

            {/* Profile Image */}
            <div>
              <label className="label text-sm font-medium">Profile Image</label>
              <input
                type="text"
                name="profileimage"
                defaultValue={user?.photoURL}
                className="input input-bordered w-full rounded-full outline-none focus:ring-2 focus:ring-[#05305a]"
                placeholder="Profile Image URL"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="label text-sm font-medium">Subject</label>
              <select
                defaultValue={""}
                name="subject"
                required
                className="select w-full rounded-full focus:ring-2 focus:ring-[#05305a] dark:bg-gray-800 dark:text-white"
              >
                <option value="" disabled>
                  Select Your Subject
                </option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="English">English</option>
                <option value="Statistics">Statistics</option>
                <option value="Business Entrepreneurship">
                  Business Entrepreneurship
                </option>
                <option value="Marketing">Marketing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Availability Time */}
            <div>
              <label className="label text-sm font-medium">
                Availability Time
              </label>
              <input
                type="text"
                name="availabilityTime"
                className="input input-bordered w-full rounded-full outline-none focus:ring-2 focus:ring-[#05305a]"
                placeholder="e.g. Afternoon 3-6 PM"
              />
            </div>

            {/* Location */}
            <div>
              <label className="label text-sm font-medium">Location</label>
              <input
                type="text"
                name="location"
                className="input input-bordered w-full rounded-full outline-none focus:ring-2 focus:ring-[#05305a]"
                placeholder="Your Location"
              />
            </div>

            {/* Experience Level */}
            <div>
              <label className="label text-sm font-medium">
                Experience Level
              </label>
              <select
                defaultValue={""}
                required
                name="experienceLevel"
                className="select w-full rounded-full focus:ring-2 focus:ring-[#05305a] dark:bg-gray-800 dark:text-white"
              >
                <option value="" disabled>
                  Select Experience Level
                </option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Mid-level">Mid-level</option>
                <option value="Expert">Expert</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="label text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered w-full rounded-full outline-none focus:ring-2 focus:ring-[#05305a] dark:bg-gray-800 dark:text-white"
              />
            </div>

            {/* Button */}
            <div className="pt-6">
              <button className="btn w-full bg-[#05305a] hover:bg-[#012244] text-white font-semibold rounded-full transition-all duration-300">
                Create Partner Profile
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default CreatePartnerProfile;
