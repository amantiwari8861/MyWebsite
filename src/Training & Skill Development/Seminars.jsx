import React, { useEffect, useState } from "react";
import apiService from "../api";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Seminars = () => {
  const [data, setData] = useState({
    hero: null,
    modules: [],
    why_choose: [],
    stats: [],
    cta: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    fetchPageData();
  }, []);

  const fetchPageData = async () => {
    try {
      const res = await apiService.getTrainingPageData('seminars');
      setData(res.data);
    } catch (error) {
      console.error("Error fetching seminars data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-[#06080F] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  );

  const { hero, modules, why_choose, stats, cta } = data;

  return (
    <div className="bg-[#06080F] text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[160px] top-[-150px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[160px] bottom-[-150px] right-[-150px]" />
      </div>

      {/* HERO */}
      {hero && (
        <section className="py-32 text-center max-w-4xl mx-auto px-6">
          <p className="text-indigo-400 uppercase tracking-widest text-sm mb-4">
            {hero.subtitle}
          </p>

          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            {hero.title}
          </h1>

          <p className="text-gray-400 text-lg">
            {hero.description}
          </p>
        </section>
      )}

      {/* CARDS / MODULES */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-3 gap-10">

          {modules.map((item, i) => (
            <div
              key={item.id || i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:-translate-y-2 transition-all"
            >

              {/* IMAGE */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image ? (item.image.startsWith('http') ? item.image : `http://127.0.0.1:8000${item.image}`) : "https://images.unsplash.com/photo-1557804506-669a67965ba0"}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                {/* TAG */}
                <span className="absolute top-4 left-4 bg-indigo-500/90 text-xs px-3 py-1 rounded-full font-semibold">
                  Seminar
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-xl font-bold mb-4 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6">
                  {item.description}
                </p>

                {/* BUTTON */}
                <a 
                  href="/contact-us"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold flex items-center justify-center gap-2 hover:scale-[1.03] transition"
                >
                  Register Now <ArrowRight size={16} />
                </a>

              </div>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl transition"></div>

            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      {cta && (
        <section className="py-28 text-center">
          <h2 className="text-4xl font-black mb-6">
            {cta.title}
          </h2>

          <p className="text-gray-400 mb-10">
            {cta.description}
          </p>

          <a 
            href={cta.button_link || "/contact-us"}
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold hover:scale-105 transition shadow-lg inline-block"
          >
            {cta.button_text}
          </a>
        </section>
      )}

    </div>
  );
};

export default Seminars;
