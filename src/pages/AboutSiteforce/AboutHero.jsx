// import React from "react";
// import { Link } from "react-router-dom";

// function AboutHero() {
//   return (
//     <section
//       className="relative h-[80vh] flex items-center justify-center text-center text-white"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1557804506-669a67965ba0')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >

//       {/* Overlay */}

//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Content */}

//       <div className="relative z-10 max-w-4xl px-6">

//         {/* Title */}

//         <h1 className="text-5xl md:text-6xl font-bold mb-6">
//           About Siteforce
//         </h1>

//         {/* Tagline */}

//         <p className="text-lg md:text-xl mb-8 text-gray-200">
//           Empowering businesses with workforce solutions, IT services,
//           digital transformation and professional training programs.
//         </p>

//         {/* Buttons */}

//         <div className="flex justify-center gap-6 flex-wrap">

//           <Link to="/what-we-do" className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition">
//             Explore Services
//           </Link>

//           <Link to="/contact-us" className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
//             Contact Us
//           </Link>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default AboutHero;


import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Building2, Users, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

function AboutHero() {
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
    { label: "Clients Served", value: "500+" },
    { label: "Trained Professionals", value: "10K+" },
    { label: "Success Rate", value: "98%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0c10] overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(67,56,202,0.15),transparent_50%)]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <div className="text-left">
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-blue-500/10 backdrop-blur-md px-4 py-2 rounded-full text-blue-400 text-sm font-bold mb-8 border border-blue-500/20"
            >
              <Sparkles size={16} />
              <span className="uppercase tracking-[0.2em]">Pioneering Excellence</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter"
            >
              Innovating <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                The Future
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-slate-400 text-xl md:text-2xl leading-relaxed max-w-xl mb-12 font-medium"
            >
              Empowering businesses with precision workforce solutions, strategic IT consulting, and transformative digital experiences.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-6 mb-16"
            >
              <Link 
                to="/contact-us" 
                className="group bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-500 transition-all duration-300 shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 flex items-center space-x-3 no-underline"
              >
                <span>Partner With Us</span>
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/what-we-do" 
                className="group border-2 border-slate-800 text-slate-300 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-800/50 hover:text-white transition-all duration-300 flex items-center space-x-3 no-underline"
              >
                <span>Our Solutions</span>
              </Link>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 border-t border-slate-800/50 pt-12"
            >
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-3xl font-black text-white tracking-tighter">{stat.value}</div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual Elements */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                  className="w-full aspect-[4/5] object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  alt="Siteforce Leadership" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent"></div>
              </div>

              {/* Floating Tech Card */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-8 rounded-[2rem] shadow-2xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/20">
                    <CheckCircle2 size={30} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">ISO 9001</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Certified Quality</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-600/20 rounded-full blur-[80px]"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-600/20 rounded-full blur-[60px]"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent"></div>
      </motion.div>
    </section>
  );
}

export default AboutHero;