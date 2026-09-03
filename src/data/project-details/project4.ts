
import { Project } from '../../types/project';

export const project4: Project = {
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
  {
    title: "User Research & Interviews",
    description: "Conducted accessibility audits and user interviews to pinpoint navigation hurdles, identifying key friction points in the checkout journey and visual inconsistency across pages."
  },
  {
    title: "Competitive Analysis",
    description: "Benchmarked leading e-commerce platforms to establish accessibility standards (WCAG guidelines), seamless conversion flows, and scalable design system architectures."
  },
  {
    title: "Wireframing & Prototyping",
    description: "Architected intuitive layout frameworks for product and checkout pages, focusing on clear visual hierarchy, keyboard navigation, and responsive component structures."
  },
  {
    title: "User Testing & Iteration",
    description: "Ran usability sessions with diverse user groups to test component readability, interactive flows, and purchase completion rates, refining micro-interactions based on feedback."
  },
  {
    title: "Final Design & Handoff",
    description: "Built a fully accessible, standardized UI design system with comprehensive guidelines and component specifications to ensure seamless implementation by the engineering team."
  }
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
};
