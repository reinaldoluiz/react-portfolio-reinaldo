
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = "Design Project Inquiry";
    const body = `Hi Reinaldo,%0D%0A%0D%0AI'm ${formData.name} and I'm interested in discussing a design project with you.%0D%0A%0D%0AProject details:%0D%0A${encodeURIComponent(formData.message)}%0D%0A%0D%0ABest regards,%0D%0A${formData.name}%0D%0A${formData.email}`;
    
    window.location.href = `mailto:reinaldo@email.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section className="py-32 bg-gradient-to-br from-orange-50 to-pink-50 relative overflow-hidden">
      {/* Decorative sketchy elements */}
      <div className="absolute top-20 right-20 w-16 h-3 bg-blue-300 transform -rotate-12 opacity-40"></div>
      <div className="absolute bottom-10 left-10 w-10 h-10 border-2 border-green-400 rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 transform rotate-1 inline-block">
              Let's Start an Adventure!
            </h2>
            <div className="w-32 h-1 bg-orange-400 mx-auto mt-4 transform -rotate-2"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-center">
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/5445d46d-711b-49b0-9683-89d1404f0db4.png" 
                  alt="Adventure character with background" 
                  className="w-56 h-56 object-contain mx-auto"
                />
              </div>
              
              <div className="bg-white p-8 transform -rotate-1 border-2 border-gray-300 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Ready to embark on a design journey together? Whether you need a guide through 
                  complex UX challenges or want to explore new digital territories, I'm here to help!
                </p>
                <p className="text-gray-600">
                  Drop me a message and let's map out your next great user experience adventure! 🗺️
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 transform rotate-1 border-2 border-gray-300 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Send a Message!
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input 
                      type="text"
                      name="name"
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-400 focus:outline-none transition-colors transform -rotate-1 focus:rotate-0"
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="email"
                      name="email"
                      placeholder="Your Email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-400 focus:outline-none transition-colors transform rotate-1 focus:rotate-0"
                    />
                  </div>
                  
                  <div>
                    <textarea 
                      name="message"
                      placeholder="Tell me about your project adventure..." 
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-gray-300 bg-gray-50 focus:bg-white focus:border-blue-400 focus:outline-none transition-colors resize-none transform -rotate-1 focus:rotate-0"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-red-400 hover:bg-red-500 text-white p-4 text-lg font-bold transform rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-black shadow-lg"
                  >
                    📧 Send Email & Start the Journey!
                  </button>
                </form>
                
                <p className="text-sm text-gray-500 mt-4 text-center">
                  This will open your email client with the filled information
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t-2 border-gray-300 mt-24 pt-8 bg-white transform -rotate-1">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Reinaldo Luiz - Adventure Designer. All rights reserved. 🎒
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
