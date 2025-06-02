
const Contact = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Start an Adventure!
          </h2>
          <div className="w-32 h-1 bg-orange-400 mb-8 transform -rotate-2"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to embark on a design journey together? Whether you need a guide through 
            complex UX challenges or want to explore new digital territories, I'm here to help!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column - Info & Illustration */}
          <div>
            <div className="mb-12 text-center lg:text-left">
              <img 
                src="/lovable-uploads/1dce2f7c-9669-42ab-a5c6-a963f4bfa390.png" 
                alt="Adventure character" 
                className="w-64 h-64 object-contain mx-auto lg:mx-0 mb-8"
              />
              <p className="text-lg text-gray-600 leading-relaxed">
                Drop me a message and let's map out your next great user experience adventure! 🗺️
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xl">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">alex.jordan@email.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl">📱</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600 text-xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-white p-8 lg:p-12 border-2 border-gray-200 shadow-lg transform rotate-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Send a Message!
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input 
                      type="text"
                      className="w-full p-4 border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text"
                      className="w-full p-4 border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email"
                    className="w-full p-4 border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full p-4 border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project adventure..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-red-400 hover:bg-red-500 text-white p-4 text-lg font-bold transform -rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-black shadow-lg"
                >
                  🚀 Send Message & Start the Journey!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="border-t border-gray-200 mt-20 pt-8">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Alex Jordan - Adventure Designer. All rights reserved. 🎒
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">Dribbble</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">Behance</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
