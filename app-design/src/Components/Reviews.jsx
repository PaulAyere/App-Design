import React from 'react';
import pic1 from '../Assets/images/pic1.png';
import pic2 from '../Assets/images/pic2.png';
import pic3 from '../Assets/images/pic3.png';

const Review = () => {
  return (
    <div id="review" className="p-4">
    <h1 className="text-6xl font-bold uppercase bg-gradient-to-r from-pink-500 to-red-300 text-transparent bg-clip-text mb-8 text-center">customers reviews</h1>

      <div className="flex flex-col md:flex-row space-x-4 mt-8">
        <div className="w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0 rounded-lg border border-gray-300 p-4">
          <img src={pic1} alt="Profile 1" className="w-32 h-32 rounded-full mb-4" />
          <h2 className="text-xl font-bold mb-2">John Doe</h2>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam eros id tortor vehicula congue.</p>
          <div className="flex justify-center mt-4">
            <i className="fas fa-star text-pink-500"></i>
            <i className="fas fa-star text-pink-500"></i>
            <i className="fas fa-star text-pink-500"></i>
            <i className="fas fa-star text-pink-500"></i>
            <i className="fas fa-star text-pink-500"></i>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0 rounded-lg border border-gray-300 p-4">
          <img src={pic2} alt="Profile 2" className="w-32 h-32 rounded-full mb-4" />
          <h2 className="text-xl font-bold mb-2">Jane Smith</h2>
          <p className="text-center">Vivamus consequat lacus in vestibulum vestibulum. Duis consectetur urna non ligula bibendum, at tristique justo sodales.</p>
          <div className="flex justify-center mt-4">
            <i className="fas fa-star text-pink-500"></i>
            <i className="fas fa-star text-pink-500"></i>
            <i className="fas fa-star text-pink-500"></i>
            <i className="fas fa-star text-pink-500"></i>
            <i className="fas fa-star text-pink-500"></i>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0 rounded-lg border border-gray-300 p-4">
          <img src={pic3} alt="Profile 3" className="w-32 h-32 rounded-full mb-4" />
          <h2 className="text-xl font-bold mb-2">Alex Johnson</h2>
          <p className="text-center">Nulla efficitur, mauris in ultrices tempus, metus lacus congue tellus, eu iaculis risus purus et lectus.</p>
          <div className="flex justify-center mt-4">
            <i className="fas fa-star text-pink-500"></i>
            <i className="fas fa-star text-pink-500"></i>
            <i className="fas fa-star text-pink-500"></i>
            <i className="fas fa-star text-pink-500"></i>
            <i className="fas fa-star text-pink-500"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
