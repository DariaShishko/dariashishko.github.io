import "./App.css";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import StartScreen from "./components/StartScreen/StartScreen";
import Timeline from "./components/Timeline/Timeline";

function App() {
  return (
    <div className="container">
      <StartScreen />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      {/* <div className="ball"></div> */}
    </div>
  );
}

export default App;
