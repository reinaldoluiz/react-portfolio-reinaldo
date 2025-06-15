
import React from "react";
import { Calendar, Users, Clock } from "lucide-react";

interface ProjectInfoGridProps {
  project: any;
}

const ProjectInfoGrid: React.FC<ProjectInfoGridProps> = ({ project }) => (
  <div className="grid md:grid-cols-3 gap-6 mb-16">
    <div className="bg-blue-100 p-6 transform rotate-1 border-2 border-gray-300">
      <div className="flex items-center gap-2 mb-2">
        <Calendar size={20} className="text-red-400" />
        <h3 className="font-bold text-gray-800">Timeline</h3>
      </div>
      <p className="text-gray-700">{project.duration}</p>
      <p className="text-sm text-gray-600">{project.year}</p>
    </div>
    <div className="bg-yellow-100 p-6 transform -rotate-1 border-2 border-gray-300">
      <div className="flex items-center gap-2 mb-2">
        <Users size={20} className="text-red-400" />
        <h3 className="font-bold text-gray-800">Team</h3>
      </div>
      <p className="text-gray-700">{project.team}</p>
      <p className="text-sm text-gray-600">My role: {project.role}</p>
    </div>
    <div className="bg-green-100 p-6 transform rotate-2 border-2 border-gray-300">
      <div className="flex items-center gap-2 mb-2">
        <Clock size={20} className="text-red-400" />
        <h3 className="font-bold text-gray-800">Tools Used</h3>
      </div>
      <div className="flex flex-wrap gap-1">
        {project.tools.map((tool: string, index: number) => (
          <span key={index} className="bg-white px-2 py-1 text-xs font-semibold text-gray-700 border border-gray-400">{tool}</span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectInfoGrid;
