// export default function Projects() {
//   const projects = [
//     { title: "Project 1", desc: "Description of project 1", link: "#", github: "#" },
//     { title: "Project 2", desc: "Description of project 2", link: "#", github: "#" }
//   ];
//   return (
//     <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {projects.map((p, i) => (
//           <div key={i} className="bg-white shadow-lg p-6 rounded-lg">
//             <h3 className="text-xl font-bold">{p.title}</h3>
//             <p className="text-gray-600 my-2">{p.desc}</p>
//             <div className="space-x-4">
//               <a href={p.link} className="text-blue-500">Live</a>
//               <a href={p.github} className="text-gray-500">GitHub</a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import astroImg from "../assets/astro-bg.png"; // <-- Importing local image

// export default function Projects() {
//   const allProjects = [
//     { title: "Astrology API's", category: "React", image: astroImg, demo: "#", code: "#" },
//     { title: "News Buddy", category: "MERN", image: astroImg, demo: "#", code: "#" },
//     { title: "Notes App", category: "Spring", image: "https://source.unsplash.com/600x450/?notebook,app", demo: "#", code: "#" },
//     { title: "Bookstore", category: "MERN", image: "https://source.unsplash.com/600x600/?books,store", demo: "#", code: "#" },
//     { title: "Portfolio Website", category: "React", image: "https://source.unsplash.com/600x550/?portfolio,website", demo: "#", code: "#" },
//     { title: "E-commerce API", category: "Spring", image: "https://source.unsplash.com/600x480/?ecommerce,api", demo: "#", code: "#" },
//   ];

//   const [filter, setFilter] = useState("All");
//   const categories = ["All", "Spring", "MERN", "React"];
//   const filteredProjects = filter === "All" ? allProjects : allProjects.filter((p) => p.category === filter);

//   return (
//     <section
//       id="projects"
//       className="py-20 px-6"
//       style={{
//         background: "radial-gradient(circle at top, #0f172a 0%, #000000 70%)",
//       }}
//     >
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-white text-center mb-2">Projects</h2>
//         <p className="text-center text-gray-400 mb-8">Check out some of my works</p>

//         {/* Tabs */}
//         <div className="flex justify-center gap-6 mb-12">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setFilter(cat)}
//               className={`relative px-5 py-2 text-lg font-medium transition ${
//                 filter === cat ? "text-white" : "text-gray-400"
//               }`}
//             >
//               {cat} Projects
//               {filter === cat && (
//                 <motion.div
//                   layoutId="underline"
//                   className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"
//                   transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                 />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Masonry Layout */}
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
//           {filteredProjects.map((p, i) => (
//             <motion.div
//               key={i}
//               className="bg-black/50 backdrop-blur-lg border border-gray-700 rounded-xl overflow-hidden hover:scale-[1.02] transition transform duration-300 shadow-lg hover:shadow-blue-500/50 break-inside-avoid"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//             >
//               {/* Image */}
//               <div className="overflow-hidden">
//                 <img
//                   src={p.image}
//                   alt={p.title}
//                   className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-white mb-3">{p.title}</h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import astroImg from "../assets/astro-bg.png";

// export default function Projects() {
//   const allProjects = [
//     {
//   title: "Astrology APIs — Personalized Predictions",
//   category: "Full Stack",
//   image: "https://astrologyapis.com/static/media/astro-banner.webp", // or use astroImg if preferred
//   description:
//     "A full-stack astrology platform providing personalized horoscopes, zodiac predictions, and subscription-based API services.",
//   tech: [
//     "React.js",
//     "Node.js",
//     "Express.js",
//     "MongoDB",
//     "Tailwind CSS",
//     "Framer Motion",
//   ],
//   demo: "https://astrologyapis.com/",
//   code: "https://github.com/yourusername/astrology-apis", // add your repo link
// },
//     {
//       title: "The Resolute",
//       category: "React",
//       image: "https://source.unsplash.com/600x500/?app,news",
//       description: "News aggregation app with live updates.",
//       tech: ["MongoDB", "Express", "React", "Node"],
//       demo: "#",
//       code: "#",
//     },
//     {
//       title: "Notes App",
//       category: "Spring",
//       image: "https://source.unsplash.com/600x450/?notebook,app",
//       description: "Spring Boot based notes management application.",
//       tech: ["Spring Boot", "MySQL"],
//       demo: "#",
//       code: "#",
//     },
//     {
//       title: "Bookstore",
//       category: "MERN",
//       image: "https://source.unsplash.com/600x600/?books,store",
//       description: "E-commerce bookstore with MERN stack.",
//       tech: ["MERN"],
//       demo: "#",
//       code: "#",
//     },
//     {
//       title: "Portfolio Website",
//       category: "React",
//       image: "https://source.unsplash.com/600x550/?portfolio,website",
//       description: "Personal portfolio built with React & Tailwind.",
//       tech: ["React", "Tailwind"],
//       demo: "#",
//       code: "#",
//     },
//     {
//       title: "E-commerce API",
//       category: "Spring",
//       image: "https://source.unsplash.com/600x480/?ecommerce,api",
//       description: "Spring Boot based API for e-commerce apps.",
//       tech: ["Spring Boot", "Java"],
//       demo: "#",
//       code: "#",
//     },
//   ];

