
import { Card } from "@/components/ui/card";
import { Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">About Me</h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            I'm a passionate UX/UI designer with 5+ years of experience creating meaningful digital experiences that solve real problems.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Design Thinking</h3>
              <p className="text-slate-600">
                I approach every project with empathy, focusing on understanding user needs and business goals.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Collaboration</h3>
              <p className="text-slate-600">
                I work closely with developers, product managers, and stakeholders to bring ideas to life.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Innovation</h3>
              <p className="text-slate-600">
                I stay updated with the latest design trends and technologies to deliver cutting-edge solutions.
              </p>
            </Card>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-lg text-slate-700 leading-relaxed">
              My journey in design started with a curiosity about how things work and a desire to make them better. 
              Over the years, I've had the privilege of working with startups and established companies, helping them 
              create digital products that users love. I believe great design is invisible – it just works, feels 
              natural, and makes people's lives a little bit easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
