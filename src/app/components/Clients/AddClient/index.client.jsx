import React, { useEffect, useState } from "react";
import { createDocument } from "../../../fucntions/firbase";
const AddClient = () => {
  const [showModal, setShowModal] = useState(false);
  const [newClient, setNewClient] = useState({
    name: "",
    address: "",
    periodStart: "",
    fridgeType: "",
    active: true,
  });
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setNewClient({
      name: "",
      address: "",
      periodStart: "",
      fridgeType: "",
      active: true,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewClient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    createDocument("clients", newClient);
    closeModal();
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-[50px]"
        onClick={openModal}
      >
        Add Client
      </button>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={closeModal}
            ></div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg w-full">
              <div className="px-6 py-4">
                <div className="text-xl font-bold mb-2">Add Client</div>
                {/* Add Client form */}
                <input
                  type="text"
                  required
                  name="name"
                  value={newClient.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  required
                  name="address"
                  value={newClient.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                />
                <input
                  type="date"
                  required
                  name="periodStart"
                  value={newClient.periodStart}
                  onChange={handleChange}
                  placeholder="Start Date"
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                />
                <input
                  required
                  type="text"
                  name="fridgeType"
                  value={newClient.fridgeType}
                  onChange={handleChange}
                  placeholder="Fridge Type"
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                />
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="active"
                    checked={newClient.active}
                    onChange={() =>
                      setNewClient((prevState) => ({
                        ...prevState,
                        active: !prevState.active,
                      }))
                    }
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Active</span>
                </label>
              </div>
              <div className="px-6 py-4 flex justify-end">
                <button
                  onClick={closeModal}
                  className="text-sm font-bold py-2 px-4 mr-2 border border-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AddClient;
