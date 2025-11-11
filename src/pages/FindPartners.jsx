import { useLoaderData } from "react-router";
import FindPartnersCard from "../components/FindPartnersCard/FindPartnersCard";

const FindPartners = () => {
  const partners = useLoaderData();
  console.log(partners);

  return (
    <div className="bg-white/80">
      <div className="w-11/12 mx-auto py-10">
        <h1 className="font-montserrat text-3xl mb-5 text-center font-bold text-[#05305a]">
          Find Partners
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <FindPartnersCard
              key={partner._id}
              partner={partner}
            ></FindPartnersCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindPartners;
