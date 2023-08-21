import React from 'react';
import Plan from '../assets/construction.svg';
import About from './About';
import Footer from './Footer';

function Home() {
  return (
    <div>
        <div className='min-h-screen bg-gradient-to-r from-gray-600 via-gray-700 to-yellow-500 p-12'>
      <div className='w-full p-4 text-center'>
        <div className='flex flex-col sm:flex-row items-center justify-center'>
          <div className='w-full sm:w-1/2 px-4 sm:px-8'>
            <img src={Plan} alt='Construction Plans' className='w-full' />
          </div>
          <div className='w-full sm:w-1/2 px-4 sm:px-8 text-center'>
          <h3 className='text-2xl sm:text-4xl md:text-5xl font-custom font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 text-transparent bg-clip-text py-4 sm:py-5 md:py-6'>
          The Everlasting Nexus Design & Construction
        </h3>
            <p className='p-4 sm:p-6 text-white'>
              We value our customers and recognize their efforts in building their dream homes.
              We provide full support from the initial stage of construction to the final, ensuring quality and specifications at affordable rates.
            </p>
            <div className='flex justify-center mt-4'>
              <button className="flex items-center font-medium text-white bg-gradient-to-r from-blue-700 via-purple-700 to-purple-900 px-4 py-2 rounded-lg hover:translate-x-7 transition-transform duration-500 ease-in-out focus:outline-none focus:ring focus:border-purple-300">
                <span className="transition-transform duration-500 ease-in-out">Explore Us</span>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short ml-1 transform -rotate-30 transition-transform duration-500 ease-in-out">
  <path fillRule="evenodd" d="M0 8a.5.5 0 0 1 .5-.5h10.793l-3.147-3.146a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 1 1-.708-.708L11.293 8.5H.5A.5.5 0 0 1 0 8z"/>
             </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='text-centre '>
        <About/>
      </div>
      
    </div>
    <div>
        <Footer/>
    </div>
    </div>

  );
}

export default Home;
