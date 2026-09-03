
import { Project } from '../../types/project';

export const project5: Project = {
  id: 5,
  title: "TrackView Web System",
  subtitle: "Web system – Desktop",
  description: "Complete redesign of TrackView, a system used by major Brazilian corporations to monitor and validate banking file transfers. The project focused on improving user interface, usability, and visual consistency.",
  year: "2020",
  duration: "3 months",
  team: "Developer, Product Manager",
  role: "UX/UI Designer",
  image: "/lovable-uploads/edcec85f-6437-4ea0-9c1b-0cb71ad01129.png", // laptop image main
  color: "bg-orange-100",
  tools: ["Adobe XD", "Illustrator", "Photoshop", "Hotjar", "Google Analytics"],
  categories: ["UI Design", "UX Research"],
  problem: "TrackView was an obsolete system with little user adoption. The interface was outdated, non-intuitive, and lacked consistency, making file tracking and validation cumbersome for banking professionals.",
  solution: "Led a complete redesign focused on user interviews and analytics. Introduced a new styleguide, improved daily task management, and facilitated clear user journeys validated by stakeholders.",
 process: [
  {
    title: "User Research & Interviews",
    description: "Executed contextual inquiries and interviews with banking professionals to understand workflow bottlenecks, uncovering key pain points in file tracking, validation errors, and daily task management."
  },
  {
    title: "Competitive Analysis",
    description: "Analyzed enterprise financial software and internal data tracking tools to establish modern usability benchmarks, workflow automation patterns, and data visualization standards."
  },
  {
    title: "Wireframing & Prototyping",
    description: "Designed simplified dashboard layouts and intuitive task management flows, replacing legacy screens with structured, clear file-tracking interfaces and status indicators."
  },
  {
    title: "User Testing & Iteration",
    description: "Validated high-fidelity prototypes through guided testing sessions with stakeholders and daily system users, refining data views, search filters, and validation steps based on feedback."
  },
  {
    title: "Final Design & Handoff",
    description: "Created a modern, cohesive style guide and UI component library tailored for financial data tools, providing comprehensive documentation for smooth developer handoff."
  }
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
};
