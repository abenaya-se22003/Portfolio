import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Skills } from "./components/Skill";
import { Projects } from "./components/Project";  
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
