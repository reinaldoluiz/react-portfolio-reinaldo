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
            "• Como Product Designer na Kimberly-Clark, tive a oportunidade de trabalhar com uma gama diversificada de clientes e projetos. Minha experiência em design UX incluiu testes de usuário, garantindo acessibilidade, alinhamento de objetivos dos stakeholders e colaboração com equipes multiculturais em projetos mundiais.",
            "• Em design UI, fui responsável por desenvolver e implementar sistemas de design que seguiam critérios de melhoria e usabilidade. Isso incluiu criação de novos sistemas de design, atualização de componentes e aplicação correta do BrandBook.",
            "• Criei landing pages, sites de e-commerce e sistemas para produtos em toda América do Norte e Sul."
          ]
        },
        {
          title: "UX Lead",
          company: "HDI Insurance, São Paulo - Brasil • Jan 2021 - Dez 2021",
          tasks: [
            "• Gerenciei projetos de agência mantendo identidade da marca e sistema de design. Responsável por coordenar trabalho da equipe UX com business e desenvolvedores.",
            "• Criei ícones e componentes que designers de produto pudessem usar para manter consistência. Tenho experiência colaborando com equipes de design e desenvolvimento para implementar sistemas funcionais e user-friendly."
          ]
        },
        {
          title: "Product Designer",
          company: "Santander, São Paulo - Brasil • Jan 2021 - Dez 2021",
          tasks: [
            "• Como Product Designer, participei do processo UX end-to-end. Isso incluiu análise de dados para gerar insights para inputs de negócio e melhoria da jornada do usuário.",
            "• Atualizei o Sistema de Design, criando componentes, ícones e garantindo handoff suave para entrega do layout final. Participei ativamente de reuniões de decisão com equipes de business e desenvolvimento.",
            "• Liderei projeto de redesign do app para melhorar jornada do usuário, considerando recomendações e requisitos de business e desenvolvimento."
          ]
        },
        {
          title: "Product Designer",
          company: "Deloitte, Brasil • Mar 2020 - Dez 2020",
          tasks: [
            "• Como UX/UI na Deloitte, fui responsável por produzir conceitos funcionais e conceituais em colaboração com POs, usuários finais e profissionais de treinamento, traduzindo-os em prototipos funcionais priorizados no desenvolvimento.",
            "• Ajudei a documentar User Stories, incluindo coleta de requisitos e criação de personas de usuário. Acompanhei projetos do desenvolvimento até publicação em produção.",
            "• Trabalhei com Salesforce, Vlocity Omniscript e LWC como soluções, ajudando empresas como Claro e Caixa Seguradora."
          ]
        },
        {
          title: "UX/UI Designer & Front-end Developer",
          company: "Finnet, Brasil • Mar 2019 - Set 2020",
          tasks: [
            "• Como Product Designer, trouxe experiência extensa em UX, UI e desenvolvimento front-end. Meu conhecimento em design centrado no usuário, usabilidade, acessibilidade e metodologias de teste me permite criar processos de design eficazes.",
            "• Em design UI, domino princípios de design responsivo para telas mobile e desktop. Estabeleci padrões de design como guias de estilo UI, estratégias visuais e sistemas de design para garantir experiência consistente."
          ]
        },
        {
          title: "UX/UI Designer & Front-end Developer",
          company: "Hortatech, Brasil • Set 2018 - Set 2019",
          tasks: [
            "• Como desenvolvedor front-end e UX/UI, especializo-me em criar projetos web que proporcionam experiência incrível ao usuário. Com habilidades em design UX, construo wireframes, conduzo testes de usuário e A/B testing.",
            "• Domino ferramentas de design UI como Adobe XD, Photoshop e Illustrator, permitindo desenvolver designs visualmente atraentes. Meu conhecimento em JavaScript, HTML, CSS, Bootstrap com design responsivo me permite otimizar projetos web para proporcionar experiência de usuário excepcional."
          ]
        }
      ],
      education: [
        {
          degree: "Mestrado em UX/UI Design",
          institution: "ESDI • Abr 2025 - Abr 2026, Espanha",
          details: [
            "• Estudar metodologias e técnicas que permitem pesquisar, analisar e compreender necessidades dos usuários",
            "• Encorajar pensamento crítico, criatividade e inovação",
            "• Promover pensamento estratégico",
            "• Utilizar ferramentas de ponta em UX/UI Design",
            "• Aprender a projetar, prototipar e testar"
          ]
        },
        {
          degree: "Bacharelado em Design",
          institution: "Mackenzie • Jan 2004 - Dez 2009, Brasil",
          details: [
            "• Design Studios: Trabalhar em projetos de design com orientação do corpo docente",
            "• Workshops e Sessões de Desenvolvimento: Aprender habilidades técnicas e tendências da indústria",
            "• Sessões de Crítica: Apresentar trabalhos para feedback e melhoria",
            "• Pesquisa em Design: Conduzir estudos para informar decisões de design",
            "• Projetos Colaborativos: Trabalhar juntos em desafios interdisciplinares"
          ]
        }
      ],
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
            "• As a Product Designer at Kimberly-Clark, I had the opportunity to work with a diverse range of clients and projects. My experience in UX design included conducting user testing, ensuring accessibility, aligning stakeholder goals, and collaborating with multicultural teams on worldwide projects.",
            "• In terms of UI design, I was responsible for developing and implementing design systems that adhered to the criteria of improvement and usability for both users and the development team. This included creating new design systems, updating components, and applying the BrandBook correctly.",
            "• I also designed landing pages, e-commerce sites, and systems for all of the company's products throughout North and South America."
          ]
        },
        {
          title: "UX Lead",
          company: "HDI Insurance, São Paulo - Brazil • Jan 2021 - Dec 2021",
          tasks: [
            "• Managing project agency management while adhering to brand identity and design system. Responsible for coordinating the UX team's work with the business and developers.",
            "• I enjoy creating icons and components that product designers can use to maintain consistency and have experience collaborating closely with designers and development teams to implement design systems that are both user-friendly and functional."
          ]
        },
        {
          title: "Product Designer",
          company: "Santander, São Paulo - Brazil • Jan 2021 - Dec 2021",
          tasks: [
            "• As a Product Designer, I was involved in the end-to-end UX process. This included data analysis to generate insights for business inputs and user journey enhancement.",
            "• I updated the Design System, creating components, icons, and ensuring a smooth handoff for the final layout delivery. I actively participated in decision-making meetings with the business and development teams.",
            "• One of my notable achievements was leading a redesign project for the app to improve the user journey. During this process, I considered business and development recommendations and requirements."
          ]
        },
        {
          title: "Product Designer",
          company: "Deloitte, Brazil • Mar 2020 - Dec 2020",
          tasks: [
            "• As a UX/UI at Deloitte, I was responsible for producing functional and conceptual concepts in collaboration with product owners (POs), end-users, and training professionals, which were then translated into functional prototypes and prioritized in the development aftermath.",
            "• I also helped to document User Stories, which included gathering requirements and creating user personas. I tracked the project from development through production publishing, ensuring that the final result met design standards.",
            "• I've worked with Salesforce, Vlocity Omniscript, and LWC as solutions, and I've helped companies like Claro and Caixa Seguradora."
          ]
        },
        {
          title: "UX/UI Designer & Front-end Developer",
          company: "Finnet, Brazil • Mar 2019 - Sep 2020",
          tasks: [
            "• As a Product Designer, I bring to the team extensive experience in UX, UI, and front-end development. My knowledge of user-centered design, usability, accessibility, and testing methodologies allows me to create effective design processes such as UX flows, user journey maps, wireframes, and research ideation and testing.",
            "• In terms of UI design, I am well-versed in responsive design principles and am capable of designing for both mobile and desktop screens. I am able to establish design standards such as UI style guides, visual strategies, and design systems. This guarantees that all products generated follow consistent design standards and deliver a consistent user experience across platforms."
          ]
        },
        {
          title: "UX/UI Designer & Front-end Developer",
          company: "Hortatech, Brazil • Sep 2018 - Sep 2019",
          tasks: [
            "• As a front-end and UX/UI developer, I specialize in creating web projects that provide an amazing user experience. With my UX design talents, I can construct wireframes, do user testing and A/B testing, and conduct user research to better understand user demands.",
            "• I am well-versed in UI design technologies such as Adobe XD, Photoshop, and Illustrator, allowing me to develop visually attractive designs that are consistent with the brand's visual identity. My knowledge of front-end programming languages such as JavaScript, HTML, CSS, Bootstrap, and responsive design concepts enables me to bring my designs to life and optimize them."
          ]
        }
      ],
      education: [
        {
          degree: "Master in UX/UI Design",
          institution: "ESDI • Apr 2025 - Apr 2026, Spain",
          details: [
            "• Study methodologies and techniques that allow us to research, analyse, and understand users' needs",
            "• Encourage critical thinking, creativity, and innovation",
            "• Promote strategic thinking",
            "• Utilise cutting-edge tools in UX/UI Design",
            "• Learn to design, prototype, and test"
          ]
        },
        {
          degree: "Bachelor in Design",
          institution: "Mackenzie • Jan 2004 - Dec 2009, Brazil",
          details: [
            "• Design Studios: Working on design projects with guidance from faculty",
            "• Workshops and Skill-building Sessions: Learning technical skills and industry trends",
            "• Critique Sessions: Presenting work for feedback and improvement",
            "• Design Research: Conducting studies to inform design decisions",
            "• Collaborative Projects: Working together on interdisciplinary challenges"
          ]
        }
      ],
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
            "• Como Product Designer en Kimberly-Clark, tuve la oportunidad de trabajar con una gama diversa de clientes y proyectos. Mi experiencia en diseño UX incluyó pruebas de usuario, garantizar accesibilidad, alinear objetivos de stakeholders y colaborar con equipos multiculturales en proyectos mundiales.",
            "• En términos de diseño UI, fui responsable de desarrollar e implementar sistemas de diseño que siguieran criterios de mejora y usabilidad. Esto incluyó crear nuevos sistemas de diseño, actualizar componentes y aplicar correctamente el BrandBook.",
            "• También diseñé landing pages, sitios de e-commerce y sistemas para todos los productos de la compañía en Norte y Sudamérica."
          ]
        },
        {
          title: "UX Lead",
          company: "HDI Insurance, São Paulo - Brasil • Ene 2021 - Dic 2021",
          tasks: [
            "• Gestioné proyectos de agencia manteniendo identidad de marca y sistema de diseño. Responsable de coordinar el trabajo del equipo UX con business y desarrolladores.",
            "• Disfruto crear íconos y componentes que los diseñadores de producto puedan usar para mantener consistencia y tengo experiencia colaborando estrechamente con equipos de diseño y desarrollo para implementar sistemas user-friendly y funcionales."
          ]
        },
        {
          title: "Product Designer",
          company: "Santander, São Paulo - Brasil • Ene 2021 - Dic 2021",
          tasks: [
            "• Como Product Designer, participé en el proceso UX end-to-end. Esto incluyó análisis de datos para generar insights para inputs de negocio y mejora del journey del usuario.",
            "• Actualicé el Sistema de Diseño, creando componentes, íconos y asegurando handoff suave para entrega del layout final. Participé activamente en reuniones de decisión con equipos de business y desarrollo.",
            "• Uno de mis logros notables fue liderar un proyecto de rediseño de la app para mejorar el journey del usuario, considerando recomendaciones y requisitos de business y desarrollo."
          ]
        },
        {
          title: "Product Designer",
          company: "Deloitte, Brasil • Mar 2020 - Dic 2020",
          tasks: [
            "• Como UX/UI en Deloitte, fui responsable de producir conceptos funcionales y conceptuales en colaboración con POs, usuarios finales y profesionales de entrenamiento, traduciéndolos en prototipos funcionales priorizados en el desarrollo.",
            "• También ayudé a documentar User Stories, incluyendo recopilación de requisitos y creación de personas de usuario. Seguí proyectos desde desarrollo hasta publicación en producción.",
            "• Trabajé con Salesforce, Vlocity Omniscript y LWC como soluciones, ayudando a empresas como Claro y Caixa Seguradora."
          ]
        },
        {
          title: "UX/UI Designer & Front-end Developer",
          company: "Finnet, Brasil • Mar 2019 - Sep 2020",
          tasks: [
            "• Como Product Designer, aporto al equipo experiencia extensa en UX, UI y desarrollo front-end. Mi conocimiento en diseño centrado en el usuario, usabilidad, accesibilidad y metodologías de testing me permite crear procesos de diseño efectivos.",
            "• En términos de diseño UI, domino principios de diseño responsivo para pantallas móviles y desktop. Puedo establecer estándares de diseño como guías de estilo UI, estrategias visuales y sistemas de diseño para garantizar experiencia consistente."
          ]
        },
        {
          title: "UX/UI Designer & Front-end Developer",
          company: "Hortatech, Brasil • Sep 2018 - Sep 2019",
          tasks: [
            "• Como desarrollador front-end y UX/UI, me especializo en crear proyectos web que proporcionan experiencia increíble al usuario. Con mis habilidades en diseño UX, puedo construir wireframes, hacer pruebas de usuario y A/B testing.",
            "• Domino tecnologías de diseño UI como Adobe XD, Photoshop e Illustrator, permitiéndome desarrollar diseños visualmente atractivos. Mi conocimiento en JavaScript, HTML, CSS, Bootstrap y conceptos de diseño responsivo me habilita para optimizar proyectos."
          ]
        }
      ],
      education: [
        {
          degree: "Maestría en UX/UI Design",
          institution: "ESDI • Abr 2025 - Abr 2026, España",
          details: [
            "• Estudiar metodologías y técnicas que nos permiten investigar, analizar y comprender necesidades de usuarios",
            "• Fomentar pensamiento crítico, creatividad e innovación",
            "• Promover pensamiento estratégico",
            "• Utilizar herramientas de vanguardia en UX/UI Design",
            "• Aprender a diseñar, prototipar y testear"
          ]
        },
        {
          degree: "Licenciatura en Diseño",
          institution: "Mackenzie • Ene 2004 - Dic 2009, Brasil",
          details: [
            "• Design Studios: Trabajar en proyectos de diseño con orientación del cuerpo docente",
            "• Workshops y Sesiones de Desarrollo: Aprender habilidades técnicas y tendencias de la industria",
            "• Sesiones de Crítica: Presentar trabajos para feedback y mejora",
            "• Investigación en Diseño: Conducir estudios para informar decisiones de diseño",
            "• Proyectos Colaborativos: Trabajar juntos en desafíos interdisciplinarios"
          ]
        }
      ],
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
          <div className="space-y-6">
            {data.education.map((edu, index) => (
              <div key={index} className={`p-6 transform ${index % 2 === 0 ? '-rotate-1 bg-rose-50' : 'rotate-1 bg-indigo-50'} border border-gray-200 rounded-lg`}>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                <p className="text-red-400 font-semibold mb-3">{edu.institution}</p>
                <ul className="text-gray-700 space-y-1">
                  {edu.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
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
