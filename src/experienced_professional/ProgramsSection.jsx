// const programs = [
//   {
//     title: "Internship Program",
//     desc: "Gain real-world experience with industry mentors.",
//   },
//   {
//     title: "Graduate Hiring",
//     desc: "Kickstart your career with structured onboarding.",
//   },
//   {
//     title: "Early Careers Roles",
//     desc: "Join full-time roles with career growth opportunities.",
//   },
// ];

// const ProgramsSection = () => {
//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6 text-center">
        
//         <h2 className="text-4xl font-bold mb-4">
//           Explore Opportunities
//         </h2>
//         <p className="text-gray-500 mb-12">
//           Discover programs designed to build your future.
//         </p>

//         <div className="grid md:grid-cols-3 gap-8">
//           {programs.map((item, i) => (
//             <div
//               key={i}
//               className="group border rounded-2xl p-8 hover:shadow-2xl transition duration-300 bg-gray-50 hover:bg-white"
//             >
//               <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 mb-6">{item.desc}</p>

//               <button className="text-blue-600 font-medium group-hover:underline">
//                 Learn More →
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProgramsSection;


import React from "react";
import { 
  GraduationCap, 
  Briefcase, 
  Rocket, 
  ArrowRight, 
  Sparkles, 
  Target, 
  Award, 
  TrendingUp 
} from "lucide-react";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Internship Program",
    desc: "Gain real-world experience with industry mentors. Work on live projects, receive hands-on training, and earn a stipend while building your professional portfolio.",
    icon: <GraduationCap size={40} />,
    gradient: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    features: ["Live Projects", "Mentorship", "Stipend Included", "Certificate"],
    cta: "Apply for Internship",
    link: "/internship-program"
  },
  {
    title: "Graduate Hiring",
    desc: "Kickstart your career with structured onboarding. Join our graduate program designed for freshers with comprehensive training, mentorship, and clear growth paths.",
    icon: <Rocket size={40} />,
    gradient: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    features: ["Structured Training", "Rotational Program", "Mentor assigned", "Fast-track Growth"],
    cta: "Explore Graduate Roles",
    link: "/graduate-hiring"
  },
  {
    title: "Early Careers Roles",
    desc: "Join full-time roles with career growth opportunities. Perfect for professionals with 1-3 years experience looking to accelerate their career trajectory.",
    icon: <Briefcase size={40} />,
    gradient: "from-pink-500 to-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    features: ["Full-time Position", "Competitive Salary", "Career Growth", "Benefits Package"],
    cta: "View Early Careers",
    link: "/early-careers"
  }
];

const stats = [
  { number: "500+", label: "Interns Trained", icon: <GraduationCap size={24} /> },
  { number: "200+", label: "Graduates Hired", icon: <Rocket size={24} /> },
  { number: "95%", label: "Placement Rate", icon: <Award size={24} /> },
  { number: "50+", label: "Partner Companies", icon: <Briefcase size={24} /> }
];

const ProgramsSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-48 h-48 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles size={16} />
            <span>Career Programs</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Explore{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Opportunities
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover programs designed to build your future. From internships to full-time roles, 
            we have opportunities for every stage of your career journey.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${program.borderColor} hover:border-opacity-100 relative overflow-hidden`}
            >
              {/* Decorative Background */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${program.gradient} opacity-5 rounded-full blur-3xl`}></div>
              
              {/* Icon */}
              <div className={`${program.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <div className={`bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`}>
                  {program.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`}>
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {program.desc}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {program.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${program.gradient} rounded-full`}></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`group/btn bg-gradient-to-r ${program.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2`}>
                <span>{program.cta}</span>
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>

              {/* Gradient Line */}
              <div className={`mt-6 h-1 w-16 bg-gradient-to-r ${program.gradient} rounded-full`}></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-2">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* What You'll Gain Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">What You'll Gain</h3>
            <p className="text-xl text-gray-600">Valuable skills and experiences that will propel your career forward</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Target size={28} />, title: "Real Experience", desc: "Work on live business projects" },
              { icon: <TrendingUp size={28} />, title: "Skill Development", desc: "Technical & soft skills training" },
              { icon: <Award size={28} />, title: "Certification", desc: "Industry-recognized certificates" },
              { icon: <Briefcase size={28} />, title: "Career Network", desc: "Connect with industry professionals" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-white">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Sparkles size={18} />
              <span>Ready to Start?</span>
            </div>
            
            <h3 className="text-4xl font-bold mb-4">Take the First Step Toward Your Dream Career</h3>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of successful professionals who started their journey with us. 
              Apply today and unlock your potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all duration-300 shadow-lg flex items-center space-x-3">
                <span>Apply Now</span>
                <Rocket size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center space-x-3">
                <span>Talk to Advisor</span>
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;