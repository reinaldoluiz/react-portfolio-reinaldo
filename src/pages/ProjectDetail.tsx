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
      categories: ["Research", "UI Design", "Design System"],
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
      title: "Santander Auto",
      subtitle: "UX/UI Landing Page and APP",
      description: "Complete redesign of the Santander Auto app and landing page for car and motorcycle insurance. The project focused on creating a seamless digital experience that helps users acquire insurance and add value to their insurance installments through an intuitive mobile interface and comprehensive web presence.",
      year: "2023",
      duration: "5 months",
      team: "UX/UI Designer, Developer, Product Manager, Business Analyst",
      role: "Lead UX/UI Designer",
      image: "/lovable-uploads/13c99f9e-2516-44a2-a16f-677610b38f82.png",
      color: "bg-red-100",
      tools: ["Adobe XD", "Illustrator", "Figma", "Google Analytics"],
      category: "UX/UI Design",
      problem: "Customers faced difficulties navigating the complex insurance acquisition process, with poor mobile user experience and lack of clear value proposition for insurance installments. The existing platform had high abandonment rates and low user satisfaction.",
      solution: "Developed a comprehensive digital solution featuring an intuitive mobile app with streamlined insurance acquisition flow, clear coverage information, and added-value services. Created responsive landing pages that effectively communicate the benefits and guide users through the decision-making process.",
      process: [
        "Business Requirements Analysis",
        "User Journey Mapping & Pain Point Identification",
        "Competitive Analysis of Insurance Platforms",
        "Mobile-First Design Approach",
        "Prototyping & User Testing",
        "Design System Implementation",
        "Collaboration with Development Team"
      ],
      results: [
        "Improved user experience with simplified navigation",
        "Enhanced mobile app functionality and usability",
        "Increased conversion rates on landing pages",
        "Better user engagement with insurance products",
        "Successful integration of value-added services"
      ]
    },
    {
      id: 4,
      title: "Viva E-commerce",
      subtitle: "UX/UI – Redesign Viva Site (Kimberly-Clark)",
      description:
        "Complete redesign of the Viva (Kimberly-Clark) product line's e-commerce, focusing on optimized purchase experience, accessibility, visual consistency, and the implementation of a new design system.",
      year: "2022",
      duration: "5 months",
      team: "UX/UI Designer, Frontend Developer, Backend Developer, PM, QA",
      role: "UX/UI Designer",
      image: "/lovable-uploads/bc92d7c9-9d89-40f6-839a-3dae35ff94fd.png",
      color: "bg-purple-100",
      tools: [
        "Figma",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Google Analytics"
      ],
      category: "UI Design",
      problem:
        "The product purchase journey was complex, the website had low accessibility, and there was no visual standardization among components, making things difficult for both users and the development team.",
      solution:
        "I restructured the entire e-commerce using a design system, with accessibility as a priority and components designed for different user journeys. I defined a new visual style, aligned business requirements, and developed product and purchase pages focused on user experience.",
      process: [
        "Product and purchase journey research",
        "Redesign objectives definition",
        "Design System creation",
        "Prototyping e-commerce screens (desktop and mobile)",
        "Usability testing and adjustments",
        "Component standardization",
        "Assets and documentation handoff to development"
      ],
      results: [
        "Easier and more direct purchase journey",
        "Increased website sales conversion",
        "Site became a usability reference in the segment",
        "Reduced rework for dev team (componentization)",
        "Significant improvement in accessibility metrics"
      ],
      customImages: [
        "/lovable-uploads/bc92d7c9-9d89-40f6-839a-3dae35ff94fd.png",
        "/lovable-uploads/8feffc75-561a-49fd-8445-8513dcce8d18.png",
        "/lovable-uploads/84f32a35-cb29-4d19-9f29-67d0b7f09a3a.png",
        "/lovable-uploads/5b7c2195-2d61-49dc-a6c1-ee8578150f9a.png"
      ]
    },
    {
      id: 5,
      title: "TrackView Web System",
      subtitle: "Web system – Desktop",
      description: "Complete redesign of TrackView, a system used by major Brazilian corporations to monitor and validate banking file transfers. The project focused on improving user interface, usability, and visual consistency.",
      year: "2023",
      duration: "3 months",
      team: "UX/UI Designer",
      role: "UX/UI Designer",
      image: "/lovable-uploads/23cd1ea5-0e7a-4c71-afaa-8d75d780f030.png", // laptop image main
      color: "bg-orange-100",
      tools: ["Adobe XD", "Illustrator", "Photoshop", "Hotjar", "Google Analytics"],
      category: "UI/UX Design",
      problem: "TrackView was an obsolete system with little user adoption. The interface was outdated, non-intuitive, and lacked consistency, making file tracking and validation cumbersome for banking professionals.",
      solution: "Led a complete redesign focused on user interviews and analytics. Introduced a new styleguide, improved daily task management, and facilitated clear user journeys validated by stakeholders.",
      process: [
        "User interviews and feedback collection",
        "Wireframing and prototyping",
        "Usability analysis with Hotjar and business teams",
        "Creation of a consistent styleguide",
        "UI and UX refinement through testing",
        "Final implementation and stakeholder validation"
      ],
      results: [
        "Modern interface adopted by a large user base",
        "Improved clarity and speed in file validation",
        "Positive stakeholder and user feedback",
        "Defined best practices for future UI projects"
      ],
      customImages: [
        "/lovable-uploads/23cd1ea5-0e7a-4c71-afaa-8d75d780f030.png", // laptop image
        "/lovable-uploads/0ad5f1e2-27b9-4ee4-9f14-77018c7b8672.png",
        "/lovable-uploads/10e921c1-4075-425f-914e-8227d013ceb1.png"
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
              {project.categories ? (
                // Multiple categories for project 2
                <div className="flex justify-center flex-wrap gap-2">
                  {project.categories.map((cat, catIndex) => (
                    <div key={catIndex} className="bg-red-200 px-4 py-2 inline-block transform rotate-2">
                      <p className="text-sm font-bold text-gray-800">{cat}</p>
                    </div>
                  ))}
                </div>
              ) : (
                // Single category for other projects
                <div className="bg-red-200 px-4 py-2 inline-block transform rotate-2">
                  <p className="text-sm font-bold text-gray-800">{project.category}</p>
                </div>
              )}
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
            {project.id === 4 ? (
              // Custom grid for project 4
              <div className={`${project.color} p-8 transform -rotate-1 border-2 border-gray-300`}>
                <div className="w-full h-[500px]">
                  <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
                    {/* Top left - Main (cup/computer/phone) image */}
                    <div 
                      className="h-full rounded-lg shadow-lg bg-white flex justify-center items-center"
                      style={{
                        backgroundImage: `url('${project.customImages?.[0]}')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                    {/* Top right - Buy online */}
                    <div 
                      className="h-full rounded-lg shadow-lg bg-white flex justify-center items-center"
                      style={{
                        backgroundImage: `url('${project.customImages?.[1]}')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                    {/* Bottom left - Shop Product */}
                    <div 
                      className="h-full rounded-lg shadow-lg bg-white flex justify-center items-center"
                      style={{
                        backgroundImage: `url('${project.customImages?.[2]}')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                    {/* Bottom right - Articles and Benefits */}
                    <div 
                      className="h-full rounded-lg shadow-lg bg-white flex justify-center items-center"
                      style={{
                        backgroundImage: `url('${project.customImages?.[3]}')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : project.id === 1 ? (
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
            ) : project.id === 3 ? (
              // Grid layout for project 3 (Santander Auto) with new uploaded images
              <div className="w-full h-[500px]">
                <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
                  {/* Top left - Reinaldo Luiz Santander mockup (first image) */}
                  <div 
                    className="h-full rounded-lg shadow-lg bg-white"
                    style={{
                      backgroundImage: `url('/lovable-uploads/e171f6c0-f022-4ab0-a8cb-67dc5c32b757.png')`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  
                  {/* Top right - Mobile app screens grid */}
                  <div 
                    className="h-full rounded-lg shadow-lg bg-white"
                    style={{
                      backgroundImage: `url('/lovable-uploads/37f81d0f-a0cc-4902-a480-dddccff83c3a.png')`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  
                  {/* Bottom left - Desktop landing page with phone */}
                  <div 
                    className="h-full rounded-lg shadow-lg bg-white"
                    style={{
                      backgroundImage: `url('/lovable-uploads/36b6753b-9e52-4aa3-8366-aed818a9bb35.png')`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  
                  {/* Bottom right - Mobile app features */}
                  <div 
                    className="h-full rounded-lg shadow-lg bg-white"
                    style={{
                      backgroundImage: `url('/lovable-uploads/d28ebb13-9a16-4b7f-9d15-01bb098205b3.png')`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                </div>
              </div>
            ) : project.id === 5 ? (
              // Custom grid for project 5 (TrackView) - 3 images: laptop, system UI 1, system UI 2
              <div className={`${project.color} p-8 transform -rotate-1 border-2 border-gray-300`}>
                <div className="w-full h-[400px]">
                  <div className="grid grid-cols-3 gap-6 h-full">
                    {project.customImages &&
                      project.customImages.map((img, idx) => (
                        <div
                          key={idx}
                          className="h-full rounded-lg shadow-lg bg-white flex justify-center items-center"
                          style={{
                            backgroundImage: `url('${img}')`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                          }}
                        />
                      ))}
                  </div>
                </div>
              </div>
            ) : (
              // Grid layout for projects 6, 7, and 8 using placeholder images
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
