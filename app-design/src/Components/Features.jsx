import React from 'react';

const Features = () => {
  return (
    <div id="Features" className="p-4 mt-20">
      <h1 className="text-4xl font-bold uppercase text-pink-500 mb-8 text-center">App Features</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-auto md:w-1/2 lg:w-1/4 xl:w-1/4 bg-pink-100 rounded border p-8 m-2 hover:bg-red-400 hover:text-white">
          <i className="fas fa-magic text-6xl mb-6 text-rose-700  hover:text-white"></i>
          <h2 className="text-lg font-bold">Smooth Design</h2>
          <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim ad neque. Voluptatem alias beatae accusamus laudantium nisi assumenda libero.</p>
        </div>
        <div className="w-full sm:w-auto md:w-1/2 lg:w-1/4 xl:w-1/4 bg-pink-100 rounded border p-8 m-2 hover:bg-red-400 hover:text-white">
          <i className="fas fa-shield-alt text-6xl mb-6 text-rose-700 hover:text-white"></i>
          <h2 className="text-lg font-bold">Privacy Protect</h2>
          <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim ad neque. Voluptatem alias beatae accusamus laudantium nisi assumenda libero.</p>
        </div>
        <div className="w-full sm:w-auto md:w-1/2 lg:w-1/4 xl:w-1/4 bg-pink-100 rounded border p-8 m-2 hover:bg-red-400 hover:text-white">
          <i className="fas fa-globe text-6xl mb-6 text-rose-700  hover:text-white"></i>
          <h2 className="text-lg font-bold">Multiple Languages</h2>
          <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim ad neque. Voluptatem alias beatae accusamus laudantium nisi assumenda libero.</p>
        </div>
        <div className="w-full sm:w-auto md:w-1/2 lg:w-1/4 xl:w-1/4 bg-pink-100 rounded border p-8 m-2 hover:bg-red-400 hover:text-white">
          <i className="fas fa-map-marker-alt text-6xl mb-6 text-rose-700  hover:text-white"></i>
          <h2 className="text-lg font-bold">Location Tracking</h2>
          <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim ad neque. Voluptatem alias beatae accusamus laudantium nisi assumenda libero.</p>
        </div>
        <div className="w-full sm:w-auto md:w-1/2 lg:w-1/4 xl:w-1/4 bg-pink-100 rounded border p-8 m-2 hover:bg-red-400 hover:text-white">
          <i className="fas fa-cogs text-6xl mb-6 text-rose-700  hover:text-white"></i>
          <h2 className="text-lg font-bold">Powerful Settings</h2>
          <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim ad neque. Voluptatem alias beatae accusamus laudantium nisi assumenda libero.</p>
        </div>
        <div className="w-full sm:w-auto md:w-1/2 lg:w-1/4 xl:w-1/4 bg-pink-100 rounded border p-8 m-2 hover:bg-red-400 hover:text-white">
          <i className="fas fa-headset text-6xl mb-6 text-rose-700  hover:text-white"></i>
          <h2 className="text-lg font-bold">24X7 Service</h2>
          <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim ad neque. Voluptatem alias beatae accusamus laudantium nisi assumenda libero.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
