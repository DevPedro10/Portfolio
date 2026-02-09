import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LoadingProvider } from "@/contexts/LoadingContext";
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
import { LoadingScreen } from "@/components/LoadingScreen";
import { useLoading } from "@/contexts/LoadingContext";
import { SlideIn } from "@/components/animations";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isLoading } = useLoading();

  return (
    <div className="min-h-screen bg-background">
      <SlideIn direction="down" duration={0.8} delay={2.5}>
        <Navigation />
      </SlideIn>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SlideIn direction="down" duration={0.8} delay={3}>
                  <Home />
                </SlideIn>
                <About />
                <Skills />
                <PracticalTestsCallToAction />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/practical-tests" element={<PracticalTests />} />
        </Routes>
      </main>
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.8s ease-in-out",
          pointerEvents: isLoading ? "none" : "auto",
        }}
      >
        <MobileBottomNav />
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <LanguageProvider>
          <LoadingProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <LoadingScreen />
              <BrowserRouter>
                <ScrollToTop />
                <AppContent />
              </BrowserRouter>
            </TooltipProvider>
          </LoadingProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
