import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Lightbulb, 
  BookOpen, 
  FileText, 
  TrendingUp, 
  Newspaper, 
  PieChart, 
  ArrowRight,
  Sparkles,
  Cpu,
  Loader2
} from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import apiService from "../../api";

const WhatweThink = () => {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchHero();
  }, []);

  const fetchHero = async () => {
    try {
      const res = await apiService.getPageHero('whatwethink');
      setHero(res.data);
    } catch (error) {
      console.error("Error fetching hero:", error);
    } finally {
      setLoading(false);
    }
  };

  const sections = [
    {
      title: "Blogs",
      desc: "Expert perspectives on industry shifts and strategic innovation.",
      icon: <Lightbulb size={32} className="text-amber-400" />,
      link: "/blogs",
      color: "from-amber-500/20 to-orange-500/20",
      border: "border-amber-500/30"
    },
    {
      title: "Case Studies",
      desc: "Real-world success stories and the impact of our solutions.",
      icon: <BookOpen size={32} className="text-blue-400" />,
      link: "/case-studies",
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30"
    },
    {
      title: "White Papers",
      desc: "Technical deep-dives and industry standards exploration.",
      icon: <FileText size={32} className="text-rose-400" />,
      link: "/whitepapers",
      color: "from-rose-500/20 to-pink-500/20",
      border: "border-rose-500/30"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#05070A] flex items-center justify-center">
        <Loader2 className="animate-spin text-purple-500" size={48} />
      </div>
    );
  }

  return (
    <div className="bg-[#05070A] text-white min-h-screen overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-400 mb-8"
          >
            <Sparkles size={16} />
            <span>{hero?.subtitle || "Thought Leadership"}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight"
          >
            {hero?.title ? (
              <>
                {hero.title.split(' ').slice(0, -1).join(' ')} <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">{hero.title.split(' ').slice(-1)}</span>
              </>
            ) : (
              <>What We <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">Think</span></>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            {hero?.description || "Discover our latest research, insights, and perspectives on the technologies and trends shaping the future of global business."}
          </motion.p>
        </div>
      </section>

      {/* GRID SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                to={item.link}
                className={`group block h-full p-8 rounded-3xl border ${item.border} bg-gradient-to-br ${item.color} hover:scale-[1.02] transition-all duration-500 relative overflow-hidden`}
              >
                {/* ICON & TITLE */}
                <div className="relative z-10">
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                    Explore Now <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* DECORATIVE ELEMENT */}
                <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500 scale-150">
                  {item.icon}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 md:p-20 rounded-[40px] bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-white/10 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Innovate?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Stay ahead of the curve with our monthly digest of industry trends and reports.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-10 py-4 rounded-2xl bg-white text-black font-bold hover:scale-105 transition shadow-2xl"
              >
                Get Started
              </Link>
              <Link
                to="/blogs"
                className="px-10 py-4 rounded-2xl bg-white/10 border border-white/20 font-bold hover:bg-white/20 transition backdrop-blur-md"
              >
                Read All
              </Link>
            </div>
          </div>

          {/* DECOR */}
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Cpu size={200} className="text-purple-400" />
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default WhatweThink;