//   const [filter, setFilter] = useState("All");
//   const categories = ["All", "Spring", "MERN", "React"];
//   const filteredProjects =
//     filter === "All"
//       ? allProjects
//       : allProjects.filter((p) => p.category === filter);

//   return (
//     <section
//       id="projects"
//       className="py-20 px-6"
//       style={{
//         background: "radial-gradient(circle at top, #0f172a 0%, #000000 70%)",
//       }}
//     >
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-white text-center mb-2">
//           Projects
//         </h2>
//         <p className="text-center text-gray-400 mb-8">
//           Check out some of my works
//         </p>

//         {/* Tabs */}
//         <div className="flex justify-center gap-6 mb-12">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setFilter(cat)}
//               className={`relative px-5 py-2 text-lg font-medium transition ${
//                 filter === cat ? "text-white" : "text-gray-400"
//               }`}
//             >
//               {cat} Projects
//               {filter === cat && (
//                 <motion.div
//                   layoutId="underline"
//                   className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"
//                   transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                 />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Masonry Layout */}
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
//           {filteredProjects.map((p, i) => (
//             <motion.div
//               key={i}
//               className="relative group [perspective:1000px] break-inside-avoid"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//             >
//               {/* Card Wrapper */}
//               <div className="relative w-full h-64 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
//                 {/* Front Side */}
//                 <div className="absolute inset-0 bg-black/50 backdrop-blur-lg border border-gray-700 rounded-xl overflow-hidden shadow-lg [backface-visibility:hidden]">
//                   <img
//                     src={p.image}
//                     alt={p.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
//                     <h3 className="text-xl font-semibold text-white">
//                       {p.title}
//                     </h3>
//                   </div>
//                 </div>

//                 {/* Back Side */}
//                 <div className="absolute inset-0 bg-black/80 backdrop-blur-lg border border-gray-700 rounded-xl text-white p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
//                     <p className="text-gray-300 text-sm mb-3">
//                       {p.description}
//                     </p>
//                     <p className="text-sm text-gray-400 mb-4">
//                       Tech: {p.tech.join(", ")}
//                     </p>
//                   </div>
//                   {/* <div className="flex justify-between">
//                     <a href={p.demo} className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition">Demo</a>
//                     <a href={p.code} className="bg-gray-700 px-4 py-2 rounded-lg text-white hover:bg-gray-600 transition">Code</a>
//                   </div> */}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import astroImg from "../assets/astro-bg.png";

