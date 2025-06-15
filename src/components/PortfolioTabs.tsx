
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import PortfolioProjectCard from './PortfolioProjectCard';
import { Project } from '../../types/project';

interface Props {
  categories: string[];
  projects: Project[];
  filterProjectsByCategory: (cat: string) => Project[];
}

const PortfolioTabs = ({ categories, projects, filterProjectsByCategory }: Props) => (
  <Tabs defaultValue="All" className="w-full max-w-4xl mx-auto mb-16">
    <TabsList className="grid w-full grid-cols-6 bg-white">
      {categories.map((category) => (
        <TabsTrigger 
          key={category} 
          value={category}
          className="data-[state=active]:bg-red-400 data-[state=active]:text-white text-xs"
        >
          {category}
        </TabsTrigger>
      ))}
    </TabsList>
    {categories.map((category) => (
      <TabsContent key={category} value={category} className="mt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filterProjectsByCategory(category).map((project, index) => (
            <PortfolioProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </TabsContent>
    ))}
  </Tabs>
);

export default PortfolioTabs;
