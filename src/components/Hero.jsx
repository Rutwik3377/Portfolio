// import React from "react";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-100 to-white">
//       <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-5xl font-bold mb-4">
//         Hi, I'm <span className="text-blue-600">Your Name</span>
//       </motion.h1>
//       <p className="text-lg text-gray-600">Full-Stack Developer | MERN Enthusiast</p>
//     </section>
//   );
// }




// import React from "react";
// import profileImg from "../assets/Rutu_Image.jpg"; // <-- put your image in src/assets/

// export default function Hero() {
//   return (
//     <section className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-8">
//       {/* Left side: Text */}
//       <div className="flex-1 text-center md:text-left space-y-6">
//         <h1 className="text-5xl font-bold">
//           Hi, I'm <span className="text-blue-500">Your Name</span>
//         </h1>
//         <p className="text-xl text-gray-300">
//           Full-Stack Developer | MERN Enthusiast
//         </p>
//         <div className="space-x-4">
//           <a
//             href="#projects"
//             className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg shadow-md"
//           >
//             View My Work
//           </a>
//           <a
//             href="#contact"
//             className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white"
//           >
//             Contact Me
//           </a>
//         </div>
//       </div>

//       {/* Right side: Image */}
//       <div className="flex-1 flex justify-center mt-10 md:mt-0">
//         <img
//           src={profileImg}
//           alt="Profile"
//           className="w-80 h-80 object-cover rounded-full shadow-lg border-4 border-blue-500"
//         />
//       </div>
//     </section>
//   );
// }







// import React from "react";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import profileImg from "../assets/Rutu_Image.jpg"; // <-- replace with your image

// export default function Hero() {
//   return (
//     <section className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-10 md:px-20">
//       {/* Left Content */}
//       <div className="flex-1 space-y-6 text-center md:text-left">
//         <h2 className="text-orange-400 text-lg">Hey I'm Rutwik 👋</h2>
//         <h1 className="text-5xl md:text-6xl font-extrabold">
//           I'm a <span className="text-white">Full Stack Developer</span>
//         </h1>
//         <p className="text-gray-400 max-w-lg">
//           I'm a Fullstack Developer with proficient knowledge in MERN . 
//           I offer a robust portfolio showcasing my Frontend and Backend skills.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//    <a
//   href="/gallery"
//   className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white px-6 py-3 rounded-lg shadow-lg"
// >
//   Gallery →
// </a>

//           <a
//             href="#resume"
//             className="bg-gradient-to-r from-gray-700 to-gray-900 hover:opacity-90 text-white px-6 py-3 rounded-lg shadow-lg"
//           >
//             Resume
//           </a>
//         </div>
//       </div>

//       {/* Right Image */}
//       <div className="flex-1 flex justify-center mt-10 md:mt-0">
//         <img
//           src={profileImg}
//           alt="Profile"
//           className="w-80 h-auto rounded-lg object-cover"
//         />
//       </div>

//       {/* Social Icons Sidebar */}
//       <div className="fixed top-1/3 left-0 flex flex-col space-y-4 bg-transparent">
//         <a
//           href="https://linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-purple-800 hover:bg-gray-700 p-3 rounded-r-lg"
//         >
//           <FaLinkedin size={24} />
//         </a>
//         <a
//           href="https://github.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-purple-500 hover:bg-gray-700 p-3 rounded-r-lg"
//         >
//           <FaGithub size={24} />
//         </a>
//         <a
//           href="mailto:youremail@example.com"
//           className="bg-blue-500 hover:bg-gray-700 p-3 rounded-r-lg"
//         >
//           <FaEnvelope size={24} />
//         </a>
//       </div>
//     </section>
//   );
// }







// import React from "react";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import profileImg from "../assets/Rutu_Image.jpg";
// import { motion } from "framer-motion";
// import Typewriter from "typewriter-effect";

// export default function Hero() {
//   const isMobile = window.innerWidth < 768; // Simple mobile check

//   return (
//     <section className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 relative overflow-hidden">
//       {/* Background gradient animation */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>

