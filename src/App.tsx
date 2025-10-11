import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Home } from "@/components/Home";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AllProjects } from "@/pages/AllProjects";
import { PracticalTests } from "@/pages/PracticalTests";
import { PracticalTestsCallToAction } from "@/components/PracticalTestsCallToAction";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { ScrollToTop } from "./components/ScrollToTop";
import { About } from "@/components/About";
import { Articles } from "./components/Articles";

const queryClient = new QueryClient();

const HomePage = () => (
  <>
    <Home />
    <About />
    <Skills />
    <PracticalTestsCallToAction />
    <Projects />
    <Contact />
  </>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <div className="min-h-screen bg-background">
                <Navigation />
                <main>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<AllProjects />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route
                      path="/practical-tests"
                      element={<PracticalTests />}
                    />
                  </Routes>
                </main>
                <MobileBottomNav />
                <Footer />
              </div>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
