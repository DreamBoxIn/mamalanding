// app/Modal.js

import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, service }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <span className="absolute top-0 left-0 bg-pink-500 text-white rounded-full px-3 py-1 text-sm font-semibold m-4">
          Gift de Regalo
        </span>
        <div className="bg-pink-100 rounded-lg p-4 shadow-md">
          <div className="flex items-center">
            <img
              className="w-16 h-16 object-cover rounded-full border-4 border-pink-300"
              src={service.image}
              alt={service.title}
            />
            <div className="ml-4 text-left">
              <h2 className="text-xl font-bold">{service.title}</h2>
              <p className="text-pink-500 text-lg font-semibold">${service.price} CLP</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-bold">Cómo usar la Gift Card</h3>
          <ol className="list-decimal list-inside mt-2 text-gray-700">
            <li>Haz clic en "Comprar Gift Card".</li>
            <li>Completa la compra.</li>
            <li>Recibe la Gift Card por correo o WhatsApp.</li>
            <li>Entrega la Gift Card al destinatario.</li>
          </ol>
        </div>
        <div className="text-center mt-6">
          <a
            href={service.checkoutLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 text-white rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105"
          >
            Comprar Gift Card
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
