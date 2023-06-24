import React, { useEffect, useRef } from 'react';
import backgroundImage from '../Assets/images/home-bg.jpg';
import shot01 from '../Assets/images/shot-01.jpg';
import shot02 from '../Assets/images/shot-02.jpg';
import shot03 from '../Assets/images/shot-03.jpg';
import shot04 from '../Assets/images/shot-04.jpg';
import shot05 from '../Assets/images/shot-05.jpg';

const Home = () => {
  const images = [shot01, shot02, shot03, shot04, shot05];
  const sliderRef = useRef(null);
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        currentIndex = (currentIndex + 1) % images.length;
        sliderRef.current.style.transform = `translateX(calc(-${currentIndex * (100 / images.length)}%))`;
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="Home" className="relative min-h-screen">
      <div
        className="absolute inset-0 z-0 w-full h-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <div className="relative z-20 flex flex-col items-center justify-start text-white py-2">
        <div className="text-6xl font-bold mb-4">App Landing Page</div>
        <p className="text-xl mb-8">Description of your app goes here...</p>
        <button className="py-1 px-8 rounded-2xl bg-gradient-to-r from-pink-500 to-red-300 hover:scale-110 transform-gpu duration-300 text-white">
          Get Started
        </button>
      </div>

      <div className="relative z-0 overflow-hidden flex items-center justify-center mt-8">
        <div
          ref={sliderRef}
          className="w-full flex transition-transform duration-1000"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-1/5"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
