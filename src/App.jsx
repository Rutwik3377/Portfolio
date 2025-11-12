// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Resume from "./components/Resume";
// import Contact from "./components/Contact";

// export default function App() {
//   return (
//     <div className="bg-gray-50 text-gray-900">
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Resume />
//       <Contact />
//     </div>
//   );
// }



// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Resume from "./components/Resume";
// import Contact from "./components/Contact";

// function checkComponent(comp, name) {
//   if (typeof comp !== "function") {
//     console.error(`${name} is invalid:`, comp);
//     return () => <div style={{ color: "red" }}>⚠️ {name} component failed to load</div>;
//   }
//   return comp;
// }

// const SafeNavbar = checkComponent(Navbar, "Navbar");
// const SafeHero = checkComponent(Hero, "Hero");
// const SafeAbout = checkComponent(About, "About");
// const SafeSkills = checkComponent(Skills, "Skills");
// const SafeProjects = checkComponent(Projects, "Projects");
// const SafeResume = checkComponent(Resume, "Resume");
// const SafeContact = checkComponent(Contact, "Contact");

// export default function App() {
//   return (
//     <div className="bg-gray-50 text-gray-900">
//       <SafeNavbar />
//       <SafeHero />
//       <SafeAbout />
//       <SafeSkills />
//       <SafeProjects />
//       <SafeResume />
//       <SafeContact />
//     </div>
//   );
// }











import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery"; // <-- new page
import Education from "./components/Education"; // <-- add this


// Safe component wrapper
function checkComponent(comp, name) {
  if (typeof comp !== "function") {
    console.error(`${name} is invalid:`, comp);
    return () => <div style={{ color: "red" }}>⚠️ {name} component failed to load</div>;
  }
  return comp;
}

const SafeNavbar = checkComponent(Navbar, "Navbar");
const SafeHero = checkComponent(Hero, "Hero");
const SafeAbout = checkComponent(About, "About");
const SafeSkills = checkComponent(Skills, "Skills");
const SafeProjects = checkComponent(Projects, "Projects");
const SafeResume = checkComponent(Resume, "Resume");
const SafeContact = checkComponent(Contact, "Contact");

export default function App() {
  return (
    <Router>
      <SafeNavbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="bg-gray-50 text-gray-900">
              <SafeHero />
              <SafeAbout />
              <SafeSkills />
              <Education /> 
              <SafeProjects />
              <SafeResume />
              <SafeContact />
            </div>
          }
        />
        {/* Gallery Page */}
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

