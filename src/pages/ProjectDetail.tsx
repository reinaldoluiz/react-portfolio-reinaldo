import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Users, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Mock project data - in a real app, this would come from an API or database
  const project = {
    id: parseInt(id || '1'),
    title: "Intimus Brazil",
    subtitle: "Sustainable Shopping Platform",
    description: "A comprehensive sustainable shopping platform that helps users discover eco-friendly products through an intuitive map-like navigation system. The app focuses on environmental impact transparency and conscious consumer choices.",
    year: "2024",
    duration: "4 months",
    team: "Designer, 2 Developers, PM",
    role: "Product Designer",
    image: "/lovable-uploads/53a631d0-16bb-4460-970a-b51729b1668b.png",
    color: "bg-pink-100",
    tools: ["Figma", "User Research", "Prototyping", "Adobe Creative Suite"],
    category: "UI Design",
    problem: "Users struggle to find and verify eco-friendly products while shopping online. Existing platforms lack transparency about environmental impact and sustainable alternatives.",
    solution: "Created an intuitive mobile app with map-based navigation, sustainability scores, and AR features to help users make informed eco-friendly purchasing decisions.",
    process: [
      "User Research & Interviews",
      "Competitive Analysis", 
      "Wireframing & Prototyping",
      "User Testing & Iteration",
      "Final Design & Handoff"
    ],
    results: [
      "40% increase in user engagement",
      "25% improvement in task completion",
      "4.8/5 app store rating",
      "Featured in sustainability category"
    ]
  };

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
          <div className="text-center mb-16">
            <div className="mb-6">
              <div className="bg-red-200 px-4 py-2 inline-block transform rotate-2">
                <p className="text-sm font-bold text-gray-800">{project.category}</p>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 transform -rotate-1 inline-block mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{project.subtitle}</p>
            <div className="w-32 h-1 bg-blue-400 mx-auto transform rotate-1"></div>
          </div>

          {/* Project Info Grid */}
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
                {project.tools.map((tool, index) => (
                  <span key={index} className="bg-white px-2 py-1 text-xs font-semibold text-gray-700 border border-gray-400">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Image - Updated with pink background */}
          <div className="mb-16">
            <div className={`${project.color} p-8 transform -rotate-1 border-2 border-gray-300`}>
              <div className="w-full max-w-4xl mx-auto">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto object-cover object-top rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Project Details */}
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
                    <li key={index} className="text-gray-700 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      {step}
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

          {/* Call to Action */}
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
