// app/ContactButton.js
const ContactButton = ({ whatsappNumber }) => {
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    return (
      <div id="contact" className="mb-10">
        <a
          href={whatsappLink}
          className="bg-green-500 text-white py-2 px-6 rounded-full mb-4 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Contactar vía WhatsApp
        </a>
      </div>
    );
  };
  
  export default ContactButton;
  