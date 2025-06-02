
const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-32 h-1 bg-red-400 mb-8 transform rotate-1"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Just like preparing for a hiking adventure, I believe great UX design requires careful planning, 
            understanding the terrain (user needs), and having the right tools for the journey.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                  🔍 Research & Discovery
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Like scouting the best trail, I dive deep into user research to understand the journey ahead. 
                  I use interviews, surveys, and analytics to map out user behaviors and pain points.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                  🎨 Design & Prototyping
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Sketching the path forward with wireframes, prototypes, and beautiful interfaces. 
                  I create design systems that scale and interfaces that delight users.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                  🚀 Testing & Iteration
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Every good explorer tests their route and adjusts based on what they discover. 
                  I run usability tests and iterate designs based on real user feedback.
                </p>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-3 gap-8 text-center">
              <div className="bg-blue-50 p-6 transform -rotate-1 border-2 border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-green-50 p-6 transform rotate-1 border-2 border-gray-200">
                <div className="text-3xl font-bold text-green-600 mb-2">15</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-yellow-50 p-6 transform -rotate-1 border-2 border-gray-200">
                <div className="text-3xl font-bold text-yellow-600 mb-2">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="text-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/ad8c3b46-7b73-4725-910d-8e9d9e309938.png" 
                alt="Explorer with magnifying glass" 
                className="w-80 h-80 object-contain mx-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-pink-100 p-4 transform -rotate-2 border-2 border-gray-300 max-w-xs">
                <p className="text-sm font-semibold text-gray-800">
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
