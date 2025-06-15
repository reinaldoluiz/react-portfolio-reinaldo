import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Intimus Brazil",
      description: "A sustainable shopping platform that helps users discover eco-friendly products with an intuitive map-like navigation system.",
      year: "2024",
      image: "/lovable-uploads/53a631d0-16bb-4460-970a-b51729b1668b.png",
      color: "bg-pink-100",
      tools: ["Figma", "User Research", "Prototyping", "Adobe Creative Suite"],
      category: "UI Design"
    },
    {
      id: 2,
      title: "Pull-Ups E-commerce", 
      description: "Complete e-commerce redesign for Pull-Ups training pants, creating an engaging and educational platform for parents. The project focused on combining product discovery with educational content about potty training.",
      year: "2024",
      image: "/lovable-uploads/18593925-b8e8-43b5-94fa-a39fedaf3798.png",
      color: "bg-purple-100",
      tools: ["Research", "UI Design", "Design System"],
      categories: ["Research", "UI Design", "Design System"]
    },
    {
      id: 3,
      title: "Santander Auto",
      description: "Complete redesign of the Santander Auto app and landing page, creating a seamless digital experience for car and motorcycle insurance. The project focused on improving user journey and adding value to insurance installments.",
      year: "2023", 
      image: "/lovable-uploads/e171f6c0-f022-4ab0-a8cb-67dc5c32b757.png",
      color: "bg-red-100",
      tools: ["UX Research", "Mobile Design", "Design System", "User Testing"],
      category: "UX/UI Design"
    },
    {
      id: 4,
      title: "Viva E-commerce",
      description: "Uma experiência de e-commerce sustentável com foco em produtos eco-friendly e jornada de compra intuitiva.",
      year: "2024",
      image: "/lovable-uploads/bc92d7c9-9d89-40f6-839a-3dae35ff94fd.png", // caneca
      color: "bg-pink-100",
      tools: ["Figma", "UI Design", "User Research"],
      category: "UI Design",
      images: [
        "/lovable-uploads/bc92d7c9-9d89-40f6-839a-3dae35ff94fd.png", // caneca - principal
        "/lovable-uploads/5b7c2195-2d61-49dc-a6c1-ee8578150f9a.png",
        "/lovable-uploads/84f32a35-cb29-4d19-9f29-67d0b7f09a3a.png",
        "/lovable-uploads/8feffc75-561a-49fd-8445-8513dcce8d18.png",
      ],
    },
    {
      id: 5,
      title: "TrackView Web System",
      description: "Complete redesign of a banking file transfer tracking system. Enhanced usability, interface and visual consistency for Brazilian corporations.",
      year: "2023",
      image: "/lovable-uploads/53667846-5168-4010-928b-8bb20a0242a7.png",
      color: "bg-orange-100",
      tools: ["Adobe XD", "Illustrator", "Photoshop", "Hotjar", "Google Analytics"],
      category: "UI/UX Design",
      images: [
        "/lovable-uploads/53667846-5168-4010-928b-8bb20a0242a7.png"
      ],
    },
    {
      id: 6,
      title: "Brand Identity Project",
      description: "A comprehensive brand identity design including logo, color palette, and marketing materials.",
      year: "2022",
      image: "/lovable-uploads/5c46fb05-5f26-4317-a11c-c681893bd33e.png",
      color: "bg-purple-100",
      tools: ["Illustrator", "InDesign", "Brand Strategy"],
      category: "Graphic Design"
    }
  ];

  const categories = ["All", "Research", "UI Design", "UX/UI Design", "Design System", "Graphic Design"];

  const filterProjectsByCategory = (category: string) => {
    if (category === "All") return projects;
    return projects.filter(project => {
      // Handle project 2 with multiple categories
      if (project.categories) {
        return project.categories.includes(category);
      }
      return project.category === category;
    });
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
          <Tabs defaultValue="All" className="w-full max-w-4xl mx-auto mb-16">
            <TabsList className="grid w-full grid-cols-6 bg-white">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-red-400 data-[state=active]:text-white text-xs"
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
                            className="w-full h-auto mx-auto"
                          />
                        </div>

                        {/* Category Badge */}
                        <div className="mb-3">
                          {project.categories ? (
                            // Multiple categories for project 2
                            <div className="flex flex-wrap gap-1">
                              {project.categories.map((cat, catIndex) => (
                                <div key={catIndex} className="bg-red-200 px-2 py-1 inline-block transform rotate-2">
                                  <p className="text-xs font-bold text-gray-800">{cat}</p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            // Single category for other projects
                            <div className="bg-red-200 px-3 py-1 inline-block transform rotate-2">
                              <p className="text-xs font-bold text-gray-800">{project.category}</p>
                            </div>
                          )}
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
                          View Details →
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
