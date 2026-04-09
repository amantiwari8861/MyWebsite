import React, { useEffect, useState } from "react";
import apiService from "../../api";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, ArrowRight, Search, Loader2, BookOpen } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Write_Papers = () => {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    fetchPapers();
  }, []);

  const fetchPapers = async () => {
    try {
      const res = await apiService.getResources('paper');
      setPapers(res.data);
    } catch (error) {
      console.error("Error fetching white papers:", error);
    } finally {
      setLoading(false);
    }
  };

  const filtered = papers.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.summary.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return (
    <div className="min-h-screen bg-[#05070A] flex items-center justify-center">
      <Loader2 className="animate-spin text-rose-500" size={48} />
    </div>
  );

  return (
    <div className="bg-[#05070A] text-white min-h-screen pb-20">
      
      {/* HERO */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-rose-900/20 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black mb-6"
          >
            White <span className="text-rose-400">Papers</span>
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Deep technical dives and strategic frameworks developed by our 
            experts to solve complex enterprise challenges.
          </p>
        </div>
      </section>

      {/* SEARCH */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <input 
            type="text"
            placeholder="Search white papers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-rose-500/50 transition-colors"
          />
        </div>
      </div>

      {/* LIST */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="space-y-6">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-rose-500/30 hover:bg-white/[0.08] transition-all duration-500 flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-20 h-20 shrink-0 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                  <FileText size={40} />
                </div>

                <div className="grow">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-rose-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {item.summary}
                  </p>
                  <div className="flex flex-wrap gap-4 items-center">
                    <span className="text-xs font-bold text-white/40 uppercase tracking-tighter">
                      Published: {new Date(item.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  {item.file ? (
                    <a 
                      href={`http://127.0.0.1:8000${item.file}`}
                      download
                      className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-rose-500 hover:text-white transition-all"
                    >
                      Download PDF <Download size={16} />
                    </a>
                  ) : (
                    <button className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/10 transition-all">
                      Read Online <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <BookOpen size={64} className="mx-auto text-gray-700 mb-4" />
            <p className="text-gray-500">No white papers found.</p>
          </div>
        )}
      </section>

    </div>
  );
};

export default Write_Papers;