// export default function Projects() {
//   const allProjects = [
//     {
//       title: "Astrology APIs — Personalized Predictions",
//       category: "Full Stack",
//       image: astroImg,
//       description:
//         "A full-stack astrology platform providing personalized horoscopes, zodiac predictions, and subscription-based API services. It integrates secure REST APIs with a responsive React frontend and premium feature subscriptions.",
//       tech: [
//         "React.js",
//         "Node.js",
//         "Express.js",
//         "MongoDB",
//         "Tailwind CSS",
//         "Framer Motion",
//       ],
//       demo: "https://astrologyapis.com/",
//       code: "https://github.com/yourusername/astrology-apis",
//     },
//     {
//       title: "The Resolute",
//       category: "React",
//       image: "https://source.unsplash.com/600x500/?app,news",
//       description: "News aggregation app with live updates and API integration.",
//       tech: ["MongoDB", "Express", "React", "Node"],
//       demo: "#",
//       code: "#",
//     },
//     // {
//     //   title: "Notes App",
//     //   category: "Spring",
//     //   image: "https://source.unsplash.com/600x450/?notebook,app",
//     //   description: "Spring Boot based notes management application.",
//     //   tech: ["Spring Boot", "MySQL"],
//     //   demo: "#",
//     //   code: "#",
//     // },
//     {
//       title: "Qavach",
//       category: "MERN",
//       image: "https://source.unsplash.com/600x600/?books,store",
//       description: "Qavach",
//       tech: ["MERN"],
//       demo: "#",
//       code: "#",
//     },
//     {
//       title: "Portfolio Website",
//       category: "React",
//       image: "https://source.unsplash.com/600x550/?portfolio,website",
//       description: "Personal portfolio built using React.js and Tailwind CSS.",
//       tech: ["React", "Tailwind"],
//       demo: "#",
//       code: "#",
//     },
//     // {
//     //   title: "E-commerce API",
//     //   category: "Spring",
//     //   image: "https://source.unsplash.com/600x480/?ecommerce,api",
//     //   description: "Spring Boot REST API for managing e-commerce operations.",
//     //   tech: ["Spring Boot", "Java"],
//     //   demo: "#",
//     //   code: "#",
//     // },
//   ];

//   const [filter, setFilter] = useState("All");
//   const categories = ["All", "Full Stack", "MERN", "React"];

//   const filteredProjects =
//     filter === "All"
//       ? allProjects
//       : allProjects.filter((p) => p.category === filter);

//   return (
//     <section
//       id="projects"
//       className="py-20 px-6"
//       style={{
//         background: "radial-gradient(circle at top, #0f172a 0%, #000000 70%)",
//       }}
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-center text-white mb-2">
//           Projects
//         </h2>
//         <p className="text-center text-gray-400 mb-8">
//           Explore my latest full-stack and frontend projects.
//         </p>

//         {/* Category Tabs */}
//         <div className="flex justify-center flex-wrap gap-6 mb-12">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setFilter(cat)}
//               className={`relative px-5 py-2 text-lg font-medium transition-all duration-300 
//                 ${
//                   filter === cat
//                     ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
//                     : "text-gray-400 hover:text-white"
//                 }`}
//             >
//               {cat} Projects
//               {filter === cat && (
//                 <motion.div
//                   layoutId="underline"
//                   className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
//                   transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                 />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Masonry Layout for Projects */}
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
//           {filteredProjects.map((p, i) => (
//             <motion.div
//               key={i}
//               className={`relative group [perspective:1000px] break-inside-avoid transition-transform ${
//                 p.title.includes("Astrology")
//                   ? "shadow-[0_0_25px_#9333ea]/50"
//                   : ""
//               }`}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.15 }}
//             >
//               {/* 3D Card Flip Animation */}
//               <div className="relative w-full h-64 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
//                 {/* Front Side */}
//                 <div className="absolute inset-0 bg-black/50 backdrop-blur-lg border border-gray-700 rounded-xl overflow-hidden shadow-lg [backface-visibility:hidden]">
//                   <img
//                     src={p.image}
//                     alt={p.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
//                     <h3 className="text-xl font-semibold text-white">
//                       {p.title}
//                     </h3>
//                   </div>

//                   {/* Featured Badge */}
//                   {p.title.includes("Astrology") && (
//                     <span className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-purple-600 text-xs px-3 py-1 rounded-full font-semibold shadow-md">
//                       Featured
//                     </span>
//                   )}
//                 </div>

//                 {/* Back Side */}
//                 <div className="absolute inset-0 bg-black/85 backdrop-blur-lg border border-gray-700 rounded-xl text-white p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
//                     <p className="text-gray-300 text-sm mb-3">
//                       {p.description}
//                     </p>
//                     <p className="text-sm text-gray-400 mb-4">
//                       Tech: {p.tech.join(", ")}
//                     </p>
//                   </div>

//                   {/* Buttons */}
//                   <div className="flex justify-between">
//                     <a
//                       href={p.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-lg text-white font-medium hover:scale-105 transition-transform"
//                     >
//                       Demo
//                     </a>
//                     <a
//                       href={p.code}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-gray-800 px-4 py-2 rounded-lg text-gray-200 font-medium hover:bg-gray-700 transition"
//                     >
//                       Code
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import astroImg from "../assets/astro-bg.png";

