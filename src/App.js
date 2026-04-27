import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Publication from "./components/Publication";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Publication />
      <Contact />
      <Timeline /> 
    </>
  );
}

export default App;