// app/PriceCard.js

"use client";

import { useState } from 'react';
import Modal from './Modal';

const PriceCard = ({ title, description, price, image, details, checkoutLink }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGiftClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const whatsappLink = `https://wa.me/+56993317207?text=Hola, estoy interesado en el servicio "${title}" que cuesta ${price} CLP.`;

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-4 my-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        <div className="flex justify-center mt-4">
          <img className="w-24 h-24 object-cover rounded-full border-4 border-pink-300" src={image} alt={title} />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex flex-col items-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 rounded-full px-3 py-1 text-sm font-semibold text-white mb-2 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Comprar por ${price} CLP
          </a>
          <button
            onClick={handleGiftClick}
            className="inline-block text-blue-500 underline text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105"
          >
            Regalar este servicio
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} service={{ title, description, price, image, details, checkoutLink }} />
    </>
  );
};

export default PriceCard;
