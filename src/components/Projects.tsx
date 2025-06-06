
const Projects = () => {
  const projects = [
    {
      title: "EcoCommerce App",
      description: "A sustainable shopping platform that helps users discover eco-friendly products with an intuitive map-like navigation system.",
      year: "2024",
      image: "/lovable-uploads/4ea7692a-f646-41c6-a293-9a18f209e15d.png",
      color: "bg-green-100",
      tools: ["Figma", "User Research", "Prototyping"]
    },
    {
      title: "FinTech Dashboard", 
      description: "A comprehensive financial dashboard for investment tracking - like having a compass for your financial journey.",
      year: "2024",
      image: "/lovable-uploads/5c46fb05-5f26-4317-a11c-c681893bd33e.png",
      color: "bg-blue-100",
      tools: ["Adobe XD", "Data Visualization", "Usability Testing"]
    },
    {
      title: "Learning Platform",
      description: "An educational platform connecting students and instructors - mapping out learning adventures for every user.",
      year: "2023", 
      image: "/lovable-uploads/898d43f4-a54b-415e-8512-7d437380d908.png",
      color: "bg-yellow-100",
      tools: ["Sketch", "Information Architecture", "User Flows"]
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Sketchy decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-2 bg-red-300 transform rotate-12 opacity-40"></div>
      <div className="absolute bottom-40 right-20 w-8 h-8 border-2 border-green-400 rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 transform rotate-1 inline-block">
              My Adventures
            </h2>
            <div className="w-32 h-1 bg-blue-400 mx-auto mt-4 transform -rotate-1"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Each project is like a different expedition - unique challenges, discoveries, and destinations!
            </p>
          </div>
          
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-16 items-center">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className={`${project.color} p-8 transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} border-2 border-gray-300`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-48 h-48 object-contain mx-auto"
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
              <p className="text-lg font-semibold text-gray-800">
                Ready for the next adventure? Let's work together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
