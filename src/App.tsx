import React from 'react';
import './App.scss';
import { Header, Footer, Presentation, AboutMe, Tecnologies, Projects, Contact } from './components'

function App() {
  return (
    <>
      <Header/>
      <Presentation/>
      <AboutMe/>
      <Tecnologies/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;

//Para adicionar o testimonial slider: importar from ./components, adicionar na função App, descomentar o código no arquivo testimonialslider.tsx