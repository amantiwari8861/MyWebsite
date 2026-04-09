import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CorporateCompany = () => {
  const logos = [
    { name: "iBilt", src: "https://admin.ducatindia.com/clients/1717060440576Ibilt.png" },
    { name: "Accenture", src: "https://admin.ducatindia.com/clients/1717060458759Accenture.png" },
    { name: "Aditya Birla", src: "https://admin.ducatindia.com/clients/1717060406072Aditya%20Birla%20Group.png" },
    { name: "Algoscale", src: "https://admin.ducatindia.com/clients/1717060469084Algoscale.png" },
    { name: "Bajaj", src: "https://admin.ducatindia.com/clients/1717060480490Bajaj.png" },
    { name: "Birlasoft", src: "https://admin.ducatindia.com/clients/1717060491701Birlasoft.png" },
    { name: "CSC", src: "https://admin.ducatindia.com/clients/1717060501852CSC.png" },
    { name: "Cognizant", src: "https://admin.ducatindia.com/clients/1717060518401Cognizant%20Logo.png" },
    { name: "IBM", src: "https://admin.ducatindia.com/clients/1717060536963IBM.png" },
    { name: "Sopra Steria", src: "https://admin.ducatindia.com/clients/1717060621133Steria.png" },
    { name: "TCS", src: "https://admin.ducatindia.com/clients/1717060662910TATA%20Consultancy%20Services.png" },
    { name: "Infosys", src: "https://admin.ducatindia.com/clients/1717060642611Infosys.png" },
  ];

  return (
    <section className="bg-white dark:bg-gray-950 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left Side - Text */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-blue-600 font-bold mb-4"
            >
              <Sparkles className="w-5 h-5" />
              <span className="uppercase tracking-widest text-sm">Enterprise Solutions</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Ducat for <span className="text-blue-600">Corporates</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6"
            >
              Corporate Training Solutions that Accelerate Business Growth!
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 text-lg"
            >
              We believe in interactive learning that is 7 times more effective than passive learning. Today, every company requires digital transformation and they are looking for effective ways to minimize the skills gap. We help corporates with best training programs to align cutting-edge technologies and employees together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-black px-8 py-4 rounded-2xl shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center group">
                <span>ASK A DEMO</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-100 dark:border-gray-800 hover:border-blue-600 font-black px-8 py-4 rounded-2xl transition-all">
                EXPLORE MORE
              </button>
            </motion.div>
          </div>

          {/* Right Side - Logos Grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                  className="flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 group"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateCompany;
