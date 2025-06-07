
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  if (!isVisible && isHomePage) return null;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link 
            to="/"
            className="text-xl font-bold text-gray-800 hover:text-red-400 transition-colors"
          >
            Reinaldo Luiz
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-600 hover:text-red-400 transition-colors font-medium"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-600 hover:text-red-400 transition-colors font-medium"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-600 hover:text-red-400 transition-colors font-medium"
                >
                  Skills
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/"
                  className="text-gray-600 hover:text-red-400 transition-colors font-medium"
                >
                  Home
                </Link>
                <Link 
                  to="/portfolio"
                  className="text-gray-600 hover:text-red-400 transition-colors font-medium"
                >
                  Portfolio
                </Link>
                <Link 
                  to="/resume"
                  className="text-gray-600 hover:text-red-400 transition-colors font-medium"
                >
                  Resume
                </Link>
              </>
            )}
            {isHomePage ? (
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-red-400 text-white px-4 py-2 hover:bg-red-500 transition-colors font-medium border-2 border-black transform hover:rotate-1"
              >
                Contact
              </button>
            ) : (
              <Link 
                to="/#contact"
                className="bg-red-400 text-white px-4 py-2 hover:bg-red-500 transition-colors font-medium border-2 border-black transform hover:rotate-1"
              >
                Contact
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-red-400 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {isHomePage ? (
                <>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-left text-gray-600 hover:text-red-400 transition-colors font-medium py-2"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="text-left text-gray-600 hover:text-red-400 transition-colors font-medium py-2"
                  >
                    Projects
                  </button>
                  <button 
                    onClick={() => scrollToSection('skills')}
                    className="text-left text-gray-600 hover:text-red-400 transition-colors font-medium py-2"
                  >
                    Skills
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-left bg-red-400 text-white px-4 py-2 hover:bg-red-500 transition-colors font-medium border-2 border-black transform hover:rotate-1 w-fit"
                  >
                    Contact
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/"
                    className="text-left text-gray-600 hover:text-red-400 transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/portfolio"
                    className="text-left text-gray-600 hover:text-red-400 transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Portfolio
                  </Link>
                  <Link 
                    to="/resume"
                    className="text-left text-gray-600 hover:text-red-400 transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Resume
                  </Link>
                  <Link 
                    to="/#contact"
                    className="text-left bg-red-400 text-white px-4 py-2 hover:bg-red-500 transition-colors font-medium border-2 border-black transform hover:rotate-1 w-fit"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
