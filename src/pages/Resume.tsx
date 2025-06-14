
import { useState } from "react";
import Navigation from "../components/Navigation";
import ResumeHeader from "../components/resume/ResumeHeader";
import ResumeSection from "../components/resume/ResumeSection";
import ExperienceItem from "../components/resume/ExperienceItem";
import SkillsGrid from "../components/resume/SkillsGrid";
import LanguageCard from "../components/resume/LanguageCard";
import LanguageSelector from "../components/resume/LanguageSelector";
import { resumeTranslations } from "../data/resumeTranslations";

const Resume = () => {
  const [language, setLanguage] = useState("en");
  
  const t = resumeTranslations[language as keyof typeof resumeTranslations];

  return (
    <div className="min-h-screen bg-white">
      <div className="print:hidden">
        <Navigation />
      </div>
      
      <div className="container mx-auto px-6 py-8 max-w-4xl mt-16 print:mt-0 print:px-0">
        {/* Language Selector and Print Button - Hidden when printing */}
        <div className="flex items-center justify-between mb-8 print:hidden">
          <div className="flex-1 max-w-md">
            <LanguageSelector 
              currentLanguage={language} 
              onLanguageChange={setLanguage} 
            />
          </div>
          <button 
            onClick={() => window.print()} 
            className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500 transition-colors border-2 border-black transform hover:rotate-1"
          >
            {t.printButton}
          </button>
        </div>

        {/* Resume content - starts here for printing */}
        <div className="print:mt-0">
          <ResumeHeader />

          <ResumeSection title={t.introduction.title}>
            <p className="text-gray-700 leading-relaxed">
              {t.introduction.content}
            </p>
          </ResumeSection>

          <ResumeSection title={t.skills.title}>
            <div className="grid md:grid-cols-3 gap-6 print:grid-cols-3 print:gap-4">
              {t.skills.categories.map((category, index) => (
                <div key={index} className="print:break-inside-avoid">
                  <h3 className="font-semibold text-gray-800 mb-2">{category.title}</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>• {skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title={t.experience.title}>
            <div className="space-y-6">
              {t.experience.items.map((experience, index) => (
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

          <ResumeSection title={t.education.title}>
            <div className="space-y-4">
              <div className="border-l-4 border-red-400 pl-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800">{t.education.degree}</h3>
                    <p className="text-red-400">{t.education.institution}</p>
                  </div>
                  <span className="text-sm text-gray-500">{t.education.period}</span>
                </div>
              </div>
            </div>
          </ResumeSection>

          <ResumeSection title={t.languages.title}>
            <div className="grid md:grid-cols-3 gap-4 print:grid-cols-3 print:gap-2 print:flex print:flex-wrap">
              {t.languages.items.map((lang, index) => (
                <div key={index} className="print:flex-1 print:min-w-0">
                  <LanguageCard
                    language={lang.language}
                    level={lang.level}
                  />
                </div>
              ))}
            </div>
          </ResumeSection>
        </div>
      </div>
    </div>
  );
};

export default Resume;
