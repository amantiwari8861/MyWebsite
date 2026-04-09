import React from "react";
import { Users, Star, Award, Linkedin, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function LeadershipTeam() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const team = [
    {
      name: "Ramdhani Thakur",
      role: "Founder",
      description: "Founder of Siteforce Consultants Private Limited with extensive experience in workforce solutions, business development, and strategic leadership. Passionate about driving organizational growth and delivering exceptional value to clients.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      stats: ["15+ Years Experience", "500+ Clients", "10K+ Placements"],
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      name: "Chandan Kumar",
      role: "Director",
      description: "Director at Siteforce Consultants leading strategic operations, staffing solutions and consulting services. Expert in building strong client relationships and driving operational excellence across all business verticals.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      stats: ["12+ Years Experience", "Strategic Leader", "Operations Expert"],
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="bg-gray-50 py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-40 left-20 w-56 h-56 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-purple-600 rounded-full blur-3xl"></div>
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
            <span>Meet Our Leaders</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Leadership Team
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leadership team driving innovation, business excellence, and sustainable growth at Siteforce Consultants Private Limited with decades of combined expertise.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100 hover:border-indigo-200 overflow-hidden"
            >
              {/* Decorative Background */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${member.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity`}></div>
              
              {/* Top Gradient Bar */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${member.gradient}`}></div>

              {/* Image Container */}
              <div className="relative z-10">
                <div className="relative inline-block mx-auto mb-6">
                  <div className={`w-40 h-40 rounded-full p-1 bg-gradient-to-br ${member.gradient}`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Role Badge */}
                  <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${member.gradient} text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg`}>
                    {member.role}
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-3xl font-extrabold text-center mb-3 text-gray-900">
                  {member.name}
                </h3>

                {/* Role */}
                <p className={`text-center mb-6 font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent text-lg`}>
                  {member.role}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed mb-8">
                  {member.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {member.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                        {stat}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4">
                  <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 border-none cursor-pointer">
                    <Linkedin size={18} />
                    <span>Connect</span>
                  </button>
                  <button className="bg-white border-2 border-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-300 flex items-center space-x-2 cursor-pointer">
                    <Mail size={18} />
                    <span>Message</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Leadership Matters Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white rounded-3xl p-12 relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-6">
                <Award size={18} />
                <span>Leadership Excellence</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Driven by Vision, Led by Excellence</h3>
              <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
                Our leadership team brings decades of combined experience in workforce solutions, strategic consulting, and business transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Star size={32} />, title: "Visionary Leadership", desc: "Forward-thinking strategies that drive innovation" },
                { icon: <Users size={32} />, title: "Client-Centric", desc: "Dedicated to delivering exceptional value" },
                { icon: <Award size={32} />, title: "Industry Experts", desc: "Decades of combined expertise" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-indigo-400 to-purple-400 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-indigo-200 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LeadershipTeam;
