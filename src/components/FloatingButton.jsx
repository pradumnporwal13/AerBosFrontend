import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButton = () => {
  const phoneNumber = "8285334466";
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed border bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </button>
  );
};

export default FloatingButton;

