'use client';

import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ShareButtons = () => {
  const shareUrl = 'http://localhost:3000';
  const title = 'Servicios de Cosmetología y Masajes';
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(`${title} - ${shareUrl}`)}`;

  return (
    <div className="flex justify-center space-x-4 mt-10">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 bg-gray-800 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
      >
        <FaWhatsapp size={20} />
        <span>Compartir en WhatsApp</span>
      </a>
      <button
        onClick={() => {
          navigator.clipboard.writeText(shareUrl);
          alert('URL copiada al portapapeles. Ahora puedes compartirla en Instagram.');
        }}
        className="flex items-center space-x-2 bg-gray-600 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
      >
        <FaInstagram size={20} />
        <span>Copiar enlace para Instagram</span>
      </button>
    </div>
  );
};

export default ShareButtons;
