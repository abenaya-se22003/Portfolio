import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
    </>
  );
}

export default App;
