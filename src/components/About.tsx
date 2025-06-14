
const About = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
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
          
          {/* First row: About text, illustration, and quote */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="bg-blue-50 p-8 transform -rotate-1 border-2 border-gray-300">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I'm Reinaldo, a Brazilian designer currently in Barcelona, Spain, pursuing a Master's degree in UX Design. 
                  With over 8 years of experience, I've worked with global companies like Kimberly-Clark, Santander, and Deloitte, 
                  creating digital solutions that bridge user needs with business goals.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My journey combines technical expertise in frontend development with deep UX research skills, 
                  allowing me to create comprehensive design systems and user experiences that work seamlessly 
                  across platforms and cultures.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <img 
                src="/lovable-uploads/5c46fb05-5f26-4317-a11c-c681893bd33e.png" 
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
          
          {/* Second row: Three skill boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-yellow-100 p-6 transform rotate-1 border-2 border-gray-300">
              <h3 className="text-xl font-bold mb-3 text-gray-800 flex items-center">
                🔍 Research & Strategy
              </h3>
              <p className="text-gray-600">
                User research, usability testing, and data analysis to uncover insights that drive design decisions and business outcomes.
              </p>
            </div>
            
            <div className="bg-green-100 p-6 transform -rotate-1 border-2 border-gray-300">
              <h3 className="text-xl font-bold mb-3 text-gray-800 flex items-center">
                🎨 Design Systems & UI
              </h3>
              <p className="text-gray-600">
                Creating cohesive design systems, prototypes, and interfaces using Figma, Adobe Creative Suite, and modern design tools.
              </p>
            </div>
            
            <div className="bg-orange-100 p-6 transform rotate-1 border-2 border-gray-300">
              <h3 className="text-xl font-bold mb-3 text-gray-800 flex items-center">
                🚀 Frontend Development
              </h3>
              <p className="text-gray-600">
                Bringing designs to life with HTML5, CSS3, JavaScript, React, and modern frontend technologies for seamless implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
