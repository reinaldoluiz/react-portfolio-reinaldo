
import React from 'react';
import { Project } from '../../types/project';

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => (
  <div className="grid md:grid-cols-2 gap-12 mb-16">
    {/* Problem & Solution */}
    <div>
      <div className="bg-orange-100 p-6 transform rotate-1 border-2 border-gray-300 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">The Challenge</h3>
        <p className="text-gray-700 leading-relaxed">{project.problem}</p>
      </div>
      <div className="bg-pink-100 p-6 transform -rotate-1 border-2 border-gray-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">The Solution</h3>
        <p className="text-gray-700 leading-relaxed">{project.solution}</p>
      </div>
    </div>
    {/* Process & Results */}
    <div>
      <div className="bg-purple-100 p-6 transform -rotate-1 border-2 border-gray-300 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Design Process</h3>
        <ul className="space-y-2">
          {project.process.map((step, index) => (
            <li key={index} className="text-gray-700 flex flex-col gap-1">
             <strong className="font-bold text-gray-900">{step.title}: </strong>
      <span className="text-gray-700">{step.description}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-teal-100 p-6 transform rotate-1 border-2 border-gray-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Results</h3>
        <ul className="space-y-2">
          {project.results.map((result, index) => (
            <li key={index} className="text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default ProjectDetails;
