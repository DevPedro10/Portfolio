import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { PracticalTestsCallToAction } from "@/components/PracticalTestsCallToAction";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <PracticalTestsCallToAction />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
