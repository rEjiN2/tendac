import React from 'react';
import Worker from '../assets/worker.svg';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-600 via-gray-700 to-yellow-500 mt-12">
      <div className="w-full p-12">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="w-full sm:w-1/2 px-4 sm:px-8 text-center sm:text-left">
            <div className="py-12">
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-custom font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 text-transparent bg-clip-text py-4 sm:py-5 md:py-6">
                About Us
              </h3>
              <p className="p-4 sm:p-6 text-white">
                We provide a platform that allows customers who want to build a home or any building to post their requirements. Contractors can then make quotations, and users can review the quotations and select the one that suits them.
              </p>
              <div className="px-6">
                <ul className="list-disc text-white">
                  <li className="pl-1">Tender</li>
                  <li className="pl-1">Make an Estimate for bank loan immediately</li>
                  <li className="pl-1">Discuss with Experts</li>
                  <li className="pl-1">You can hire Engineers to monitor your work</li>
                  <li className="pl-1">Designs and Plans</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 px-4 py-12 sm:px-12 text-center">
            <img src={Worker} alt="Construction Plans" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
