
import React from 'react';
import SingleImageGrid from './image-grids/SingleImageGrid';
import Project4Grid from './image-grids/Project4Grid';
import Project5Grid from './image-grids/Project5Grid';
import DefaultImageGrid from './image-grids/DefaultImageGrid';
import { Project } from '../../types/project';

interface ProjectImageGridProps {
  project: Project;
}

const ProjectImageGrid = ({ project }: ProjectImageGridProps) => {
  const renderGrid = () => {
    // Project 1: Single image
    if (project.id === 1) {
      return <SingleImageGrid image={project.image} title={project.title} />;
    }
    // Projects with 4-image grid
    const fourImageGridProjects = [2, 3, 4, 6, 7, 8, 9, 10, 11];
    if (fourImageGridProjects.includes(project.id) && project.customImages) {
      return <Project4Grid images={project.customImages} />;
    }
    // Project 5: 3-image grid
    if (project.id === 5 && project.customImages) {
      return <Project5Grid images={project.customImages} />;
    }
    // Default: 4-image placeholder grid
    return <DefaultImageGrid />;
  };

  return <div className="pb-16">{renderGrid()}</div>;
};

export default ProjectImageGrid;