//       {/* Left Content */}
//       <motion.div
//         className="flex-1 space-y-6 text-center md:text-left z-10 pt-20 md:pt-0"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-orange-400 text-lg">Hey I'm Rutwik 👋</h2>
//         <h1 className="text-4xl md:text-6xl font-extrabold">
//           I'm a{" "}
//           <span className="text-white">
//             <Typewriter
//               options={{
//                 strings: ["Full Stack Developer", "MERN Enthusiast", "Problem Solver"],
//                 autoStart: true,
//                 loop: true,
//                 delay: 50,
//               }}
//             />
//           </span>
//         </h1>
//         <motion.p
//           className="text-gray-400 max-w-lg mx-auto md:mx-0"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           I'm a Fullstack Developer with proficient knowledge in MERN.
//           I offer a robust portfolio showcasing my Frontend and Backend skills.
//         </motion.p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//           <motion.a
//             href="/gallery"
//             className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white px-6 py-3 rounded-lg shadow-lg w-full sm:w-auto text-center"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Gallery →
//           </motion.a>
//           <motion.a
//             href="#resume"
//             className="bg-gradient-to-r from-gray-700 to-gray-900 hover:opacity-90 text-white px-6 py-3 rounded-lg shadow-lg w-full sm:w-auto text-center"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Resume
//           </motion.a>
//         </div>
//       </motion.div>

//       {/* Right Image */}
//       <motion.div
//         className="flex-1 flex justify-center mt-10 md:mt-0 z-10"
//         animate={isMobile ? {} : { y: [0, -10, 0] }}
//         transition={{ repeat: isMobile ? 0 : Infinity, duration: 3 }}
//       >
//         <img
//           src={profileImg}
//           alt="Profile"
//           className="w-60 md:w-80 h-auto rounded-lg object-cover shadow-lg"
//         />
//       </motion.div>

//       {/* Social Icons Sidebar */}
//       <div className="fixed top-1/3 left-0 flex flex-col space-y-4 bg-transparent z-20">
//         <motion.a
//           href="https://linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-purple-800 hover:bg-gray-700 p-3 rounded-r-lg"
//           whileHover={{ rotate: 10, scale: 1.1 }}
//         >
//           <FaLinkedin size={24} />
//         </motion.a>
//         <motion.a
//           href="https://github.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-purple-500 hover:bg-gray-700 p-3 rounded-r-lg"
//           whileHover={{ rotate: 10, scale: 1.1 }}
//         >
//           <FaGithub size={24} />
//         </motion.a>
//         <motion.a
//           href="mailto:youremail@example.com"
//           className="bg-blue-500 hover:bg-gray-700 p-3 rounded-r-lg"
//           whileHover={{ rotate: 10, scale: 1.1 }}
//         >
//           <FaEnvelope size={24} />
//         </motion.a>
//       </div>
//     </section>
//   );
// }




// import React from "react";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import { motion } from "framer-motion";
// import Typewriter from "typewriter-effect";

// // Point to your existing JPG image
// import profileImg from "../assets/Gemini_Generated_Image_fbj3dfbj3dfbj3df.png";

// export default function Hero() {
//   return (
//     <section className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 relative overflow-hidden">
//       {/* Background gradient (optional, kept from previous versions) */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>

//       {/* Left Content */}
//       <motion.div
//         className="flex-1 space-y-6 text-center md:text-left z-10 pt-20 md:pt-0"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-orange-400 text-lg">Hey I'm Rutwik 👋</h2>
//         <h1 className="text-4xl md:text-6xl font-extrabold">
//           I'm a{" "}
//           <span className="text-white">
//             <Typewriter
//               options={{
//                 strings: ["Full Stack Developer", "MERN Enthusiast", "Problem Solver"],
//                 autoStart: true,
//                 loop: true,
//                 delay: 50,
//               }}
//             />
//           </span>
//         </h1>
//         <motion.p
//           className="text-gray-400 max-w-lg mx-auto md:mx-0"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           I'm a Fullstack Developer with proficient knowledge in MERN.
//           I offer a robust portfolio showcasing my Frontend and Backend skills.
//         </motion.p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//           <motion.a
//             href="/gallery"
//             className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white px-6 py-3 rounded-lg shadow-lg w-full sm:w-auto text-center"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Gallery →
//           </motion.a>
//           <motion.a
//             href="#resume"
//             className="bg-gradient-to-r from-gray-700 to-gray-900 hover:opacity-90 text-white px-6 py-3 rounded-lg shadow-lg w-full sm:w-auto text-center"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Resume
//           </motion.a>
//         </div>
//       </motion.div>

