import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Code,
  Megaphone,
  GraduationCap,
  ArrowRight,
  Briefcase,
  Layers,
  Globe,
  Settings
} from "lucide-react";
import apiService from "../../api";
import { motion } from "framer-motion";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // icon mapping
  const iconMap = {
    Users: <Users size={32} />,
    Code: <Code size={32} />,
    Megaphone: <Megaphone size={32} />,
    GraduationCap: <GraduationCap size={32} />,
    Briefcase: <Briefcase size={32} />,
    Layers: <Layers size={32} />,
    Globe: <Globe size={32} />,
    Settings: <Settings size={32} />,
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await apiService.getServices();
        // Handle paginated response or direct array
        const data = response.data.results || response.data;
        setServices(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching services:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (isLoading) {
    return (
      <div className="py-24 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-50 rounded-full -mr-48 -mt-48 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full -ml-48 -mb-48 blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-600 font-bold uppercase tracking-widest text-sm"
          >
            What We Offer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-black text-slate-900 mt-4 tracking-tight"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Solutions</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Delivering innovative business solutions with technology, workforce
            expertise, and digital transformation.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-purple-200 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-50 rounded-full group-hover:bg-purple-600 transition-colors duration-500 opacity-20 group-hover:opacity-10"></div>
              
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-600 mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-inner group-hover:rotate-12 relative z-10 group-hover:scale-110">
                {iconMap[service.icon] || <Layers size={32} />}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight relative z-10 group-hover:text-purple-700 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow relative z-10">
                {service.description}
              </p>

              <Link
                to={service.link || "/contact-us"}
                className="inline-flex items-center text-purple-600 font-bold group/link relative z-10 mt-auto bg-slate-50 w-fit px-4 py-2 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-all duration-300"
              >
                Learn More
                <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
