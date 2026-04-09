import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Briefcase, ArrowRight, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import apiService from "../../api";

function JobOpenings() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await apiService.getJobs();
        // Handle paginated response or direct array
        const data = response.data.results || response.data;
        setJobs(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title?.toLowerCase().includes(search.toLowerCase()) ||
    job.location?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black text-slate-900 mb-4 tracking-tight"
          >
            Current <span className="text-purple-600">Opportunities</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg"
          >
            Find your next career milestone with Siteforce.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16 relative"
        >
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-600 transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search by role or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all text-slate-700"
            />
          </div>
        </motion.div>

        {/* Jobs Grid */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="animate-spin text-purple-600" size={40} />
            <p className="text-slate-400 font-medium tracking-widest uppercase text-xs">Loading Openings...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id || index}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Briefcase size={24} />
                      </div>
                      <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase tracking-tighter">
                        Full Time
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {job.title}
                    </h3>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <MapPin size={16} className="text-slate-400" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Briefcase size={16} className="text-slate-400" />
                        {job.experience}
                      </div>
                    </div>

                    <Link
                      to="/apply-now"
                      className="inline-flex items-center justify-center w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-purple-600 transition-all gap-2 group/btn shadow-lg shadow-slate-900/10"
                    >
                      Apply for Role
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-slate-200"
                >
                  <p className="text-slate-400 font-medium">No job openings found matching your search.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}

export default JobOpenings;
