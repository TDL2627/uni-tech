import React from "react";
import Image from "next/image";
const Products = () => {
  const fridgeProducts = [
    {
      id: 1,
      name: "Hisense (Silver)",
      image: "/images/fridge1.jpg",
      description: "92 litre bar fridge.",
    },
    {
      id: 2,
      name: "Defy (Grey)",
      image: "/images/fridge2.jpg",
      description: "92 litre bar fridge.",
    },
    {
      id: 3,
      name: "Defy (White)",
      image: "/images/fridge3.jpg",
      description: "92 litre bar fridge.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div id="products" className="container mx-auto px-4">
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold text-center mb-8 uppercase"
        >
          Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fridgeProducts.map((fridge) => (
            <div
              data-aos="flip-up"
              key={fridge.id}
              className="bg-black  rounded-lg shadow-md"
            >
              <Image
                src={fridge.image}
                alt={fridge.name}
                width={500}
                height={500}
                className="w-full h-80 object-cover  bg-black rounded-t-lg"
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