// export default function Projects() {
//   const allProjects = [
//     {
//       title: "Astrology APIs — Personalized Predictions",
//       category: "Full Stack",
//       image: astroImg,
//       description:
//         "A full-stack astrology platform providing personalized horoscopes, zodiac predictions, and subscription-based API services. It integrates secure REST APIs with a responsive React frontend and premium feature subscriptions.",
//       tech: [
//         "React.js",
//         "Node.js",
//         "Express.js",
//         "MongoDB",
//         "Tailwind CSS",
//         "Framer Motion",
//       ],
//       demo: "https://astrologyapis.com/",
//       code: "https://github.com/yourusername/astrology-apis", // Replace when ready
//     },
//     {
//       title: "The Resolute",
//       category: "React",
//       image: "https://source.unsplash.com/600x500/?app,news",
//       description:
//         "News aggregation app with live updates and API integration.",
//       tech: ["MongoDB", "Express", "React", "Node"],
//       demo: "#",
//       code: "#",
//     },
//     {
//       title: "Qavach",
//       category: "MERN",
//       image: "https://source.unsplash.com/600x600/?cybersecurity,tech",
//       description:
//         "A secure MERN-based platform focusing on access management and data protection workflows.",
//       tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
//       demo: "#",
//       code: "#",
//     },
//     {
//       title: "Portfolio Website",
//       category: "React",
//       image: "https://source.unsplash.com/600x550/?portfolio,website",
//       description:
//         "Personal portfolio built using React.js and Tailwind CSS showcasing animations and project highlights.",
//       tech: ["React", "Tailwind CSS"],
//       demo: "#",
//       code: "#",
//     },
//     {
//   title: "Learning Management System (LMS)",
//   category: "Full Stack",
//   image: "https://source.unsplash.com/600x500/?education,learning,platform",
//   description:
//     "A complete microservices-based Learning Management System built using the MERN stack. It supports JWT authentication with RBAC (Admin, Teacher, Student), course creation, quizzes, payments via Stripe, progress tracking, certificates, announcements, and assignments. Designed for scalability with modular Node.js services and API Gateway architecture.",
//   tech: [
//     "React.js",
//     "Node.js",
//     "Express.js",
//     "MongoDB",
//     "JWT Auth",
//     "Stripe API",
//     "Microservices",
//     "Tailwind CSS",
//   ],
//   demo: "", // ❌ No Demo button
//   code: "#", // You’ll add your GitHub repo link later
// },

// {
//   title: "Qavach — Comprehensive Child Health Screening Platform",
//   category: "Full Stack",
//   image: "https://source.unsplash.com/600x500/?child,healthcare,technology",
//   description:
//     "Qavach® is a digital health screening platform developed for the Swastify Foundation to enable preventive child healthcare. It provides a 360° longitudinal and holistic screening system for children aged 2–5 years, focusing on early risk detection, periodic assessments, and longitudinal tracking. The platform supports multi-role access (Parents, Screening Teams, Specialists, Referral Doctors) with secure data flow and encrypted PHR/EHR integration.",
//   tech: [
//     "React.js",
//     "Node.js",
//     "Express.js",
//     "MongoDB",
//     "JWT Auth",
//     "Role-based Access",
//     "Azure Cloud",
//     "Data Encryption",
//     "API Integrations"
//   ],
//   demo: "", // ❌ No demo button
//   code: "#", // You’ll replace this with your repo link later
// },

//   ];

//   const [filter, setFilter] = useState("All");
//   const categories = ["All", "Full Stack", "MERN", "React"];

//   const filteredProjects =
//     filter === "All"
//       ? allProjects
//       : allProjects.filter((p) => p.category === filter);

//   return (
//     <section
//       id="projects"
//       className="py-20 px-6"
//       style={{
//         background: "radial-gradient(circle at top, #0f172a 0%, #000000 70%)",
//       }}
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-center text-white mb-2">
//           Projects
//         </h2>
//         <p className="text-center text-gray-400 mb-8">
//           Explore my latest full-stack and frontend projects.
//         </p>

