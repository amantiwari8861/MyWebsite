// import React from "react";
// import { Link } from "react-router-dom";

// import {
//   GraduationCap,
//   Monitor,
//   Users,
//   Award,
//   ArrowRight,
//   CheckCircle,
// } from "lucide-react";

// const TrainingSkillDevelopment = () => {
//   const trainings = [
//     {
//       icon: <Monitor size={26} />,
//       title: "IT & Software Training",
//       desc: "Hands-on training on modern technologies like Web Development, Cloud, and AI tools.",
//       link: "/it-services",
//     },
//     {
//       icon: <Users size={26} />,
//       title: "Corporate Training",
//       desc: "Customized professional training programs designed for organizations and teams.",
//       link: "/corporate-training",
//     },
//     {
//       icon: <GraduationCap size={26} />,
//       title: "Skill Development Programs",
//       desc: "Industry-relevant training to build practical technical and professional skills.",
//       link: "/training-skill-development",
//     },
//     {
//       icon: <Award size={26} />,
//       title: "Certification Courses",
//       desc: "Professional certification programs that improve career opportunities.",
//       link: "/training/certification",
//     },
//   ];

//   return (
//     <section className="py-28 bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
//         {/* LEFT CONTENT */}
//         <div>
//           <h2 className="text-4xl font-bold text-gray-800 leading-tight">
//             Professional Training &
//             <span className="text-blue-600"> Skill Development</span>
//           </h2>

//           <p className="text-gray-600 mt-6 text-lg">
//             We provide industry-oriented training programs that empower students
//             and professionals with modern technical and business skills required
//             for the digital economy.
//           </p>

//           {/* Feature List */}
//           <div className="mt-8 space-y-4">
//             {[
//               "Industry Expert Trainers",
//               "Real-World Practical Projects",
//               "Certification & Career Guidance",
//             ].map((item, i) => (
//               <div key={i} className="flex items-center gap-3">
//                 <CheckCircle className="text-blue-600" size={20} />
//                 <p className="text-gray-700">{item}</p>
//               </div>
//             ))}
//           </div>
//           {/* CTA */}
//           <div className="flex gap-4 mt-10">
//             <Link
//               to="/what-we-do"
//               className="bg-blue-600 text-white px-7 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
//             >
//               Explore Services
//               <ArrowRight size={18} />
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT TRAINING CARDS (NOW CLICKABLE 🔥) */}
//         <div className="grid sm:grid-cols-2 gap-8">
//           {trainings.map((item, index) => (
//             <Link
//               to={item.link}
//               key={index}
//               className="group backdrop-blur-lg bg-white/80 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-4 border border-gray-100"
//             >
//               {/* Icon */}
//               <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white mb-5 group-hover:scale-110 transition">
//                 {item.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-600 text-sm">{item.desc}</p>
//             </Link>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default TrainingSkillDevelopment;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiService from "../../api";

import {
  GraduationCap,
  Monitor,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const iconMap = {
  Monitor: <Monitor size={26} />,
  Users: <Users size={26} />,
  GraduationCap: <GraduationCap size={26} />,
  Award: <Award size={26} />,
};

const TrainingSkillDevelopment = () => {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    fetchTrainings();
  }, []);

  const fetchTrainings = async () => {
    try {
      const res = await apiService.getTrainings();
      setTrainings(res.data);
    } catch (error) {
      console.error("Error fetching trainings:", error);
    }
  };

  return (
    <section className="py-28 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            Professional Training &
            <span className="text-blue-600"> Skill Development</span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg">
            We provide industry-oriented training programs that empower students
            and professionals with modern technical and business skills required
            for the digital economy.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Industry Expert Trainers",
              "Real-World Practical Projects",
              "Certification & Career Guidance",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="text-blue-600" size={20} />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-10">
            <Link
              to="/what-we-do"
              className="bg-blue-600 text-white px-7 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
            >
              Explore Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid sm:grid-cols-2 gap-8">
          {trainings.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="group backdrop-blur-lg bg-white/80 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-4 border border-gray-100"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white mb-5 group-hover:scale-110 transition">
                {iconMap[item.icon] || <Monitor size={26} />}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">{item.description}</p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrainingSkillDevelopment;