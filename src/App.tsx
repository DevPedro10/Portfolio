import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Home } from "@/components/Home";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AllProjects } from "@/pages/AllProjects";
import { PracticalTests } from "@/pages/PracticalTests";
import { BlogPostPage } from "@/pages/BlogPostPage";
import { PracticalTestsCallToAction } from "@/components/PracticalTestsCallToAction";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { ScrollToTop } from "./components/ScrollToTop";
import { About } from "@/components/About";
import { Blog } from "./components/Blog";
import { SlideIn } from "@/components/animations";
import { Header } from "./components/Header";

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <div className="min-h-screen bg-background">
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />

        <Route
          path="*"
          element={
            <>
              <SlideIn direction="down" duration={0.5}>
                <Header />
              </SlideIn>

              <main>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <SlideIn direction="down" duration={0.5} delay={0.5}>
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
                  <Route path="/practical-tests" element={<PracticalTests />} />
                </Routes>
              </main>

              <MobileBottomNav />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

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
              <AppContent />
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