//         {/* Category Tabs */}
//         <div className="flex justify-center flex-wrap gap-6 mb-12">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setFilter(cat)}
//               className={`relative px-5 py-2 text-lg font-medium transition-all duration-300 
//                 ${
//                   filter === cat
//                     ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
//                     : "text-gray-400 hover:text-white"
//                 }`}
//             >
//               {cat} Projects
//               {filter === cat && (
//                 <motion.div
//                   layoutId="underline"
//                   className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
//                   transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                 />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Masonry Layout */}
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
//           {filteredProjects.map((p, i) => (
//             <motion.div
//               key={i}
//               onClick={() => p.title.includes("Astrology") && window.open(p.demo, "_blank")}
//               className={`relative group [perspective:1000px] break-inside-avoid transition-transform cursor-pointer ${
//                 p.title.includes("Astrology")
//                   ? "shadow-[0_0_25px_#9333ea]/50 hover:scale-[1.03]"
//                   : "hover:scale-[1.02]"
//               }`}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.15 }}
//             >
//               {/* 3D Flip Animation */}
//               <div className="relative w-full h-64 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
//                 {/* Front Side */}
//                 <div className="absolute inset-0 bg-black/50 backdrop-blur-lg border border-gray-700 rounded-xl overflow-hidden shadow-lg [backface-visibility:hidden]">
//                   <img
//                     src={p.image}
//                     alt={p.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
//                     <h3 className="text-xl font-semibold text-white">
//                       {p.title}
//                     </h3>
//                   </div>

//                   {p.title.includes("Astrology") && (
//                     <span className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-purple-600 text-xs px-3 py-1 rounded-full font-semibold shadow-md">
//                       Featured
//                     </span>
//                   )}

//                   {p.title.includes("Qavach") && (
//   <span className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-xs px-3 py-1 rounded-full font-semibold shadow-md">
//     Enterprise
//   </span>
// )}

//                 </div>

//                 {/* Back Side */}
//                 <div className="absolute inset-0 bg-black/85 backdrop-blur-lg border border-gray-700 rounded-xl text-white p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
//                     <p className="text-gray-300 text-sm mb-3">
//                       {p.description}
//                     </p>
//                     <p className="text-sm text-gray-400 mb-4">
//                       Tech: {p.tech.join(", ")}
//                     </p>
//                   </div>

//                   <div className="flex justify-between">
//                     <a
//                       href={p.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-lg text-white font-medium hover:scale-105 transition-transform"
//                     >
//                       Demo
//                     </a>
//                     <a
//                       href={p.code}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-gray-800 px-4 py-2 rounded-lg text-gray-200 font-medium hover:bg-gray-700 transition"
//                     >
//                       Code
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import astroImg from "../assets/astro-bg.png";

// export default function Projects() {
//   const allProjects = [
//     {
//       title: "Astrology APIs — Personalized Predictions",
//       category: "Full Stack",
//       image: astroImg,
//       description:
//         "A full-stack astrology platform providing personalized horoscopes, zodiac predictions, and subscription-based API services. It integrates secure REST APIs with a responsive React frontend and premium feature subscriptions.",
//       tech: [
//         "React.js",
//         "Node.js",
//         "Express.js",
//         "MongoDB",
//         "Tailwind CSS",
//         "Framer Motion",
//       ],
//       demo: "https://astrologyapis.com/",
//       code: "https://github.com/yourusername/astrology-apis",
//     },
//     {
//       title: "Learning Management System (LMS)",
//       category: "Full Stack",
//       image: "https://source.unsplash.com/600x500/?education,learning,platform",
//       description:
//         "A complete microservices-based Learning Management System built using the MERN stack. It supports JWT authentication with RBAC roles, course creation, quizzes, payments via Stripe, progress tracking, and certificates.",
//       tech: [
//         "React.js",
//         "Node.js",
//         "Express.js",
//         "MongoDB",
//         "JWT Auth",
//         "Stripe API",
//         "Microservices",
//       ],
//       demo: "",
//       code: "#",
//     },
//     {
//       title: "Qavach — Comprehensive Child Health Screening Platform",
//       category: "Full Stack",
//       image: "https://source.unsplash.com/600x500/?child,healthcare,technology",
//       description:
//         "Qavach® is a digital health screening platform developed for the Swastify Foundation. It enables preventive child healthcare, risk detection, longitudinal tracking, and secure PHR/EHR integration with encrypted data flow.",
//       tech: [
//         "React.js",
//         "Node.js",
//         "Express.js",
//         "MongoDB",
//         "JWT Auth",
//         "Azure Cloud",
//         "RBAC",
//       ],
//       demo: "",
//       code: "#",
//     },
//     {
//       title: "The Resolute",
//       category: "React",
//       image: "https://source.unsplash.com/600x500/?app,news",
//       description: "News aggregation app with live updates and API integration.",
//       tech: ["MongoDB", "Express", "React", "Node"],
//       demo: "#",
//       code: "#",
//     },
//     {
//       title: "Portfolio Website",
//       category: "React",
//       image: "https://source.unsplash.com/600x550/?portfolio,website",
//       description: "Personal portfolio built using React.js and Tailwind CSS.",
//       tech: ["React", "Tailwind"],
//       demo: "#",
//       code: "#",
//     },
//   ];

