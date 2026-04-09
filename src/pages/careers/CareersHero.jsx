// import React from "react";
// import { Briefcase, Users, Rocket } from "lucide-react";
// import { Link } from "react-router-dom";

// function CareersHero() {
//   return (
//     <section className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white py-28 overflow-hidden">
//       {/* Background Blur Circle */}
//       <div className="absolute w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl -top-20 -left-20"></div>
//       <div className="absolute w-96 h-96 bg-indigo-400 opacity-20 rounded-full blur-3xl bottom-0 right-0"></div>

//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//         {/* LEFT CONTENT */}
//         <div>
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//             Build Your Career <br />
//             With <span className="text-purple-300">SiteForce Consultants</span>
//           </h1>

//           <p className="text-lg text-gray-200 mb-8">
//             Join a team that delivers cutting-edge HR solutions, IT services,
//             digital innovation and professional training. We empower talent and
//             help professionals grow in a dynamic environment.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-wrap gap-4">
//             <Link
//               to="/job-Openings"
//               className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition"
//             >
//               Viwe Open Position
//             </Link>

//             {/* Apply Now Link */}
//             <Link
//               to="/apply-now"
//               className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition"
//             >
//               Apply Now
//             </Link>
//           </div>
//         </div>

//         {/* RIGHT CONTENT - STATS CARD */}
//         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
//           <h3 className="text-2xl font-semibold mb-6">Why Join SiteForce?</h3>

//           <div className="space-y-6">
//             <div className="flex items-center gap-4">
//               <Users className="text-purple-300" size={30} />
//               <div>
//                 <h4 className="font-semibold">Collaborative Team</h4>
//                 <p className="text-sm text-gray-300">
//                   Work with talented professionals across HR, IT and digital
//                   services.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <Rocket className="text-purple-300" size={30} />
//               <div>
//                 <h4 className="font-semibold">Career Growth</h4>
//                 <p className="text-sm text-gray-300">
//                   Continuous learning, training programs and leadership
//                   opportunities.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <Briefcase className="text-purple-300" size={30} />
//               <div>
//                 <h4 className="font-semibold">Exciting Projects</h4>
//                 <p className="text-sm text-gray-300">
//                   Work on real business solutions in HR outsourcing, IT
//                   consulting and digital marketing.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default CareersHero;


import React from "react";
import { Briefcase, Users, Rocket, Sparkles, ArrowRight, TrendingUp, Award, Clock, Heart, Shield } from "lucide-react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

function CareersHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stats = [
    { number: "25+", label: "Open Positions" },
    { number: "500+", label: "Team Members" },
    { number: "95%", label: "Satisfaction" },
    { number: "15+", label: "Years Together" }
  ];

  const benefits = [
    {
      icon: <Users size={32} />,
      title: "Collaborative Team",
      description: "Work with talented professionals across HR, IT and digital services in a supportive environment.",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: <Rocket size={32} />,
      title: "Career Growth",
      description: "Continuous learning, training programs and leadership opportunities to advance your career.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Briefcase size={32} />,
      title: "Exciting Projects",
      description: "Work on real business solutions in HR outsourcing, IT consulting and digital marketing.",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Competitive Salary",
      description: "Attractive compensation packages with performance-based bonuses and benefits.",
      gradient: "from-rose-500 to-red-600"
    },
    {
      icon: <Award size={32} />,
      title: "Recognition",
      description: "Earn rewards and recognition for outstanding performance and contributions.",
      gradient: "from-orange-500 to-amber-600"
    },
    {
      icon: <Clock size={32} />,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options for better work-life integration.",
      gradient: "from-amber-500 to-yellow-600"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-400 opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-10 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 animate-bounce" style={{ animationDuration: '3s' }}>
        <Briefcase size={32} className="text-white" />
      </div>
      <div className="absolute top-48 right-20 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        <Rocket size={32} className="text-white" />
      </div>
      <div className="absolute bottom-32 left-20 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
        <Users size={32} className="text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium border border-white/20"
            >
              <Sparkles size={18} />
              <span>Join Our Growing Team</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-extrabold leading-tight"
            >
              Build Your Career
              <span className="block">
                With{" "}
                <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                  SiteForce Consultants
                </span>
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-200 leading-relaxed"
            >
              Join a team that delivers cutting-edge HR solutions, IT services, digital innovation and professional training. 
              We empower talent and help professionals grow in a dynamic, collaborative environment.
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-8 pt-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/job-Openings"
                className="group bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all duration-300 shadow-2xl hover:shadow-white/30 flex items-center space-x-3 no-underline"
              >
                <span>View Open Positions</span>
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/apply-now"
                className="group border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-indigo-700 transition-all duration-300 flex items-center space-x-3 no-underline"
              >
                <span>Apply Now</span>
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT CONTENT - BENEFITS CARD */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 relative overflow-hidden"
          >
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-indigo-400 opacity-20 rounded-full blur-3xl"></div>
            
            <h3 className="text-3xl font-extrabold mb-8">Why Join SiteForce?</h3>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group flex items-start gap-5 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`bg-gradient-to-br ${benefit.gradient} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">{benefit.title}</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-purple-300">
                  <Heart size={20} />
                  <span className="font-semibold text-xs md:text-sm">We care about our team</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-300">
                  <Shield size={20} />
                  <span className="font-semibold text-xs md:text-sm">Secure & Stable</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: <Sparkles size={24} />, title: "Innovation Driven", desc: "Cutting-edge projects & technologies" },
            { icon: <Users size={24} />, title: "Diverse Culture", desc: "Inclusive & collaborative environment" },
            { icon: <Rocket size={24} />, title: "Fast Growth", desc: "Rapid career advancement opportunities" }
          ].map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl mb-4">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CareersHero;