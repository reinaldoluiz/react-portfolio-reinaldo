
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PortfolioHeader from '../components/PortfolioHeader';
import PortfolioTabs from '../components/PortfolioTabs';
import PortfolioCTA from '../components/PortfolioCTA';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Intimus Brazil",
      description: "A sustainable shopping platform that helps users discover eco-friendly products with an intuitive map-like navigation system.",
      year: "2024",
      image: "/lovable-uploads/53a631d0-16bb-4460-970a-b51729b1668b.png",
      color: "bg-pink-100",
      tools: ["Figma", "User Research", "Prototyping", "Adobe Creative Suite"],
      category: "UI Design"
    },
    {
      id: 2,
      title: "Pull-Ups E-commerce", 
      description: "Complete e-commerce redesign for Pull-Ups training pants, creating an engaging and educational platform for parents. The project focused on combining product discovery with educational content about potty training.",
      year: "2024",
      image: "/lovable-uploads/18593925-b8e8-43b5-94fa-a39fedaf3798.png",
      color: "bg-purple-100",
      tools: ["Research", "UI Design", "Design System"],
      categories: ["Research", "UI Design", "Design System"]
    },
    {
      id: 3,
      title: "Santander Auto",
      description: "Complete redesign of the Santander Auto app and landing page, creating a seamless digital experience for car and motorcycle insurance. The project focused on improving user journey and adding value to insurance installments.",
      year: "2023", 
      image: "/lovable-uploads/e171f6c0-f022-4ab0-a8cb-67dc5c32b757.png",
      color: "bg-red-100",
      tools: ["UX Research", "Mobile Design", "Design System", "User Testing"],
      category: "UX/UI Design"
    },
    {
      id: 4,
      title: "Viva E-commerce",
      description: "Uma experiência de e-commerce sustentável com foco em produtos eco-friendly e jornada de compra intuitiva.",
      year: "2024",
      image: "/lovable-uploads/bc92d7c9-9d89-40f6-839a-3dae35ff94fd.png", // caneca
      color: "bg-pink-100",
      tools: ["Figma", "UI Design", "User Research"],
      category: "UI Design",
      images: [
        "/lovable-uploads/bc92d7c9-9d89-40f6-839a-3dae35ff94fd.png", // caneca - principal
        "/lovable-uploads/5b7c2195-2d61-49dc-a6c1-ee8578150f9a.png",
        "/lovable-uploads/84f32a35-cb29-4d19-9f29-67d0b7f09a3a.png",
        "/lovable-uploads/8feffc75-561a-49fd-8445-8513dcce8d18.png",
      ],
    },
    {
      id: 5,
      title: "TrackView Web System",
      description: "Complete redesign of a banking file transfer tracking system. Enhanced usability, interface and visual consistency for Brazilian corporations.",
      year: "2023",
      image: "/lovable-uploads/23cd1ea5-0e7a-4c71-afaa-8d75d780f030.png", // laptop image as main image
      color: "bg-orange-100",
      tools: ["Adobe XD", "Illustrator", "Photoshop", "Hotjar", "Google Analytics"],
      category: "UI/UX Design",
      images: [
        "/lovable-uploads/23cd1ea5-0e7a-4c71-afaa-8d75d780f030.png", // laptop image (main)
        "/lovable-uploads/0ad5f1e2-27b9-4ee4-9f14-77018c7b8672.png",
        "/lovable-uploads/10e921c1-4075-425f-914e-8227d013ceb1.png"
      ],
    },
    {
      id: 6,
      title: "Brand Identity Project",
      description: "A comprehensive brand identity design including logo, color palette, and marketing materials.",
      year: "2022",
      image: "/lovable-uploads/5c46fb05-5f26-4317-a11c-c681893bd33e.png",
      color: "bg-purple-100",
      tools: ["Illustrator", "InDesign", "Brand Strategy"],
      category: "Graphic Design"
    }
  ];

  const categories = ["All", "Research", "UI Design", "UX/UI Design", "Design System", "Graphic Design"];

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
