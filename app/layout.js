// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Cosmetología y Masajes',
  description: 'Servicios de Cosmetología y Masajes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
