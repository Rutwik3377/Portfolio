import React from "react";
import aboutImg from "../assets/Rutu_Image.jpg"

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#1c2533] text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={aboutImg}
            alt="About"
            className="w-full md:w-[420px] rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold">Rutwik K</h2>
          <h3 className="text-xl text-orange-400 font-semibold">Full Stack Developer</h3>
          <p className="text-gray-300 leading-relaxed">
           A Full-Stack & Mobile Developer with expertise in React.js, TypeScript, Node.js, and Flutter, building scalable web and mobile applications. Skilled in MongoDB, MySQL, microservices, and Docker, I’m passionate about delivering clean, responsive UIs and high-performing backend systems, while continuously learning and adapting to emerging technologies..
          </p>
          <a
            href="#contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
