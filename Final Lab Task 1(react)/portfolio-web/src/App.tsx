import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Languages from './components/Languages/languages';
import Interests from './components/Interests/interests';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Languages />
      <Interests />
      <Contact />
    </div>
  );
};

export default App;
