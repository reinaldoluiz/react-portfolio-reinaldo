
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PortfolioHeader from '../components/PortfolioHeader';
import PortfolioTabs from '../components/PortfolioTabs';
import PortfolioCTA from '../components/PortfolioCTA';
import { projects } from '../data/projects';

const Portfolio = () => {
  const categories = ["All", "Research", "UI Design", "UX/UI Design", "Design System", "Graphic Design", "E-commerce", "Branding"];

  const filterProjectsByCategory = (category: string) => {
    if (category === "All") return projects;
    return projects.filter(project => {
      if (project.categories) {
        return project.categories.includes(category);
      }
      return project.category === category;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <PortfolioHeader />
          <PortfolioTabs 
            categories={categories}
            projects={projects}
            filterProjectsByCategory={filterProjectsByCategory}
          />
          <PortfolioCTA />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
