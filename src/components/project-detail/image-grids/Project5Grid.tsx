
import React from 'react';

interface Project5GridProps {
  images: string[];
}

const Project5Grid: React.FC<Project5GridProps> = ({ images }) => (
  <div className="w-full h-[500px]">
    <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
      {/* Top left */}
      <div
        className="h-full rounded-lg shadow-lg bg-white"
        style={{
          backgroundImage: images[0] ? `url('${images[0]}')` : 'none',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Top right */}
      <div
        className="h-full rounded-lg shadow-lg bg-white"
        style={{
          backgroundImage: images[1] ? `url('${images[1]}')` : 'none',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Bottom left */}
      <div
        className="h-full rounded-lg shadow-lg bg-white"
        style={{
          backgroundImage: images[2] ? `url('${images[2]}')` : 'none',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  </div>
);

export default Project5Grid;
