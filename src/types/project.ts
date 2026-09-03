
export interface ProcessStep {
  title: string;
  description: string;
}
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
  process: ProcessStep[];
  results: string[];
  customImages?: string[];
}
