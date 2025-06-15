
import React from 'react';

interface SingleImageGridProps {
  image: string;
  title: string;
}

const SingleImageGrid: React.FC<SingleImageGridProps> = ({ image, title }) => (
  <div className="w-full max-w-4xl mx-auto">
    <img
      src={image}
      alt={title}
      className="w-full h-80 object-cover rounded-lg shadow-lg"
    />
  </div>
);

export default SingleImageGrid;
