import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PartnerDetails = () => {
  const [partners, setPartners] = useState([]);
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/partner/${id}`, {
      headers: {
        authorization: `Bearrer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPartners(data.result);
      });
  }, [id, refetch]);

  const handlePartnerRequest = () => {
    const partnerReq = {
      name: partners.name,
      email: partners.email,
      subject: partners.subject,
      studyMode: partners.studyMode,
      location: partners.location,
      profileimage: partners.profileimage,
      requestEmail: user?.email,
      send_at: new Date(),
    };

    fetch(`http://localhost:3000/partner-request/${partners._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(partnerReq),
    })
      .then((res) => res.json)
      .then((data) => {
        toast.success("Request Sent Successfull");
        setRefetch(!refetch);
        console.log(data);
      })
      .catch((err) => {
        toast.error(err);
        console.log(err);
      });
  };

  return (
    <div className="py-12 bg-[#dee6f0] min-h-screen">
      <div className="w-11/12 mx-auto max-w-6xl bg-white rounded-2xl shadow-sm p-10 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Profile Image */}
          <div className="w-full md:w-1/3">
            <img
              src={partners.profileimage}
              alt="Profile"
              className="w-full h-[400px] rounded-xl object-cover shadow-md border border-gray-200"
            />
          </div>

          {/* Details */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-[#05305a] mb-6 border-b pb-3">
              {partners.name}
            </h1>

            <div className="space-y-4 text-lg text-gray-700">
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Study Mode</span>
                <span>{partners.studyMode}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Subject</span>
                <span>{partners.subject}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Availability</span>
                <span>{partners.availabilityTime}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Experience Level</span>
                <span>{partners.experienceLevel}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Location</span>
                <span>{partners.location}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">Rating</span>
                <span>{partners.rating}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Partner Count</span>
                <span>{partners.partnerCount}</span>
              </div>
            </div>

            {/* Action Button */}

            <button
              onClick={handlePartnerRequest}
              className="btn mt-8 px-6 py-3 bg-[#05305a] text-white font-semibold rounded-xl hover:bg-[#064272] duration-200 cursor-pointer"
            >
              Send Partner Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;
