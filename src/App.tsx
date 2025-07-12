import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AllProjects } from "@/pages/AllProjects";
import { Articles } from "@/pages/Articles";
import { PracticalTests } from "@/pages/PracticalTests";
import { PracticalTestsCallToAction } from "@/components/PracticalTestsCallToAction";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { useState, useEffect } from "react";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <PracticalTestsCallToAction />
    <Projects />
    <Contact />
  </>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);



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
                    <Route path="/practical-tests" element={<PracticalTests />} />
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