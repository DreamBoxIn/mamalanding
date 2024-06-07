// app/ServicesSection.js

import PriceCard from './PriceCard';

const ServicesSection = () => {
  const services = [
    {
      title: 'Tratamiento Facial Integral',
      description: 'Un tratamiento completo para revitalizar y rejuvenecer la piel.',
      price: '25.000',
      image: '/facial_integral.jpg',
      details: 'La gift card incluye una sesión de tratamiento facial integral...',
    },
    {
      title: 'Tratamiento Facial Simple',
      description: 'Un tratamiento facial básico para una piel fresca y saludable.',
      price: '15.000',
      image: '/facial_simple.jpg',
      details: 'La gift card incluye una sesión de tratamiento facial simple...',
    },
    {
      title: 'Masaje Linfático para Embarazadas',
      description: 'Un masaje especial para mejorar la circulación y reducir el edema en embarazadas.',
      price: '20.000',
      image: '/masaje_embarazadas.jpg',
      details: 'La gift card incluye una sesión de masaje linfático para embarazadas...',
    },
    {
      title: 'Depilación',
      description: 'Depilación profesional y sin dolor para una piel suave y lisa.',
      price: '15.000',
      image: '/depilacion.jpg',
      details: 'La gift card incluye una sesión de depilación profesional...',
    },
  ];

  return (
    <section id="services" className="text-center mb-10 container">
      <div className="flex flex-wrap justify-center">
        {services.map((service) => (
          <PriceCard
            key={service.title}
            title={service.title}
            description={service.description}
            price={service.price}
            image={service.image}
            details={service.details}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
