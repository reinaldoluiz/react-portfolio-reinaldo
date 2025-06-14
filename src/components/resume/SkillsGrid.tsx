
interface SkillCategory {
  title: string;
  skills: string[];
}

const SkillsGrid = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Design & Prototipagem",
      skills: [
        "Figma & Adobe Creative Suite",
        "Design Systems & Style guides",
        "Prototipagem interativa",
        "Wireframing & mockups",
        "Design responsivo"
      ]
    },
    {
      title: "Pesquisa & Estratégia UX",
      skills: [
        "User research & personas",
        "Testes de usabilidade",
        "Journey mapping",
        "Análise de dados & métricas",
        "A/B testing"
      ]
    },
    {
      title: "Desenvolvimento Frontend",
      skills: [
        "HTML5, CSS3, JavaScript",
        "React & frameworks modernos",
        "Bootstrap & Tailwind CSS",
        "Ruby on Rails",
        "Git & controle de versão"
      ]
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {skillCategories.map((category, index) => (
        <div key={index}>
          <h3 className="font-semibold text-gray-800 mb-2">{category.title}</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            {category.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>• {skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
