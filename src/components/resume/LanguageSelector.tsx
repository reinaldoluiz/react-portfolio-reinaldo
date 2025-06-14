
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSelector = ({ currentLanguage, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <Tabs value={currentLanguage} onValueChange={onLanguageChange}>
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="pt">Português</TabsTrigger>
        <TabsTrigger value="en">English</TabsTrigger>
        <TabsTrigger value="es">Español</TabsTrigger>
        <TabsTrigger value="ca">Català</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default LanguageSelector;
