// import React from "react";

// function MissionVision() {
//   return (
//     <section className="bg-white py-24">

//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

//         <div className="bg-gray-50 p-10 rounded-xl shadow">

//           <h2 className="text-3xl font-bold mb-4">
//             Our Mission
//           </h2>

//           <p className="text-gray-600">
//             Our mission is to provide reliable manpower supply,
//             innovative IT consulting and digital solutions that help
//             organizations improve productivity and business performance.
//           </p>

//         </div>


//         <div className="bg-gray-50 p-10 rounded-xl shadow">

//           <h2 className="text-3xl font-bold mb-4">
//             Our Vision
//           </h2>

//           <p className="text-gray-600">
//             Our vision is to become a trusted consulting partner for
//             organizations by delivering workforce solutions, IT services
//             and professional training programs.
//           </p>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default MissionVision;


import React from "react";
import { Target, Eye, Sparkles, Rocket, Lightbulb, Heart } from "lucide-react";
import { motion } from "framer-motion";

function MissionVision() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-56 h-56 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles size={16} />
            <span>Our Purpose</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Mission & Vision
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Guiding principles that drive everything we do and shape our commitment to delivering exceptional value to our clients.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Mission Card */}
          <motion.div 
            variants={itemVariants}
            className="group relative bg-gradient-to-br from-indigo-50 to-purple-50 p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-indigo-100"
          >
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400 opacity-10 rounded-full blur-3xl"></div>
            
            {/* Icon */}
            <div className="relative z-10 bg-gradient-to-br from-indigo-500 to-purple-600 w-24 h-24 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
              <Target size={48} className="text-white" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Our Mission
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our mission is to provide reliable manpower supply, innovative IT consulting and digital solutions that help organizations improve productivity and business performance through excellence and innovation.
              </p>

              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-indigo-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb size={14} className="text-indigo-600" />
                  </div>
                  <span className="text-gray-700">Innovative solutions for modern challenges</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-indigo-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Rocket size={14} className="text-indigo-600" />
                  </div>
                  <span className="text-gray-700">Drive business growth and productivity</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-indigo-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart size={14} className="text-indigo-600" />
                  </div>
                  <span className="text-gray-700">Reliable partnerships that matter</span>
                </div>
              </div>

              {/* Decorative Line */}
              <div className="mt-8 h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            variants={itemVariants}
            className="group relative bg-gradient-to-br from-purple-50 to-pink-50 p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100"
          >
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 opacity-10 rounded-full blur-3xl"></div>
            
            {/* Icon */}
            <div className="relative z-10 bg-gradient-to-br from-purple-500 to-pink-600 w-24 h-24 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
              <Eye size={48} className="text-white" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Vision
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our vision is to become a trusted consulting partner for organizations by delivering workforce solutions, IT services and professional training programs that set industry benchmarks.
              </p>

              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target size={14} className="text-purple-600" />
                  </div>
                  <span className="text-gray-700">Trusted partner for organizations worldwide</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Rocket size={14} className="text-purple-600" />
                  </div>
                  <span className="text-gray-700">Industry-leading workforce solutions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb size={14} className="text-purple-600" />
                  </div>
                  <span className="text-gray-700">Excellence in professional training</span>
                </div>
              </div>

              {/* Decorative Line */}
              <div className="mt-8 h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white rounded-3xl p-12 relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-8">Our Core Values</h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "Integrity", desc: "Honest and transparent in all dealings" },
                { title: "Excellence", desc: "Premium quality in every service" },
                { title: "Innovation", desc: "Creative solutions for complex challenges" },
                { title: "Customer Focus", desc: "Your success is our priority" }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                    <Sparkles size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                  <p className="text-indigo-200 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MissionVision;
