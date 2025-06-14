
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ResumeHeader from "../components/resume/ResumeHeader";
import ResumeSection from "../components/resume/ResumeSection";
import ExperienceItem from "../components/resume/ExperienceItem";
import SkillsGrid from "../components/resume/SkillsGrid";
import LanguageCard from "../components/resume/LanguageCard";

const Resume = () => {
  const experiences = [
    {
      title: "Product Designer",
      company: "Tech Mahindra (Remote)",
      period: "2024 - Presente",
      responsibilities: [
        "Lidero o design de produtos digitais para clientes globais",
        "Desenvolvimento de design systems escaláveis",
        "Colaboração com equipes multiculturais e multidisciplinares",
        "Implementação de metodologias ágeis de design"
      ]
    },
    {
      title: "UX/UI Designer",
      company: "HDI Seguros",
      period: "2023 - 2024",
      responsibilities: [
        "Redesign da plataforma digital de seguros",
        "Melhoria da experiência do usuário em 40%",
        "Implementação de testes A/B e análise de métricas",
        "Desenvolvimento de interface responsiva"
      ]
    },
    {
      title: "Senior UI/UX Designer",
      company: "Kimberly-Clark",
      period: "2020 - 2023",
      responsibilities: [
        "Design de experiências digitais para marcas globais",
        "Criação de design system unificado para múltiplas marcas",
        "Liderança de projetos de transformação digital",
        "Mentoria de designers juniores da equipe"
      ]
    },
    {
      title: "UI/UX Designer",
      company: "Santander",
      period: "2018 - 2020",
      responsibilities: [
        "Design de interfaces para aplicações bancárias",
        "Foco em usabilidade e segurança",
        "Colaboração com equipes de desenvolvimento ágil",
        "Testes de usabilidade com usuários reais"
      ]
    }
  ];

  const languages = [
    { language: "Português", level: "Nativo" },
    { language: "Inglês", level: "Avançado" },
    { language: "Espanhol", level: "Intermediário" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8 max-w-4xl mt-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center text-red-400 hover:text-red-500 font-medium">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Portfolio
          </Link>
          <button 
            onClick={() => window.print()} 
            className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500 transition-colors border-2 border-black transform hover:rotate-1"
          >
            Imprimir CV
          </button>
        </div>

        <ResumeHeader />

        <ResumeSection title="Introdução">
          <p className="text-gray-700 leading-relaxed">
            Designer experiente com mais de 8 anos de experiência em UI/UX e desenvolvimento frontend, 
            especializado em criar soluções digitais centradas no usuário. Tenho trabalhado com empresas 
            globais como Kimberly-Clark, Santander e HDI Seguros, desenvolvendo produtos digitais que 
            conectam necessidades dos usuários com objetivos de negócio. Minha abordagem combina pesquisa 
            de usuário, design thinking e implementação técnica para entregar experiências excepcionais.
          </p>
        </ResumeSection>

        <ResumeSection title="Competências Principais">
          <SkillsGrid />
        </ResumeSection>

        <ResumeSection title="Experiência Profissional">
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={index}
                title={experience.title}
                company={experience.company}
                period={experience.period}
                responsibilities={experience.responsibilities}
              />
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Formação">
          <div className="space-y-4">
            <div className="border-l-4 border-red-400 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">Bacharelado em Design Gráfico</h3>
                  <p className="text-red-400">Universidade Anhembi Morumbi</p>
                </div>
                <span className="text-sm text-gray-500">2012 - 2016</span>
              </div>
            </div>
          </div>
        </ResumeSection>

        <ResumeSection title="Idiomas">
          <div className="grid md:grid-cols-3 gap-4">
            {languages.map((lang, index) => (
              <LanguageCard
                key={index}
                language={lang.language}
                level={lang.level}
              />
            ))}
          </div>
        </ResumeSection>
      </div>
    </div>
  );
};

export default Resume;
