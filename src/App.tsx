import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App