//       {/* --- REBUILT: Right Image with Static Shapes --- */}
//       <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 z-10">
//         {/* Container for all shapes and the image */}
//         <div className="relative w-80 h-80 md:w-96 md:h-96">
          
//           {/* Main Organic Shape (SVG with gradient) */}
          

//           {/* Floating Shapes */}
//           <div className="absolute top-[15%] right-[5%] w-10 h-10 bg-purple-400 rounded-full z-20"></div>
//           <div className="absolute bottom-[20%] right-[10%] w-8 h-8 bg-amber-300 rounded-full z-20"></div>
//           <div className="absolute bottom-[5%] right-[5%] w-4 h-4 bg-white transform rotate-45 z-20"></div>


//           {/* Circular Profile Image Container */}
//           <div className="absolute inset-0 flex items-center justify-center z-30">
//             <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-gray-900 flex items-center justify-center shadow-xl p-2">
//               <img
//                 src={profileImg}
//                 alt="Profile"
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>
//           </div>
          
//         </div>
//       </div>

//       {/* Social Icons Sidebar */}
//       <div className="fixed top-1/3 left-0 flex flex-col space-y-4 bg-transparent z-50">
//         <motion.a
//           href="https://linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-purple-800 hover:bg-gray-700 p-3 rounded-r-lg"
//           whileHover={{ rotate: 10, scale: 1.1 }}
//         >
//           <FaLinkedin size={24} />
//         </motion.a>
//         <motion.a
//           href="https://github.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-purple-500 hover:bg-gray-700 p-3 rounded-r-lg"
//           whileHover={{ rotate: 10, scale: 1.1 }}
//         >
//           <FaGithub size={24} />
//         </motion.a>
//         <motion.a
//           href="mailto:youremail@example.com"
//           className="bg-blue-500 hover:bg-gray-700 p-3 rounded-r-lg"
//           whileHover={{ rotate: 10, scale: 1.1 }}
//         >
//           <FaEnvelope size={24} />
//         </motion.a>
//       </div>
//     </section>
//   );
// }



// import React from "react";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import { motion, useMotionValue, useTransform } from "framer-motion";
// import Typewriter from "typewriter-effect";

// // Point to your existing JPG image
// import profileImg from "../assets/Gemini_Generated_Image_fbj3dfbj3dfbj3df.png";
// import developerAbstractImg from "../assets/Gemini_Generated_Image_tyc98btyc98btyc9.png"; // <-- Updated image import

// export default function Hero() {
//   // --- START: Hooks for 3D Tilt Effect ---
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const rotateX = useTransform(y, [-100, 100], [30, -30]);
//   const rotateY = useTransform(x, [-100, 100], [-30, 30]);
//   // --- END: Hooks for 3D Tilt Effect ---

//   return (
//     <section className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 relative overflow-hidden">
//       {/* Background gradient (optional, kept from previous versions) */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>

//       {/* Left Content */}
//       <motion.div
//         className="flex-1 space-y-6 text-center md:text-left z-10 pt-20 md:pt-0"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-orange-400 text-lg">Hey I'm Rutwik 👋</h2>
//         <h1 className="text-4xl md:text-6xl font-extrabold">
//           I'm a{" "}
//           <span className="text-white">
//             <Typewriter
//               options={{
//                 strings: [
//                   "Full Stack Developer",
//                   "MERN Enthusiast",
//                   "Problem Solver",
//                 ],
//                 autoStart: true,
//                 loop: true,
//                 delay: 50,
//               }}
//             />
//           </span>
//         </h1>
//         <motion.p
//           className="text-gray-400 max-w-lg mx-auto md:mx-0"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           I'm a Fullstack Developer with proficient knowledge in MERN. I offer a
//           robust portfolio showcasing my Frontend and Backend skills.
//         </motion.p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//           <motion.a
//             href="/gallery"
//             className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white px-6 py-3 rounded-lg shadow-lg w-full sm:w-auto text-center"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Gallery →
//           </motion.a>
//           <motion.a
//             href="#resume"
//             className="bg-gradient-to-r from-gray-700 to-gray-900 hover:opacity-90 text-white px-6 py-3 rounded-lg shadow-lg w-full sm:w-auto text-center"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Resume
//           </motion.a>
//         </div>
//       </motion.div>

