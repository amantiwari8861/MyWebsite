import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HeartPulse, Laptop, GraduationCap, Coffee, Clock, Globe, Shield, Star, Zap, Loader2 } from "lucide-react";
import apiService from "../../api";

function EmployeeBenefits() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const [benefits, setBenefits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const iconMap = {
    HeartPulse: <HeartPulse size={32} />,
    Laptop: <Laptop size={32} />,
    GraduationCap: <GraduationCap size={32} />,
    Coffee: <Coffee size={32} />,
    Clock: <Clock size={32} />,
    Globe: <Globe size={32} />,
    Shield: <Shield size={32} />,
    Star: <Star size={32} />,
    Zap: <Zap size={32} />,
  };

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const response = await apiService.getBenefits();
        // Handle paginated response or direct array
        const data = response.data.results || response.data;
        setBenefits(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching benefits:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBenefits();
  }, []);

  return (
    <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm font-bold mb-6"
          >
            <Star size={16} fill="currentColor" />
            <span>PEOPLE FIRST CULTURE</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-black text-white mb-8 tracking-tight"
          >
            Employee <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Benefits</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed"
          >
            We're committed to your well-being and growth. Our benefits are designed to support every aspect of your professional and personal life.
          </motion.p>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="animate-spin text-purple-500" size={40} />
            <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">Loading Perks...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.length > 0 ? (
              benefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 group shadow-2xl shadow-black/20"
                >
                  <div className="w-16 h-16 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    {iconMap[item.icon] || <Zap size={32} />}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-white/5 rounded-3xl border border-dashed border-white/10">
                <p className="text-slate-500 font-medium">Benefits list is being updated. Stay tuned!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default EmployeeBenefits;
