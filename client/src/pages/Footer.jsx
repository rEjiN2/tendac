import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">Designs & Plans</h3>
            <ul className="list-none pl-0">
              <li className="mb-1 cursor-pointer">Interior Design</li>
              <li className="mb-1 cursor-pointer">Architectural Plans</li>
              <li className="mb-1 cursor-pointer">Landscape Design</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">Estimation</h3>
            <ul className="list-none pl-0">
              <li className="mb-1 cursor-pointer">Cost Estimation</li>
              <li className="mb-1 cursor-pointer">Material Planning</li>
              <li className="mb-1 cursor-pointer">Budget Analysis</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">About</h3>
            <p className="mb-3">
              We are a platform that connects customers and contractors for seamless construction projects.
            </p>
            <p>Contact us: info@tendac.com</p>
            <p>Phone   no: +91 9946020154</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
