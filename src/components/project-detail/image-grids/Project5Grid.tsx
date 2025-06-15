
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
          backgroundImage: `url('${images[0]}')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Top right */}
      <div
        className="h-full rounded-lg shadow-lg bg-white"
        style={{
          backgroundImage: `url('${images[1]}')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Bottom left - empty */}
      <div className="h-full rounded-lg shadow-lg bg-white" />
      {/* Bottom right - empty */}
      <div className="h-full rounded-lg shadow-lg bg-white" />
    </div>
  </div>
);

export default Project5Grid;
