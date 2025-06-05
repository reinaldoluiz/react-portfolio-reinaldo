
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import BackgroundRemover from "../components/BackgroundRemover";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <BackgroundRemover />
      <Contact />
    </div>
  );
};

export default Index;
