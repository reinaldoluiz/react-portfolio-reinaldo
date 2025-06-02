
const Skills = () => {
  const skillCategories = [
    {
      title: "Design Tools",
      skills: ["Figma", "Adobe Creative Suite", "Sketch", "Principle"]
    },
    {
      title: "Development", 
      skills: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS"]
    },
    {
      title: "UX Methods",
      skills: ["User Research", "Usability Testing", "Information Architecture", "Design Systems"]
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-gray-900">Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-medium mb-8 text-gray-900">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <p key={skillIndex} className="text-gray-700">{skill}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
