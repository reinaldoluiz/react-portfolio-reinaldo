
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Dados dos projetos (mesmos dados da página Portfolio)
  const projects = [
    {
      id: 1,
      title: "EcoCommerce App",
      description: "A sustainable shopping platform that helps users discover eco-friendly products with an intuitive map-like navigation system.",
      year: "2024",
      image: "/lovable-uploads/4ea7692a-f646-41c6-a293-9a18f209e15d.png",
      color: "bg-green-100",
      tools: ["Figma", "User Research", "Prototyping"],
      category: "Mobile App",
      fullDescription: "O EcoCommerce App é uma plataforma inovadora que conecta consumidores conscientes com produtos sustentáveis. Desenvolvido com foco na experiência do usuário, o aplicativo oferece um sistema de navegação intuitivo que permite aos usuários descobrir facilmente produtos ecológicos. O projeto incluiu extensa pesquisa de usuário, prototipagem iterativa e testes de usabilidade para garantir uma experiência fluida e engajante.",
      challenges: ["Criar uma navegação intuitiva para produtos sustentáveis", "Balancear funcionalidade com design limpo", "Integrar sistemas de recomendação personalizados"],
      solutions: ["Sistema de filtros avançados por categoria sustentável", "Interface minimalista com foco no produto", "Algoritmo de recomendação baseado em preferências eco-friendly"]
    },
    {
      id: 2,
      title: "FinTech Dashboard", 
      description: "A comprehensive financial dashboard for investment tracking - like having a compass for your financial journey.",
      year: "2024",
      image: "/lovable-uploads/5c46fb05-5f26-4317-a11c-c681893bd33e.png",
      color: "bg-blue-100",
      tools: ["Adobe XD", "Data Visualization", "Usability Testing"],
      category: "Web App",
      fullDescription: "Um dashboard financeiro completo que transforma dados complexos em insights visuais claros. Este projeto focou em criar uma interface que tornasse o acompanhamento de investimentos acessível e compreensível para usuários de todos os níveis de experiência financeira.",
      challenges: ["Visualizar dados financeiros complexos de forma simples", "Criar interface responsiva para diferentes dispositivos", "Garantir segurança e confiabilidade dos dados"],
      solutions: ["Gráficos interativos com drill-down de informações", "Design system flexível para múltiplas telas", "Implementação de protocolos de segurança visuais"]
    },
    {
      id: 3,
      title: "Learning Platform",
      description: "An educational platform connecting students and instructors - mapping out learning adventures for every user.",
      year: "2023", 
      image: "/lovable-uploads/898d43f4-a54b-415e-8512-7d437380d908.png",
      color: "bg-yellow-100",
      tools: ["Sketch", "Information Architecture", "User Flows"],
      category: "Platform",
      fullDescription: "Uma plataforma educacional que revoluciona a forma como estudantes e instrutores interagem. O projeto envolveu a criação de uma arquitetura de informação robusta e fluxos de usuário otimizados para diferentes perfis de aprendizado.",
      challenges: ["Atender diferentes tipos de learners", "Criar sistema de progresso motivacional", "Facilitar interação entre alunos e professores"],
      solutions: ["Personalização de jornadas de aprendizado", "Gamificação com badges e conquistas", "Sistema de comunicação integrado e intuitivo"]
    },
    {
      id: 4,
      title: "Healthcare App",
      description: "A telemedicine application that connects patients with doctors through an intuitive and accessible interface.",
      year: "2023",
      image: "/lovable-uploads/3bc795d8-161f-4f91-acc0-46a5d2d4b7d9.png",
      color: "bg-pink-100",
      tools: ["Figma", "Accessibility Design", "User Testing"],
      category: "Mobile App",
      fullDescription: "Aplicativo de telemedicina que prioriza acessibilidade e facilidade de uso. O projeto incluiu extensos testes com usuários de diferentes faixas etárias e níveis de familiaridade com tecnologia.",
      challenges: ["Garantir acessibilidade para todas as idades", "Simplificar processo de consulta médica", "Criar interface confiável para área da saúde"],
      solutions: ["Design inclusivo com tipografia legível", "Fluxo de agendamento em poucos passos", "Elementos visuais que transmitem confiança e segurança"]
    },
    {
      id: 5,
      title: "Food Delivery UI",
      description: "A modern food delivery interface focusing on quick ordering and real-time tracking features.",
      year: "2022",
      image: "/lovable-uploads/4ea7692a-f646-41c6-a293-9a18f209e15d.png",
      color: "bg-orange-100",
      tools: ["Adobe XD", "Micro-interactions", "Prototyping"],
      category: "Mobile App",
      fullDescription: "Interface moderna para delivery de comida com foco em velocidade de pedido e rastreamento em tempo real. O projeto explorou micro-interações para criar uma experiência fluida e envolvente.",
      challenges: ["Otimizar velocidade do processo de pedido", "Criar sistema de rastreamento claro", "Balancear informações sem sobrecarregar a tela"],
      solutions: ["One-tap ordering para itens favoritos", "Mapa de rastreamento com estimativas precisas", "Hierarquia visual clara com uso estratégico de cores"]
    },
    {
      id: 6,
      title: "Travel Booking System",
      description: "A comprehensive travel booking platform with intuitive search and booking flows.",
      year: "2022",
      image: "/lovable-uploads/5c46fb05-5f26-4317-a11c-c681893bd33e.png",
      color: "bg-purple-100",
      tools: ["Figma", "User Journey Mapping", "A/B Testing"],
      category: "Web App",
      fullDescription: "Plataforma completa de reservas de viagem com foco em simplicidade e eficiência. O projeto envolveu mapeamento detalhado de jornadas do usuário e testes A/B para otimizar conversões.",
      challenges: ["Simplificar processo complexo de reserva", "Apresentar muitas opções sem confundir", "Criar confiança na finalização da compra"],
      solutions: ["Wizard de reserva com progress indicator", "Filtros inteligentes com preview de resultados", "Checkout transparente com resumo claro"]
    }
  ];

  const project = projects.find(p => p.id === parseInt(id || '1'));

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Navigation />
        <div className="pt-20 container mx-auto px-6">
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Projeto não encontrado</h1>
            <Link to="/portfolio" className="text-red-400 hover:text-red-500 font-medium">
              ← Voltar ao Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-16">
          {/* Back Button */}
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-red-400 transition-colors mb-8 font-medium"
          >
            <ArrowLeft size={20} />
            Voltar ao Portfolio
          </Link>

          {/* Project Header */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <div className={`${project.color} p-8 transform rotate-2 border-2 border-gray-300 shadow-lg`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-contain mx-auto"
                />
              </div>
            </div>
            
            <div>
              <div className="bg-red-200 px-4 py-2 inline-block transform -rotate-1 mb-4">
                <p className="text-sm font-bold text-gray-800">{project.category}</p>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 transform rotate-1">
                {project.title}
              </h1>
              
              <div className="bg-gray-200 px-4 py-2 inline-block transform rotate-1 mb-6">
                <p className="text-lg font-bold text-gray-800">{project.year}</p>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span key={index} className="bg-white px-3 py-2 text-sm font-semibold text-gray-700 transform rotate-1 border border-gray-400">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-16">
            {/* Full Description */}
            <div className="bg-white p-8 transform -rotate-1 border-2 border-gray-300 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 transform rotate-1">
                Sobre o Projeto
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {project.fullDescription}
              </p>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-100 p-8 transform rotate-2 border-2 border-gray-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Desafios
                </h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-100 p-8 transform -rotate-2 border-2 border-gray-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Soluções
                </h3>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-blue-100 p-8 transform rotate-1 border-2 border-gray-300 inline-block max-w-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Gostou deste projeto?
              </h3>
              <p className="text-gray-700 mb-4">
                Vamos conversar sobre como posso ajudar no seu próximo projeto!
              </p>
              <Link 
                to="/#contact"
                className="bg-red-400 hover:bg-red-500 text-white px-6 py-3 font-semibold transform -rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-black inline-block"
              >
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
