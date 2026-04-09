import React, { useEffect, useState } from "react";
import apiService from "../../api";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Zap, Shield, Cpu, Code2, Globe, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function OnDemandDevelopers() {
  const [developers, setDevelopers] = useState([]);
  const [steps, setSteps] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiService.getOnDemandDevelopers();
        setDevelopers(res.data.developers);
        setSteps(res.data.steps);
        setBenefits(res.data.benefits);
      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-400 font-bold tracking-widest uppercase text-xs">Loading Talent Hub...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl -mr-64 -mt-64"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm font-bold mb-8"
          >
            <Zap size={16} fill="currentColor" />
            <span>ELITE DEVELOPER NETWORK</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tight"
          >
            Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">On-Demand</span> Experts
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-slate-400 leading-relaxed mb-12"
          >
            Scale your engineering team instantly with pre-vetted, high-performance developers specialized in modern tech stacks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact-us" className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl shadow-purple-900/40 transition-all active:scale-95">
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* EXPERTISE GRID */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Developer Expertise</h2>
          <div className="w-24 h-1.5 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-purple-100 transition-all duration-500 group"
            >
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">
                {dev.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
                {dev.name}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {dev.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HIRING STEPS */}
      <section className="bg-slate-900 py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Simple Hiring Process</h2>
            <p className="text-slate-400">From requirement to onboarding in 4 easy steps.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 -translate-y-1/2"></div>
            
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md text-center group hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white text-3xl font-black mx-auto mb-6 shadow-lg shadow-purple-900/40 group-hover:rotate-12 transition-transform">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                Why Hire From <span className="text-purple-600">Siteforce?</span>
              </h2>
              <p className="text-slate-500 text-lg mb-12">
                We don't just provide developers; we provide the backbone for your digital success. Our rigorous selection process ensures you get only the top 3% of talent.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-100"
                  >
                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                      <Shield size={16} />
                    </div>
                    <span className="font-bold text-slate-700 text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white p-12 rounded-3xl shadow-2xl border border-slate-100">
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center shrink-0">
                      <Cpu size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Modern Tech Stacks</h4>
                      <p className="text-slate-500 text-sm">Experts in React, Node, Python, AI/ML, and Cloud Infrastructure.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                      <Globe size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Global Standards</h4>
                      <p className="text-slate-500 text-sm">Adhering to international coding standards and security protocols.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                      <Rocket size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Rapid Deployment</h4>
                      <p className="text-slate-500 text-sm">Scale your team in as little as 48 hours with our ready talent pool.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-purple-600 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">Ready to Build Something Amazing?</h2>
          <p className="text-purple-100 text-lg mb-12">Contact our talent advisors today and get a free consultation for your project.</p>
          <Link to="/contact-us" className="inline-flex items-center gap-3 bg-white text-purple-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all shadow-2xl group">
            Hire Your Team <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default OnDemandDevelopers;