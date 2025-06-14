
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

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
    <div className="min-h-screen bg-white">
      <div className="print:hidden">
        <Navigation />
      </div>
      
      <div className="container mx-auto px-6 py-8 max-w-4xl mt-16 print:mt-0 print:px-0">
        {/* Header Section */}
        <div className="text-center mb-8 pb-8 border-b-2 border-gray-200">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Portfolio</h1>
          <p className="text-xl text-gray-600 mb-4">Design Projects & Creative Work</p>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            A collection of my design adventures - each project tells a story of discovery, challenge, and creative solutions!
          </p>
        </div>

        {/* Categories Selection - Updated to match Resume tabs style */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-red-400 pb-2">
            Project Categories
          </h2>
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="grid w-full grid-cols-5 bg-gray-100">
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
          </Tabs>
        </section>

        {/* Projects Grid */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-red-400 pb-2">
            {activeCategory === "Todos" ? "All Projects" : activeCategory}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4">
            {filterProjectsByCategory(activeCategory).map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 print:break-inside-avoid">
                <div className="mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 object-contain mx-auto"
                  />
                </div>
                
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-800">{project.title}</h3>
                    <p className="text-red-400 text-sm">{project.category}</p>
                  </div>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                
                <div className="mb-3">
                  <p className="text-xs text-gray-500 mb-1">Tools:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to={`/portfolio/${project.id}`}
                  className="text-red-400 hover:text-red-500 text-sm font-semibold"
                >
                  Ver Detalhes →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-red-400 pb-2">
            Let's Work Together
          </h2>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Like what you see?
            </h3>
            <p className="text-gray-700 mb-4">
              Let's embark on a new design adventure together!
            </p>
            <Link 
              to="/#contact"
              className="bg-red-400 hover:bg-red-500 text-white px-6 py-3 font-semibold rounded transition-colors inline-block"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
