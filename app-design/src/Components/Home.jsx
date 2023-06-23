import React from 'react';
import backgroundImage from '../Assets/images/home-bg.jpg';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import shot01 from '../Assets/images/shot-01.jpg';
import shot02 from '../Assets/images/shot-02.jpg';
import shot03 from '../Assets/images/shot-03.jpg';
import shot04 from '../Assets/images/shot-04.jpg';
import shot05 from '../Assets/images/shot-05.jpg';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const Home = () => {
  const swiperParams = {
    autoplay: {
      delay: 5000, // 5 seconds delay between each slide
    },
    navigation: true,
    pagination: {
      clickable: true,
    },
  };

  const images = [shot01, shot02, shot03, shot04, shot05];

  return (
    <div id="Home" className="relative h-screen">
      <div
        className="absolute inset-0 z-0 w-full h-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
        <div className="text-6xl font-bold mb-4">App Landing Page</div>
        <p className="text-xl mb-8">Description of your app goes here...</p>
        <button className="py-1 px-6 rounded-lg bg-gradient-to-r from-red-700 to-rose-300 hover:scale-110 transform-gpu duration-300 text-white">
          Call to Action
        </button>
      </div>

      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Swiper {...swiperParams}>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-full">
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
