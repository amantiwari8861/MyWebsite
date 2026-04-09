import React, { useEffect, useState } from "react";
import apiService from "../../api";
import {
  Briefcase,
  Cpu,
  TrendingUp,
  GraduationCap,
  Layers,
  Users,
  Sparkles,
  CheckCircle,
  Rocket,
  Shield,
  Award,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";

// ICON MAP
const iconMap = {
  Briefcase: <Briefcase size={28} />,
  Cpu: <Cpu size={28} />,
  TrendingUp: <TrendingUp size={28} />,
  GraduationCap: <GraduationCap size={28} />,
  Layers: <Layers size={28} />,
  Users: <Users size={28} />,
};

function WhyChooseUs() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await apiService.getWhyChooseUs();
      setFeatures(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { number: "500+", label: "Happy Clients", icon: <Users size={24} /> },
    { number: "10K+", label: "Professionals Placed", icon: <Briefcase size={24} /> },
    { number: "98%", label: "Success Rate", icon: <TrendingUp size={24} /> },
    { number: "15+", label: "Years Experience", icon: <Award size={24} /> }
  ];

  const trustBadges = [
    { icon: <Shield size={24} />, title: "ISO Certified", desc: "Quality Assured" },
    { icon: <CheckCircle size={24} />, title: "Verified", desc: "Business Registered" },
    { icon: <Rocket size={24} />, title: "Proven", desc: "Track Record" },
    { icon: <Heart size={24} />, title: "Trusted", desc: "Client Focused" }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-950 via-indigo-950 to-black text-white overflow-hidden">
      {/* Animated Glow Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20">
            <Sparkles size={18} />
            <span>Why Partner With Us</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Siteforce
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are dedicated to becoming your trusted partner in building{" "}
            <span className="text-indigo-400 font-semibold">smarter</span>,{" "}
            <span className="text-purple-400 font-semibold">stronger</span>, and{" "}
            <span className="text-pink-400 font-semibold">future-ready</span> businesses. 
            Our integrated solutions combine{" "}
            <span className="font-semibold text-white">people</span>,{" "}
            <span className="font-semibold text-white">technology</span>, and{" "}
            <span className="font-semibold text-white">innovation</span> to drive growth and efficiency.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:border-indigo-400/50 group-hover:bg-indigo-500/10 transition-all">
                <div className="text-indigo-400">{stat.icon}</div>
              </div>
              <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {loading ? (
            <div className="col-span-full text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 hover:bg-white/10"
              >
                {/* Icon */}
                <div className="mb-6 text-indigo-400 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300">
                  {iconMap[item.icon] || <Briefcase size={28} />}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-20 rounded-full transition-opacity"></div>
              </motion.div>
            ))
          )}
        </div>

        {/* Trust Badges Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-indigo-500/20 px-6 py-3 rounded-full text-sm font-medium mb-6">
                <Award size={18} className="text-indigo-400" />
                <span className="text-indigo-200">Trusted & Verified</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Credibility You Can Trust</h3>
              <p className="text-gray-400 text-lg">Fully compliant business with proven track record and industry recognition</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {trustBadges.map((badge, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-indigo-400/30 group-hover:border-indigo-400 group-hover:scale-110 transition-all">
                    <div className="text-indigo-400">{badge.icon}</div>
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white">{badge.title}</h4>
                  <p className="text-gray-400 text-sm">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center space-x-3 mx-auto border-none cursor-pointer">
            <span>Let's Work Together</span>
            <Rocket size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
