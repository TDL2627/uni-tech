import React, { useEffect, useState } from "react";

const Client = ({ client, onClose }) => {
  const [editableClient, setEditableClient] = useState({ ...client });
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    // You can implement your save logic here
    console.log("Saved:", editableClient);
    setEditMode(false);
    onClose();
  };

  const handleDelete = () => {
    // You can implement your delete logic here
    console.log("Deleted:", client);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white w-96 rounded-lg p-8">
        <h2 className="text-lg font-bold mb-4">Client Details</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          {editMode ? (
            <input
              type="text"
              name="name"
              value={editableClient.name}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          ) : (
            <p>{editableClient.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          {editMode ? (
            <input
              type="text"
              name="address"
              value={editableClient.address}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          ) : (
            <p>{editableClient.address}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Period Start
          </label>
          {editMode ? (
            <input
              type="text"
              name="periodStart"
              value={editableClient.periodStart}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          ) : (
            <p>{editableClient.periodStart}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Fridge Type
          </label>
          {editMode ? (
            <input
              type="text"
              name="fridgeType"
              value={editableClient.fridgeType}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          ) : (
            <p>{editableClient.fridgeType}</p>
          )}
        </div>
        <div className="flex justify-end">
          {!editMode && (
            <button
              className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={handleEdit}
            >
              Edit
            </button>
          )}
          {editMode && (
            <>
              <button
                className="mr-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="mr-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={handleDelete}
              >
                Delete
              </button>
            </>
          )}
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Client;
