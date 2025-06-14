
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Eye, Users, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Reinaldo Luiz
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              UX/UI Designer creating meaningful digital experiences
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Accessibility Section */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Accessibility</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Eye size={16} />
                <span>Inclusive design</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users size={16} />
                <span>For all users</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Volume2 size={16} />
                <span>Screen reader compatible</span>
              </div>
              <div className="mt-3">
                <Link 
                  to="/accessibility"
                  className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  View Checkpoint →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Reinaldo Luiz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
