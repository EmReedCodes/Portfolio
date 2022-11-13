
import './App.css'
import React from "react";
import About from './components/About'
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function App() {
  console.log("Thanks for stopping by!")
  console.log("Have a purrfect day. =^.^=")
  return (
    <main className="text-gray-400 bg-gray-900 body-font font-lexend">
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Contact />
    </main>
  )
}

export default App