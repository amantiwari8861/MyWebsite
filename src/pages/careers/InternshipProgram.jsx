import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, BarChart3, GraduationCap, MapPin, Clock, Calendar, Search, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import apiService from "../../api";

function InternshipProgram() {
  const [search, setSearch] = useState("");
  const [internships, setInternships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // icon mapping
  const iconMap = {
    Code: <Code size={32} />,
    Database: <Database size={32} />,
    BarChart3: <BarChart3 size={32} />,
    GraduationCap: <GraduationCap size={32} />
  };

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await apiService.getInternshipPrograms();
        // Handle paginated response or direct array
        const data = response.data.results || response.data;
        setInternships(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching internships:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInternships();
  }, []);

  const filtered = internships.filter(i =>
    i.title?.toLowerCase().includes(search.toLowerCase()) ||
    i.location?.toLowerCase().includes(search.toLowerCase())
  );

  return(
    <section className="min-h-screen bg-slate-900 pt-32 pb-24 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm font-bold mb-6"
          >
            <GraduationCap size={16} />
            <span>KICKSTART YOUR CAREER</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-black text-white mb-6 tracking-tight"
          >
            Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Programs</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed"
          >
            Bridge the gap between academics and industry with Siteforce's elite internship opportunities.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-xl mx-auto mb-20 relative"
        >
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-purple-500 transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search by tech or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all placeholder:text-slate-600 backdrop-blur-md"
            />
          </div>
        </motion.div>

        {/* Content Grid */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="animate-spin text-purple-500" size={40} />
            <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">Loading Programs...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.length > 0 ? (
                filtered.map((item, index) => (
                  <motion.div
                    key={item.id || index}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 group flex flex-col h-full shadow-2xl shadow-black/20"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                      {iconMap[item.icon] || <GraduationCap size={32} />}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                      {item.description}
                    </p>

                    <div className="space-y-4 mb-10 pt-6 border-t border-white/5">
                      <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-wider">
                        <Clock size={16} className="text-purple-500" />
                        <span>Duration: {item.duration}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-wider">
                        <MapPin size={16} className="text-purple-500" />
                        <span>Location: {item.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-wider">
                        <Calendar size={16} className="text-purple-500" />
                        <span>Deadline: {item.application_deadline}</span>
                      </div>
                    </div>

                    <Link
                      to="/apply-now"
                      className="inline-flex items-center justify-center w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-black transition-all gap-2 group/btn shadow-lg shadow-purple-900/20"
                    >
                      Apply Now
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center bg-white/5 rounded-3xl border border-dashed border-white/10">
                  <p className="text-slate-500 font-medium">No matching internship programs found.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}

export default InternshipProgram;
