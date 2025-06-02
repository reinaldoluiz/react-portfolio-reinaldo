
const Contact = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-gray-900">Contact</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Have a project in mind? I'd love to hear about it and discuss 
                how we can bring your ideas to life.
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gray-900 font-medium">Email</p>
                  <p className="text-gray-700">alex.jordan@email.com</p>
                </div>
                
                <div>
                  <p className="text-gray-900 font-medium">Phone</p>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>
                
                <div>
                  <p className="text-gray-900 font-medium">Location</p>
                  <p className="text-gray-700">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text"
                    placeholder="Name" 
                    className="w-full p-4 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <input 
                    type="email"
                    placeholder="Email" 
                    className="w-full p-4 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <textarea 
                    placeholder="Message" 
                    rows={4}
                    className="w-full p-4 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:outline-none transition-colors resize-none"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="text-gray-900 hover:text-gray-600 transition-colors text-sm uppercase tracking-widest"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 mt-24 pt-8">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Alex Jordan. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
