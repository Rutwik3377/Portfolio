// import React from "react";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full bg-white shadow z-50">
//       <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
//         {/* <h1 className="text-2xl font-bold text-blue-600">Rutwik K</h1> */}
//         <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
//   Rutwik K
// </h1>

//         <div className="space-x-6">
//           <a href="#about" className="hover:text-blue-500">About</a>
//           <a href="#skills" className="hover:text-blue-500">Skills</a>
//           <a href="#projects" className="hover:text-blue-500">Projects</a>
//           <a href="#resume" className="hover:text-blue-500">Resume</a>
//           <a href="#contact" className="hover:text-blue-500">Contact</a>
//         </div>
//       </div>
//     </nav>
//   );
// }






// import React from "react";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full bg-black shadow z-50">
//       <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
//           Rutwik K
//         </h1>

//         {/* Links */}
//         <div className="space-x-6 flex items-center">
//           <a href="#about" className="text-white hover:text-blue-400 transition">About</a>
//           <a href="#skills" className="text-white hover:text-blue-400 transition">Skills</a>
//           <a href="#projects" className="text-white hover:text-blue-400 transition">Projects</a>
//           <a href="#resume" className="text-white hover:text-blue-400 transition">Resume</a>
//           <a
//             href="#contact"
//             className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-white font-medium shadow-md hover:shadow-blue-500/50 transition"
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }



// import React from "react";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full bg-black shadow z-50">
//       <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
//         {/* Dynamic Animated Logo */}
//         <h1
//           className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent transition-all duration-300 transform hover:scale-110 cursor-pointer"
//           onClick={() => alert('Welcome to my portfolio!')}
//         >
//           Rutwik K
//         </h1>

//         {/* Links */}
//         <div className="space-x-6 flex items-center">
//           <a href="#about" className="text-white hover:text-blue-400 transition">About</a>
//           <a href="#skills" className="text-white hover:text-blue-400 transition">Skills</a>
//           <a href="#projects" className="text-white hover:text-blue-400 transition">Projects</a>
//           <a href="#resume" className="text-white hover:text-blue-400 transition">Resume</a>
//           <a
//             href="#contact"
//             className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-white font-medium shadow-md hover:shadow-blue-500/50 transition"
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }






// import React, { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 w-full bg-black shadow z-50">
//       <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
//         {/* Dynamic Animated Logo */}
//         <h1
//           className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent transition-all duration-300 transform hover:scale-110 cursor-pointer"
//           onClick={() => alert("Welcome to my portfolio!")}
//         >
//           Rutwik K
//         </h1>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-6 items-center">
//           <a href="#about" className="text-white hover:text-blue-400 transition">About</a>
//           <a href="#skills" className="text-white hover:text-blue-400 transition">Skills</a>
//           <a href="#projects" className="text-white hover:text-blue-400 transition">Projects</a>
//           <a href="#resume" className="text-white hover:text-blue-400 transition">Resume</a>
//           <a
//             href="#contact"
//             className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-white font-medium shadow-md hover:shadow-blue-500/50 transition"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Hamburger Icon (Mobile) */}
//         <button
//           className="md:hidden text-white text-3xl"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu with Animation */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.4 }}
//             className="md:hidden bg-black overflow-hidden px-6 py-4 space-y-4"
//           >
//             <a href="#about" className="block text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>About</a>
//             <a href="#skills" className="block text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Skills</a>
//             <a href="#projects" className="block text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Projects</a>
//             <a href="#resume" className="block text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Resume</a>
//             <a
//               href="#contact"
//               className="block bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-white font-medium shadow-md hover:shadow-blue-500/50 transition"
//               onClick={() => setIsOpen(false)}
//             >
//               Contact
//             </a>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }









import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Dynamic Animated Logo */}
        <h1
          className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent transition-all duration-300 transform hover:scale-110 cursor-pointer"
          onClick={() => alert("Welcome to my portfolio!")}
        >
          Rutwik K
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#about" className="text-white hover:text-blue-400 transition">About</a>
          <a href="#skills" className="text-white hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="text-white hover:text-blue-400 transition">Projects</a>
          <a href="#resume" className="text-white hover:text-blue-400 transition">Resume</a>
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-white font-medium shadow-md hover:shadow-blue-500/50 transition"
          >
            Contact
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-gradient-to-b from-gray-900 to-black overflow-hidden px-6 py-4 space-y-4 z-50 shadow-lg"
          >
            <a href="#about" className="block text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>About</a>
            <a href="#skills" className="block text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#projects" className="block text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#resume" className="block text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Resume</a>
            <a
              href="#contact"
              className="block bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-white font-medium shadow-md hover:shadow-blue-500/50 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
