
import { Project } from '../../types/project';

export const project1: Project = {
  id: 1,
  title: "Intimus Brazil",
  subtitle: "E-commerce",
  description: "Intimus® (Kimberly-Clark) is a market-leading feminine hygiene brand in Brazil. Its official portal operates as a digital hub to present the full product portfolio (pads, panty liners, and intimate washes) and provide educational content on menstrual health and self-care.",
  year: "2024",
  duration: "4 months",
  team: "Designer, 2 Developers, PM",
  role: "Product Designer",
  image: "/lovable-uploads/53a631d0-16bb-4460-970a-b51729b1668b.png",
  color: "bg-pink-100",
  tools: ["Figma", "User Research", "Prototyping", "Adobe Creative Suite"],
  categories: ["UI Design"],
  problem: "Implement the website design for the Brazilian market while scaling and deploying customized sites across all Latin American countries. The project required standardizing the brand experience across regions while accommodating distinct cultural nuances, local requirements, and technical specifications.",
  solution: "Designed and structured a scalable, multi-region Design System to streamline localized rollouts. Conducted extensive regional research to align product features with local user expectations, improved core navigation patterns, and elevated digital accessibility standards (WCAG 2.1) across all country-specific portals.",
 process: [
    {
      title: "User Research & Interviews",
      description: "Conducted qualitative research across key LATAM regions to map distinct user behaviors and identify localized usability friction points."
    },
    {
      title: "Competitive Analysis",
      description: "Audited regional competitors to identify market standards, gaps, and opportunities for differentiation."
    },
    {
      title: "Wireframing & Prototyping",
      description: "Structured flexible, high-level layouts capable of accommodating multi-language content and regional feature variations."
    },
    {
      title: "User Testing & Iteration",
      description: "Built interactive prototypes and ran unmoderated testing sessions with local users to validate component usability and navigation flows."
    },
    {
      title: "Final Design & Handoff",
      description: "Developed a comprehensive UI component library with clear guidelines, ensuring seamless handoff and alignment with engineering teams."
    }
  ],
  results: [
    "40% increase in overall user engagement across Latin American domains.",
    "25% improvement in key task completion rates through optimized user flows.",
    "Full WCAG Compliance: Upgraded accessibility standards across all regional sites."
  ]
};
