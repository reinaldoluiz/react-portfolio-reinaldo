import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Sketchy decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-2 bg-red-300 transform rotate-12 opacity-40"></div>
      <div className="absolute bottom-40 right-20 w-8 h-8 border-2 border-green-400 rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 transform rotate-1 inline-block">
              Featured Projects
            </h2>
            <div className="w-32 h-1 bg-blue-400 mx-auto mt-4 transform -rotate-1"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Real-world projects where I've collaborated with global teams to create impactful digital experiences!
            </p>
          </div>
          
          <div className="space-y-24">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="grid md:grid-cols-2 gap-16 items-center">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className={`${project.color} p-8 transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} border-2 border-gray-300`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-auto mx-auto"
                    />
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="bg-white p-8 transform -rotate-1 border-2 border-gray-300 shadow-lg">
                    <div className="bg-red-200 px-3 py-1 inline-block transform rotate-2 mb-4">
                      <p className="text-sm font-bold text-gray-800">{project.year}</p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 transform rotate-1 border border-gray-400">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Fun call-to-action */}
          <div className="text-center mt-20">
            <div className="bg-orange-200 p-6 transform -rotate-1 border-2 border-gray-300 inline-block">
              <img 
                src="/lovable-uploads/3bc795d8-161f-4f91-acc0-46a5d2d4b7d9.png" 
                alt="Running character" 
                className="w-24 h-24 object-contain mx-auto mb-4"
              />
              <p className="text-lg font-semibold text-gray-800 mb-4">
                Ready for the next adventure? Let's work together!
              </p>
              <Link 
                to="/portfolio"
                className="bg-red-400 hover:bg-red-500 text-white px-6 py-3 font-semibold transform rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-black inline-block"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
