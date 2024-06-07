const ProfileSection = () => {
    const whatsappNumber = "1234567890"; // Reemplaza con el número de WhatsApp real de tu madre
    const whatsappLink = `https://wa.me/+56993317207`;
  
    return (
      <section id="yo" className="relative text-center mb-10 py-16 bg-gradient-to-r from-pink-200 to-pink-400">
        <div className="container mx-auto px-4">
          <div className="bg-white p-10 rounded-lg shadow-lg inline-block max-w-md mx-auto">
            <img src="/profile.jpg" alt="Perfil" className="rounded-full w-32 h-32 mx-auto mb-4 md:w-48 md:h-48 border-4 border-pink-300 shadow-md" />
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Pilar Merino</h2>
            <p className="text-gray-600 mb-8">
              Con más de 30 años de experiencia, ofrezco servicios personalizados de cosmetología y masajes para todas mis clientas.
            </p>
            <div className="text-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProfileSection;
  