//       {/* --- REBUILT: Right Image with 3D Tilt & Animated Shapes --- */}
//       <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 z-10">
//         {/* Container for all shapes and the image */}
//         <motion.div
//           className="relative w-80 h-80 md:w-96 md:h-96"
//           style={{ perspective: 1000 }} // Apply perspective for 3D effect
//           onMouseMove={(e) => {
//             const rect = e.currentTarget.getBoundingClientRect();
//             x.set(e.clientX - rect.left - rect.width / 2);
//             y.set(e.clientY - rect.top - rect.height / 2);
//           }}
//           onMouseLeave={() => {
//             x.set(0);
//             y.set(0);
//           }}
//         >
//           {/* Main Organic Shape (SVG Blob) */}
//           <motion.div
//             className="absolute inset-0 z-10"
//             style={{ rotateX, rotateY, scale: 1.1 }} // Apply tilt
//             transition={{ type: "spring", stiffness: 350, damping: 40 }}
//           >
//             <svg
//               viewBox="0 0 200 200"
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-full h-full"
//             >
//               <defs>
//                 <linearGradient
//                   id="blobGradient"
//                   x1="0%"
//                   y1="0%"
//                   x2="100%"
//                   y2="100%"
//                 >
// -                  <stop offset="0%" style={{ stopColor: "#5A67D8" }} />
// -                  <stop offset="100%" style={{ stopColor: "#805AD5" }} />
// +                  <stop offset="0%" style={{ stopColor: "#00C9FF" }} /> {/* Bright Cyan */}
// +                  <stop offset="100%" style={{ stopColor: "#92FE9D" }} /> {/* Light Green */}
//                 </linearGradient>
//               </defs>
//               <path
//                 fill="url(#blobGradient)"
//                 d="M45.5,-64.3C58.3,-56.9,67.7,-43.9,72.4,-29.4C77.1,-14.9,77.1,-0.1,72.9,13.2C68.7,26.5,60.2,38.3,49.8,47.9C39.4,57.5,27.2,65,14.4,69.5C1.6,74,-11.7,75.6,-25.1,71.8C-38.6,68,-52.1,58.8,-62.1,47C-72.1,35.2,-78.6,20.8,-79.7,5.6C-80.9,-9.5,-76.8,-25.3,-68.2,-38.2C-59.5,-51.1,-46.3,-61.2,-32.8,-67.4C-19.3,-73.5,-5.5,-75.7,7.1,-73.4C19.8,-71.1,32.8,-65.8,45.5,-64.3Z"
//                 transform="translate(100 100)"
//               ></path>
//             </svg>
//           </motion.div>

//           {/* Floating Shapes - Now Animated! */}
//           <motion.div
//             className="absolute top-[15%] right-[5%] w-10 h-10 bg-purple-400 rounded-full z-20" // <-- Keep purple as a complementary neon accent
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//           ></motion.div>
//           <motion.div
//             className="absolute bottom-[20%] right-[10%] w-8 h-8 bg-amber-300 rounded-full z-20" // <-- Keep amber as a complementary neon accent
//             style={{ rotateX, rotateY }} // Tilts *with* the mouse
//             transition={{ type: "spring", stiffness: 350, damping: 40 }}
//           ></motion.div>
//           <motion.div
//             className="absolute bottom-[5%] right-[5%] w-4 h-4 bg-white transform rotate-45 z-20" // <-- Keep white for a subtle glint
//             animate={{ y: [0, 5, 0], x: [0, 5, 0] }}
//             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//           ></motion.div>

