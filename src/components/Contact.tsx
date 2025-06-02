
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Let's Work Together</h2>
          <p className="text-xl text-slate-300 text-center mb-16 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-slate-300">alex.jordan@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-slate-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-slate-300">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="border-slate-600 hover:bg-slate-800">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-slate-600 hover:bg-slate-800">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-slate-600 hover:bg-slate-800">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            
            <Card className="p-6 bg-slate-800 border-slate-700">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <Input 
                  placeholder="Subject" 
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
                <Textarea 
                  placeholder="Your Message" 
                  rows={5}
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-800 mt-16 pt-8">
        <div className="container mx-auto px-6">
          <p className="text-center text-slate-400">
            © 2024 Alex Jordan. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
