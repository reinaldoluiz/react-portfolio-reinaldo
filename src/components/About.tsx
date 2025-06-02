
const About = () => {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-gray-900">About</h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I'm a passionate UX/UI designer with 5+ years of experience creating 
                meaningful digital experiences that solve real problems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My approach focuses on understanding user needs and translating them 
                into intuitive, beautiful interfaces that drive business results.
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4 text-gray-900">Design Thinking</h3>
                <p className="text-gray-600">
                  Empathy-driven approach to understanding user needs and business goals.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4 text-gray-900">Collaboration</h3>
                <p className="text-gray-600">
                  Working closely with teams to bring ideas to life.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4 text-gray-900">Innovation</h3>
                <p className="text-gray-600">
                  Staying current with design trends and emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
