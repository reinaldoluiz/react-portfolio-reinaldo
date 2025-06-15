
import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioCTA = () => (
  <div className="text-center mt-16">
    <div className="bg-orange-200 p-8 transform -rotate-1 border-2 border-gray-300 inline-block max-w-md">
      <img 
        src="/lovable-uploads/3bc795d8-161f-4f91-acc0-46a5d2d4b7d9.png" 
        alt="Adventure character" 
        className="w-24 h-24 object-contain mx-auto mb-4"
      />
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        Like what you see?
      </h3>
      <p className="text-gray-700 mb-4">
        Let's embark on a new design adventure together!
      </p>
      <Link 
        to="/#contact"
        className="bg-red-400 hover:bg-red-500 text-white px-6 py-3 font-semibold transform rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-black inline-block"
      >
        Get In Touch
      </Link>
    </div>
  </div>
);

export default PortfolioCTA;
