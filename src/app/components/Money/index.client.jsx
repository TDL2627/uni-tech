import AddTrans from "./AddTransaction/index.client";
import { useState } from "react";
import Transaction from "./Transaction/index.client";

const Money = (props) => {
  const { transactions } = props;
  const [tableToShow, setTableToShow] = useState("transactions");
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  console.log(transactions, "aye tras");
  const earnings = transactions.filter(
    (transaction) => transaction.type === "Earning"
  );
  const expenses = transactions.filter(
    (transaction) => transaction.type === "Expense"
  );

  const totalEarnings = earnings.reduce(
    (acc, curr) => acc + parseFloat(curr.amount),
    0
  );
  const totalExpenses = expenses.reduce(
    (acc, curr) => acc + parseFloat(curr.amount),
    0
  );
  const netIncome = totalEarnings - totalExpenses;
  return (
    <>
      <div className="w-full min-h-screen bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between w-full items-center   ">
            {" "}
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Transactions
            </h2>
            <AddTrans />
          </div>

          <div>
            <select
              className="mt-4 mb-4 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setTableToShow(e.target.value)}
              value={tableToShow}
            >
              <option value="transactions">All Transactions</option>
              <option value="earnings">Earnings</option>
              <option value="expenses">Expenses</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-300"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-300"
                  >
                    Reason
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-300"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableToShow === "transactions" &&
                  transactions.map((transaction, index) => (
                    <tr
                      className="cursor-pointer"
                      onClick={() => setSelectedTransaction(transaction)}
                      key={index}
                    >
                      <td className="px-6 py-4 whitespace-pre-wrap border-r border-gray-300">
                        <div className="text-sm text-gray-900">
                          {transaction.date}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-pre-wrap border-r border-gray-300">
                        <div className="text-sm text-gray-900">
                          {transaction.reason}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-pre-wrap border-r border-gray-300">
                        <div className="text-sm text-gray-900">
                          {transaction.paymentType}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-pre-wrap">
                        <div
                          className={`text-sm ${
                            transaction.type == "Earning"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          R{transaction.amount}
                        </div>
                      </td>
                    </tr>
                  ))}
                {tableToShow === "earnings" &&
                  earnings.map((earning, index) => (
                    <tr
                      className="cursor-pointer"
                      onClick={() => setSelectedTransaction(earning)}
                      key={index}
                    >
                      <td className="px-6 py-4 whitespace-pre-wrap border-r border-gray-300">
                        <div className="text-sm text-gray-900">
                          {earning.date}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-pre-wrap border-r border-gray-300">
                        <div className="text-sm text-gray-900">
                          {earning.reason}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-pre-wrap border-r border-gray-300">
                        <div className="text-sm text-gray-900">
                          {earning.paymentType}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-pre-wrap">
                        <div className="text-sm text-green-500">
                          R{earning.amount}
                        </div>
                      </td>
                    </tr>
                  ))}
                {tableToShow === "expenses" &&
                  expenses.map((expense, index) => (
                    <tr
                      className="cursor-pointer"
                      onClick={() => setSelectedTransaction(expense)}
                      key={index}
                    >
                      <td className="px-6 py-4 whitespace-pre-wrap border-r border-gray-300">
                        <div className="text-sm text-gray-900">
                          {expense.date}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-pre-wrap border-r border-gray-300">
                        <div className="text-sm text-gray-900">
                          {expense.reason}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-pre-wrap border-r border-gray-300">
                        <div className="text-sm text-gray-900">
                          {expense.paymentType}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-pre-wrap">
                        <div className="text-sm text-red-500">
                          R{expense.amount}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td
                    className="px-6 py-4 whitespace-nowrap border-t border-gray-300"
                    colSpan="4"
                  >
                    <strong className="text-gray-900">
                      Total{" "}
                      {tableToShow === "transactions"
                        ? "Transactions"
                        : tableToShow === "earnings"
                        ? "Earnings"
                        : "Expenses"}
                      : R
                      {tableToShow === "transactions"
                        ? netIncome
                        : tableToShow === "earnings"
                        ? totalEarnings
                        : totalExpenses}
                    </strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          {selectedTransaction && (
            <Transaction
              transaction={selectedTransaction}
              onClose={() => setSelectedTransaction(null)}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default Money;
