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
function App() {
  return (
    <div className='bg-[#050414]'>
      <div
        className="absolute inset-0
          bg-[linear-gradient(to right,#4f4f4f2e 1px,transparent 1px),
               linear-gradient(to bottom,#4f4f4f2e 1px,transparent 1px)]
          bg-[length:14px_24px]
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000 70%,transparent 100%)]"
      ></div>
      <div className='relative pt-20'>
        <Navbar />
        <About />
        <Skills />
        <Educational />
        <Work />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