//           {/* Circular Profile Image Container - Now with 3D Tilt */}
//           <motion.div
//             className="absolute inset-0 flex items-center justify-center z-30"
//             style={{ rotateX, rotateY, scale: 1.1 }} // Apply tilt
//             transition={{ type: "spring", stiffness: 350, damping: 40 }}
//           >
//             <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-gray-900 flex items-center justify-center shadow-xl p-2">
//               <img
//               src={profileImg}
//               src={developerAbstractImg} 
//                 alt="Abstract Developer at Work" 
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Social Icons Sidebar */}
//       <div className="fixed top-1/3 left-0 flex flex-col space-y-4 bg-transparent z-50">
//         <motion.a
//           href="https://linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-purple-800 hover:bg-gray-700 p-3 rounded-r-lg"
//           whileHover={{ rotate: 10, scale: 1.1 }}
//         >
//           <FaLinkedin size={24} />
//         </motion.a>
//         <motion.a
//           href="https://github.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-purple-500 hover:bg-gray-700 p-3 rounded-r-lg"
//           whileHover={{ rotate: 10, scale: 1.1 }}
//         >
//           <FaGithub size={24} />
//         </motion.a>
//         <motion.a
//           href="mailto:youremail@example.com"
//           className="bg-blue-500 hover:bg-gray-700 p-3 rounded-r-lg"
//           whileHover={{ rotate: 10, scale: 1.1 }}
//         >
//           <FaEnvelope size={24} />
//         </motion.a>
//       </div>
//     </section>
//   );
// }



// import React from "react";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import { motion, useMotionValue, useTransform } from "framer-motion";
// import Typewriter from "typewriter-effect";

// // Import your new abstract developer image
// import developerAbstractImg from "../assets/Gemini_Generated_Image_tyc98btyc98btyc9.png";

// export default function Hero() {
//   // Hooks for 3D Tilt Effect
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const rotateX = useTransform(y, [-100, 100], [30, -30]);
//   const rotateY = useTransform(x, [-100, 100], [-30, 30]);

//   return (
//     <section className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 relative overflow-hidden">
//       {/* Background gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>

//       {/* Left Content */}
//       <motion.div
//         className="flex-1 space-y-6 text-center md:text-left z-10 pt-20 md:pt-0"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-orange-400 text-lg">Hey I'm Rutwik 👋</h2>
//         <h1 className="text-4xl md:text-6xl font-extrabold">
//           I'm a{" "}
//           <span className="text-white">
//             <Typewriter
//               options={{
//                 strings: [
//                   "Full Stack Developer",
//                   "MERN Enthusiast",
//                   "Problem Solver",
//                 ],
//                 autoStart: true,
//                 loop: true,
//                 delay: 50,
//               }}
//             />
//           </span>
//         </h1>
//         <motion.p
//           className="text-gray-400 max-w-lg mx-auto md:mx-0"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           I'm a Fullstack Developer with proficient knowledge in MERN. I offer a
//           robust portfolio showcasing my Frontend and Backend skills.
//         </motion.p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//           <motion.a
//             href="/gallery"
//             className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white px-6 py-3 rounded-lg shadow-lg w-full sm:w-auto text-center"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Gallery →
//           </motion.a>
//           <motion.a
//             href="#resume"
//             className="bg-gradient-to-r from-gray-700 to-gray-900 hover:opacity-90 text-white px-6 py-3 rounded-lg shadow-lg w-full sm:w-auto text-center"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Resume
//           </motion.a>
//         </div>
//       </motion.div>

//       {/* Right Image with 3D Tilt & Animated Shapes */}
//       <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 z-10">
//         {/* Container for all shapes and the image */}
//         <motion.div
//           className="relative w-80 h-80 md:w-96 md:h-96"
//           style={{ perspective: 1000 }} // Apply perspective for 3D effect
//           onMouseMove={(e) => {
//             const rect = e.currentTarget.getBoundingClientRect();
//             x.set(e.clientX - rect.left - rect.width / 2);
//             y.set(e.clientY - rect.top - rect.height / 2);
//           }}
//           onMouseLeave={() => {
//             x.set(0);
//             y.set(0);
//           }}
//         >
//           {/* Floating Shapes - Now Animated! */}
//           <motion.div
//             className="absolute top-[15%] right-[5%] w-10 h-10 bg-purple-400 rounded-full z-20"
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//           ></motion.div>
//           <motion.div
//             className="absolute bottom-[20%] right-[10%] w-8 h-8 bg-amber-300 rounded-full z-20"
//             style={{ rotateX, rotateY }} // Tilts *with* the mouse
//             transition={{ type: "spring", stiffness: 350, damping: 40 }}
//           ></motion.div>
//           <motion.div
//             className="absolute bottom-[5%] right-[5%] w-4 h-4 bg-white transform rotate-45 z-20"
//             animate={{ y: [0, 5, 0], x: [0, 5, 0] }}
//             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//           ></motion.div>

