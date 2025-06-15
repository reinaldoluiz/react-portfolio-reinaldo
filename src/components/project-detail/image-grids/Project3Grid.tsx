
import React from 'react';

const Project3Grid: React.FC = () => (
  <div className="w-full h-[500px]">
    <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
      {/* Top left */}
      <div
        className="h-full rounded-lg shadow-lg bg-white"
        style={{
          backgroundImage: `url('/lovable-uploads/e171f6c0-f022-4ab0-a8cb-67dc5c32b757.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Top right */}
      <div
        className="h-full rounded-lg shadow-lg bg-white"
        style={{
          backgroundImage: `url('/lovable-uploads/37f81d0f-a0cc-4902-a480-dddccff83c3a.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Bottom left */}
      <div
        className="h-full rounded-lg shadow-lg bg-white"
        style={{
          backgroundImage: `url('/lovable-uploads/36b6753b-9e52-4aa3-8366-aed818a9bb35.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Bottom right */}
      <div
        className="h-full rounded-lg shadow-lg bg-white"
        style={{
          backgroundImage: `url('/lovable-uploads/d28ebb13-9a16-4b7f-9d15-01bb098205b3.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  </div>
);

export default Project3Grid;
