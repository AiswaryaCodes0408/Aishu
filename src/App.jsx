import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Educational from "./components/Educational/Educational";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"; 
import BlurBlob from "./BlurBlob";

function App() {
  return (
    <div className="bg-[#050414]">
      <BlurBlob
        position={{ top: "35%", left: "28%" }}
        size={{ width: "30%", height: "40%" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[length:14px_24px]
        [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
      </div>

      <div className="relative pt-20">
        <Navbar />

        {/* 👇 IDs MUST MATCH FOOTER */}
        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Work />
        </section>

        <section id="experience" className="scroll-mt-24">
          <Experience />
        </section>

        <section id="education" className="scroll-mt-24">
          <Educational />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;
