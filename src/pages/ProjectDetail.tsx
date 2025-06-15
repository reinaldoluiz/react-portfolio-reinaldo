
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectHeader from '../components/project-detail/ProjectHeader';
import ProjectInfoGrid from '../components/project-detail/ProjectInfoGrid';
import ProjectImageGrid from '../components/project-detail/ProjectImageGrid';
import ProjectDetails from '../components/project-detail/ProjectDetails';
import ProjectCTA from '../components/project-detail/ProjectCTA';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id || '1')) || projects[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-16">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 transform -rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-gray-300 text-gray-700 hover:text-red-400"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
          </div>

          {/* Project Header */}
          <ProjectHeader project={project} />

          {/* Project Info Grid */}
          <ProjectInfoGrid project={project} />

          {/* Project Images Grid */}
          <ProjectImageGrid project={project} />

          {/* Project Details */}
          <ProjectDetails project={project} />

          {/* Call to Action */}
          <ProjectCTA />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
