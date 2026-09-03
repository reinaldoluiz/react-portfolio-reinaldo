
import { Project } from '../../types/project';

export const project7: Project = {
  id: 7,
  title: 'Claro PME',
  subtitle: 'B2B Sales Platform on Salesforce',
  description: 'A complete platform to manage business customers, plans, and services for Claro, one of the main telecommunications operators.',
  year: '2020',
  duration: '10 months',
  team: 'Cross-functional team',
  role: 'UX/UI Designer',
  image: '/lovable-uploads/2b413020-94d9-4b29-99b1-2b8eb3ec1bc4.png',
  color: 'bg-red-100',
  tools: ['Salesforce', 'Figma', 'React', 'JavaScript'],
  categories: ['UI Design', 'UX Research'],
  problem: 'Claro needed a unified and efficient system for its B2B sales representatives to manage clients, create quotes, and associate services, replacing a fragmented and slow legacy system.',
  solution: 'We designed and developed a new platform on Salesforce Lightning Experience, with a step-by-step wizard for order creation, a clear dashboard, and a responsive mobile interface to empower sales representatives in the field.',
 process: [
  {
    title: "User Research & Interviews",
    description: "Shadowed B2B sales representatives in the field and interviewed account managers to map existing legacy system bottlenecks, client management flows, and quote generation pain points."
  },
  {
    title: "Competitive Analysis",
    description: "Evaluated enterprise CRM standards, telecom B2B sales workflows, and Salesforce Lightning best practices to establish an optimized order creation structure and service bundling model."
  },
  {
    title: "Wireframing & Prototyping",
    description: "Designed a step-by-step wizard interface for complex order building, alongside an intuitive executive dashboard layout tailored for both desktop and field mobile use."
  },
  {
    title: "User Testing & Iteration",
    description: "Conducted usability testing sessions with field agents using interactive prototypes to validate quote customization speed, service association flows, and mobile responsiveness."
  },
  {
    title: "Final Design & Handoff",
    description: "Delivered a complete UI design system aligned with Salesforce Lightning guidelines, featuring clear status indicators, field-optimized components, and handoff documentation for engineers."
  }
],
  results: ['30% increase in sales efficiency', '50% reduction in order processing time', 'Improved user satisfaction among sales representatives'],
  customImages: [
    '/lovable-uploads/2b413020-94d9-4b29-99b1-2b8eb3ec1bc4.png',
    '/lovable-uploads/5f9bad37-ff43-4990-a04c-c079573284c5.png',
    '/lovable-uploads/a326c65d-f6c8-411e-b96e-fb7ef9dbf6cb.png',
    '/lovable-uploads/a1e6cffd-5523-41a6-9bb4-9904dd5a8d31.png'
  ]
};
