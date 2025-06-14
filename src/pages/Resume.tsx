
import { ArrowLeft, MapPin, Linkedin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Portfolio
          </Link>
          <button 
            onClick={() => window.print()} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Imprimir CV
          </button>
        </div>

        {/* Personal Info */}
        <div className="text-center mb-8 pb-8 border-b-2 border-gray-200">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Reinaldo Luiz</h1>
          <p className="text-xl text-gray-600 mb-4">UI/UX Designer & Product Designer</p>
          
          {/* Contact Info - Single Line */}
          <div className="flex items-center justify-center gap-6 text-gray-600">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Barcelona, Spain</span>
            </div>
            <div className="flex items-center">
              <Linkedin className="h-4 w-4 mr-1" />
              <a href="https://linkedin.com/in/reinaldoluiz" className="text-blue-600 hover:underline">
                linkedin.com/in/reinaldoluiz
              </a>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>+8 anos de experiência</span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
            Introdução
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Designer experiente com mais de 8 anos de experiência em UI/UX e desenvolvimento frontend, 
            especializado em criar soluções digitais centradas no usuário. Tenho trabalhado com empresas 
            globais como Kimberly-Clark, Santander e HDI Seguros, desenvolvendo produtos digitais que 
            conectam necessidades dos usuários com objetivos de negócio. Minha abordagem combina pesquisa 
            de usuário, design thinking e implementação técnica para entregar experiências excepcionais.
          </p>
        </section>

        {/* Key Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
            Competências Principais
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Design & Prototipagem</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Figma & Adobe Creative Suite</li>
                <li>• Design Systems & Style guides</li>
                <li>• Prototipagem interativa</li>
                <li>• Wireframing & mockups</li>
                <li>• Design responsivo</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Pesquisa & Estratégia UX</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• User research & personas</li>
                <li>• Testes de usabilidade</li>
                <li>• Journey mapping</li>
                <li>• Análise de dados & métricas</li>
                <li>• A/B testing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Desenvolvimento Frontend</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• HTML5, CSS3, JavaScript</li>
                <li>• React & frameworks modernos</li>
                <li>• Bootstrap & Tailwind CSS</li>
                <li>• Ruby on Rails</li>
                <li>• Git & controle de versão</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
            Experiência Profissional
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-800">Product Designer</h3>
                  <p className="text-blue-600">Tech Mahindra (Remote)</p>
                </div>
                <span className="text-sm text-gray-500">2024 - Presente</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Lidero o design de produtos digitais para clientes globais</li>
                <li>• Desenvolvimento de design systems escaláveis</li>
                <li>• Colaboração com equipes multiculturais e multidisciplinares</li>
                <li>• Implementação de metodologias ágeis de design</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-800">UX/UI Designer</h3>
                  <p className="text-blue-600">HDI Seguros</p>
                </div>
                <span className="text-sm text-gray-500">2023 - 2024</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Redesign da plataforma digital de seguros</li>
                <li>• Melhoria da experiência do usuário em 40%</li>
                <li>• Implementação de testes A/B e análise de métricas</li>
                <li>• Desenvolvimento de interface responsiva</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-800">Senior UI/UX Designer</h3>
                  <p className="text-blue-600">Kimberly-Clark</p>
                </div>
                <span className="text-sm text-gray-500">2020 - 2023</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Design de experiências digitais para marcas globais</li>
                <li>• Criação de design system unificado para múltiplas marcas</li>
                <li>• Liderança de projetos de transformação digital</li>
                <li>• Mentoria de designers juniores da equipe</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-800">UI/UX Designer</h3>
                  <p className="text-blue-600">Santander</p>
                </div>
                <span className="text-sm text-gray-500">2018 - 2020</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Design de interfaces para aplicações bancárias</li>
                <li>• Foco em usabilidade e segurança</li>
                <li>• Colaboração com equipes de desenvolvimento ágil</li>
                <li>• Testes de usabilidade com usuários reais</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
            Formação
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">Bacharelado em Design</h3>
                  <p className="text-blue-600">Universidade Anhembi Morumbi</p>
                </div>
                <span className="text-sm text-gray-500">2014 - 2018</span>
              </div>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
            Idiomas
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <h3 className="font-semibold text-gray-800">Português</h3>
              <p className="text-sm text-gray-600">Nativo</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-800">Inglês</h3>
              <p className="text-sm text-gray-600">Avançado</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-800">Espanhol</h3>
              <p className="text-sm text-gray-600">Intermediário</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
