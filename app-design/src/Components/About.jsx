import React from 'react';
import aboutImg from '../Assets/images/about-img.png';
import appStoreBtn from '../Assets/images/app-store-btn.png';
import googleBtn from '../Assets/images/google-btn.png';

const About = () => {
  return (
    <div id="About" className="p-4 mt-8">
      <h1 className="text-6xl font-bold uppercase bg-gradient-to-r from-pink-500 to-red-300 text-transparent bg-clip-text mb-8 text-center">About the app</h1>

      <div className="flex flex-col mt-8 md:flex-row">
        <div className="w-full md:w-1/2">
          <img src={aboutImg} alt="About" className="w-full" />
        </div>
        <div className="w-full md:w-1/2 md:mt-20 md:ml-0 md:mr-20">
          <h2 className="text-4xl font-bold mb-4">Take a Look Around Our App</h2>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus labore perspiciatis iusto debitis, explicabo neque earum accusamus adipisci eius, nobis laboriosam, autem modi porro quisquam saepe assumenda fuga quod ipsa!</p>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rerum excepturi alias quas voluptatibus provident voluptatum sapiente quos enim praesentium?</p>
          <div className="flex flex-wrap justify-center md:justify-start">
            <img src={appStoreBtn} alt="App Store" className="w-1/2 md:w-1/4 mr-2 mb-2 md:mb-0" />
            <img src={googleBtn} alt="Google Play" className="w-1/2 md:w-1/4 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
