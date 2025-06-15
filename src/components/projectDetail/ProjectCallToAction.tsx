
import React from "react";
import { Link } from "react-router-dom";

const ProjectCallToAction = () => (
  <div className="text-center">
    <div className="bg-red-100 p-8 transform rotate-1 border-2 border-gray-300 inline-block max-w-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Interested in this project?
      </h3>
      <p className="text-gray-700 mb-6">
        Let's discuss how we can create something amazing for your next project!
      </p>
      <Link
        to="/#contact"
        className="bg-red-400 hover:bg-red-500 text-white px-6 py-3 font-semibold transform -rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-black inline-block"
      >
        Get In Touch
      </Link>
    </div>
  </div>
);

export default ProjectCallToAction;
