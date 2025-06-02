
const Skills = () => {
  const skillCategories = [
    {
      title: "Design Tools",
      skills: ["Figma", "Adobe Creative Suite", "Sketch", "Principle"],
      illustration: "/lovable-uploads/ec645de9-161b-42c7-a79a-55568ad202b4.png",
      color: "bg-blue-50"
    },
    {
      title: "Development", 
      skills: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS"],
      illustration: "/lovable-uploads/854b38a4-9b9c-4a87-b32d-52abdfb9b99a.png",
      color: "bg-green-50"
    },
    {
      title: "UX Methods",
      skills: ["User Research", "Usability Testing", "Information Architecture", "Design Systems"],
      illustration: "/lovable-uploads/565de3cd-214f-487a-8680-a68a60ce12ed.png",
      color: "bg-yellow-50"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            My Toolkit
          </h2>
          <div className="w-32 h-1 bg-green-400 mb-8 transform rotate-2"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Every explorer needs the right gear! Here's what I pack for my design adventures - 
            from research tools to design software and development skills.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group">
              {/* Illustration */}
              <div className={`${category.color} p-8 mb-8 transform ${categoryIndex % 2 === 0 ? 'rotate-2' : '-rotate-1'} border-2 border-gray-200 group-hover:rotate-0 transition-transform duration-300`}>
                <img 
                  src={category.illustration} 
                  alt={category.title} 
                  className="w-32 h-32 object-contain mx-auto"
                />
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gray-50 px-4 py-3 border border-gray-200 hover:bg-gray-100 transition-colors">
                      <p className="text-gray-700 font-medium">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Fun fact */}
        <div className="text-center mt-20">
          <div className="bg-pink-50 p-8 transform rotate-1 border-2 border-gray-200 inline-block max-w-2xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              🎒 Fun Fact!
            </h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              I always keep learning new tools and techniques - a designer's backpack is never fully packed! 
              Currently exploring AI-powered design tools and motion design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
