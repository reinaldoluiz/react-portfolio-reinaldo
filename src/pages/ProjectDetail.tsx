import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Users, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Array with different project data
  const projects = [
    {
      id: 1,
      title: "Intimus Brazil",
      subtitle: "Sustainable Shopping Platform",
      description: "A comprehensive sustainable shopping platform that helps users discover eco-friendly products through an intuitive map-like navigation system. The app focuses on environmental impact transparency and conscious consumer choices.",
      year: "2024",
      duration: "4 months",
      team: "Designer, 2 Developers, PM",
      role: "Product Designer",
      image: "/lovable-uploads/53a631d0-16bb-4460-970a-b51729b1668b.png",
      color: "bg-pink-100",
      tools: ["Figma", "User Research", "Prototyping", "Adobe Creative Suite"],
      category: "UI Design",
      problem: "Users struggle to find and verify eco-friendly products while shopping online. Existing platforms lack transparency about environmental impact and sustainable alternatives.",
      solution: "Created an intuitive mobile app with map-based navigation, sustainability scores, and AR features to help users make informed eco-friendly purchasing decisions.",
      process: [
        "User Research & Interviews",
        "Competitive Analysis", 
        "Wireframing & Prototyping",
        "User Testing & Iteration",
        "Final Design & Handoff"
      ],
      results: [
        "40% increase in user engagement",
        "25% improvement in task completion",
        "4.8/5 app store rating",
        "Featured in sustainability category"
      ]
    },
    {
      id: 2,
      title: "Pull-Ups E-commerce",
      subtitle: "Kimberly-Clark Training Pants Platform",
      description: "Complete e-commerce redesign for Pull-Ups training pants, creating an engaging and educational platform for parents. The project focused on combining product discovery with educational content about potty training.",
      year: "2023",
      duration: "6 months",
      team: "UX/UI Designer, Developer, Product Manager, Content Strategist",
      role: "Lead UX/UI Designer",
      image: "/lovable-uploads/9488caaa-dfee-409f-a625-e61a6ee2cdbd.png",
      color: "bg-purple-100",
      tools: ["Research", "UI Design", "Design System"],
      category: "E-commerce",
      problem: "Parents struggled to find the right training pants for their children while also needing educational support during the potty training process. The existing platform lacked engagement and failed to address the multicultural needs of diverse families.",
      solution: "Created an integrated e-commerce and educational platform with personalized product recommendations, interactive potty training resources, and culturally diverse content. Implemented a design system that worked across desktop and mobile devices.",
      process: [
        "Stakeholder Interviews & Requirements Gathering",
        "User Research with Parents & Children",
        "Competitive Analysis of E-commerce Platforms",
        "Information Architecture & User Journey Mapping",
        "Design System Creation",
        "Prototyping & User Testing",
        "Implementation & Launch Support"
      ],
      results: [
        "Improved user engagement with multicultural content",
        "Streamlined product discovery process",
        "Enhanced educational resources integration",
        "Successful launch across multiple markets",
        "Positive feedback from diverse parent demographics"
      ]
    },
    {
      id: 3,
      title: "Learning Platform",
      subtitle: "Educational Connection System",
      description: "An educational platform connecting students and instructors - mapping out learning adventures for every user. Features interactive course creation and progress tracking.",
      year: "2023",
      duration: "5 months",
      team: "3 Designers, 4 Developers, 2 PMs",
      role: "Lead Product Designer",
      image: "/lovable-uploads/898d43f4-a54b-415e-8512-7d437380d908.png",
      color: "bg-yellow-100",
      tools: ["Sketch", "Information Architecture", "User Flows", "Principle"],
      category: "Research",
      problem: "Students and instructors struggled to connect effectively in online learning environments, with poor engagement and completion rates across educational platforms.",
      solution: "Created an engaging platform with gamified learning paths, real-time collaboration tools, and personalized learning recommendations.",
      process: [
        "Educational Research",
        "Student & Teacher Interviews",
        "Learning Path Design",
        "Interactive Prototype Development",
        "Pilot Program & Feedback Integration"
      ],
      results: [
        "85% course completion rate",
        "300% increase in student engagement",
        "Used by 50+ educational institutions",
        "Featured in EdTech Innovation Awards"
      ]
    },
    {
      id: 4,
      title: "Healthcare App",
      subtitle: "Telemedicine Platform",
      description: "A telemedicine application that connects patients with doctors through an intuitive and accessible interface, focusing on user safety and medical compliance.",
      year: "2023",
      duration: "8 months",
      team: "2 Designers, 5 Developers, Medical Advisor",
      role: "UX/UI Designer",
      image: "/lovable-uploads/3bc795d8-161f-4f91-acc0-46a5d2d4b7d9.png",
      color: "bg-green-100",
      tools: ["Figma", "Accessibility Design", "User Testing", "Prototyping"],
      category: "UI Design",
      problem: "Patients faced barriers accessing healthcare remotely, with existing telemedicine solutions being complex and not meeting accessibility standards.",
      solution: "Designed an accessible, HIPAA-compliant platform with simple navigation, video consultations, and integrated prescription management.",
      process: [
        "Healthcare Regulation Research",
        "Patient & Doctor Interviews",
        "Accessibility Compliance Design",
        "Medical Workflow Integration",
        "Clinical Testing & Validation"
      ],
      results: [
        "95% patient satisfaction rate",
        "50% reduction in appointment wait times",
        "HIPAA compliance certification",
        "Adopted by 25+ healthcare providers"
      ]
    },
    {
      id: 5,
      title: "Food Delivery UI",
      subtitle: "Modern Ordering Experience",
      description: "A modern food delivery interface focusing on quick ordering and real-time tracking features, with emphasis on local restaurant discovery.",
      year: "2022",
      duration: "3 months",
      team: "Designer, 2 Developers",
      role: "UI/UX Designer",
      image: "/lovable-uploads/4ea7692a-f646-41c6-a293-9a18f209e15d.png",
      color: "bg-orange-100",
      tools: ["Adobe XD", "Micro-interactions", "Prototyping", "After Effects"],
      category: "UI Design",
      problem: "Users found existing food delivery apps cluttered and slow, with poor restaurant discovery and confusing ordering processes.",
      solution: "Created a streamlined interface with visual menu browsing, one-tap ordering, and engaging micro-interactions for a delightful user experience.",
      process: [
        "Competitive Analysis",
        "User Flow Optimization",
        "Visual Design & Branding",
        "Micro-interaction Design",
        "Usability Testing"
      ],
      results: [
        "35% faster ordering process",
        "20% increase in repeat orders",
        "4.7/5 app store rating",
        "Featured in Design Awards 2022"
      ]
    },
    {
      id: 6,
      title: "Brand Identity Project",
      subtitle: "Comprehensive Brand System",
      description: "A comprehensive brand identity design including logo, color palette, and marketing materials for a sustainable fashion startup.",
      year: "2022",
      duration: "2 months",
      team: "Brand Designer, Marketing Specialist",
      role: "Brand Designer",
      image: "/lovable-uploads/5c46fb05-5f26-4317-a11c-c681893bd33e.png",
      color: "bg-purple-100",
      tools: ["Illustrator", "InDesign", "Brand Strategy", "Photoshop"],
      category: "Graphic Design",
      problem: "A sustainable fashion startup needed a complete brand identity that would resonate with eco-conscious consumers and stand out in a crowded market.",
      solution: "Developed a cohesive brand system with earth-inspired visuals, sustainable messaging, and flexible design elements across all touchpoints.",
      process: [
        "Brand Strategy Workshop",
        "Market Research & Analysis",
        "Logo & Visual Identity Design",
        "Brand Guidelines Creation",
        "Marketing Material Design"
      ],
      results: [
        "300% increase in brand recognition",
        "150% growth in social media following",
        "Featured in sustainable fashion magazines",
        "Brand system adopted across 15+ touchpoints"
      ]
    }
  ];
  
  // Find the project based on ID
  const project = projects.find(p => p.id === parseInt(id || '1')) || projects[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-16">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 transform -rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-gray-300 text-gray-700 hover:text-red-400"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
          </div>

          {/* Project Header */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <div className="bg-red-200 px-4 py-2 inline-block transform rotate-2">
                <p className="text-sm font-bold text-gray-800">{project.category}</p>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 transform -rotate-1 inline-block mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{project.subtitle}</p>
            <div className="w-32 h-1 bg-blue-400 mx-auto transform rotate-1"></div>
          </div>

          {/* Project Info Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-blue-100 p-6 transform rotate-1 border-2 border-gray-300">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={20} className="text-red-400" />
                <h3 className="font-bold text-gray-800">Timeline</h3>
              </div>
              <p className="text-gray-700">{project.duration}</p>
              <p className="text-sm text-gray-600">{project.year}</p>
            </div>
            
            <div className="bg-yellow-100 p-6 transform -rotate-1 border-2 border-gray-300">
              <div className="flex items-center gap-2 mb-2">
                <Users size={20} className="text-red-400" />
                <h3 className="font-bold text-gray-800">Team</h3>
              </div>
              <p className="text-gray-700">{project.team}</p>
              <p className="text-sm text-gray-600">My role: {project.role}</p>
            </div>
            
            <div className="bg-green-100 p-6 transform rotate-2 border-2 border-gray-300">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={20} className="text-red-400" />
                <h3 className="font-bold text-gray-800">Tools Used</h3>
              </div>
              <div className="flex flex-wrap gap-1">
                {project.tools.map((tool, index) => (
                  <span key={index} className="bg-white px-2 py-1 text-xs font-semibold text-gray-700 border border-gray-400">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Images Grid */}
          <div className="mb-16">
            <div className={`${project.color} p-8 transform -rotate-1 border-2 border-gray-300`}>
              {project.id === 1 ? (
                // Single image layout for project 1
                <div className="w-full max-w-4xl mx-auto">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              ) : project.id === 2 ? (
                // Grid layout for project 2 with the uploaded images
                <div className="w-full h-[500px]">
                  <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
                    {/* Top left - Reinaldo Luiz mockup */}
                    <div 
                      className="h-full rounded-lg shadow-lg bg-white"
                      style={{
                        backgroundImage: `url('/lovable-uploads/18593925-b8e8-43b5-94fa-a39fedaf3798.png')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                    
                    {/* Top right - About Pull-Ups page */}
                    <div 
                      className="h-full rounded-lg shadow-lg bg-white"
                      style={{
                        backgroundImage: `url('/lovable-uploads/6c0eef8c-0854-4e43-a833-862a82f40b23.png')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                    
                    {/* Bottom left - Various features and content */}
                    <div 
                      className="h-full rounded-lg shadow-lg bg-white"
                      style={{
                        backgroundImage: `url('/lovable-uploads/470e5153-db23-4479-a138-1c12dc72d959.png')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                    
                    {/* Bottom right - Disney integration */}
                    <div 
                      className="h-full rounded-lg shadow-lg bg-white"
                      style={{
                        backgroundImage: `url('/lovable-uploads/5c328bc9-a8e3-4f58-9f7c-658e8c08e5a5.png')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                  </div>
                </div>
              ) : (
                // Grid layout for projects 3, 4, 5, and 6 using placeholder images
                <div className="w-full h-[500px]">
                  <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
                    {/* Top left */}
                    <div 
                      className="h-full rounded-lg shadow-lg bg-white"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                    
                    {/* Top right */}
                    <div 
                      className="h-full rounded-lg shadow-lg bg-white"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                    
                    {/* Bottom left */}
                    <div 
                      className="h-full rounded-lg shadow-lg bg-white"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                    
                    {/* Bottom right */}
                    <div 
                      className="h-full rounded-lg shadow-lg bg-white"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Problem & Solution */}
            <div>
              <div className="bg-orange-100 p-6 transform rotate-1 border-2 border-gray-300 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">The Challenge</h3>
                <p className="text-gray-700 leading-relaxed">{project.problem}</p>
              </div>
              
              <div className="bg-pink-100 p-6 transform -rotate-1 border-2 border-gray-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">The Solution</h3>
                <p className="text-gray-700 leading-relaxed">{project.solution}</p>
              </div>
            </div>
            
            {/* Process & Results */}
            <div>
              <div className="bg-purple-100 p-6 transform -rotate-1 border-2 border-gray-300 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Design Process</h3>
                <ul className="space-y-2">
                  {project.process.map((step, index) => (
                    <li key={index} className="text-gray-700 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-teal-100 p-6 transform rotate-1 border-2 border-gray-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Results</h3>
                <ul className="space-y-2">
                  {project.results.map((result, index) => (
                    <li key={index} className="text-gray-700 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-red-100 p-8 transform rotate-1 border-2 border-gray-300 inline-block max-w-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Interested in this project?
              </h3>
              <p className="text-gray-700 mb-6">
                Let's discuss how we can create something amazing for your next project!
              </p>
              <Link 
                to="/#contact"
                className="bg-red-400 hover:bg-red-500 text-white px-6 py-3 font-semibold transform -rotate-1 hover:rotate-0 transition-all duration-300 border-2 border-black inline-block"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
