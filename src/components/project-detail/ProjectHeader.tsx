
import React from 'react';
import { Project } from '../../types/project';

interface ProjectHeaderProps {
  project: Project;
}

const ProjectHeader = ({ project }: ProjectHeaderProps) => (
  <div className="text-center mb-16">
    <div className="mb-6">
      {project.categories ? (
        <div className="flex justify-center flex-wrap gap-2">
          {project.categories.map((cat, catIndex) => (
            <div key={catIndex} className="bg-red-200 px-4 py-2 inline-block transform rotate-2">
              <p className="text-sm font-bold text-gray-800">{cat}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-red-200 px-4 py-2 inline-block transform rotate-2">
          <p className="text-sm font-bold text-gray-800">{project.category}</p>
        </div>
      )}
    </div>
    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 transform -rotate-1 inline-block mb-4">
      {project.title}
    </h1>
    <p className="text-xl text-gray-600 mb-6">{project.subtitle}</p>
    <div className="w-32 h-1 bg-blue-400 mx-auto transform rotate-1"></div>
  </div>
);

export default ProjectHeader;
