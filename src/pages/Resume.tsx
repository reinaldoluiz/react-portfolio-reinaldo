
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
          title: "UI/UX Designer",
          company: "Tech Mahindra, Remote, United States • Out 2021 - Jan 2025",
          tasks: [
            "• Cliente atendido: Kimberly-Clark",
            "• Conduzi testes de usabilidade, garantindo acessibilidade e alinhamento dos objetivos dos stakeholders",
            "• Colaborei com equipes multiculturais em projetos mundiais",
            "• Desenvolvi e implementei sistemas de design seguindo critérios de melhoria e usabilidade",
            "• Criei landing pages, sites de e-commerce e sistemas para produtos em toda América do Norte e Sul"
          ]
        },
        {
          title: "UX Lead",
          company: "HDI Insurance, São Paulo - Brasil • Jan 2021 - Dez 2021",
          tasks: [
            "• Gerenciei projetos de agência mantendo identidade da marca e sistema de design",
            "• Coordenei trabalho da equipe UX com business e desenvolvedores",
            "• Criei ícones e componentes para manter consistência entre designers",
            "• Colaborei com equipes de design e desenvolvimento para implementar sistemas funcionais"
          ]
        },
        {
          title: "Product Designer",
          company: "Santander, São Paulo - Brasil • Jan 2021 - Dez 2021",
          tasks: [
            "• Participei do processo UX end-to-end, incluindo análise de dados para insights de negócio",
            "• Atualizei Sistema de Design, criando componentes e ícones",
            "• Liderei projeto de redesign do app para melhorar jornada do usuário",
            "• Participei ativamente de reuniões de decisão com business e desenvolvimento"
          ]
        },
        {
          title: "Product Designer",
          company: "Deloitte, Brasil • Mar 2020 - Dez 2020",
          tasks: [
            "• Produzi conceitos funcionais e conceituais em colaboração com POs e usuários finais",
            "• Traduzi conceitos em protótipos funcionais priorizados no desenvolvimento",
            "• Documentei User Stories, coletando requisitos e criando personas",
            "• Trabalhei com Salesforce, Vlocity Omniscript e LWC para clientes como Claro e Caixa Seguradora"
          ]
        },
        {
          title: "UX/UI Designer & Front-end Developer",
          company: "Finnet, Brasil • Mar 2019 - Set 2020",
          tasks: [
            "• Criei processos de design eficazes: fluxos UX, mapas de jornada, wireframes",
            "• Dominei princípios de design responsivo para mobile e desktop",
            "• Estabeleci padrões de design: guias de estilo UI, estratégias visuais e sistemas de design",
            "• Garanti experiência consistente do usuário across plataformas Web, iOS e Android"
          ]
        },
        {
          title: "UX/UI Designer & Front-end Developer",
          company: "Hortatech, Brasil • Set 2018 - Set 2019",
          tasks: [
            "• Criei wireframes, conduzi testes de usuário, A/B testing e pesquisa de usuário",
            "• Desenvolvi designs visualmente atraentes usando Adobe XD, Photoshop e Illustrator",
            "• Programei em JavaScript, HTML, CSS, Bootstrap com design responsivo",
            "• Otimizei projetos web para proporcionar experiência de usuário excepcional"
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
          title: "UI/UX Designer",
          company: "Tech Mahindra, Remote, United States • Oct 2021 - Jan 2025",
          tasks: [
            "• Clients Served: Kimberly-Clark",
            "• Conducted user testing, ensuring accessibility and aligning stakeholder goals",
            "• Collaborated with multicultural teams on worldwide projects",
            "• Developed and implemented design systems adhering to improvement and usability criteria",
            "• Designed landing pages, e-commerce sites, and systems for products throughout North and South America"
          ]
        },
        {
          title: "UX Lead",
          company: "HDI Insurance, São Paulo - Brazil • Jan 2021 - Dec 2021",
          tasks: [
            "• Managed project agency management while adhering to brand identity and design system",
            "• Coordinated UX team's work with business and developers",
            "• Created icons and components for product designers to maintain consistency",
            "• Collaborated closely with designers and development teams to implement functional design systems"
          ]
        },
        {
          title: "Product Designer",
          company: "Santander, São Paulo - Brazil • Jan 2021 - Dec 2021",
          tasks: [
            "• Involved in end-to-end UX process, including data analysis for business insights",
            "• Updated Design System, creating components and icons",
            "• Led app redesign project to improve user journey",
            "• Actively participated in decision-making meetings with business and development teams"
          ]
        },
        {
          title: "Product Designer",
          company: "Deloitte, Brazil • Mar 2020 - Dec 2020",
          tasks: [
            "• Produced functional and conceptual concepts with POs, end-users, and training professionals",
            "• Translated concepts into functional prototypes prioritized in development",
            "• Documented User Stories, gathering requirements and creating user personas",
            "• Worked with Salesforce, Vlocity Omniscript, and LWC for clients like Claro and Caixa Seguradora"
          ]
        },
        {
          title: "UX/UI Designer & Front-end Developer",
          company: "Finnet, Brazil • Mar 2019 - Sep 2020",
          tasks: [
            "• Created effective design processes: UX flows, user journey maps, wireframes",
            "• Mastered responsive design principles for mobile and desktop screens",
            "• Established design standards: UI style guides, visual strategies, and design systems",
            "• Ensured consistent user experience across Web, iOS, and Android platforms"
          ]
        },
        {
          title: "UX/UI Designer & Front-end Developer",
          company: "Hortatech, Brazil • Sep 2018 - Sep 2019",
          tasks: [
            "• Created wireframes, conducted user testing, A/B testing, and user research",
            "• Developed visually attractive designs using Adobe XD, Photoshop, and Illustrator",
            "• Programmed in JavaScript, HTML, CSS, Bootstrap with responsive design",
            "• Optimized web projects to provide amazing user experience"
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
          title: "UI/UX Designer",
          company: "Tech Mahindra, Remote, United States • Oct 2021 - Ene 2025",
          tasks: [
            "• Clientes atendidos: Kimberly-Clark",
            "• Realicé pruebas de usuario, garantizando accesibilidad y alineación de objetivos",
            "• Colaboré con equipos multiculturales en proyectos mundiales",
            "• Desarrollé e implementé sistemas de diseño siguiendo criterios de mejora y usabilidad",
            "• Diseñé landing pages, sitios de e-commerce y sistemas para productos en Norte y Sudamérica"
          ]
        },
        {
          title: "UX Lead",
          company: "HDI Insurance, São Paulo - Brasil • Ene 2021 - Dic 2021",
          tasks: [
            "• Gestioné proyectos de agencia manteniendo identidad de marca y sistema de diseño",
            "• Coordiné trabajo del equipo UX con business y desarrolladores",
            "• Creé íconos y componentes para mantener consistencia entre diseñadores",
            "• Colaboré estrechamente con equipos de diseño y desarrollo para implementar sistemas funcionales"
          ]
        },
        {
          title: "Product Designer",
          company: "Santander, São Paulo - Brasil • Ene 2021 - Dic 2021",
          tasks: [
            "• Participé en proceso UX end-to-end, incluyendo análisis de datos para insights de negocio",
            "• Actualicé Sistema de Diseño, creando componentes e íconos",
            "• Lideré proyecto de rediseño de app para mejorar journey del usuario",
            "• Participé activamente en reuniones de decisión con business y desarrollo"
          ]
        },
        {
          title: "Product Designer",
          company: "Deloitte, Brasil • Mar 2020 - Dic 2020",
          tasks: [
            "• Produje conceptos funcionales y conceptuales con POs, usuarios finales y profesionales",
            "• Traduje conceptos en prototipos funcionales priorizados en desarrollo",
            "• Documenté User Stories, recopilando requisitos y creando personas",
            "• Trabajé con Salesforce, Vlocity Omniscript y LWC para clientes como Claro y Caixa Seguradora"
          ]
        },
        {
          title: "UX/UI Designer & Front-end Developer",
          company: "Finnet, Brasil • Mar 2019 - Sep 2020",
          tasks: [
            "• Creé procesos de diseño efectivos: flujos UX, mapas de journey, wireframes",
            "• Dominé principios de diseño responsivo para pantallas móviles y desktop",
            "• Establecí estándares de diseño: guías de estilo UI, estrategias visuales y sistemas de diseño",
            "• Aseguré experiencia consistente del usuario across plataformas Web, iOS y Android"
          ]
        },
        {
          title: "UX/UI Designer & Front-end Developer",
          company: "Hortatech, Brasil • Sep 2018 - Sep 2019",
          tasks: [
            "• Creé wireframes, realicé pruebas de usuario, A/B testing e investigación de usuario",
            "• Desarrollé diseños visualmente atractivos usando Adobe XD, Photoshop e Illustrator",
            "• Programé en JavaScript, HTML, CSS, Bootstrap con diseño responsivo",
            "• Optimicé proyectos web para proporcionar experiencia de usuario excepcional"
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
