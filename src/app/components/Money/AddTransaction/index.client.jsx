import React, { useState } from "react";
import Spinner from "../../Spinner/index.client";
import { createDocument } from "../../../fucntions/firbase";
const AddTrans = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    amount: "",
    date: "",
    paymentType: "Cash",
    reason: "",
    type: "Earning",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    await createDocument("transactions", newTransaction);
    setLoading(false);
    closeModal();
    window.location.reload();

  };
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setNewTransaction({
      amount: "",
      date: "",
      paymentType: "Cash",
      reason: "",
      type:"Earning"
    });
    setLoading(false);

  };
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-[50px] mb-4 lg:mb-0"
        onClick={openModal}
      >
        Add Transaction
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
                <div className="text-xl font-bold mb-2">Add Transaction</div>
                <select
                  name="type"
                  value={newTransaction.type}
                  onChange={handleChange}
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                >
                  <option value="Earning">Earning</option>
                  <option value="Expense">Expense</option>
                </select>
                <input
                  type="number"
                  required
                  name="amount"
                  value={newTransaction.amount}
                  onChange={handleChange}
                  placeholder="Amount"
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                />
                <input
                  type="date"
                  required
                  name="date"
                  value={newTransaction.date}
                  onChange={handleChange}
                  placeholder="Date"
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                />
                <select
                  name="paymentType"
                  value={newTransaction.paymentType}
                  onChange={handleChange}
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                >
                  <option value="Cash">Cash</option>
                  <option value="EFT">EFT</option>
                </select>
                <input
                  type="text"
                  required
                  name="reason"
                  value={newTransaction.reason}
                  onChange={handleChange}
                  placeholder="Reason"
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                />
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
                  {loading ? <Spinner /> : "Add"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTrans;
