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
        className="absolute inset-0 w-full h-full bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-begin">
        <div className="text-white text-6xl font-bold mb-4">
          App Landing Page
        </div>
        <p className="text-white text-xl mb-8">
          Description of your app goes here...
        </p>
        <button className="text-white py-1 px-6 rounded-lg bg-gradient-to-r from-red-700 to-rose-300 hover:scale-110 transform-gpu duration-300">
          Call to Action
        </button>
      </div>
      
     
      <div className="absolute top-0 left-0 w-full h-full">       
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
