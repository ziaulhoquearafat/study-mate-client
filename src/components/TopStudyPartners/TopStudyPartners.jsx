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
    <section className="bg-[#dee6f0] py-16 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-montserrat text-4xl mb-10 text-center font-bold text-[#05305a] dark:text-white">
          Top Rated Study Partners
        </h2>

        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 px-5 lg:px-0">
          {partners.slice(0, 3).map((p) => (
            <div
              key={p._id}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <img
                src={p.profileimage}
                alt=""
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-100"
              />
              <h3 className="font-montserrat text-xl font-semibold text-gray-800 dark:text-white mb-1">
                {p.name}
              </h3>
              <p className="text-gray-600 mb-2 dark:text-white">{p.subject}</p>
              <p className="text-yellow-500 font-medium mb-4">
                ⭐ {p.rating}/5
              </p>
              <Link
                to={`/partner-profile/${p._id}`}
                className="btn btn-outline btn-primary rounded-full mt-2 font-montserrat"
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
