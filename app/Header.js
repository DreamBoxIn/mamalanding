"use client";

import { useState } from 'react';
import { Transition } from '@headlessui/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = `https://wa.me/+56993317207`;

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Cosmetología Merino</h1>
        </div>
        <div className="hidden md:block">
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#yo" className="text-gray-700 hover:text-pink-500 transition duration-300">Yo</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-pink-500 transition duration-300">Servicios</a></li>
              <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-500 transition duration-300">Contacto</a></li>
            </ul>
          </nav>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-pink-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden bg-white shadow-lg">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#yo" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-500 transition duration-300">
                Yo
              </a>
              <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-500 transition duration-300">
                Servicios
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-500 transition duration-300">
                Contacto
              </a>
            </div>
          </div>
        )}
      </Transition>
    </header>
  );
};

export default Header;
