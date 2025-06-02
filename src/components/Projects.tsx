
const Projects = () => {
  const projects = [
    {
      title: "EcoCommerce App",
      description: "A sustainable shopping platform that helps users discover eco-friendly products with an intuitive map-like navigation system.",
      year: "2024",
      image: "/lovable-uploads/8c522382-468a-41df-9106-8ffef5906707.png",
      color: "bg-green-50",
      tools: ["Figma", "User Research", "Prototyping"],
      metrics: "40% increase in user engagement"
    },
    {
      title: "FinTech Dashboard", 
      description: "A comprehensive financial dashboard for investment tracking - like having a compass for your financial journey.",
      year: "2024",
      image: "/lovable-uploads/a13a26b6-f595-4a4a-816e-693e4ae3b7be.png",
      color: "bg-blue-50",
      tools: ["Adobe XD", "Data Visualization", "Usability Testing"],
      metrics: "60% reduction in task completion time"
    },
    {
      title: "Learning Platform",
      description: "An educational platform connecting students and instructors - mapping out learning adventures for every user.",
      year: "2023", 
      image: "/lovable-uploads/c21c8675-9bb8-405c-a4c5-9917043f11f7.png",
      color: "bg-yellow-50",
      tools: ["Sketch", "Information Architecture", "User Flows"],
      metrics: "85% user satisfaction score"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            My Adventures
          </h2>
          <div className="w-32 h-1 bg-blue-400 mb-8 transform -rotate-1"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Each project is like a different expedition - unique challenges, discoveries, and destinations! 
            Here are some of my favorite design journeys.
          </p>
        </div>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`${project.color} p-12 transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} border-2 border-gray-200 shadow-sm`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-contain mx-auto"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="bg-red-200 px-3 py-1 text-sm font-bold text-gray-800 transform rotate-2">
                      {project.year}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">
                      {project.metrics}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="bg-white px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      View Case Study →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-20">
          <div className="bg-orange-100 p-8 transform -rotate-1 border-2 border-gray-200 inline-block max-w-md">
            <img 
              src="/lovable-uploads/2744b0f8-f478-4577-8f53-05767814047d.png" 
              alt="Running character" 
              className="w-20 h-20 object-contain mx-auto mb-4"
            />
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Ready for the next adventure?
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition-colors">
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
