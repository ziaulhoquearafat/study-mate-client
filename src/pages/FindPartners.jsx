import { useState } from "react";
import { useLoaderData } from "react-router";
import FindPartnersCard from "../components/FindPartnersCard/FindPartnersCard";

const FindPartners = () => {
  const loadedPartners = useLoaderData();

  const [loading, setLoading] = useState(false);
  const [partners, setPartners] = useState(loadedPartners);
  const [sortOrder, setSortOrder] = useState(""); // ✅ sort state
  const [searchText, setSearchText] = useState(""); // ✅ search state

  // ✅ handle Search + Sort together
  const handleSearch = (e) => {
    e.preventDefault();
    const search_value = e.target.search.value || "";
    setSearchText(search_value);
    fetchData(search_value, sortOrder);
  };

  // ✅ handle Sort change
  const handleSortChange = (e) => {
    const newSort = e.target.value;
    setSortOrder(newSort);
    fetchData(searchText, newSort);
  };

  // ✅ Combined fetch function (search + sort)
  const fetchData = (search, sort) => {
    setLoading(true);
    fetch(
      `https://study-mate-server-nu.vercel.app/search?search=${search}&sort=${sort}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPartners(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching partners:", err);
        setLoading(false);
      });
  };

  return (
    <div className="bg-[#dee6f0] dark:bg-gray-900">
      <div className="w-11/12 mx-auto py-10">
        <div className="flex justify-between items-center flex-wrap gap-4">
          {/* LEFT — Sort */}
          <div>
            <select
              onChange={handleSortChange}
              className="select select-bordered rounded-full px-4 py-2 dark:bg-gray-800 dark:text-white"
            >
              <option value="">Sort by Experience</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>

          {/* RIGHT — Search */}
          <div>
            <form
              onSubmit={handleSearch}
              className="flex justify-center items-center gap-2"
            >
              <label className="input rounded-full outline-0 flex items-center gap-2 dark:bg-gray-800 dark:text-white">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  name="search"
                  type="search"
                  placeholder="Search by subject"
                  className="bg-transparent outline-none"
                />
              </label>
              <button
                type="submit"
                className="btn btn-primary btn-outline rounded-full"
              >
                {loading ? "Searching..." : "Search"}
              </button>
            </form>
          </div>
        </div>

        {/* ✅ Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {partners.length > 0 ? (
            partners.map((partner) => (
              <FindPartnersCard key={partner._id} partner={partner} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">
              No partners found 😢
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindPartners;
