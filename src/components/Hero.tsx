
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({
      behavior: 'smooth'
    });
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
            <img alt="Adventure character with backpack" className="w-48 h-48 object-contain" src="/lovable-uploads/704183ad-9645-40d7-8d57-76502b5ee749.png" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800 tracking-tight transform -rotate-1">
            Reinaldo Luiz
          </h1>
          <div className="inline-block bg-yellow-200 px-6 py-3 transform rotate-1 border-2 border-black mb-8">
            <p className="text-xl md:text-2xl text-gray-800 font-semibold">
              UI/UX Designer & Product Designer
            </p>
          </div>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            +8 years crafting digital experiences from concept to production, helping teams create user-centered solutions worldwide.
          </p>
          
          <button onClick={scrollToNext} className="bg-red-400 hover:bg-red-500 text-white px-8 py-4 text-lg font-semibold transform -rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-black shadow-lg">
            Let's Explore My Work! →
          </button>
        </div>
      </div>
      
      <button onClick={scrollToNext} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-600" />
      </button>
    </section>
  );
};

export default Hero;
