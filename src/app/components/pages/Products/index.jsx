import React from "react";
import Image from "next/image";
const Products = () => {
  const fridgeProducts = [
    {
      id: 1,
      name: "Compact Fridge",
      image: "/fridge1.jpg",
      description: "Perfect for dorm rooms and small spaces.",
    },
    {
      id: 2,
      name: "Double-Door Fridge",
      image: "/fridge2.jpg",
      description: "Spacious fridge with separate freezer compartment.",
    },
    {
      id: 3,
      name: "Mini Fridge",
      image: "/fridge3.jpg",
      description: "Portable and ideal for on-the-go students.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Fridge Stock</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fridgeProducts.map((fridge) => (
            <div key={fridge.id} className="bg-black  rounded-lg shadow-md">
              <Image
                src={
                  "https://www.furniture-king.co.za/wp-content/uploads/2022/07/H125RTS-2_sq.png"
                }
                alt={fridge.name}
                width={500}
                height={500}
                className="w-full h-48 object-cover  bg-black rounded-t-lg"
              />
              <div className="p-3">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {fridge.name}
                </h3>
                <p className="text-white">{fridge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
