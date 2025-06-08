
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 to-blue-100 py-16 border-t-2 border-gray-300">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="bg-yellow-100 p-6 transform -rotate-1 border-2 border-gray-300 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Reinaldo Luiz
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                UX/UI Designer apaixonado por criar experiências digitais incríveis. 
                Sempre pronto para uma nova aventura de design! 🎨
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-blue-200 p-3 transform rotate-2 hover:rotate-0 transition-transform border-2 border-gray-300"
              >
                <Linkedin size={20} className="text-gray-800" />
              </a>
              <a 
                href="#" 
                className="bg-green-200 p-3 transform -rotate-2 hover:rotate-0 transition-transform border-2 border-gray-300"
              >
                <Github size={20} className="text-gray-800" />
              </a>
              <a 
                href="#" 
                className="bg-pink-200 p-3 transform rotate-1 hover:rotate-0 transition-transform border-2 border-gray-300"
              >
                <Twitter size={20} className="text-gray-800" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="bg-green-100 p-4 transform rotate-1 border-2 border-gray-300 mb-4">
              <h4 className="font-bold text-gray-800 mb-3">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-gray-700 hover:text-red-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-gray-700 hover:text-red-400 transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/resume" className="text-gray-700 hover:text-red-400 transition-colors">
                    Resume
                  </Link>
                </li>
                <li>
                  <Link to="/#contact" className="text-gray-700 hover:text-red-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-orange-100 p-4 transform -rotate-1 border-2 border-gray-300">
              <h4 className="font-bold text-gray-800 mb-3">Get in Touch</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-red-400" />
                  <span className="text-gray-700">reinaldo@email.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-red-400" />
                  <span className="text-gray-700">+55 (11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-red-400" />
                  <span className="text-gray-700">São Paulo, Brazil</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t-2 border-gray-300">
          <div className="bg-red-100 p-4 transform rotate-1 border-2 border-gray-300 text-center">
            <p className="text-gray-700 text-sm">
              © 2024 Reinaldo Luiz. Designed with ❤️ and lots of ☕ 
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Ready for your next design adventure? Let's create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
