import React, { useEffect, useState } from "react";
import apiService from "../../api";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowRight, Search, Loader2, Target, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const CaseStudies = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await apiService.getCaseStudies();
      setCases(res.data.results || res.data);
    } catch (error) {
      console.error("Error fetching case studies:", error);
    } finally {
      setLoading(false);
    }
  };

  const filtered = cases.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    (item.industry && item.industry.toLowerCase().includes(search.toLowerCase()))
  );

  if (loading) return (
    <div className="min-h-screen bg-[#05070A] flex items-center justify-center">
      <Loader2 className="animate-spin text-blue-500" size={48} />
    </div>
  );

  return (
    <div className="bg-[#05070A] text-white min-h-screen pb-20">
      
      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest mb-8"
          >
            <Target size={16} />
            <span>Success Stories</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Case <span className="text-blue-400">Studies</span>
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore how we've helped leading organizations overcome challenges 
            and achieve remarkable growth through technology.
          </p>
        </div>
      </section>

      {/* SEARCH */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <input 
            type="text"
            placeholder="Search by industry or project..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-blue-500/50 transition-colors"
          />
        </div>
      </div>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white/5 border border-white/10 rounded-[40px] overflow-hidden hover:bg-white/[0.08] transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={item.image ? (item.image.startsWith('http') ? item.image : `http://127.0.0.1:8000${item.image}`) : "https://images.unsplash.com/photo-1552664730-d307ca884978"} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-8 right-6">
                    <div className="flex items-center gap-2 text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-2">
                      <Globe size={14} />
                      <span>{item.industry}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">
                        <Zap size={12} className="text-yellow-400" />
                        <span>Problem</span>
                      </div>
                      <p className="text-xs text-gray-300 line-clamp-2">{item.problem}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">
                        <ArrowRight size={12} className="text-emerald-400" />
                        <span>Impact</span>
                      </div>
                      <p className="text-xs text-gray-300 line-clamp-2">{item.impact}</p>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/case-studies/${item.id}`}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-bold transition-all shadow-xl"
                  >
                    View Full Case Study <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <BookOpen size={64} className="mx-auto text-gray-700 mb-4" />
            <p className="text-gray-500">No case studies found.</p>
          </div>
        )}
      </section>

    </div>
  );
};

export default CaseStudies;
