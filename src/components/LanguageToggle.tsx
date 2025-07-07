import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
      className="imposing-card font-space font-semibold"
    >
      {language === "pt" ? "EN" : "PT"}
    </Button>
  );
};