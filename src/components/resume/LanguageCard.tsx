
interface LanguageCardProps {
  language: string;
  level: string;
}

const LanguageCard = ({ language, level }: LanguageCardProps) => {
  return (
    <div className="text-center p-4 bg-gray-50 rounded-lg">
      <h3 className="font-semibold text-gray-800 text-lg">{language}</h3>
      <p className="text-sm text-gray-600 mt-1">{level}</p>
    </div>
  );
};

export default LanguageCard;
