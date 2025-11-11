import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const CreatePartnerProfile = () => {
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
    console.log(partnerProfileInfo);

    fetch("http://localhost:3000/partner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(partnerProfileInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Partner Profile Create Successfully");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { user } = useContext(AuthContext);

  return (
    <div className="w-2xl my-10 mx-auto border-2 border-gray-300 shadow-2xl rounded-xl bg-white/80">
      <form
        className="py-14 w-11/12 mx-auto"
        onSubmit={handleCreatePartnerSubmit}
      >
        <div>
          <h1 className="text-center text-4xl font-montserrat font-extrabold text-[#05305a]">
            Create Partner Profile
          </h1>
        </div>
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
            <label className="label">Profile Image</label>
            <input
              type="text"
              name="profileimage"
              defaultValue={user?.photoURL}
              className="input input-bordered w-full outline-0 rounded-full"
              placeholder="Profile Image"
            />
          </div>
          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Subject</label>
            <select
              defaultValue={""}
              name="subject"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
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
          <div>
            <label className="label">Availability Time</label>
            <input
              type="text"
              name="availabilityTime"
              className="input input-bordered w-full outline-0 rounded-full"
              placeholder="Afternoon 3-6 PM"
            />
          </div>
          <div>
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              className="input input-bordered w-full outline-0 rounded-full"
              placeholder="Your Location"
            />
          </div>
          <div>
            <label className="label">Experience Level</label>
            <select
              defaultValue={""}
              required
              name="experienceLevel"
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option defaultValue={""} disabled>
                Select Experience Level
              </option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Mid-level">Mid-level</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered w-full outline-0 rounded-full"
              placeholder="example@mail.com"
            />
          </div>
          <div className="pt-4">
            <button className="btn w-full hover:bg-[#012244] bg-[#05305a] text-white font-semibold">
              Create Partner Profile
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default CreatePartnerProfile;
