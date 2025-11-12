// import React from "react";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="py-20 px-6 bg-gradient-to-b from-black to-gray-900"
//     >
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
//           Get In Touch
//         </h2>
//         <p className="text-gray-400 mb-12">
//           I’d love to hear from you! Fill out the form below, and I’ll get back to you as soon as possible.
//         </p>

//         {/* Form */}
//         <form className="space-y-6">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
//           />
//           <textarea
//             rows="5"
//             placeholder="Your Message"
//             className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
//           ></textarea>
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg text-white font-medium shadow-md hover:shadow-blue-500/50 transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }



// import React from "react";
// import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaPhoneAlt } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function Contact() {
//   const contacts = [
//     {
//       icon: <FaLinkedin size={28} />,
//       label: "LinkedIn",
//       link: "https://https://www.linkedin.com/in/rutwik-k-33a8071b0", // <-- Replace with your LinkedIn
//       color: "from-blue-500 to-blue-700",
//     },
//     {
//       icon: <FaGithub size={28} />,
//       label: "GitHub",
//       link: "https://github.com/Rutwik3377", // <-- Replace with your GitHub
//       color: "from-gray-700 to-gray-900",
//     },
//     {
//       icon: <FaEnvelope size={28} />,
//       label: "Email",
//       link: "mailto:youremail@example.com", // <-- Replace with your email
//       color: "from-pink-500 to-purple-600",
//     },
//     {
//       icon: <FaInstagram size={28} />,
//       label: "Instagram",
//       link: "https://instagram.com/yourprofile", // <-- Replace with your Instagram
//       color: "from-rose-500 to-orange-500",
//     },
//   ];

//   return (
//     <section
//       id="contact"
//       className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden"
//     >
//       {/* Animated gradient background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(109,40,217,0.15),transparent_70%)]"></div>

//       <div className="max-w-4xl mx-auto text-center relative z-10">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
//         >
//           Let’s Connect
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="text-gray-400 max-w-xl mx-auto mb-12"
//         >
//           I’m always open to discussing new projects, ideas, or opportunities.
//         </motion.p>

//         {/* Contact Icons */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
//           {contacts.map((contact, index) => (
//             <motion.a
//               key={index}
//               href={contact.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{
//                 scale: 1.1,
//                 boxShadow: "0 0 25px rgba(147, 51, 234, 0.4)",
//               }}
//               transition={{ duration: 0.3 }}
//               className={`flex flex-col items-center justify-center gap-3 bg-white/5 backdrop-blur-xl border border-gray-700 rounded-xl py-6 hover:bg-gradient-to-r ${contact.color} hover:text-white transition-all`}
//             >
//               {contact.icon}
//               <span className="text-sm font-medium">{contact.label}</span>
//             </motion.a>
//           ))}
//         </div>

//         {/* Phone Number */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="flex justify-center items-center gap-3 mt-6"
//         >
//           <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-md">
//             <FaPhoneAlt size={18} />
//           </div>
//           <p className="text-gray-300 text-lg font-medium tracking-wide">
//             +91 8088239564 {/* <-- Replace with your phone number */}
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      icon: <FaLinkedin size={28} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/rutwik-k-33a8071b0",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <FaGithub size={28} />,
      label: "GitHub",
      link: "https://github.com/Rutwik3377",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: <FaEnvelope size={28} />,
      label: "Email",
      link: "mailto:rutwik3377@gmail.com",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: <FaInstagram size={28} />,
      label: "Instagram",
      link: "https://www.instagram.com/_._rutwik_rutu1704_._",
      color: "from-rose-500 to-orange-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Soft glowing radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(109,40,217,0.15),transparent_70%)]"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 max-w-xl mx-auto mb-12"
        >
          I’m always open to collaborating on exciting projects or discussing new opportunities.  
          Feel free to reach out via any platform below.
        </motion.p>

        {/* Social Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 25px rgba(147, 51, 234, 0.4)",
              }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col items-center justify-center gap-3 bg-white/5 backdrop-blur-xl border border-gray-700 rounded-xl py-6 hover:bg-gradient-to-r ${contact.color} hover:text-white transition-all`}
            >
              {contact.icon}
              <span className="text-sm font-medium">{contact.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Phone Number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center items-center gap-3 mt-6"
        >
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-md">
            <FaPhoneAlt size={18} />
          </div>
          <p className="text-gray-300 text-lg font-medium tracking-wide">
            +91 98765 43210
          </p>
        </motion.div>
      </div>
    </section>
  );
}
