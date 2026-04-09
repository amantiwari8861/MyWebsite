import React, { useEffect, useState } from "react";
import {
  Briefcase,
  Banknote,
  Hospital,
  ShoppingCart,
  Cpu,
  GraduationCap,
  Globe,
  Zap,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import apiService from "../../api";
import { motion } from "framer-motion";

const Industries = () => {
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState({});

  const itemsPerView = 2;

  const iconMap = {
    Briefcase: <Briefcase size={32} />,
    Banknote: <Banknote size={32} />,
    Hospital: <Hospital size={32} />,
    ShoppingCart: <ShoppingCart size={32} />,
    Cpu: <Cpu size={32} />,
    GraduationCap: <GraduationCap size={32} />,
    Globe: <Globe size={32} />,
    Zap: <Zap size={32} />,
  };

  // FETCH DATA
  const fetchIndustries = async () => {
    setLoading(true);
    try {
      const response = await apiService.getIndustries();
      setIndustries(response.data.results || response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIndustries();
  }, []);

  // NEXT
  const nextSlide = () => {
    if (currentIndex + itemsPerView < industries.length) {
      setCurrentIndex(currentIndex + itemsPerView);
    }
  };

  // PREV
  const prevSlide = () => {
    if (currentIndex - itemsPerView >= 0) {
      setCurrentIndex(currentIndex - itemsPerView);
    }
  };

  // TOGGLE READ MORE
  const toggleReadMore = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const visibleItems = industries.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  if (loading) {
    return (
      <div className="py-20 flex justify-center bg-gray-950">
        <div className="h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Industries We{" "}
            <span className="text-blue-400">Service</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Delivering smart solutions across diverse sectors
          </p>
        </div>

        {/* SLIDER */}
        <div className="flex items-center gap-4">

          {/* PREV */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="p-3 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition disabled:opacity-30"
          >
            <ChevronLeft />
          </button>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 gap-6 w-full">
            {visibleItems.map((industry, index) => {
              const isExpanded = expanded[industry.id];

              return (
                <motion.div
                  key={industry.id || index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl border border-white/10 
                  bg-white/5 backdrop-blur-xl shadow-lg 
                  hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <div className="mb-4 text-blue-400">
                    {iconMap[industry.icon] || <Briefcase />}
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-white">
                    {industry.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed tracking-wide">
                    {isExpanded
                      ? `We deliver innovative and scalable solutions tailored for the ${industry.title} sector, helping organizations enhance operational efficiency, drive digital transformation, and achieve sustainable growth through cutting-edge technology and strategic expertise.`
                      : `We provide smart, scalable solutions for the ${industry.title} sector, enabling growth, efficiency, and digital transformation...`}
                  </p>

                  {/* Read More */}
                  <button
                    onClick={() => toggleReadMore(industry.id)}
                    className="mt-3 text-blue-400 text-sm font-semibold hover:underline"
                  >
                    {isExpanded ? "Read Less ↑" : "Read More ↓"}
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* NEXT */}
          <button
            onClick={nextSlide}
            disabled={currentIndex + itemsPerView >= industries.length}
            className="p-3 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition disabled:opacity-30"
          >
            <ChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
};

export default Industries;
