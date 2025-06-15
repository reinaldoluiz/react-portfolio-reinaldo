
import React from 'react';

const DefaultImageGrid: React.FC = () => (
  <div className="w-full h-[500px]">
    <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
      {/* Top left */}
      <div
        className="h-full rounded-lg shadow-lg bg-white"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Top right */}
      <div
        className="h-full rounded-lg shadow-lg bg-white"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Bottom left */}
      <div
        className="h-full rounded-lg shadow-lg bg-white"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Bottom right */}
      <div
        className="h-full rounded-lg shadow-lg bg-white"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  </div>
);

export default DefaultImageGrid;
