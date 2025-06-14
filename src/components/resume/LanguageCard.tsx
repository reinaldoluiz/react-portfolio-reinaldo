
interface LanguageCardProps {
  language: string;
  level: string;
}

const LanguageCard = ({ language, level }: LanguageCardProps) => {
  return (
    <div className="text-center p-4 bg-gray-50 rounded-lg print:bg-white print:border print:border-gray-300 print:p-2">
      <h3 className="font-semibold text-gray-800 text-lg print:text-base">{language}</h3>
      <p className="text-sm text-gray-600 mt-1 print:text-xs">{level}</p>
    </div>
  );
};

export default LanguageCard;
