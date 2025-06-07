
import { Download, MapPin, Phone, Mail, Calendar } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 transform -rotate-1 inline-block mb-4">
            Resume
          </h1>
          <div className="w-32 h-1 bg-red-400 mx-auto transform rotate-1 mb-6"></div>
          <button className="bg-red-400 hover:bg-red-500 text-white px-6 py-3 font-semibold transform -rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-black shadow-lg flex items-center gap-2 mx-auto">
            <Download size={20} />
            Download PDF
          </button>
        </div>

        {/* Contact Info */}
        <div className="bg-blue-50 p-6 transform rotate-1 border-2 border-gray-300 mb-12">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-red-400" />
              <span className="text-gray-700">São Paulo, Brazil</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-red-400" />
              <span className="text-gray-700">+55 (11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-red-400" />
              <span className="text-gray-700">reinaldo@email.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-red-400" />
              <span className="text-gray-700">5+ years experience</span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 transform -rotate-1 inline-block">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-yellow-100 p-6 transform -rotate-1 border-2 border-gray-300">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Senior UX/UI Designer</h3>
              <p className="text-red-400 font-semibold mb-2">TechCorp • 2022 - Present</p>
              <ul className="text-gray-700 space-y-1">
                <li>• Led design for 3 major product launches</li>
                <li>• Improved user satisfaction by 40% through research-driven design</li>
                <li>• Mentored junior designers and established design system</li>
              </ul>
            </div>
            
            <div className="bg-green-100 p-6 transform rotate-1 border-2 border-gray-300">
              <h3 className="text-xl font-bold text-gray-800 mb-2">UX Designer</h3>
              <p className="text-red-400 font-semibold mb-2">StartupXYZ • 2020 - 2022</p>
              <ul className="text-gray-700 space-y-1">
                <li>• Designed mobile app with 100k+ downloads</li>
                <li>• Conducted user research and usability testing</li>
                <li>• Collaborated with development team on implementation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 transform rotate-1 inline-block">
            Education
          </h2>
          <div className="bg-pink-100 p-6 transform -rotate-1 border-2 border-gray-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Bachelor in Design</h3>
            <p className="text-red-400 font-semibold mb-2">Universidade de São Paulo • 2016 - 2020</p>
            <p className="text-gray-700">Focus on Digital Design and User Experience</p>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 transform -rotate-1 inline-block">
            Key Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-orange-100 p-4 transform rotate-1 border-2 border-gray-300">
              <h3 className="font-bold text-gray-800 mb-2">Design</h3>
              <p className="text-gray-700 text-sm">Figma, Adobe CC, Sketch, Prototyping</p>
            </div>
            <div className="bg-blue-100 p-4 transform -rotate-1 border-2 border-gray-300">
              <h3 className="font-bold text-gray-800 mb-2">Development</h3>
              <p className="text-gray-700 text-sm">HTML/CSS, JavaScript, React</p>
            </div>
            <div className="bg-yellow-100 p-4 transform rotate-1 border-2 border-gray-300">
              <h3 className="font-bold text-gray-800 mb-2">Research</h3>
              <p className="text-gray-700 text-sm">User Testing, Analytics, Interviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
