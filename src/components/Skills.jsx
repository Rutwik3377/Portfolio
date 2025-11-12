// export default function Skills() {
//   const skills = ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"];
//   return (
//     <section id="skills" className="py-20 px-6 bg-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
//       <div className="flex flex-wrap justify-center gap-6">
//         {skills.map((skill, i) => (
//           <div key={i} className="bg-white shadow-lg p-6 rounded-lg text-center">{skill}</div>
//         ))}
//       </div>
//     </section>
//   );
// }







// import React from "react";

// export default function Skills() {
//   const skills = [
//     { name: "MongoDB", img: "/assets/skills/mongo.png", level: "Advanced" },
//     { name: "React JS", img: "/assets/skills/react.png", level: "Advanced" },
//     { name: "Node JS (Microservices)", img: "/assets/skills/node.png", level: "Intermediate" },
//     { name: "SQL", img: "/assets/skills/sql.png", level: "Intermediate" },
//     { name: "UI/UX (Figma)", img: "/assets/skills/figma.png", level: "Intermediate" },
//     { name: "Java", img: "/assets/skills/java.png", level: "Advanced" },
//     { name: "Python", img: "/assets/skills/python.png", level: "Intermediate" },
//     { name: "Basic Flutter", img: "/assets/skills/flutter.png", level: "Beginner" },
//   ];

//   return (
//     <section id="skills" className="py-20 px-6 bg-[#0f172a] text-white">
//       <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
//       <div className="flex flex-wrap justify-center gap-8">
//         {skills.map((skill, i) => (
//           <div key={i} className="w-48 h-48 perspective">
//             <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">
              
//               {/* Front Side */}
//               <div
//                 className="absolute w-full h-full rounded-xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20 flex justify-center items-center"
//                 style={{
//                   backgroundImage: `url(${skill.img})`,
//                   backgroundSize: "60%",
//                   backgroundRepeat: "no-repeat",
//                   backgroundPosition: "center",
//                 }}
//               ></div>

//               {/* Back Side */}
//               <div className="absolute w-full h-full rounded-xl shadow-lg bg-black/80 text-center flex flex-col items-center justify-center px-2 rotate-y-180">
//                 <p className="text-xl font-bold">{skill.name}</p>
//                 <p className="text-sm text-gray-300 mt-2">{skill.level}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }





import React from "react";

export default function Skills() {
  const skills = [
    { name: "HTML", color: "border-red-500", glow: "shadow-red-500/50", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", color: "border-blue-500", glow: "shadow-blue-500/50", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Javascript", color: "border-yellow-500", glow: "shadow-yellow-500/50", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React JS", color: "border-cyan-400", glow: "shadow-cyan-400/50", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Java", color: "border-red-600", glow: "shadow-red-600/50", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Spring Boot", color: "border-green-500", glow: "shadow-green-500/50", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Node JS", color: "border-green-400", glow: "shadow-green-400/50", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express JS", color: "border-gray-400", glow: "shadow-gray-400/50", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", color: "border-green-500", glow: "shadow-green-500/50", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", color: "border-yellow-400", glow: "shadow-yellow-400/50", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Tailwind CSS", color: "border-cyan-500", glow: "shadow-cyan-500/50", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Bootstrap", color: "border-purple-600", glow: "shadow-purple-600/50", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Python", color: "border-yellow-400", glow: "shadow-yellow-400/50", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Flutter", color: "border-blue-400", glow: "shadow-blue-400/50", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "UI/UX (Figma)", color: "border-pink-500", glow: "shadow-pink-500/50", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[#0f172a] text-white">
      <h2 className="text-4xl font-bold text-center mb-4">Experience</h2>
      <p className="text-center text-gray-300 mb-12">
        Here are some technologies I have done my projects with
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl shadow-lg bg-white/5 backdrop-blur-md border ${skill.color} flex flex-col items-center justify-center 
              hover:scale-105 transition-transform duration-300 hover:shadow-2xl ${skill.glow}`}
          >
            <img src={skill.img} alt={skill.name} className="w-16 h-16 mb-4" />
            <p className="text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