//           {/* Circular Profile Image Container - Now with 3D Tilt and Increased Size */}
//           <motion.div
//             className="absolute inset-0 flex items-center justify-center z-30"
//             style={{ rotateX, rotateY, scale: 1.1 }} // Apply tilt
//             transition={{ type: "spring", stiffness: 350, damping: 40 }}
//           >
//             {/* Increased image container size */}
//             <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden bg-gray-900 flex items-center justify-center shadow-xl p-2">
//               <img
//                 src={developerAbstractImg}
//                 alt="Abstract Developer at Work"
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Social Icons Sidebar */}
//       <div className="fixed top-1/3 left-0 flex flex-col space-y-4 bg-transparent z-50">
//         <motion.a
//           href="https://linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-purple-800 hover:bg-gray-700 p-3 rounded-r-lg"
//           whileHover={{ rotate: 10, scale: 1.1 }}
//         >
//           <FaLinkedin size={24} />
//         </motion.a>
//         <motion.a
//           href="https://github.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-purple-500 hover:bg-gray-700 p-3 rounded-r-lg"
//           whileHover={{ rotate: 10, scale: 1.1 }}
//         >
//           <FaGithub size={24} />
//         </motion.a>
//         <motion.a
//           href="mailto:youremail@example.com"
//           className="bg-blue-500 hover:bg-gray-700 p-3 rounded-r-lg"
//           whileHover={{ rotate: 10, scale: 1.1 }}
//         >
//           <FaEnvelope size={24} />
//         </motion.a>
//       </div>
//     </section>
//   );
// }



// import React from "react";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// import { motion, useMotionValue, useTransform } from "framer-motion";
// import Typewriter from "typewriter-effect";

// // Import your new abstract developer image
// import developerAbstractImg from "../assets/Gemini_Generated_Image_tyc98btyc98btyc9.png";

// export default function Hero() {
//   // Hooks for 3D Tilt Effect
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const rotateX = useTransform(y, [-100, 100], [30, -30]);
//   const rotateY = useTransform(x, [-100, 100], [-30, 30]);

//   return (
//     // <section className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 relative overflow-hidden">
    
//     <section className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-black via-gray-900text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 relative overflow-hidden">
      
//     {/* Background gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>

//       {/* Left Content */}
//       <motion.div
//         className="flex-1 space-y-6 text-center md:text-left z-10 pt-20 md:pt-0"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-orange-400 text-lg">Hey I'm Rutwik 👋</h2>
//         <h1 className="text-4xl md:text-6xl font-extrabold">
//           I'm a{" "}
//           <span className="text-white">
//             <Typewriter
//               options={{
//                 strings: [
//                   "Full Stack Developer",
//                   "MERN Enthusiast",
//                   "Problem Solver",
//                 ],
//                 autoStart: true,
//                 loop: true,
//                 delay: 50,
//               }}
//             />
//           </span>
//         </h1>
//         <motion.p
//           className="text-gray-400 max-w-lg mx-auto md:mx-0"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           I'm a Fullstack Developer with proficient knowledge in MERN. I offer a
//           robust portfolio showcasing my Frontend and Backend skills.
//         </motion.p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//           <motion.a
//             href="/gallery"
//             className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white px-6 py-3 rounded-lg shadow-lg w-full sm:w-auto text-center"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Gallery →
//           </motion.a>
//           <motion.a
//             href="#resume"
//             className="bg-gradient-to-r from-gray-700 to-gray-900 hover:opacity-90 text-white px-6 py-3 rounded-lg shadow-lg w-full sm:w-auto text-center"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Resume
//           </motion.a>
//         </div>
//       </motion.div>

