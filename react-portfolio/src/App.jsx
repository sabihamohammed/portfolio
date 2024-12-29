import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skill } from "./components/Skill/Skill";
import { Video } from "./components/video/video";
import DownloadResumeButton from "./components/Resume/resume";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skill/>
      <Experience />
      <Projects />
      <Video/>
      <DownloadResumeButton/>
      <Contact />
      
      
    </div>
  );
}

export default App;
