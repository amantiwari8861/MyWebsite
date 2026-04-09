import React, { useEffect, useState } from "react";
import apiService from "../api";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaLaptopCode, FaUsers, FaRegClock, FaCertificate, FaHandsHelping } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// 🔥 ICON MAP
const iconMap = {
  FaLaptopCode: <FaLaptopCode className="text-5xl text-pink-400" />,
  FaChalkboardTeacher: <FaChalkboardTeacher className="text-5xl text-pink-400" />,
  FaUsers: <FaUsers className="text-5xl text-pink-400" />,
  FaHandsHelping: <FaHandsHelping className="text-5xl text-pink-400" />,
  FaCertificate: <FaCertificate className="text-5xl text-pink-400" />,
  FaRegClock: <FaRegClock className="text-5xl text-pink-400" />,
};

const Workshops = () => {
  const [data, setData] = useState({
    hero: null,
    modules: [],
    why_choose: [],
    stats: [],
    cta: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchPageData();
  }, []);

  const fetchPageData = async () => {
    try {
      const res = await apiService.getTrainingPageData('workshops');
      setData(res.data);
    } catch (error) {
      console.error("Error fetching workshops data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
    </div>
  );

  const { hero, modules, why_choose, stats, cta } = data;

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* HERO */}
      {hero && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-pink-900 opacity-80"></div>
          <div className="relative z-10 min-h-[60vh] flex flex-col justify-center items-center text-center px-4">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              {hero.title}
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 text-lg md:text-xl max-w-3xl"
            >
              {hero.description}
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <a
                href={hero.button_link || "/contact-us"}
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                {hero.button_text}
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* MODULES / WORKSHOPS */}
      <section className="py-20 px-4" data-aos="fade-up">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Popular Workshop Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {modules.map((item, index) => (
              <div
                key={item.id || index}
                className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300 flex flex-col items-center text-center"
                data-aos="fade-up"
                data-aos-delay={100 * index}
              >
                {iconMap[item.icon] || <FaLaptopCode className="text-5xl text-pink-400" />}
                <h3 className="text-2xl font-bold mt-6 mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-800 py-20 px-4" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose Our Workshops?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {why_choose.map((item, index) => (
              <div
                key={item.id || index}
                className="p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={100 * index}
              >
                <h3 className="text-2xl font-bold text-pink-400 mb-3">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {cta && (
        <section className="py-20 px-4 text-center" data-aos="fade-up">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {cta.title}
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              {cta.description}
            </p>
            <a
              href={cta.button_link || "/contact-us"}
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              {cta.button_text}
            </a>
          </div>
        </section>
      )}
    </div>
  );
};

export default Workshops;
