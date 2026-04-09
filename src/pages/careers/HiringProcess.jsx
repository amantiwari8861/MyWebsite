import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Users,
  Code,
  CheckCircle,
  Search,
  MessageSquare,
  ClipboardCheck,
  Rocket,
  Loader2
} from "lucide-react";
import apiService from "../../api";

function HiringProcess() {
  const [steps, setSteps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // icon mapping
  const iconMap = {
    FileText: <FileText size={24} />,
    Users: <Users size={24} />,
    Code: <Code size={24} />,
    CheckCircle: <CheckCircle size={24} />,
    Search: <Search size={24} />,
    MessageSquare: <MessageSquare size={24} />,
    ClipboardCheck: <ClipboardCheck size={24} />,
    Rocket: <Rocket size={24} />,
  };

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const response = await apiService.getHiringProcess();
        // Handle paginated response or direct array
        const data = response.data.results || response.data;
        setSteps(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching hiring process:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSteps();
  }, []);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full -ml-32 -mb-32 blur-3xl opacity-60"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-600 font-bold uppercase tracking-widest text-sm"
          >
            Join the team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-black text-slate-900 mt-4 mb-6 tracking-tight"
          >
            Our Hiring <span className="text-purple-600">Process</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            We've streamlined our recruitment to be fast, fair, and transparent. Here's what to expect on your journey to joining Siteforce.
          </motion.p>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="animate-spin text-purple-600" size={40} />
            <p className="text-slate-400 font-bold tracking-widest uppercase text-xs">Mapping your journey...</p>
          </div>
        ) : (
          <div className="relative">
            {/* Animated Progress Line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-6 md:left-1/2 top-0 w-1 bg-gradient-to-b from-purple-600 via-blue-500 to-transparent -translate-x-1/2 hidden md:block"
            ></motion.div>
            
            <div className="absolute left-6 top-0 h-full w-1 bg-slate-100 md:hidden"></div>

            <div className="space-y-24">
              {steps.length > 0 ? (
                steps.map((step, index) => (
                  <motion.div
                    key={step.id || index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content Side */}
                    <div className="w-full md:w-[45%]">
                      <div className={`p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all duration-500 group ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}>
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-inner ${
                          index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                        }`}>
                          {iconMap[step.icon] || <CheckCircle size={24} />}
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-slate-500 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Icon Side */}
                    <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-white border-4 border-purple-600 text-purple-600 rounded-full shadow-xl font-black text-xl md:mx-auto">
                      {index + 1}
                    </div>

                    {/* Empty Side for Spacing */}
                    <div className="hidden md:block md:w-[45%]"></div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                  <p className="text-slate-400 font-medium">Hiring process details are coming soon.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default HiringProcess;