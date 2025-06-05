
import { ArrowDown } from "lucide-react";
import BackgroundRemover from "./BackgroundRemover";

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
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main illustration */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/63f9863d-a63f-488f-8685-8af492bb3722.png" 
              alt="Adventure character with backpack" 
              className="w-48 h-48 object-contain"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800 tracking-tight transform -rotate-1">
            Alex Jordan
          </h1>
          <div className="inline-block bg-yellow-200 px-6 py-3 transform rotate-1 border-2 border-black mb-8">
            <p className="text-xl md:text-2xl text-gray-800 font-semibold">
              UX/UI Designer & Explorer
            </p>
          </div>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discovering user needs and crafting digital adventures that guide people to their destinations!
          </p>
          
          <button 
            onClick={scrollToNext}
            className="bg-red-400 hover:bg-red-500 text-white px-8 py-4 text-lg font-semibold transform -rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-black shadow-lg mb-16"
          >
            Let's Explore My Work! →
          </button>

          {/* Background Remover Tool */}
          <BackgroundRemover />
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
