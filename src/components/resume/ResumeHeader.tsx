
import { MapPin, Linkedin, Calendar } from "lucide-react";

const ResumeHeader = () => {
  return (
    <div className="text-center mb-8 pb-8 border-b-2 border-gray-200">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Reinaldo Luiz</h1>
      <p className="text-xl text-gray-600 mb-4">UI/UX Designer & Product Designer</p>
      
      {/* Contact Info - Single Line */}
      <div className="flex items-center justify-center gap-6 text-gray-600">
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-1" />
          <span>Barcelona, Spain</span>
        </div>
        <div className="flex items-center">
          <Linkedin className="h-4 w-4 mr-1" />
          <a href="https://linkedin.com/in/reinaldoluiz" className="text-red-400 hover:underline">
            linkedin.com/in/reinaldoluiz
          </a>
        </div>
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          <span>+8 anos de experiência</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
