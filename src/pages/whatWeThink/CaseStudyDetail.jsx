import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import apiService from "../../api";
import { motion } from "framer-motion";
import { Target, Zap, Globe, ArrowLeft, Loader2, Share2 } from "lucide-react";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCaseStudy();
  }, [id]);

  const fetchCaseStudy = async () => {
    try {
      const res = await apiService.getCaseStudyDetail(id);
      setCaseStudy(res.data);
    } catch (error) {
      console.error("Error fetching case study detail:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-[#05070A] flex items-center justify-center">
      <Loader2 className="animate-spin text-blue-500" size={48} />
    </div>
  );

  if (!caseStudy) return (
    <div className="min-h-screen bg-[#05070A] text-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Case Study Not Found</h2>
      <Link to="/case-studies" className="text-blue-400 hover:underline flex items-center gap-2">
        <ArrowLeft size={20} /> Back to Case Studies
      </Link>
    </div>
  );

  return (
    <div className="bg-[#05070A] text-white min-h-screen pb-32">
      {/* HERO SECTION */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src={caseStudy.image ? (caseStudy.image.startsWith('http') ? caseStudy.image : `http://127.0.0.1:8000${caseStudy.image}`) : "https://images.unsplash.com/photo-1552664730-d307ca884978"} 
          className="w-full h-full object-cover"
          alt={caseStudy.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-[#05070A]/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-16">
          <div className="max-w-5xl mx-auto">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-blue-400 mb-8 font-bold hover:gap-3 transition-all">
              <ArrowLeft size={20} /> Back to Case Studies
            </Link>
            <div className="flex items-center gap-3 text-blue-400 text-sm font-bold uppercase tracking-widest mb-6">
              <Globe size={16} />
              <span>{caseStudy.industry || "Success Story"}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
              {caseStudy.title}
            </h1>
          </div>
        </div>
      </div>

      {/* CORE STATS / CHALLENGES */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <div className="flex items-center gap-3 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Target size={18} />
              <span>Problem</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.problem}</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <div className="flex items-center gap-3 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Zap size={18} />
              <span>Solution</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.solution}</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <div className="flex items-center gap-3 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Globe size={18} />
              <span>Impact</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.impact}</p>
          </motion.div>
        </div>
      </div>

      {/* DETAILED CONTENT */}
      <div className="max-w-4xl mx-auto px-6 mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert prose-blue max-w-none"
        >
          {caseStudy.summary && (
            <p className="text-2xl text-white font-medium leading-relaxed mb-12 border-l-4 border-blue-500 pl-8">
              {caseStudy.summary}
            </p>
          )}

          <div className="text-gray-300 text-lg leading-relaxed space-y-8 whitespace-pre-wrap">
            {caseStudy.problem && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
                <p>{caseStudy.problem}</p>
              </section>
            )}
            {caseStudy.solution && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Our Approach & Solution</h2>
                <p>{caseStudy.solution}</p>
              </section>
            )}
            {caseStudy.impact && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Results & Impact</h2>
                <p>{caseStudy.impact}</p>
              </section>
            )}
          </div>
        </motion.div>

        {/* SHARE & NEXT */}
        <div className="mt-20 pt-10 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-white/40 uppercase tracking-widest">Share success</span>
            <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition text-blue-400">
              <Share2 size={20} />
            </button>
          </div>
          <Link 
            to="/case-studies" 
            className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition"
          >
            View More Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
