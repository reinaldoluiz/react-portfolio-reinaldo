export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  duration: string;
  team: string;
  role: string;
  image: string;
  color: string;
  tools: string[];
  category?: string;
  categories?: string[];
  problem: string;
  solution: string;
  process: string[];
  results: string[];
  customImages?: string[];
}

export const projects: Project[] = [
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
      image: "/lovable-uploads/18593925-b8e8-43b5-94fa-a39fedaf3798.png",
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
      ],
      customImages: [
        "/lovable-uploads/18593925-b8e8-43b5-94fa-a39fedaf3798.png",
        "/lovable-uploads/6c0eef8c-0854-4e43-a833-862a82f40b23.png",
        "/lovable-uploads/470e5153-db23-4479-a138-1c12dc72d959.png",
        "/lovable-uploads/5c328bc9-a8e3-4f58-9f7c-658e8c08e5a5.png"
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
      image: "/lovable-uploads/e171f6c0-f022-4ab0-a8cb-67dc5c32b757.png",
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
      ],
      customImages: [
        "/lovable-uploads/e171f6c0-f022-4ab0-a8cb-67dc5c32b757.png",
        "/lovable-uploads/37f81d0f-a0cc-4902-a480-dddccff83c3a.png",
        "/lovable-uploads/36b6753b-9e52-4aa3-8366-aed818a9bb35.png",
        "/lovable-uploads/d28ebb13-9a16-4b7f-9d15-01bb098205b3.png"
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
      image: "/lovable-uploads/edcec85f-6437-4ea0-9c1b-0cb71ad01129.png", // laptop image main
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
        "/lovable-uploads/edcec85f-6437-4ea0-9c1b-0cb71ad01129.png",
        "/lovable-uploads/ef3ba5eb-dbe3-4f4e-b8e0-5fe503d6d9c5.png",
        "/lovable-uploads/77af6bc2-801c-4627-8cc1-7ec98873bed9.png"
      ]
    },
    {
      id: 6,
      title: "The Bike Culture",
      subtitle: "E-commerce Website",
      description: "Development of a new e-commerce sales channel for a company looking to start selling its products online. The project focused on creating an intuitive user experience and a clear purchasing journey.",
      year: "2021",
      duration: "4 months",
      team: "UX/UI Designer, 2 Developers, PM",
      role: "Lead UX/UI Designer",
      image: "/lovable-uploads/26081ceb-e762-402b-94bd-719e5737a1f8.png",
      color: "bg-yellow-100",
      tools: ["Figma", "Design Thinking", "User Research", "Prototyping"],
      categories: ["UI/UX Design", "E-commerce"],
      problem: "A bicycle company wanted to start selling their products online but lacked an e-commerce platform, missing out on a major sales channel.",
      solution: "Developed a user-centric e-commerce website from scratch. The focus was on creating a seamless shopping experience, from product discovery to checkout, to establish a strong online sales channel.",
      process: [
        "Empathy: Benchmarking, briefing, and client interviews",
        "Definition: Creating user personas and mapping the customer journey",
        "Ideation: Brainstorming sessions and feature prioritization",
        "Prototyping: Developing a style guide and high-fidelity interactive prototypes",
        "Testing: Conducting usability tests with different user groups to validate the design"
      ],
      results: [
        "Successfully launched a new online sales channel",
        "Designed an intuitive and easy-to-use purchase flow",
        "Received positive feedback from both client and end-users"
      ],
      customImages: [
        "/lovable-uploads/26081ceb-e762-402b-94bd-719e5737a1f8.png",
        "/lovable-uploads/dcbfaf79-f5d0-4c2a-81b2-a9497dc3d8ee.png",
        "/lovable-uploads/c1b5a856-4ddc-4ed2-8c64-f4a7f743e307.png",
        "/lovable-uploads/543bffc6-6b51-45fa-966f-fb80546c0ff5.png"
      ]
    }
  ];
