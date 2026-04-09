import React from "react";
import { Briefcase, Users, Laptop, Megaphone, GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function OurServices() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const services = [
    {
      icon: <Briefcase size={40} className="text-indigo-600" />,
      title: "Manpower Supply & Staffing Solutions",
      description: "Comprehensive staffing solutions tailored to your business needs. We provide qualified professionals across industries with fast deployment and quality assurance.",
      gradient: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
      features: ["Quick Deployment", "Quality Vetted Candidates", "Flexible Staffing"]
    },
    {
      icon: <Users size={40} className="text-indigo-600" />,
      title: "HR Outsourcing Services",
      description: "End-to-end HR outsourcing that lets you focus on core business. We handle recruitment, payroll, compliance, and employee management efficiently.",
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      features: ["Payroll Management", "Compliance Handling", "Employee Relations"]
    },
    {
      icon: <Laptop size={40} className="text-indigo-600" />,
      title: "IT Services & Consultancy",
      description: "Cutting-edge IT solutions and expert consultancy for digital transformation. From software development to infrastructure management, we deliver excellence.",
      gradient: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      features: ["Software Development", "IT Consulting", "Digital Transformation"]
    },
    {
      icon: <Megaphone size={40} className="text-indigo-600" />,
      title: "Digital Marketing & Online Services",
      description: "Data-driven digital marketing strategies that drive results. SEO, social media, PPC, and content marketing to grow your online presence and conversions.",
      gradient: "from-rose-500 to-red-600",
      bgColor: "bg-rose-50",
      features: ["SEO & SEM", "Social Media Marketing", "Performance Advertising"]
    },
    {
      icon: <GraduationCap size={40} className="text-indigo-600" />,
      title: "Training & Skill Development Programs",
      description: "Professional training programs that enhance skills and drive career growth. IT training, corporate training, and certification programs with expert mentors.",
      gradient: "from-orange-500 to-amber-600",
      bgColor: "bg-orange-50",
      features: ["IT Training", "Corporate Training", "Certification Programs"]
    }
  ];

  return (
    <section className="bg-gray-50 py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-40 left-20 w-40 h-40 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-52 h-52 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles size={16} />
            <span>What We Offer</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Our Core Services
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive business solutions designed to accelerate your growth. From staffing to digital transformation, we deliver excellence across all services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-indigo-200 relative overflow-hidden"
            >
              {/* Icon */}
              <div className={`${service.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Learn More Link */}
              <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-2" />
              </div>

              {/* Decorative Element */}
              <div className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-r ${service.gradient} opacity-5 rounded-full group-hover:scale-150 transition-transform`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Need Custom Solutions?</h3>
              <p className="text-indigo-100 text-lg mb-8">We offer tailored services to meet your specific business requirements</p>
              <button className="group bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all duration-300 shadow-lg flex items-center space-x-2 mx-auto border-none cursor-pointer">
                <span>Get a Custom Quote</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OurServices;
