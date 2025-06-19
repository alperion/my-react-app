// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const slides = [
    "https://placehold.co/1200x400?text=Kampanya+1",
    "https://placehold.co/1200x400?text=Kampanya+2",
    "https://placehold.co/1200x400?text=Kampanya+3"
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="mt-2 mb-8 px-4">
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-lg shadow-md">
        <img
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-60 md:h-80 object-cover transition-transform duration-500"
        />
        <div
          className="absolute inset-y-0 left-0 flex items-center pl-4 cursor-pointer bg-black bg-opacity-30 text-white"
          onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)}
        >
          ❮
        </div>
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer bg-black bg-opacity-30 text-white"
          onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
        >
          ❯
        </div>
      </div>
    </section>
  );
};

export default Hero;