import React, { useState } from "react";
import Spinner from "../../Spinner/index.client";
import { editDocument, deleteDocument } from "../../../fucntions/firbase";
const Transaction = ({ transaction, onClose }) => {
  console.log(transaction, "ayee");
  const [editableTransaction, setEditableTransaction] = useState({
    ...transaction,
  });
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    setLoading(true);
    await editDocument(
      "transactions",
      editableTransaction.id,
      editableTransaction
    );
    setEditMode(false);
    onClose();
    setLoading(false);
    window.location.reload();
  };

  const handleDelete = async () => {
    setLoading(true);
    await deleteDocument("transactions", transaction.id);
    setLoading(false);
    onClose();
    window.location.reload();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white w-96 rounded-lg p-8">
        <h2 className="text-lg font-bold mb-4">Transaction Details</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          {editMode ? (
            <input
              type="date"
              name="date"
              value={editableTransaction.date}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          ) : (
            <p>{editableTransaction.date}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Reason
          </label>
          {editMode ? (
            <input
              type="text"
              name="reason"
              value={editableTransaction.reason}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          ) : (
            <p>{editableTransaction.reason}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Payment Type
          </label>
          {editMode ? (
            <select
              name="paymentType"
              value={editableTransaction.paymentType}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            >
              <option value="Earning">Earning</option>
              <option value="Expense">Expense</option>
            </select>
          ) : (
            <p>{editableTransaction.paymentType}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          {editMode ? (
            <input
              type="number"
              name="amount"
              value={editableTransaction.amount}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          ) : (
            <p>{editableTransaction.amount}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Type
          </label>
          {editMode ? (
            <select
              name="type"
              value={editableTransaction.type}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            >
              <option value="Earning">Earning</option>
              <option value="Expense">Expense</option>
            </select>
          ) : (
            <p>{editableTransaction.type}</p>
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
                {loading === true ? <Spinner /> : "Save"}
              </button>
              <button
                className="mr-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={handleDelete}
              >
                {loading === true ? <Spinner /> : "Delete"}
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

export default Transaction;
