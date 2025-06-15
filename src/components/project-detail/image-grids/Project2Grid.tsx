
import React from 'react';

const Project2Grid: React.FC = () => (
  <div className="w-full h-[500px]">
    <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
      {/* Top left */}
      <div
        className="h-full rounded-lg shadow-lg bg-white"
        style={{
          backgroundImage: `url('/lovable-uploads/18593925-b8e8-43b5-94fa-a39fedaf3798.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Top right */}
      <div
        className="h-full rounded-lg shadow-lg bg-white"
        style={{
          backgroundImage: `url('/lovable-uploads/6c0eef8c-0854-4e43-a833-862a82f40b23.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Bottom left */}
      <div
        className="h-full rounded-lg shadow-lg bg-white"
        style={{
          backgroundImage: `url('/lovable-uploads/470e5153-db23-4479-a138-1c12dc72d959.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Bottom right */}
      <div
        className="h-full rounded-lg shadow-lg bg-white"
        style={{
          backgroundImage: `url('/lovable-uploads/5c328bc9-a8e3-4f58-9f7c-658e8c08e5a5.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  </div>
);

export default Project2Grid;
