
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "EcoCommerce App",
      description: "A sustainable shopping platform that helps users discover eco-friendly products with an intuitive map-like navigation system.",
      year: "2024",
      image: "/lovable-uploads/4ea7692a-f646-41c6-a293-9a18f209e15d.png",
      color: "bg-green-100",
      tools: ["Figma", "User Research", "Prototyping"],
      category: "UI Design"
    },
    {
      id: 2,
      title: "FinTech Dashboard", 
      description: "A comprehensive financial dashboard for investment tracking - like having a compass for your financial journey.",
      year: "2024",
      image: "/lovable-uploads/5c46fb05-5f26-4317-a11c-c681893bd33e.png",
      color: "bg-blue-100",
      tools: ["Adobe XD", "Data Visualization", "Usability Testing"],
      category: "Design System"
    },
    {
      id: 3,
      title: "Learning Platform",
      description: "An educational platform connecting students and instructors - mapping out learning adventures for every user.",
      year: "2023", 
      image: "/lovable-uploads/898d43f4-a54b-415e-8512-7d437380d908.png",
      color: "bg-yellow-100",
      tools: ["Sketch", "Information Architecture", "User Flows"],
      category: "Research"
    },
    {
      id: 4,
      title: "Healthcare App",
      description: "A telemedicine application that connects patients with doctors through an intuitive and accessible interface.",
      year: "2023",
      image: "/lovable-uploads/3bc795d8-161f-4f91-acc0-46a5d2d4b7d9.png",
      color: "bg-pink-100",
      tools: ["Figma", "Accessibility Design", "User Testing"],
      category: "UI Design"
    },
    {
      id: 5,
      title: "Food Delivery UI",
      description: "A modern food delivery interface focusing on quick ordering and real-time tracking features.",
      year: "2022",
      image: "/lovable-uploads/4ea7692a-f646-41c6-a293-9a18f209e15d.png",
      color: "bg-orange-100",
      tools: ["Adobe XD", "Micro-interactions", "Prototyping"],
      category: "UI Design"
    },
    {
      id: 6,
      title: "Brand Identity Project",
      description: "A comprehensive brand identity design including logo, color palette, and marketing materials.",
      year: "2022",
      image: "/lovable-uploads/5c46fb05-5f26-4317-a11c-c681893bd33e.png",
      color: "bg-purple-100",
      tools: ["Illustrator", "InDesign", "Brand Strategy"],
      category: "Design Gráfico"
    }
  ];

  const categories = ["Todos", "Research", "UI Design", "Design System", "Design Gráfico"];

  const filterProjectsByCategory = (category: string) => {
    if (category === "Todos") return projects;
    return projects.filter(project => project.category === category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 transform rotate-1 inline-block mb-4">
              Portfolio
            </h1>
            <div className="w-32 h-1 bg-blue-400 mx-auto transform -rotate-1 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              A collection of my design adventures - each project tells a story of discovery, challenge, and creative solutions!
            </p>
          </div>

          {/* Categories Tabs */}
          <Tabs defaultValue="Todos" className="w-full max-w-4xl mx-auto mb-16">
            <TabsList className="grid w-full grid-cols-5 bg-white">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-red-400 data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-8">
                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {filterProjectsByCategory(category).map((project, index) => (
                    <div key={index} className="group">
                      <div className={`${project.color} p-6 transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} group-hover:rotate-0 transition-all duration-300 border-2 border-gray-300 shadow-lg hover:shadow-xl`}>
                        {/* Project Image */}
                        <div className="mb-4">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-48 object-contain mx-auto"
                          />
                        </div>

                        {/* Category Badge */}
                        <div className="bg-red-200 px-3 py-1 inline-block transform rotate-2 mb-3">
                          <p className="text-xs font-bold text-gray-800">{project.category}</p>
                        </div>

                        {/* Project Info */}
                        <h3 className="text-xl font-bold mb-3 text-gray-800">
                          {project.title}
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {/* Year */}
                        <div className="bg-gray-200 px-3 py-1 inline-block transform -rotate-1 mb-4">
                          <p className="text-sm font-bold text-gray-800">{project.year}</p>
                        </div>

                        {/* Tools */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tools.map((tool, toolIndex) => (
                            <span key={toolIndex} className="bg-white px-2 py-1 text-xs font-semibold text-gray-700 transform rotate-1 border border-gray-400">
                              {tool}
                            </span>
                          ))}
                        </div>

                        {/* Details Button */}
                        <Link 
                          to={`/portfolio/${project.id}`}
                          className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 text-sm font-semibold transform -rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-black inline-block"
                        >
                          Ver Detalhes →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-orange-200 p-8 transform -rotate-1 border-2 border-gray-300 inline-block max-w-md">
              <img 
                src="/lovable-uploads/3bc795d8-161f-4f91-acc0-46a5d2d4b7d9.png" 
                alt="Adventure character" 
                className="w-24 h-24 object-contain mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Like what you see?
              </h3>
              <p className="text-gray-700 mb-4">
                Let's embark on a new design adventure together!
              </p>
              <Link 
                to="/#contact"
                className="bg-red-400 hover:bg-red-500 text-white px-6 py-3 font-semibold transform rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-black inline-block"
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

export default Portfolio;
