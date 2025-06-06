
const Skills = () => {
  const skillCategories = [
    {
      title: "Design Tools",
      skills: ["Figma", "Adobe Creative Suite", "Sketch", "Principle"],
      illustration: "/lovable-uploads/45b28675-eb95-4a86-b3cc-3a79f03709d0.png",
      color: "bg-blue-100"
    },
    {
      title: "Development", 
      skills: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS"],
      illustration: "/lovable-uploads/6fc5ff19-a59d-4426-967e-0a1990aa3c84.png",
      color: "bg-green-100"
    },
    {
      title: "UX Methods",
      skills: ["User Research", "Usability Testing", "Information Architecture", "Design Systems"],
      illustration: "/lovable-uploads/f9e35747-07b9-409a-8404-387cce1846a7.png",
      color: "bg-yellow-100"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Sketchy background elements */}
      <div className="absolute top-10 left-10 w-20 h-4 bg-purple-300 transform rotate-45 opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 border-2 border-orange-400 transform rotate-12 opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 transform -rotate-1 inline-block">
              My Toolkit
            </h2>
            <div className="w-32 h-1 bg-green-400 mx-auto mt-4 transform rotate-2"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Every explorer needs the right gear! Here's what I pack for my design adventures.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="text-center">
                <div className={`${category.color} p-8 transform ${categoryIndex % 2 === 0 ? 'rotate-2' : '-rotate-1'} border-2 border-gray-300 mb-6`}>
                  <img 
                    src={category.illustration} 
                    alt={category.title} 
                    className="w-32 h-32 object-contain mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
                </div>
                
                <div className="bg-white p-6 transform rotate-1 border-2 border-gray-300 shadow-lg">
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-gray-100 px-4 py-2 transform -rotate-1 border border-gray-300">
                        <p className="text-gray-700 font-medium">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Fun fact */}
          <div className="text-center mt-16">
            <div className="bg-pink-100 p-6 transform rotate-1 border-2 border-gray-300 inline-block max-w-md">
              <p className="text-lg font-semibold text-gray-800 mb-2">
                🎒 Fun Fact!
              </p>
              <p className="text-gray-700">
                I always keep learning new tools and techniques - a designer's backpack is never fully packed!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
