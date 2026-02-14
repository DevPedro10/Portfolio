import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 pb-24 md:pb-8">
      <p className="text-soft text-sm text-center">
        © {currentYear} {t.hero.name}. {t.footer.rights}
      </p>
    </footer>
  );
};
