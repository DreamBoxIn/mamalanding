// app/page.js
import Header from './Header';
import ProfileSection from './ProfileSection';
import ServicesSection from './ServicesSection';
import ContactButton from './ContactButton';
import ShareButtons from './ShareButtons';

export default function Home() {
  const whatsappNumber = "1234567890"; // Reemplaza con el número de WhatsApp real de tu madre

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center py-10 container">
        <ProfileSection />
        <ServicesSection />
        <ContactButton whatsappNumber={whatsappNumber} />
        <ShareButtons />
      </main>
      <footer className="w-full text-center py-4">
        <p>&copy; 2024 Cosmetología y Masajes</p>
      </footer>
    </div>
  );
}
