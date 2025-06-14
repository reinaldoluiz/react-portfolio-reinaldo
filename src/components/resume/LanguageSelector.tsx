
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSelector = ({ currentLanguage, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <Tabs value={currentLanguage} onValueChange={onLanguageChange}>
      <TabsList className="grid w-full grid-cols-4 bg-gray-100">
        <TabsTrigger 
          value="pt" 
          className="data-[state=active]:bg-red-400 data-[state=active]:text-white"
        >
          Português
        </TabsTrigger>
        <TabsTrigger 
          value="en" 
          className="data-[state=active]:bg-red-400 data-[state=active]:text-white"
        >
          English
        </TabsTrigger>
        <TabsTrigger 
          value="es" 
          className="data-[state=active]:bg-red-400 data-[state=active]:text-white"
        >
          Español
        </TabsTrigger>
        <TabsTrigger 
          value="ca" 
          className="data-[state=active]:bg-red-400 data-[state=active]:text-white"
        >
          Català
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default LanguageSelector;
