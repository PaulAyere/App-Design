import React from 'react';

const Pricing = () => {
  return (
    <div id="pricing" className="p-4 mt-8">
      <h1 className="text-6xl font-bold uppercase text-pink-500 mb-8 text-center">our pricing plans</h1>
      <div className="flex flex-col md:flex-row mt-8">
        
      <div className="flex-1 mx-4">
          <div className="bg-white rounded-md border border-gray-300">
            <div className="bg-white px-4 py-1 rounded-t-md">
              <span className="text-3xl font-semibold">$10</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>
            <h2 className="bg-pink-500 text-white text-lg font-semibold text-center mt-4 py-2 rounded-b-md">Basic Plan</h2>
            <div className="mt-4">
                <p>100 MB Disk Space</p>
                <p>2 Subdomains</p>
                <p>5 Email Accounts</p>
                <p>email support</p>
            </div>
            <hr className="border-pink-700 my-4" />
            <button className="bg-pink-700 text-white px-4 py-1 rounded">select plan</button>
          </div>
        </div>

        <div className="flex-1 mx-4">
          <div className="bg-white rounded-md border border-gray-300">
            <div className="bg-white px-4 py-1 rounded-t-md">
              <span className="text-3xl font-semibold">$20</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>
            <h2 className="bg-pink-500 text-white text-lg font-semibold text-center mt-4 py-2 rounded-b-md">Standard Plan</h2>
            <div className="mt-4">
            <p>100 MB Disk Space</p>
                <p>2 Subdomains</p>
                <p>5 Email Accounts</p>
                <p>email support</p>
            </div>
            <hr className="border-pink-700 my-4" />
            <button className="bg-pink-700 text-white px-4 py-1 rounded">select plan</button>
          </div>
        </div>

        <div className="flex-1 mx-4">
          <div className="bg-white rounded-md border border-gray-300">
            <div className="bg-white px-4 py-1 rounded-t-md">
              <span className="text-3xl font-semibold">$50</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>
            <h2 className="bg-pink-500 text-white text-lg font-semibold text-center mt-4 py-2 rounded-b-md">Premium Plan</h2>
            <div className="mt-4">
            <p>100 MB Disk Space</p>
                <p>2 Subdomains</p>
                <p>5 Email Accounts</p>
                <p>email support</p>
            </div>
            <hr className="border-pink-700 my-4" />
            <button className="bg-pink-700 text-white px-4 py-1 rounded">select plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
