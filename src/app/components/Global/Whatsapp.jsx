import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/+27686996773`;
    window.open(url, "_blank");
  };

  return (
    <>
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 bg-green-500 text-white p-3 rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
      >
        <FaWhatsapp size={24} />
      </button>
    </>
  );
};

export default WhatsAppButton;