//       {/* Right Image with 3D Tilt & Animated Shapes */}
//       <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 z-10">
//         {/* Container for all shapes and the image */}
//         <motion.div
//           className="relative w-80 h-80 md:w-96 md:h-96" // This main container defines the overall interactive area
//           style={{ perspective: 1000 }} // Apply perspective for 3D effect
//           onMouseMove={(e) => {
//             const rect = e.currentTarget.getBoundingClientRect();
//             x.set(e.clientX - rect.left - rect.width / 2);
//             y.set(e.clientY - rect.top - rect.height / 2);
//           }}
//           onMouseLeave={() => {
//             x.set(0);
//             y.set(0);
//           }}
//         >
//           {/* Floating Shapes - Now Animated! */}
//           <motion.div
//             className="absolute top-[15%] right-[5%] w-10 h-10 bg-purple-400 rounded-full z-20"
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//           ></motion.div>
//           <motion.div
//             className="absolute bottom-[20%] right-[10%] w-8 h-8 bg-amber-300 rounded-full z-20"
//             style={{ rotateX, rotateY }} // Tilts *with* the mouse
//             transition={{ type: "spring", stiffness: 350, damping: 40 }}
//           ></motion.div>
//           <motion.div
//             className="absolute bottom-[5%] right-[5%] w-4 h-4 bg-white transform rotate-45 z-20"
//             animate={{ y: [0, 5, 0], x: [0, 5, 0] }}
//             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//           ></motion.div>

//           {/* Rounded Rectangle/Square Image Container - Now with 3D Tilt and Increased Size */}
//           <motion.div
//             className="absolute inset-0 flex items-center justify-center z-30"
//             style={{ rotateX, rotateY, scale: 1.1 }} // Apply tilt
//             transition={{ type: "spring", stiffness: 350, damping: 40 }}
//           >
//             {/* The main image container - changed from rounded-full to rounded-2xl */}
//             {/* Also removed overflow-hidden from this div, added to img directly for better control */}
//             <div className="relative w-72 h-72 md:w-80 md:h-80  flex items-center justify-center shadow-xl p-2 rounded-2xl">
//               <img
//                 src={developerAbstractImg}
//                 alt="Abstract Developer at Work"
//                 // Added rounded-2xl and overflow-hidden directly to the image
//                 className="w-full h-full object-cover rounded-2xl overflow-hidden"
//               />
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Social Icons Sidebar */}
//       <div className="fixed top-1/3 left-0 flex flex-col space-y-4 bg-transparent z-50">
//         <motion.a
//           href="https://linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-purple-800 hover:bg-gray-700 p-3 rounded-r-lg"
//           whileHover={{ rotate: 10, scale: 1.1 }}
//         >
//           <FaLinkedin size={24} />
//         </motion.a>
//         <motion.a
//           href="https://github.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-purple-500 hover:bg-gray-700 p-3 rounded-r-lg"
//           whileHover={{ rotate: 10, scale: 1.1 }}
//         >
//           <FaGithub size={24} />
//         </motion.a>
//         <motion.a
//           href="mailto:youremail@example.com"
//           className="bg-blue-500 hover:bg-gray-700 p-3 rounded-r-lg"
//           whileHover={{ rotate: 10, scale: 1.1 }}
//         >
//           <FaEnvelope size={24} />
//         </motion.a>
//       </div>
//     </section>
//   );
// }







import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring, // Import useSpring
} from "framer-motion";
import Typewriter from "typewriter-effect";

// Import your abstract developer image
import developerAbstractImg from "../assets/Gemini_Generated_Image_tyc98btyc98btyc9.png";

