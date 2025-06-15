
import React from "react";

interface ProjectDetailsGridProps {
  project: any;
}

const ProjectDetailsGrid: React.FC<ProjectDetailsGridProps> = ({ project }) => (
  <div className="grid md:grid-cols-2 gap-12 mb-16">
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
    <div>
      <div className="bg-purple-100 p-6 transform -rotate-1 border-2 border-gray-300 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Design Process</h3>
        <ul className="space-y-2">
          {project.process.map((step: string, idx: number) => (
            <li key={idx} className="text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-400 rounded-full"></span>
              {step}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-teal-100 p-6 transform rotate-1 border-2 border-gray-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Results</h3>
        <ul className="space-y-2">
          {project.results.map((result: string, idx: number) => (
            <li key={idx} className="text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default ProjectDetailsGrid;
