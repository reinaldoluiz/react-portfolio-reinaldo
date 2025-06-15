import React from "react";

interface ProjectImagesGridProps {
  project: any;
}

const ProjectImagesGrid: React.FC<ProjectImagesGridProps> = ({ project }) => {
  // Viva E-commerce custom grid
  if (project.id === 4 && project.customImages) {
    return (
      <div className={`${project.color} p-8 transform -rotate-1 border-2 border-gray-300`}>
        <div className="w-full h-[500px]">
          <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
            {project.customImages.map((img: string, idx: number) => (
              <div
                key={img}
                className="h-full rounded-lg shadow-lg bg-white flex justify-center items-center"
                style={{
                  backgroundImage: `url('${img}')`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  // Single image layout
  if (project.id === 1) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
      </div>
    );
  }
  if (project.id === 2) {
    // Grid layout for project 2 with the uploaded images
    return (
      <div className="w-full h-[500px]">
        <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
          {/* Top left - Reinaldo Luiz mockup */}
          <div
            className="h-full rounded-lg shadow-lg bg-white"
            style={{
              backgroundImage: `url('/lovable-uploads/18593925-b8e8-43b5-94fa-a39fedaf3798.png')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />

          {/* Top right - About Pull-Ups page */}
          <div
            className="h-full rounded-lg shadow-lg bg-white"
            style={{
              backgroundImage: `url('/lovable-uploads/6c0eef8c-0854-4e43-a833-862a82f40b23.png')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />

          {/* Bottom left - Various features and content */}
          <div
            className="h-full rounded-lg shadow-lg bg-white"
            style={{
              backgroundImage: `url('/lovable-uploads/470e5153-db23-4479-a138-1c12dc72d959.png')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />

          {/* Bottom right - Disney integration */}
          <div
            className="h-full rounded-lg shadow-lg bg-white"
            style={{
              backgroundImage: `url('/lovable-uploads/5c328bc9-a8e3-4f58-9f7c-658e8c08e5a5.png')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>
      </div>
    );
  }
  if (project.id === 3) {
    // Grid layout for project 3 (Santander Auto) with new uploaded images
    return (
      <div className="w-full h-[500px]">
        <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
          {/* Top left - Reinaldo Luiz Santander mockup (first image) */}
          <div
            className="h-full rounded-lg shadow-lg bg-white"
            style={{
              backgroundImage: `url('/lovable-uploads/e171f6c0-f022-4ab0-a8cb-67dc5c32b757.png')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />

          {/* Top right - Mobile app screens grid */}
          <div
            className="h-full rounded-lg shadow-lg bg-white"
            style={{
              backgroundImage: `url('/lovable-uploads/37f81d0f-a0cc-4902-a480-dddccff83c3a.png')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />

          {/* Bottom left - Desktop landing page with phone */}
          <div
            className="h-full rounded-lg shadow-lg bg-white"
            style={{
              backgroundImage: `url('/lovable-uploads/36b6753b-9e52-4aa3-8366-aed818a9bb35.png')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />

          {/* Bottom right - Mobile app features */}
          <div
            className="h-full rounded-lg shadow-lg bg-white"
            style={{
              backgroundImage: `url('/lovable-uploads/d28ebb13-9a16-4b7f-9d15-01bb098205b3.png')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>
      </div>
    );
  }
  // Grid layout for projects 5, 6, and 7 using placeholder images
  return (
    <div className="w-full h-[500px]">
      <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
        {/* Top left */}
        <div
          className="h-full rounded-lg shadow-lg bg-white"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Top right */}
        <div
          className="h-full rounded-lg shadow-lg bg-white"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Bottom left */}
        <div
          className="h-full rounded-lg shadow-lg bg-white"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Bottom right */}
        <div
          className="h-full rounded-lg shadow-lg bg-white"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>
    </div>
  );
};

export default ProjectImagesGrid;
