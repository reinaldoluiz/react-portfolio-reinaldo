
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Design Tools",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe Creative Suite", level: 90 },
        { name: "Sketch", level: 85 },
        { name: "Principle", level: 80 }
      ]
    },
    {
      title: "Development",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 75 },
        { name: "React", level: 70 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "UX Methods",
      skills: [
        { name: "User Research", level: 95 },
        { name: "Usability Testing", level: 90 },
        { name: "Information Architecture", level: 88 },
        { name: "Design Systems", level: 92 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Skills & Expertise</h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            A blend of design thinking, technical skills, and user-centered methodologies.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-6 text-slate-900">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                        <span className="text-sm text-slate-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
