
import { Check, X, Eye, Keyboard, Volume2, Users, Smartphone, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Accessibility = () => {
  const accessibilityItems = [
    {
      category: "Navigation and Structure",
      icon: <Keyboard size={20} />,
      items: [
        { check: true, text: "Functional keyboard navigation" },
        { check: true, text: "Logical focus order" },
        { check: true, text: "Descriptive and informative links" },
        { check: true, text: "Hierarchical heading structure" },
        { check: true, text: "Site map available (sitemap.xml)" }
      ]
    },
    {
      category: "Visual and Contrast",
      icon: <Eye size={20} />,
      items: [
        { check: true, text: "Adequate contrast between text and background" },
        { check: true, text: "Text resizable up to 200%" },
        { check: true, text: "Colors are not the only form of information" },
        { check: false, text: "Dark mode available" },
        { check: true, text: "Icons with alternative text" }
      ]
    },
    {
      category: "Screen Reader Compatibility",
      icon: <Volume2 size={20} />,
      items: [
        { check: true, text: "Images with alternative text" },
        { check: true, text: "Forms with appropriate labels" },
        { check: true, text: "ARIA landmarks implemented" },
        { check: false, text: "Long descriptions for complex graphics" },
        { check: true, text: "Loading status communicated" }
      ]
    },
    {
      category: "Inclusive Usability",
      icon: <Users size={20} />,
      items: [
        { check: true, text: "Clear and simple language" },
        { check: true, text: "Clear form instructions" },
        { check: false, text: "Contextual help available" },
        { check: true, text: "Sufficient time for interactions" },
        { check: true, text: "Avoids flashing content" }
      ]
    },
    {
      category: "Responsiveness and Devices",
      icon: <Smartphone size={20} />,
      items: [
        { check: true, text: "Functional responsive layout" },
        { check: true, text: "Adequate touch target sizes" },
        { check: true, text: "Works in landscape and portrait modes" },
        { check: true, text: "Zoom up to 400% without horizontal scroll" },
        { check: false, text: "Alternative gesture support" }
      ]
    },
    {
      category: "Web Standards and SEO",
      icon: <Globe size={20} />,
      items: [
        { check: true, text: "Valid semantic HTML" },
        { check: true, text: "XML Sitemap for search engines" },
        { check: true, text: "WCAG 2.1 AA compliance (partial)" },
        { check: false, text: "Testing with real users" },
        { check: true, text: "Accessibility documentation" },
        { check: false, text: "Complete external audit" }
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
              Accessibility Checkpoint
            </h1>
            <div className="w-32 h-1 bg-green-400 mx-auto transform -rotate-1 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Monitoring our journey to create inclusive and accessible digital experiences for everyone!
            </p>
            
            {/* Score */}
            <div className="bg-white p-6 rounded-lg shadow-lg inline-block transform rotate-1 border-2 border-gray-300">
              <div className="text-4xl font-bold text-green-600 mb-2">{percentage}%</div>
              <div className="text-gray-600">
                {checkedItems} of {totalItems} items implemented
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
                      <span>Category progress</span>
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

          {/* Sitemap Information */}
          <div className="text-center mt-12">
            <div className="bg-green-100 p-8 transform rotate-1 border-2 border-gray-300 inline-block max-w-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                🎉 Sitemap Implemented!
              </h3>
              <div className="text-left space-y-2 text-gray-700 text-sm">
                <p>• <strong>XML Sitemap</strong> created and available at <code>/sitemap.xml</code></p>
                <p>• Includes all main site pages</p>
                <p>• Improves search engine indexing</p>
                <p>• Facilitates navigation for assistive technologies</p>
                <p>• Automatically updated with new pages</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-center mt-8">
            <div className="bg-yellow-100 p-8 transform -rotate-1 border-2 border-gray-300 inline-block max-w-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Next Steps
              </h3>
              <div className="text-left space-y-2 text-gray-700 text-sm">
                <p>• Implement dark mode for better contrast</p>
                <p>• Add long descriptions for complex graphics</p>
                <p>• Create contextual help in main sections</p>
                <p>• Conduct testing with real users</p>
                <p>• Request external accessibility audit</p>
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
