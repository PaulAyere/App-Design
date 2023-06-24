import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-6xl font-bold uppercase bg-gradient-to-r from-pink-500 to-red-300 text-transparent bg-clip-text mb-8 text-center">get in touch</h1>

      <div className="w-3/4 bg-white rounded-lg mt-8 p-8">
        <form>
          <div className="mb-4">
            <label className="block font-semibold">Name</label>
            <input type="text" className=" border-gray-500 w-full py-2" />
          </div>
          <hr className="border-gray-500 my-4" />
          <div className="mb-4">
            <label className="block font-semibold">Email</label>
            <input type="email" className=" border-gray-500 w-full py-2" />
          </div>
          <hr className="border-gray-500 my-4" />
          <div className="mb-4">
            <label className="block font-semibold">Phone Number</label>
            <input type="tel" className=" border-gray-500 w-full py-2" />
          </div>
          <hr className="border-gray-500 my-4" />
          <div className="mb-4">
            <label className="block font-semibold">Message</label>
            <textarea className=" border-gray-500 w-full py-2"></textarea>
          </div>
          <hr className="border-gray-500 my-4" />
          <button className="py-1 px-8 mb-4 rounded-2xl bg-gradient-to-r from-pink-500 to-red-300 hover:scale-110 transform-gpu duration-300 text-white">
          Send
        </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
