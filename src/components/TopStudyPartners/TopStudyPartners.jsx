import { useEffect, useState } from "react";
import { Link } from "react-router";

const TopRatedPartners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/partners/top-rated")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPartners(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="bg-[#dee6f0] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-montserrat text-3xl mb-10 text-center font-bold text-[#05305a]">
          Top Rated Study Partners
        </h2>

        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
          {partners.slice(0, 3).map((p) => (
            <div
              key={p._id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <img
                src={p.profileimage}
                alt=""
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-100"
              />
              <h3 className="font-montserrat text-xl font-semibold text-gray-800 mb-1">
                {p.name}
              </h3>
              <p className="text-gray-600 mb-2">{p.subject}</p>
              <p className="text-yellow-500 font-medium mb-4">
                ⭐ {p.rating}/5
              </p>
              <Link
                to={`/partner-profile/${p._id}`}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedPartners;
