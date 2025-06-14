
import { Check, X, Eye, Keyboard, Volume2, Users, Smartphone, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Accessibility = () => {
  const accessibilityItems = [
    {
      category: "Navegação e Estrutura",
      icon: <Keyboard size={20} />,
      items: [
        { check: true, text: "Navegação por teclado funcional" },
        { check: true, text: "Ordem lógica de foco" },
        { check: true, text: "Links descritivos e informativos" },
        { check: true, text: "Estrutura de cabeçalhos hierárquica" },
        { check: false, text: "Mapa do site disponível" }
      ]
    },
    {
      category: "Visual e Contraste",
      icon: <Eye size={20} />,
      items: [
        { check: true, text: "Contraste adequado entre texto e fundo" },
        { check: true, text: "Texto redimensionável até 200%" },
        { check: true, text: "Cores não são única forma de informação" },
        { check: false, text: "Modo escuro disponível" },
        { check: true, text: "Ícones com textos alternativos" }
      ]
    },
    {
      category: "Compatibilidade com Leitores de Tela",
      icon: <Volume2 size={20} />,
      items: [
        { check: true, text: "Imagens com texto alternativo" },
        { check: true, text: "Formulários com labels apropriados" },
        { check: true, text: "Landmarks ARIA implementados" },
        { check: false, text: "Descrições longas para gráficos complexos" },
        { check: true, text: "Status de carregamento comunicados" }
      ]
    },
    {
      category: "Usabilidade Inclusiva",
      icon: <Users size={20} />,
      items: [
        { check: true, text: "Linguagem clara e simples" },
        { check: true, text: "Instruções de formulário claras" },
        { check: false, text: "Ajuda contextual disponível" },
        { check: true, text: "Tempo suficiente para interações" },
        { check: true, text: "Evita conteúdo que pisca" }
      ]
    },
    {
      category: "Responsividade e Dispositivos",
      icon: <Smartphone size={20} />,
      items: [
        { check: true, text: "Layout responsivo funcional" },
        { check: true, text: "Touch targets de tamanho adequado" },
        { check: true, text: "Funciona em modo paisagem e retrato" },
        { check: true, text: "Zoom até 400% sem scroll horizontal" },
        { check: false, text: "Suporte a gestos alternativos" }
      ]
    },
    {
      category: "Padrões Web",
      icon: <Globe size={20} />,
      items: [
        { check: true, text: "HTML semântico válido" },
        { check: true, text: "Conformidade WCAG 2.1 AA (parcial)" },
        { check: false, text: "Testes com usuários reais" },
        { check: true, text: "Documentação de acessibilidade" },
        { check: false, text: "Auditoria externa completa" }
      ]
    }
  ];

  const totalItems = accessibilityItems.reduce((acc, category) => acc + category.items.length, 0);
  const checkedItems = accessibilityItems.reduce((acc, category) => 
    acc + category.items.filter(item => item.check).length, 0
  );
  const percentage = Math.round((checkedItems / totalItems) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 transform rotate-1 inline-block mb-4">
              Checkpoint de Acessibilidade
            </h1>
            <div className="w-32 h-1 bg-green-400 mx-auto transform -rotate-1 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Monitorando nossa jornada para criar experiências digitais inclusivas e acessíveis para todos!
            </p>
            
            {/* Score */}
            <div className="bg-white p-6 rounded-lg shadow-lg inline-block transform rotate-1 border-2 border-gray-300">
              <div className="text-4xl font-bold text-green-600 mb-2">{percentage}%</div>
              <div className="text-gray-600">
                {checkedItems} de {totalItems} itens implementados
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
                <div 
                  className="bg-green-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {accessibilityItems.map((category, index) => (
              <div key={index} className="group">
                <div className={`bg-white p-6 transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} group-hover:rotate-0 transition-all duration-300 border-2 border-gray-300 shadow-lg hover:shadow-xl`}>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-blue-600">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {category.category}
                    </h3>
                  </div>

                  {/* Items List */}
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className={`mt-0.5 ${item.check ? 'text-green-600' : 'text-red-500'}`}>
                          {item.check ? <Check size={18} /> : <X size={18} />}
                        </div>
                        <span className={`text-sm ${item.check ? 'text-gray-700' : 'text-gray-500'}`}>
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Category Progress */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progresso da categoria</span>
                      <span>
                        {category.items.filter(item => item.check).length}/{category.items.length}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${(category.items.filter(item => item.check).length / category.items.length) * 100}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Steps */}
          <div className="text-center mt-16">
            <div className="bg-yellow-100 p-8 transform -rotate-1 border-2 border-gray-300 inline-block max-w-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Próximos Passos
              </h3>
              <div className="text-left space-y-2 text-gray-700 text-sm">
                <p>• Implementar modo escuro para melhor contraste</p>
                <p>• Adicionar mapa do site para navegação</p>
                <p>• Realizar testes com usuários reais</p>
                <p>• Solicitar auditoria externa de acessibilidade</p>
                <p>• Criar documentação detalhada de acessibilidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accessibility;
