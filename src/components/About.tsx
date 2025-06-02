
const About = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative sketchy elements */}
      <div className="absolute top-10 right-10 w-12 h-12 border-2 border-blue-300 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-8 h-8 bg-yellow-300 transform rotate-45 opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 transform -rotate-1 inline-block">
              About Me
            </h2>
            <div className="w-32 h-1 bg-red-400 mx-auto mt-4 transform rotate-1"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-blue-50 p-8 transform -rotate-1 border-2 border-gray-300 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Just like preparing for a hiking adventure, I believe great UX design requires careful planning, 
                  understanding the terrain (user needs), and having the right tools for the journey.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With 5+ years of experience, I've guided countless digital expeditions, helping users navigate 
                  complex interfaces and reach their goals with confidence and joy.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-yellow-100 p-6 transform rotate-1 border-2 border-gray-300">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 flex items-center">
                    🔍 Research & Discovery
                  </h3>
                  <p className="text-gray-600">
                    Like scouting the best trail, I dive deep into user research to understand the journey ahead.
                  </p>
                </div>
                
                <div className="bg-green-100 p-6 transform -rotate-1 border-2 border-gray-300">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 flex items-center">
                    🎨 Design & Prototyping
                  </h3>
                  <p className="text-gray-600">
                    Sketching the path forward with wireframes, prototypes, and beautiful interfaces.
                  </p>
                </div>
                
                <div className="bg-orange-100 p-6 transform rotate-1 border-2 border-gray-300">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 flex items-center">
                    🚀 Testing & Iteration
                  </h3>
                  <p className="text-gray-600">
                    Every good explorer tests their route and adjusts based on what they discover.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 text-center">
              <img 
                src="/lovable-uploads/ad8c3b46-7b73-4725-910d-8e9d9e309938.png" 
                alt="Explorer with magnifying glass" 
                className="w-64 h-64 object-contain mx-auto mb-6"
              />
              <div className="bg-pink-100 p-4 transform -rotate-2 border-2 border-gray-300 inline-block">
                <p className="font-semibold text-gray-800">
                  "Always exploring new paths to better user experiences!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
