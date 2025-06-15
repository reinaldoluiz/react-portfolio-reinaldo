
import React from 'react';

interface Project4GridProps {
  images: string[];
  color: string;
}

const Project4Grid: React.FC<Project4GridProps> = ({ images, color }) => (
  <div className={`${color} p-8 transform -rotate-1 border-2 border-gray-300`}>
    <div className="w-full h-[500px]">
      <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="h-full rounded-lg shadow-lg bg-white flex justify-center items-center"
            style={{
              backgroundImage: `url('${img}')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Project4Grid;
