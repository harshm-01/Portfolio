import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <>
      <div className="overflow-x-hidden bg-body-bg font-custom4">
        <Navbar />
        <Home />
        <NavMenu />
        <main className="w-screen" id="navMenu">
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
        </main>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
