import { useEffect, useState } from "react";
import AddClient from "./AddClient/index.client";
import Client from "./Client/index.client";
const Clients = (props) => {
  const { clients } = props;

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredClients, setFilteredClients] = useState(clients);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterClients(e.target.value);
  };

  const filterClients = (search) => {
    const filtered = clients.filter((client) =>
      client.customer.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredClients(filtered);
  };

  return (
    <>
      <div className="w-full min-h-screen bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex  justify-between w-full items-center   ">
            {" "}
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Clients
            </h2>
            <AddClient />
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Search clients..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          {filteredClients ? (
            <>
              <div className="overflow-x-auto">
                <table className="w-full whitespace-nowrap">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Index
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Address
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Period Start
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Fridge Type
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredClients &&
                      filteredClients?.map((client, index) => (
                        <tr
                          className="cursor-pointer"
                          onClick={() => setSelectedClient(client)}
                          key={index}
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {client.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {client.address}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {client.periodStart}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {client.fridgeType}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {selectedClient && (
                <Client
                  client={selectedClient}
                  onClose={() => setSelectedClient(null)}
                />
              )}
            </>
          ) : (
            <div className="w-full text-center">
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Clients;
