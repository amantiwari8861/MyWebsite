import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

function CallToAction() {
  const services = [
    { name: "HR Outsourcing", link: "/services/hr-outsourcing" },
    { name: "IT Consulting", link: "/services/it-consulting" },
    { name: "Digital Marketing", link: "/services/digital-marketing" },
    { name: "Training Programs", link: "/services/training-programs" },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/30 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 blur-3xl rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          Build Your Workforce &{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technology Solutions
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-gray-300 mb-12"
        >
          Siteforce helps organizations scale with HR outsourcing, IT consulting,
          digital marketing, and professional training — all in one powerful ecosystem.
        </motion.p>

        {/* Clickable Service Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }}>
              <Link
                to={item.link}
                className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-sm hover:bg-white/20 transition cursor-pointer no-underline text-white inline-block"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/what-we-do"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg hover:shadow-indigo-500/40 transition no-underline text-white"
            >
              Explore Services
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-white/30 backdrop-blur-lg hover:bg-white hover:text-indigo-700 transition font-semibold no-underline text-white"
            >
              Contact Team
              <PhoneCall size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
