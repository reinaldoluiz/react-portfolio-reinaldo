
const Projects = () => {
  const projects = [
    {
      title: "EcoCommerce App",
      description: "A sustainable shopping platform that helps users discover eco-friendly products.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    },
    {
      title: "FinTech Dashboard", 
      description: "A comprehensive financial dashboard for investment tracking with real-time data.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      title: "Learning Platform",
      description: "An intuitive educational platform connecting students and instructors.",
      year: "2023", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-gray-900">Projects</h2>
          
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-16 items-center">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
                
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <p className="text-sm text-gray-500 mb-4">{project.year}</p>
                  <h3 className="text-2xl md:text-3xl font-light mb-6 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