//   const [filter, setFilter] = useState("All");
//   const categories = ["All", "Full Stack", "React"];

//   const filteredProjects =
//     filter === "All"
//       ? allProjects
//       : allProjects.filter((p) => p.category === filter);

//   return (
//     <section
//       id="projects"
//       className="py-20 px-6"
//       style={{
//         background: "radial-gradient(circle at top, #0f172a 0%, #000000 70%)",
//       }}
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-center text-white mb-2">
//           Projects
//         </h2>
//         <p className="text-center text-gray-400 mb-8">
//           Explore my latest full-stack and frontend projects.
//         </p>

//         {/* Category Tabs */}
//         <div className="flex justify-center flex-wrap gap-6 mb-12">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setFilter(cat)}
//               className={`relative px-5 py-2 text-lg font-medium transition-all duration-300 
//                 ${
//                   filter === cat
//                     ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
//                     : "text-gray-400 hover:text-white"
//                 }`}
//             >
//               {cat} Projects
//               {filter === cat && (
//                 <motion.div
//                   layoutId="underline"
//                   className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
//                   transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                 />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Masonry Layout */}
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
//           {filteredProjects.map((p, i) => (
//             <motion.div
//               key={i}
//               className={`relative group [perspective:1000px] break-inside-avoid transition-transform cursor-pointer ${
//                 p.title.includes("Astrology")
//                   ? "shadow-[0_0_25px_#9333ea]/50 hover:scale-[1.03]"
//                   : "hover:scale-[1.02]"
//               }`}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.15 }}
//             >
//               {/* 3D Flip Animation */}
//               <div className="relative w-full h-72 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
//                 {/* Front Side */}
//                 <div className="absolute inset-0 bg-black/50 backdrop-blur-lg border border-gray-700 rounded-xl overflow-hidden shadow-lg [backface-visibility:hidden]">
//                   <img
//                     src={p.image}
//                     alt={p.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4">
//                     <h3 className="text-xl font-semibold text-white">
//                       {p.title}
//                     </h3>
//                   </div>

//                   {/* Featured / Enterprise Badge */}
//                   {p.title.includes("Astrology") && (
//                     <span className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-purple-600 text-xs px-3 py-1 rounded-full font-semibold shadow-md">
//                       Featured
//                     </span>
//                   )}
//                   {p.title.includes("Qavach") && (
//                     <span className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-xs px-3 py-1 rounded-full font-semibold shadow-md">
//                       Enterprise
//                     </span>
//                   )}
//                 </div>

//                 {/* Back Side */}
//                 <div className="absolute inset-0 bg-black/85 backdrop-blur-lg border border-gray-700 rounded-xl text-white p-5 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
//                     <p className="text-gray-300 text-sm mb-3">
//                       {p.description}
//                     </p>

