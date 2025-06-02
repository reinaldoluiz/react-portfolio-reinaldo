
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50 relative overflow-hidden">
      {/* Decorative doodles */}
      <div className="absolute top-20 left-10 w-8 h-8 border-2 border-blue-400 rounded-full opacity-30"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-orange-300 rotate-45 opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-4 h-8 bg-green-300 opacity-30"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-left lg:order-1">
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 text-gray-900 leading-tight">
              Alex
              <br />
              <span className="inline-block bg-yellow-200 px-4 py-2 transform -rotate-1 border-2 border-black">
                Jordan
              </span>
            </h1>
            
            <div className="mb-8">
              <p className="text-2xl lg:text-3xl text-gray-700 font-medium mb-4">
                UX/UI Designer & Explorer
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Discovering user needs and crafting digital adventures that guide people to their destinations with confidence and joy.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToNext}
                className="bg-red-400 hover:bg-red-500 text-white px-8 py-4 text-lg font-semibold transform -rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-black shadow-lg"
              >
                Explore My Work →
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold hover:bg-gray-50 transition-colors">
                Get In Touch
              </button>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="text-center lg:order-2">
            <div className="relative">
              <img 
                src="/lovable-uploads/63f9863d-a63f-488f-8685-8af492bb3722.png" 
                alt="Adventure character with backpack" 
                className="w-80 h-80 lg:w-96 lg:h-96 object-contain mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-200 p-4 transform rotate-12 border-2 border-black">
                <p className="text-sm font-bold text-gray-800">5+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-gray-600" />
      </button>
    </section>
  );
};

export default Hero;
