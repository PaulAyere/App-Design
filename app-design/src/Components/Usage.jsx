import React from 'react';
import usageImg from '../Assets/images/usage-img.png';

const Usage = () => {
  return (
    <div id="usage" className="p-4">
      <h1 className="text-6xl font-bold uppercase bg-gradient-to-r from-pink-500 to-red-300 text-transparent bg-clip-text mb-8 text-center">How it works</h1>

      <div className="flex flex-col md:flex-row mt-8">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="flex flex-col items-end mb-4">
            <i className="fas fa-sort-amount-down text-6xl mb-6 text-pink-500"></i>
            <h2 className="text-xl font-bold">Minimum Progress</h2>
          </div>
          <p className="mb-4 text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim ad neque. Voluptatem alias beatae accusamus laudantium nisi assumenda libero.</p>
          <div className="flex flex-col items-end">
            <i className="fas fa-user-clock text-6xl mb-6 text-pink-500"></i>
            <h2 className="text-xl font-bold">Active Time</h2>
          </div>
          <p className="text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim ad neque. Voluptatem alias beatae accusamus laudantium nisi assumenda libero.</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src={usageImg} alt="Usage" className="w-3/4 h-full hidden md:block" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="flex flex-col items-start mb-4">
            <i className="fas fa-sort-amount-up text-6xl mb-6 text-pink-500"></i>
            <h2 className="text-xl font-bold">Maximum Progress</h2>
          </div>
          <p className="mb-4 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim ad neque. Voluptatem alias beatae accusamus laudantium nisi assumenda libero.</p>
          <div className="flex flex-col items-start">
            <i className="fas fa-fire text-6xl mb-6 text-pink-500"></i>
            <h2 className="text-xl font-bold">Calories Burned</h2>
          </div>
          <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim ad neque. Voluptatem alias beatae accusamus laudantium nisi assumenda libero.</p>
        </div>
      </div>
    </div>
  );
};

export default Usage;
