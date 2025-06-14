import { Download, MapPin, Phone, Mail, Calendar, Linkedin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resume = () => {
  const resumeData = {
    pt: {
      title: "Currículo",
      downloadText: "Baixar PDF",
      personalInfo: {
        name: "Reinaldo Luiz",
        aboutTitle: "SOBRE",
        aboutText: "Sou Reinaldo, um brasileiro atualmente na Espanha estudando mestrado em design UX. Tenho conhecimento de todas as etapas de desenvolvimento e habilidades de experiência do usuário em frontend para a construção visual de páginas. Sou um profissional criativo e adaptável com experiência em UX e design gráfico. Trago comigo habilidades valiosas em resolução de problemas, comunicação e trabalho em equipe. Estou sempre me esforçando para aprender e me adaptar a novos desafios, e acredito que minha atenção aos detalhes e capacidade de pensar criticamente podem trazer valor em qualquer ambiente de trabalho. Meu objetivo é contribuir positivamente para a equipe e ajudar a alcançar resultados eficazes."
      },
      contact: {
        location: "São Paulo, Brasil",
        phone: "+55 (11) 99999-9999",
        email: "reinaldo@email.com",
        experience: "5+ anos de experiência"
      },
      sections: {
        experience: "Experiência",
        education: "Formação",
        skills: "Habilidades Principais"
      },
      jobs: [
        {
          title: "Designer UX/UI Sênior",
          company: "TechCorp • 2022 - Presente",
          tasks: [
            "• Liderei o design de 3 grandes lançamentos de produtos",
            "• Melhorei a satisfação do usuário em 40% através de design baseado em pesquisa",
            "• Orientei designers juniores e estabeleci sistema de design"
          ]
        },
        {
          title: "Designer UX",
          company: "StartupXYZ • 2020 - 2022",
          tasks: [
            "• Projetei aplicativo mobile com 100k+ downloads",
            "• Conduzi pesquisa de usuário e testes de usabilidade",
            "• Colaborei com equipe de desenvolvimento na implementação"
          ]
        }
      ],
      education: {
        degree: "Bacharelado em Design",
        institution: "Universidade de São Paulo • 2016 - 2020",
        focus: "Foco em Design Digital e Experiência do Usuário"
      },
      skillsCategories: [
        {
          title: "Design",
          skills: "Figma, Adobe CC, Sketch, Prototipagem"
        },
        {
          title: "Desenvolvimento",
          skills: "HTML/CSS, JavaScript, React"
        },
        {
          title: "Pesquisa",
          skills: "Teste de Usuário, Analytics, Entrevistas"
        }
      ]
    },
    en: {
      title: "Resume",
      downloadText: "Download PDF",
      personalInfo: {
        name: "Reinaldo Luiz",
        aboutTitle: "ABOUT",
        aboutText: "I am Reinaldo, a Brazilian currently in Spain studying for a master's degree in UX design. I have knowledge of all stages of development and user experience skills in frontend for the visual construction of pages. I am a creative and adaptable professional with experience in UX and graphic design. I bring with me valuable skills in problem-solving, communication and teamwork. I am always striving to learn and adapt to new challenges, and I believe that my attention to detail and ability to think critically can bring value in any work environment. My goal is to contribute positively to the team and help achieve effective results."
      },
      contact: {
        location: "São Paulo, Brazil",
        phone: "+55 (11) 99999-9999",
        email: "reinaldo@email.com",
        experience: "5+ years experience"
      },
      sections: {
        experience: "Experience",
        education: "Education",
        skills: "Key Skills"
      },
      jobs: [
        {
          title: "Senior UX/UI Designer",
          company: "TechCorp • 2022 - Present",
          tasks: [
            "• Led design for 3 major product launches",
            "• Improved user satisfaction by 40% through research-driven design",
            "• Mentored junior designers and established design system"
          ]
        },
        {
          title: "UX Designer",
          company: "StartupXYZ • 2020 - 2022",
          tasks: [
            "• Designed mobile app with 100k+ downloads",
            "• Conducted user research and usability testing",
            "• Collaborated with development team on implementation"
          ]
        }
      ],
      education: {
        degree: "Bachelor in Design",
        institution: "University of São Paulo • 2016 - 2020",
        focus: "Focus on Digital Design and User Experience"
      },
      skillsCategories: [
        {
          title: "Design",
          skills: "Figma, Adobe CC, Sketch, Prototyping"
        },
        {
          title: "Development",
          skills: "HTML/CSS, JavaScript, React"
        },
        {
          title: "Research",
          skills: "User Testing, Analytics, Interviews"
        }
      ]
    },
    es: {
      title: "Currículum",
      downloadText: "Descargar PDF",
      personalInfo: {
        name: "Reinaldo Luiz",
        aboutTitle: "ACERCA DE",
        aboutText: "Soy Reinaldo, un brasileño actualmente en España estudiando una maestría en diseño UX. Tengo conocimiento de todas las etapas de desarrollo y habilidades de experiencia de usuario en frontend para la construcción visual de páginas. Soy un profesional creativo y adaptable con experiencia en UX y diseño gráfico. Traigo conmigo habilidades valiosas en resolución de problemas, comunicación y trabajo en equipo. Siempre me esfuerzo por aprender y adaptarme a nuevos desafíos, y creo que mi atención al detalle y capacidad de pensar críticamente pueden aportar valor en cualquier ambiente de trabajo. Mi objetivo es contribuir positivamente al equipo y ayudar a lograr resultados efectivos."
      },
      contact: {
        location: "São Paulo, Brasil",
        phone: "+55 (11) 99999-9999",
        email: "reinaldo@email.com",
        experience: "5+ años de experiencia"
      },
      sections: {
        experience: "Experiencia",
        education: "Educación",
        skills: "Habilidades Clave"
      },
      jobs: [
        {
          title: "Diseñador UX/UI Senior",
          company: "TechCorp • 2022 - Presente",
          tasks: [
            "• Lideré el diseño de 3 grandes lanzamientos de productos",
            "• Mejoré la satisfacción del usuario en 40% mediante diseño basado en investigación",
            "• Mentoré diseñadores junior y establecí sistema de diseño"
          ]
        },
        {
          title: "Diseñador UX",
          company: "StartupXYZ • 2020 - 2022",
          tasks: [
            "• Diseñé aplicación móvil con 100k+ descargas",
            "• Realicé investigación de usuarios y pruebas de usabilidad",
            "• Colaboré con equipo de desarrollo en implementación"
          ]
        }
      ],
      education: {
        degree: "Licenciatura en Diseño",
        institution: "Universidad de São Paulo • 2016 - 2020",
        focus: "Enfoque en Diseño Digital y Experiencia de Usuario"
      },
      skillsCategories: [
        {
          title: "Diseño",
          skills: "Figma, Adobe CC, Sketch, Prototipado"
        },
        {
          title: "Desarrollo",
          skills: "HTML/CSS, JavaScript, React"
        },
        {
          title: "Investigación",
          skills: "Pruebas de Usuario, Analytics, Entrevistas"
        }
      ]
    }
  };

  const renderResumeContent = (lang: 'pt' | 'en' | 'es') => {
    const data = resumeData[lang];
    
    return (
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 transform -rotate-1 inline-block mb-4">
            {data.title}
          </h1>
          <div className="w-32 h-1 bg-red-400 mx-auto transform rotate-1 mb-6"></div>
          
          {/* Language Tabs */}
          <div className="mb-8">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 bg-transparent border-b border-gray-200 p-0 h-auto rounded-none">
              <TabsTrigger 
                value="en"
                className="text-sm font-semibold py-3 px-4 rounded-none border-b-2 border-transparent data-[state=active]:border-red-400 data-[state=active]:text-red-400 data-[state=active]:bg-transparent hover:text-red-300 transition-all duration-300"
              >
                English
              </TabsTrigger>
              <TabsTrigger 
                value="es"
                className="text-sm font-semibold py-3 px-4 rounded-none border-b-2 border-transparent data-[state=active]:border-red-400 data-[state=active]:text-red-400 data-[state=active]:bg-transparent hover:text-red-300 transition-all duration-300"
              >
                Español
              </TabsTrigger>
              <TabsTrigger 
                value="pt" 
                className="text-sm font-semibold py-3 px-4 rounded-none border-b-2 border-transparent data-[state=active]:border-red-400 data-[state=active]:text-red-400 data-[state=active]:bg-transparent hover:text-red-300 transition-all duration-300"
              >
                Português
              </TabsTrigger>
            </TabsList>
          </div>

          <button className="bg-red-400 hover:bg-red-500 text-white px-6 py-3 font-semibold transform -rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-black shadow-lg flex items-center gap-2 mx-auto">
            <Download size={20} />
            {data.downloadText}
          </button>
        </div>

        {/* Personal Information Section */}
        <div className="mb-12">
          <div className="text-left mb-8">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 transform rotate-1 inline-block mb-4">
              {data.personalInfo.name}
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <Linkedin size={24} className="text-red-400" />
              <a 
                href="https://www.linkedin.com/in/reinaldolluiz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-500 font-semibold underline"
              >
                linkedin.com/in/reinaldolluiz/
              </a>
            </div>
          </div>
          
          <div className="bg-slate-50 p-8 transform -rotate-1 border border-gray-200 mb-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 transform rotate-1 inline-block">
              {data.personalInfo.aboutTitle}
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {data.personalInfo.aboutText}
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-blue-50 p-6 transform rotate-1 border border-gray-200 mb-12 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-red-400" />
              <span className="text-gray-700">{data.contact.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-red-400" />
              <span className="text-gray-700">{data.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-red-400" />
              <span className="text-gray-700">{data.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-red-400" />
              <span className="text-gray-700">{data.contact.experience}</span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 transform -rotate-1 inline-block">
            {data.sections.experience}
          </h2>
          <div className="space-y-8">
            {data.jobs.map((job, index) => (
              <div key={index} className={`p-6 transform ${index % 2 === 0 ? '-rotate-1 bg-amber-50' : 'rotate-1 bg-emerald-50'} border border-gray-200 rounded-lg`}>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                <p className="text-red-400 font-semibold mb-2">{job.company}</p>
                <ul className="text-gray-700 space-y-1">
                  {job.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 transform rotate-1 inline-block">
            {data.sections.education}
          </h2>
          <div className="bg-rose-50 p-6 transform -rotate-1 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{data.education.degree}</h3>
            <p className="text-red-400 font-semibold mb-2">{data.education.institution}</p>
            <p className="text-gray-700">{data.education.focus}</p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 transform -rotate-1 inline-block">
            {data.sections.skills}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.skillsCategories.map((category, index) => (
              <div key={index} className={`p-4 transform ${index % 3 === 0 ? 'rotate-1 bg-purple-50' : index % 3 === 1 ? '-rotate-1 bg-teal-50' : 'rotate-1 bg-orange-50'} border border-gray-200 rounded-lg`}>
                <h3 className="font-bold text-gray-800 mb-2">{category.title}</h3>
                <p className="text-gray-700 text-sm">{category.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Tabs defaultValue="en" className="w-full">
          <TabsContent value="en">
            {renderResumeContent('en')}
          </TabsContent>
          
          <TabsContent value="es">
            {renderResumeContent('es')}
          </TabsContent>
          
          <TabsContent value="pt">
            {renderResumeContent('pt')}
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
