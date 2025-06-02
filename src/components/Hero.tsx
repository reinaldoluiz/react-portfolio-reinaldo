
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light mb-8 text-gray-900 tracking-tight">
            Alex Jordan
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light">
            UX/UI Designer
          </p>
          <button 
            onClick={scrollToNext}
            className="text-gray-900 hover:text-gray-600 transition-colors text-sm uppercase tracking-widest"
          >
            View Work
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-5 w-5 text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;
