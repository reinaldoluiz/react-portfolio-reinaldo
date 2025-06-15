import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types/project';
import { resolveImagePath } from '@/lib/utils';

interface Props {
  project: Project;
  index: number;
}

const PortfolioProjectCard = ({ project, index }: Props) => {
  const topAlignedProjectIds = [2, 3, 6, 7, 8, 10];
  const isTopAligned = topAlignedProjectIds.includes(project.id);
  const imageUrl = resolveImagePath(project.image);

  return (
    <div className="group">
      <div className={`${project.color} p-6 transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} group-hover:rotate-0 transition-all duration-300 border-2 border-gray-300 shadow-lg hover:shadow-xl`}>
        <div className="mb-4">
          <img 
            src={imageUrl} 
            alt={project.title}
            className={`w-full h-48 object-cover mx-auto ${isTopAligned ? 'object-top' : ''}`}
          />
        </div>
        <div className="mb-3">
          {project.categories ? (
            <div className="flex flex-wrap gap-1">
              {project.categories.map((cat, catIndex) => (
                <div key={catIndex} className="bg-red-200 px-2 py-1 inline-block transform rotate-2">
                  <p className="text-xs font-bold text-gray-800">{cat}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-red-200 px-3 py-1 inline-block transform rotate-2">
              <p className="text-xs font-bold text-gray-800">{project.category}</p>
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">
          {project.title}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="bg-gray-200 px-3 py-1 inline-block transform -rotate-1 mb-4">
          <p className="text-sm font-bold text-gray-800">{project.year}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map((tool, toolIndex) => (
            <span key={toolIndex} className="bg-white px-2 py-1 text-xs font-semibold text-gray-700 transform rotate-1 border border-gray-400">
              {tool}
            </span>
          ))}
        </div>
        <Link 
          to={`/portfolio/${project.id}`}
          className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 text-sm font-semibold transform -rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-black inline-block"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default PortfolioProjectCard;
