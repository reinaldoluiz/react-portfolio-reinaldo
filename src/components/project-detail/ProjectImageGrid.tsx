import React from 'react';
import SingleImageGrid from './image-grids/SingleImageGrid';
import Project2Grid from './image-grids/Project2Grid';
import Project3Grid from './image-grids/Project3Grid';
import Project4Grid from './image-grids/Project4Grid';
import Project5Grid from './image-grids/Project5Grid';
import DefaultImageGrid from './image-grids/DefaultImageGrid';

interface ProjectImageGridProps {
  project: {
    id: number;
    color: string;
    image: string;
    title: string;
    customImages?: string[];
  };
}

const ProjectImageGrid = ({ project }: ProjectImageGridProps) => {
  const renderGrid = () => {
    // Project 1: Single image
    if (project.id === 1 || project.id === 6) {
      return <SingleImageGrid image={project.image} title={project.title} />;
    }
    // Project 2: 4-image grid with fixed URLs
    if (project.id === 2) {
      return <Project2Grid />;
    }
    // Project 3: 4-image grid with fixed URLs
    if (project.id === 3) {
      return <Project3Grid />;
    }
    // Project 4: 4-image grid with custom images
    if (project.id === 4 && project.customImages) {
      return <Project4Grid images={project.customImages} />;
    }
    // Project 5: 4-image grid (2 images, 2 empty)
    if (project.id === 5 && project.customImages) {
      return <Project5Grid images={project.customImages} />;
    }
    // Default: 4-image placeholder grid
    return <DefaultImageGrid />;
  };

  return <div className="pb-16">{renderGrid()}</div>;
};

export default ProjectImageGrid;
