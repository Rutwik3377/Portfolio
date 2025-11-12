// import React from "react";

// export default function Education() {
//   const education = [
//     {
//       title: "Bachelor of Technology in Computer Science",
//       institute: "XYZ University",
//       duration: "2019 - 2023",
//       points: ["Specialized in Full-Stack Development", "Active member of Coding Club", "Graduated with Distinction"],
//       image: "https://source.unsplash.com/600x400/?university,classroom"
//     },
//     {
//       title: "Senior Secondary Education",
//       institute: "ABC Junior College",
//       duration: "2017 - 2019",
//       points: ["Focus on Science & Mathematics", "Top 5% in Board Exams", "State-level Science Fair Participant"],
//       image: "https://source.unsplash.com/600x400/?college,study"
//     },
//     {
//       title: "Secondary Education",
//       institute: "DEF High School",
//       duration: "2015 - 2017",
//       points: ["Excellence in Computer Science", "School Prefect", "Inter-school Coding Competition Winner"],
//       image: "https://source.unsplash.com/600x400/?school,education"
//     }
//   ];

//   return (
//     <section id="education" className="py-20 px-6 bg-black">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-white text-center mb-12">Education</h2>
//         <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-3">
//           {education.map((edu, i) => (
//             <div
//               key={i}
//               className="flex flex-col overflow-hidden rounded-xl bg-gray-900 shadow-lg hover:scale-[1.02] transition-transform duration-300"
//             >
//               {/* Image Section */}
//               <div
//                 className="h-48 bg-cover bg-center"
//                 style={{ backgroundImage: `url(${edu.image})` }}
//               ></div>

//               {/* Text Section */}
//               <div className="p-6 flex flex-col justify-between">
//                 <h3 className="text-xl font-bold text-white mb-2">{edu.title}</h3>
//                 <p className="text-blue-400 mb-2">{edu.institute}</p>
//                 <p className="text-gray-400 text-sm mb-4">{edu.duration}</p>
//                 <ul className="list-disc list-inside text-gray-300 space-y-2">
//                   {edu.points.map((point, idx) => (
//                     <li key={idx}>{point}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }






import React from "react";
import btechImg from "../assets/education/SDITimg.jpg";
import juniorImg from "../assets/education/MPUC.jpeg";
import schoolImg from "../assets/education/unnamed.png";


export default function Education() {
  const education = [
  {
    title: "Bachelor of Engineering in Computer Science",
    institute: "Shreedevi Institute of Technology",
    duration: "Mangalore (2019 - 2023)",
    points: ["Specialized in Full-Stack Development", "Active member of Coding Club", "Graduated with Distinction"],
    image: btechImg
  },
  {
    title: "II PUC in Science",
    institute: "Mahesh PU College",
    duration: "Shivamogga (2017 - 2019)",
    points: ["Focus on Science & Mathematics", "Top 5% in Board Exams", "State-level Science Fair Participant"],
    image: juniorImg
  },
  {
    title: "SSLC",
    institute: "Shri Ramakrishna Vidyanikethana",
    duration: "Shivamogga (2015 - 2017)",
    points: ["Excellence in Computer Science", "School Prefect", "Inter-school Coding Competition Winner"],
    image: schoolImg
  }
];


  return (


    <section id="education" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Education</h2>
        <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-3">
          {education.map((edu, i) => (
            <div
              key={i}
              className="flex flex-col overflow-hidden rounded-xl bg-gray-900 shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Image Section */}
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${edu.image})` }}
              ></div>
              {/* Text Section */}
              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-xl font-bold text-white mb-2">{edu.title}</h3>
                <p className="text-blue-400 mb-2">{edu.institute}</p>
                <p className="text-gray-400 text-sm mb-4">{edu.duration}</p>
                {/* <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {edu.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


  );
}
