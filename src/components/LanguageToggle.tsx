import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Button
      variant="link"
      onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
      className={`className="p-6 text-sm transition-colors duration-200" ${isDark ? "" : "text-black"
        }`}
    >
      {language === "pt" ? "EN" : "PT"}
    </Button>
  );
};
