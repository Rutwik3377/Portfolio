// import React from "react";
// import { motion } from "framer-motion";
// import img1 from "../assets/gallery/astro-bg.png";
// import img2 from "../assets/gallery/astro-bg.png";
// import img3 from "../assets/gallery/astro-bg.png";
// import video1 from "../assets/gallery/video1.mp4";
// import video2 from "../assets/gallery/video2.mp4";

// export default function Gallery() {
// //   const items = [
// //     { type: "image", src: "https://source.unsplash.com/600x400/?tech,app" },
// //     { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
// //     { type: "image", src: "https://source.unsplash.com/600x500/?code,developer" },
// //     { type: "image", src: "https://source.unsplash.com/600x450/?programming,design" },
// //     { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
// //     { type: "image", src: "https://source.unsplash.com/600x550/?portfolio,website" },
// //   ];


// export default function Gallery() {
//   const items = [
//     { type: "image", src: img1 },
//     // { type: "video", src: video1 },
//     { type: "image", src: img2 },
//     { type: "image", src: img3 },
//     { type: "video", src: video2 },
//     // { type: "image", src: img1 }, // reuse or add more
//   ];

//   return (
//     <section
//       className="min-h-screen py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
//     >
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-12">
//           My Portfolio
//         </h2>
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
//           {items.map((item, i) => (
//             <motion.div
//               key={i}
//               className="overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 bg-black/40 backdrop-blur-lg border border-gray-700"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.2 }}
//             >
//               {item.type === "image" ? (
//                 <img src={item.src} alt="Gallery Item" className="w-full object-cover hover:scale-105 transition-transform duration-500" />
//               ) : (
//                 <video controls className="w-full">
//                   <source src={item.src} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const items = [
    { type: "image", src: "https://source.unsplash.com/800x600/?technology,app" },
    { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", src: "https://source.unsplash.com/800x600/?developer,coding" },
    { type: "image", src: "https://source.unsplash.com/800x600/?programming,ui" },
    { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
    { type: "image", src: "https://source.unsplash.com/800x600/?portfolio,design" },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-xl shadow-lg bg-black/40 border border-gray-700 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedItem(item)}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Gallery ${i}`}
                  className="w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <video className="w-full">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="max-w-4xl w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === "image" ? (
                <img
                  src={selectedItem.src}
                  alt="Selected"
                  className="w-full rounded-lg"
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="w-full rounded-lg"
                />
              )}
              <button
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white px-3 py-1 rounded-full"
                onClick={() => setSelectedItem(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
