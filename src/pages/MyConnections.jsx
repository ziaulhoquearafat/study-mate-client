import { useContext, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const MyConnections = () => {
  const { user } = useContext(AuthContext);
  const [partners, setPartners] = useState([]);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const updateModalRef = useRef(null);

  useEffect(() => {
    if (!user?.email) return;
    fetch(`http://localhost:3000/partner-request?userEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => setPartners(data));
  }, [user]);

  // Open modal safely when selectedPartner is set
  useEffect(() => {
    if (selectedPartner) {
      updateModalRef.current.showModal();
    }
  }, [selectedPartner]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/partner-request/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            setPartners(partners.filter((p) => p._id !== id));
            Swal.fire("Deleted!", "Partner Deleted", "success");
          });
      }
    });
  };

  const handleUpdateModalOpen = (partner) => {
    setSelectedPartner(partner);
  };

  const handleUpdateFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      name: form.name.value,
      profileimage: form.profileimage.value,
      location: form.location.value,
      email: form.email.value,
    };

    fetch(`http://localhost:3000/partner-request/${selectedPartner._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        setPartners(
          partners.map((p) =>
            p._id === selectedPartner._id ? { ...p, ...formData } : p
          )
        );
        updateModalRef.current.close();
        setSelectedPartner(null);
        Swal.fire("Updated!", "Partner info has been updated", "success");
      });
  };

  return (
    <div className="py-10 bg-[#dee6f0]">
      <h1 className="text-3xl font-bold text-[#05305a] text-center mb-5">
        My Connections
      </h1>
      <div className="overflow-x-auto w-11/12 mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th>SL No</th>
              <th>Profile</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Study Mode</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((partner, index) => (
              <tr key={partner._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={partner.profileimage} alt={partner.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{partner.name}</div>
                      <div className="text-sm opacity-50">
                        {partner.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{partner.email}</td>
                <td>{partner.subject}</td>
                <td>{partner.studyMode}</td>
                <td className="flex gap-5">
                  <button
                    onClick={() => handleDelete(partner._id)}
                    className="btn btn-outline btn-error btn-xs"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdateModalOpen(partner)}
                    className="btn btn-outline btn-success btn-xs"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {selectedPartner && (
        <dialog
          ref={updateModalRef}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Request Info!</h3>
            <form onSubmit={handleUpdateFormSubmit}>
              <fieldset className="fieldset space-y-2">
                <div>
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={selectedPartner.name}
                    className="input input-bordered w-full rounded-full"
                  />
                </div>
                <div>
                  <label className="label">Profile Image</label>
                  <input
                    type="text"
                    name="profileimage"
                    defaultValue={selectedPartner.profileimage}
                    className="input input-bordered w-full rounded-full"
                  />
                </div>
                <div>
                  <label className="label">Location</label>
                  <input
                    type="text"
                    name="location"
                    defaultValue={selectedPartner.location}
                    className="input input-bordered w-full rounded-full"
                  />
                </div>
                <div>
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={selectedPartner.email}
                    className="input input-bordered w-full rounded-full"
                  />
                </div>
                <div className="pt-4">
                  <button className="btn w-full bg-[#05305a] text-white">
                    Update
                  </button>
                </div>
              </fieldset>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn"
                  onClick={() => setSelectedPartner(null)}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyConnections;
