
import { Download, MapPin, Phone, Mail, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resume = () => {
  const resumeData = {
    pt: {
      title: "Currículo",
      downloadText: "Baixar PDF",
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
          <button className="bg-red-400 hover:bg-red-500 text-white px-6 py-3 font-semibold transform -rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-black shadow-lg flex items-center gap-2 mx-auto">
            <Download size={20} />
            {data.downloadText}
          </button>
        </div>

        {/* Contact Info */}
        <div className="bg-blue-50 p-6 transform rotate-1 border-2 border-gray-300 mb-12">
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
              <div key={index} className={`p-6 transform ${index % 2 === 0 ? '-rotate-1 bg-yellow-100' : 'rotate-1 bg-green-100'} border-2 border-gray-300`}>
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
          <div className="bg-pink-100 p-6 transform -rotate-1 border-2 border-gray-300">
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
              <div key={index} className={`p-4 transform ${index % 3 === 0 ? 'rotate-1 bg-orange-100' : index % 3 === 1 ? '-rotate-1 bg-blue-100' : 'rotate-1 bg-yellow-100'} border-2 border-gray-300`}>
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
        <Tabs defaultValue="pt" className="w-full">
          <div className="container mx-auto px-6 max-w-4xl">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-white border-2 border-gray-300 p-2 transform -rotate-1">
              <TabsTrigger 
                value="pt" 
                className="text-sm font-semibold text-center data-[state=active]:bg-red-400 data-[state=active]:text-white transform rotate-1 data-[state=active]:rotate-0 transition-all duration-300"
              >
                Português
              </TabsTrigger>
              <TabsTrigger 
                value="en"
                className="text-sm font-semibold text-center data-[state=active]:bg-red-400 data-[state=active]:text-white transform rotate-1 data-[state=active]:rotate-0 transition-all duration-300"
              >
                English
              </TabsTrigger>
              <TabsTrigger 
                value="es"
                className="text-sm font-semibold text-center data-[state=active]:bg-red-400 data-[state=active]:text-white transform rotate-1 data-[state=active]:rotate-0 transition-all duration-300"
              >
                Español
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="pt">
            {renderResumeContent('pt')}
          </TabsContent>
          
          <TabsContent value="en">
            {renderResumeContent('en')}
          </TabsContent>
          
          <TabsContent value="es">
            {renderResumeContent('es')}
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
