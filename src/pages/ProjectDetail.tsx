import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProjectHeader from '../components/projectDetail/ProjectHeader';
import ProjectInfoGrid from '../components/projectDetail/ProjectInfoGrid';
import ProjectImagesGrid from '../components/projectDetail/ProjectImagesGrid';
import ProjectDetailsGrid from '../components/projectDetail/ProjectDetailsGrid';
import ProjectCallToAction from '../components/projectDetail/ProjectCallToAction';

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
          <ProjectHeader project={project} />

          {/* Project Info Grid */}
          <ProjectInfoGrid project={project} />

          {/* Project Images Grid */}
          <ProjectImagesGrid project={project} />

          {/* Project Details Grid */}
          <ProjectDetailsGrid project={project} />

          {/* Call to Action */}
          <ProjectCallToAction />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
