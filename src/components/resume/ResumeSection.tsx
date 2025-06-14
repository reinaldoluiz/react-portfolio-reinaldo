
interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

const ResumeSection = ({ title, children }: ResumeSectionProps) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-red-400 pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default ResumeSection;
