import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PartnerProfile = () => {
  const [partners, setPartners] = useState([]);
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/partner/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPartners(data.result);
      });
  }, [id, user]);

  return (
    <div>
      <h1>{partners.name}</h1>
    </div>
  );
};

export default PartnerProfile;