export default function Hero() {
  // --- START: Updated Hooks for SMOOTH 3D Tilt Effect ---

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 1. Transform mouse position to rotation (instant)
  // We've increased the input range ([-200, 200]) to make it less sensitive
  // and decreased the output range ([20, -20]) for a subtler tilt.
  const rotateX_immediate = useTransform(y, [-200, 200], [20, -20]);
  const rotateY_immediate = useTransform(x, [-200, 200], [-20, 20]);
  const scale_immediate = useTransform(y, [-200, 200], [1.1, 1]); // Make scale dynamic too

  // 2. Create a "springy" value that smoothly follows the immediate value
  // These are the values we'll pass to the style prop
  // Adjust stiffness and damping to your liking!
  const springConfig = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(rotateX_immediate, springConfig);
  const rotateY = useSpring(rotateY_immediate, springConfig);
  const scale = useSpring(scale_immediate, springConfig);

  // --- END: Updated Hooks ---

  return (
    <section className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-black via-gray-900  text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>

      {/* Left Content */}
      <motion.div
        className="flex-1 space-y-6 text-center md:text-left z-10 pt-20 md:pt-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-orange-400 text-lg">Hey I'm Rutwik 👋</h2>
        <h1 className="text-4xl md:text-6xl font-extrabold">
          I'm a{" "}
          <span className="text-white">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "MERN Enthusiast",
                  "Problem Solver",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </span>
        </h1>
        <motion.p
          className="text-gray-400 max-w-lg mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I'm a Fullstack Developer with proficient knowledge in MERN. I offer a
          robust portfolio showcasing my Frontend and Backend skills.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <motion.a
            href="/gallery"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white px-6 py-3 rounded-lg shadow-lg w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Gallery →
          </motion.a>
          {/* <motion.a
            href="#resume"
            className="bg-gradient-to-r from-gray-700 to-gray-900 hover:opacity-90 text-white px-6 py-3 rounded-lg shadow-lg w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
          
          */}

          <motion.a
  href="/assets/Rutwik_Resume.pdf"
  download="Rutwik_Resume.pdf"
  whileHover={{
    scale: 1.05,
    boxShadow: "0px 0px 15px rgba(125, 44, 255, 0.6)",
  }}
  whileTap={{ scale: 0.95 }}
  className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white px-6 py-3 rounded-lg shadow-md w-full sm:w-auto text-center border border-purple-600 transition-all"
>
  Resume ⬇️
</motion.a>

        </div>
      </motion.div>

      {/* Right Image with 3D Tilt & Animated Shapes */}
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 z-10">
        {/* Container for all shapes and the image */}
        <motion.div
          className="relative w-80 h-80 md:w-96 md:h-96"
          style={{ perspective: 1000 }} // Apply perspective for 3D effect
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set(e.clientX - rect.left - rect.width / 2);
            y.set(e.clientY - rect.top - rect.height / 2);
          }}
          onMouseLeave={() => {
            x.set(0);
            y.set(0);
          }}
        >
          {/* Floating Shapes - Now Animated! */}
          <motion.div
            className="absolute top-[15%] right-[5%] w-10 h-10 bg-purple-400 rounded-full z-20"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="absolute bottom-[20%] right-[10%] w-8 h-8 bg-amber-300 rounded-full z-20"
            // We pass the smooth values here, no transition prop needed
            style={{ rotateX, rotateY }}
          ></motion.div>
          <motion.div
            className="absolute bottom-[5%] right-[5%] w-4 h-4 bg-white transform rotate-45 z-20"
            animate={{ y: [0, 5, 0], x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          ></motion.div>

          {/* Rounded Rectangle/Square Image Container */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-30"
            // We pass the smooth values here, no transition prop needed
            style={{ rotateX, rotateY, scale }}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center shadow-xl p-2 rounded-2xl">
              <img
                src={developerAbstractImg}
                alt="Abstract Developer at Work"
                className="w-full h-full object-cover rounded-2xl overflow-hidden"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Social Icons Sidebar */}
      <div className="fixed top-1/3 left-0 flex flex-col space-y-4 bg-transparent z-50">
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-800 hover:bg-gray-700 p-3 rounded-r-lg"
          whileHover={{ rotate: 10, scale: 1.1 }}
        >
          <FaLinkedin size={24} />
        </motion.a>
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-500 hover:bg-gray-700 p-3 rounded-r-lg"
          whileHover={{ rotate: 10, scale: 1.1 }}
        >
          <FaGithub size={24} />
        </motion.a>
        <motion.a
          href="mailto:youremail@example.com"
          className="bg-blue-500 hover:bg-gray-700 p-3 rounded-r-lg"
          whileHover={{ rotate: 10, scale: 1.1 }}
        >
          <FaEnvelope size={24} />
        </motion.a>
      </div>
    </section>
  );
}