//                     {/* Tech Stack - Stylish Color Pills */}
//                     <div className="flex flex-wrap gap-2 mt-3">
//                       {p.tech.map((t, idx) => (
//                         <span
//                           key={idx}
//                           className="px-2.5 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium shadow-md hover:scale-105 transition-transform duration-200"
//                         >
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Buttons (Always Inside) */}
//                   <div className="flex justify-end gap-3 mt-4">
//                     {p.demo && (
//                       <a
//                         href={p.demo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-lg text-white font-medium hover:scale-105 transition-transform"
//                       >
//                         Demo
//                       </a>
//                     )}
//                     <a
//                       href={p.code}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-gray-800 px-4 py-2 rounded-lg text-gray-200 font-medium hover:bg-gray-700 transition"
//                     >
//                       Code
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const allProjects = [
    {
      title: "Astrology APIs — Personalized Predictions",
      category: "Full Stack",
      description:
        "A full-stack astrology platform providing personalized horoscopes, zodiac predictions, and subscription-based API services. Integrated secure REST APIs, React frontend, and subscription models.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      demo: "https://astrologyapis.com/",
      code: "#",
    },
    {
      title: "Qavach — Comprehensive Child Health Screening Platform",
      category: "Full Stack",
      description:
        "Enterprise-level health screening and analytics platform enabling preventive healthcare through encrypted PHR/EHR data exchange and multi-role workflows.",
      tech: ["React.js", "Node.js", "JWT Auth", "Azure Cloud", "RBAC"],
      demo: "",
      code: "#",
    },
    {
      title: "Learning Management System (LMS)",
      category: "Full Stack",
      description:
        "Microservices-based Learning Management System with secure JWT authentication, Stripe integration, and course-tracking analytics.",
      tech: ["React", "Node.js", "Microservices", "Stripe API"],
      demo: "",
      code: "#",
    },
    {
      title: "Portfolio Website",
      category: "React",
      description:
        "My own portfolio site built using React, Framer Motion, and Tailwind CSS with responsive layout and glowing transitions.",
      tech: ["React", "Tailwind", "Framer Motion"],
      demo: "#",
      code: "#",
    },
  ];

  const [filter, setFilter] = useState("All");
  const categories = ["All", "Full Stack", "React"];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  // Text animation variant
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 min-h-screen"
      style={{
        background: "radial-gradient(circle at top, #0f172a 0%, #000000 80%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-3"
        >
          Projects
        </motion.h2>
        <p className="text-center text-gray-400 mb-12">
          Where creativity meets functionality — each crafted with purpose.
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-6 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-5 py-2 text-lg font-medium transition-all duration-300 rounded-full ${
                filter === cat
                  ? "text-white bg-gradient-to-r from-pink-600 to-purple-600 shadow-lg shadow-purple-700/40"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat} Projects
            </button>
          ))}
        </div>

        {/* Glassmorphism Animated Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                scale: 1.04,
                rotateX: 3,
                rotateY: -3,
                boxShadow:
                  "0 0 25px rgba(125, 44, 255, 0.4), 0 0 50px rgba(105, 0, 255, 0.3)",
              }}
              className="relative bg-white/10 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 overflow-hidden transition-all duration-500"
            >
              {/* Animated glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 via-transparent to-blue-800/20 animate-gradient-move opacity-60 pointer-events-none"></div>

              {/* Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 flex flex-col gap-3"
              >
                <motion.h3
                  variants={textVariant}
                  custom={0}
                  className="text-2xl font-bold text-white tracking-tight"
                >
                  {p.title}
                </motion.h3>

                <motion.p
                  variants={textVariant}
                  custom={1}
                  className="text-gray-300 text-sm leading-relaxed"
                >
                  {p.description}
                </motion.p>

                {/* Tech stack */}
                <motion.div
                  variants={textVariant}
                  custom={2}
                  className="flex flex-wrap gap-2 mt-3"
                >
                  {p.tech.map((t, idx) => (
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium shadow-sm"
                    >
                      {t}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Buttons */}
                <motion.div
                  variants={textVariant}
                  custom={3}
                  className="flex justify-between items-center mt-5 pt-4 border-t border-gray-700"
                >
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-pink-600 to-purple-600 px-4 py-2 rounded-lg text-white text-sm font-medium hover:scale-105 transition-transform"
                    >
                      Demo
                    </a>
                  )}
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900/80 px-4 py-2 rounded-lg text-gray-200 text-sm font-medium hover:bg-gray-800 transition"
                  >
                    Code
                  </a>
                </motion.div>
              </motion.div>

              {/* Bottom title bar */}
              {/* <motion.div
                whileHover={{
                  boxShadow:
                    "0 0 20px rgba(125,44,255,0.6), 0 0 40px rgba(105,0,255,0.3)",
                }}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[90%] text-center py-2 rounded-xl bg-gradient-to-r from-black via-[#2b006d] to-[#5e17eb] text-white font-semibold text-sm border border-purple-700 shadow-md"
              >
                {p.title}
              </motion.div> */}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background animation keyframes */}
      <style jsx>{`
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 10s ease infinite;
        }
      `}</style>
    </section>
  );
}
