
interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const ExperienceItem = ({ title, company, period, responsibilities }: ExperienceItemProps) => {
  return (
    <div className="border-l-4 border-red-400 pl-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <p className="text-red-400">{company}</p>
        </div>
        <span className="text-sm text-gray-500">{period}</span>
      </div>
      <ul className="text-sm text-gray-600 space-y-1">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>• {responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
