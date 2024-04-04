import { useState } from "react";

const Clients = () => {
  const clients = [
    {
      index: 1,
      customer: "Morne Meyer",
      address: "62 Dalton Road, Belhar",
      periodStart: "2024-01-16",
      fridgeType: "MORA Bar Fridge",
    },
    {
      index: 2,
      customer: "Temnotfo",
      address: "11 Shelduck Street, Electric City",
      periodStart: "2024-01-25",
      fridgeType: "Grey/Silver Defy Bar Fridge",
    },
    {
      index: 3,
      customer: "Katlego Masokwameng",
      address: "10 Plein Street, South Point, Floor 2 Room 212",
      periodStart: "2024-02-06",
      fridgeType: "Grey Hisense",
    },
    {
      index: 4,
      customer: "Robyn - Lee",
      address: "Tugwell Hall, Baxter Road, Rosebank",
      periodStart: "2024-02-15",
      fridgeType: "Grey Hisense - no sticker",
    },
    {
      index: 5,
      customer: "Hlomla Roto",
      address: "MGR 2 Residence, CPUT Bellville, Floor 0 - Room L13",
      periodStart: "2024-02-15",
      fridgeType: "MORA",
    },
    {
      index: 6,
      customer: "Bernadette Edwina Williams",
      address: "5 Dirkie Uys Street, Goodwood",
      periodStart: "2024-02-03",
      fridgeType: "White Defy",
    },
    {
      index: 7,
      customer: "Lauren Galant",
      address: "Basil February Residence, UWC",
      periodStart: "2024-02-11",
      fridgeType: "Silver/Grey Hisense with sticker",
    },
    {
      index: 8,
      customer: "Zimvo",
      address: "Catsville Residence, Block G, Room 3, CPUT",
      periodStart: "2024-02-13",
      fridgeType: "White Hisense",
    },
    {
      index: 9,
      customer: "Lillian",
      address: "Room FUL-M03, Fuller Hall, University of Cape Town",
      periodStart: "2024-02-20",
      fridgeType: "White MORA",
    },
    {
      index: 10,
      customer: "Luaandre Engelbrecht",
      address: "Room FUL-N18, Fuller Hall, University of Cape Town",
      periodStart: "2024-02-24",
      fridgeType: "Grey DEFY - Parklands",
    },
    {
      index: 11,
      customer: "Angelique Roelofse",
      address: "18 Pike Crescent, Nooitgedacht, Matroosfontein 7490",
      periodStart: "2024-02-24",
      fridgeType: "DEFY, DEFY, MORA",
    },
    {
      index: 12,
      customer: "Keith",
      address: "FREEDOM SQUARE RESIDENCE, CPUT BELLVILLE, Floor 2, Room K204",
      periodStart: "2024-02-16",
      fridgeType: "MORA",
    },
    {
      index: 13,
      customer: "Nomabhaca Thobeka Msali",
      address: "South Point Orchards, Block D Floor 2, room d2.24",
      periodStart: "2024-02-29",
      fridgeType: "HISENSE",
    },
    {
      index: 14,
      customer: "Thabiso Molefe",
      address: "KOVAC Student housing UWC, Block M, Room G22",
      periodStart: "2024-02-16",
      fridgeType: "DEFY FROM BERNADETTE",
    },
    {
      index: 15,
      customer: "Keith",
      address: "FREEDOM SQUARE RESIDENCE, CPUT BELLVILLE, Floor 2, Room K204",
      periodStart: "2024-02-16",
      fridgeType: "MORA",
    },
    {
      index: 16,
      customer: "Nomabhaca Thobeka Msali",
      address: "South Point Orchards, Block D Floor 2, room d2.24",
      periodStart: "2024-02-29",
      fridgeType: "HISENSE",
    },
    {
      index: 17,
      customer: "Keith",
      address: "FREEDOM SQUARE RESIDENCE, CPUT BELLVILLE, Floor 2, Room K204",
      periodStart: "2024-02-16",
      fridgeType: "MORA",
    },
    {
      index: 18,
      customer: "Nomabhaca Thobeka Msali",
      address: "South Point Orchards, Block D Floor 2, room d2.24",
      periodStart: "2024-02-29",
      fridgeType: "HISENSE",
    },
    {
      index: 19,
      customer: "Nomabhaca Thobeka Msali",
      address: "South Point Orchards, Block D Floor 2, room d2.24",
      periodStart: "2024-02-29",
      fridgeType: "HISENSE",
    },
    {
      index: 20,
      customer: "Nomabhaca Thobeka Msali",
      address: "South Point Orchards, Block D Floor 2, room d2.24",
      periodStart: "2024-02-29",
      fridgeType: "HISENSE",
    },
    {
      index: 21,
      customer: "Nomabhaca Thobeka Msali",
      address: "South Point Orchards, Block D Floor 2, room d2.24",
      periodStart: "2024-02-29",
      fridgeType: "HISENSE",
    },
    {
      index: 22,
      customer: "Nomabhaca Thobeka Msali",
      address: "South Point Orchards, Block D Floor 2, room d2.24",
      periodStart: "2024-02-29",
      fridgeType: "HISENSE",
    },
    {
      index: 23,
      customer: "Nomabhaca Thobeka Msali",
      address: "South Point Orchards, Block D Floor 2, room d2.24",
      periodStart: "2024-02-29",
      fridgeType: "HISENSE",
    },
    {
      index: 24,
      customer: "Nomabhaca Thobeka Msali",
      address: "South Point Orchards, Block D Floor 2, room d2.24",
      periodStart: "2024-02-29",
      fridgeType: "HISENSE",
    },
    {
      index: 25,
      customer: "Nomabhaca Thobeka Msali",
      address: "South Point Orchards, Block D Floor 2, room d2.24",
      periodStart: "2024-02-29",
      fridgeType: "HISENSE",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredClients, setFilteredClients] = useState(clients);

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
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Clients
          </h2>
          <div className="mb-4">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Search clients..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
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
                {filteredClients.map((client) => (
                  <tr key={client.index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {client.index}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {client.customer}
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
        </div>
      </div>
    </>
  );
};
export default Clients;
