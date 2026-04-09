import React, { useEffect, useState } from "react";
import ServiceNavbar from '../components/ServiceNavbar';
import apiService from "../api";
import {
  Share2,
  Users,
  Camera,
  PenTool,
  BarChart,
  Rocket,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// 🔥 ICON MAP
const iconMap = {
  Share2: <Share2 />,
  Users: <Users />,
  Camera: <Camera />,
  PenTool: <PenTool />,
  BarChart: <BarChart />,
  Rocket: <Rocket />,
};

const Social_Media_Management = () => {
  const [data, setData] = useState({
    hero: null,
    services: [],
    why_choose: [],
    stats: [],
    cta: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    fetchPageData();
  }, []);

  const fetchPageData = async () => {
    try {
      const res = await apiService.getSoftwarePageData('social_media');
      setData(res.data);
    } catch (error) {
      console.error("Error fetching social media page data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-[#05070F] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
    </div>
  );

  const { hero, services, why_choose, stats, cta } = data;

  return (
    <div className="bg-[#05070F] text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-pink-500/20 blur-[160px] top-[-150px] left-[-150px]" />
        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[160px] bottom-[-150px] right-[-150px]" />
      </div>

      {/* HERO */}
      {hero && (
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

            {/* TEXT */}
            <div data-aos="fade-up">
              <span className="text-pink-400 uppercase tracking-widest text-sm">
                {hero.subtitle}
              </span>

              <h1 className="text-6xl font-black leading-tight mt-4 mb-6">
                {hero.title}
              </h1>

              <p className="text-gray-400 text-lg mb-10 max-w-xl">
                {hero.description}
              </p>

              <div className="flex gap-4">
                <a 
                  href={hero.button_link || "#"}
                  className="group relative px-8 py-4 rounded-xl overflow-hidden inline-block"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"></span>
                  <span className="relative flex items-center gap-2 font-semibold">
                    {hero.button_text}
                    <ArrowRight className="group-hover:translate-x-1 transition" />
                  </span>
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative" data-aos="fade-up">
              <img
                src={hero.image.startsWith('http') ? hero.image : `http://127.0.0.1:8000${hero.image}`}
                className="rounded-2xl shadow-[0_30px_100px_rgba(236,72,153,0.3)] w-full h-auto object-cover"
                alt="Social Media"
              />

              {/* FLOAT CARD */}
              <div className="absolute -bottom-8 -left-8 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                <p className="text-sm text-gray-400">Engagement</p>
                <h3 className="text-xl font-bold text-pink-400">+200%</h3>
              </div>
            </div>
          </div>
        </section>
      )}


      <ServiceNavbar />

      {/* SERVICES */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-20">
          Social Media Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((item, i) => (
            <div
              key={item.id || i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="relative group p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:-translate-y-3 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

              <div className="relative z-10">
                <div className="text-pink-400 mb-4 group-hover:scale-110 transition">
                  {iconMap[item.icon] || <Share2 />}
                </div>

                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">

          <div data-aos="fade-up">
            <h2 className="text-5xl font-black mb-10">
              Why Choose Us
            </h2>

            <div className="space-y-6">
              {why_choose.map((item, i) => (
                <div key={item.id || i} className="flex gap-3 items-center">
                  <CheckCircle className="text-pink-400" />
                  <span className="text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.id || i}
                className="p-10 rounded-2xl border border-white/10 bg-white/[0.03] text-center hover:scale-105 transition"
              >
                <div className="text-3xl font-black text-pink-400">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {cta && (
        <section className="py-32 text-center">
          <h2 className="text-5xl font-black mb-6">
            {cta.title}
          </h2>

          <p className="text-gray-400 mb-10">
            {cta.description}
          </p>

          <a 
            href={cta.button_link || "#"}
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 font-semibold hover:scale-105 transition shadow-lg inline-block"
          >
            {cta.button_text}
          </a>
        </section>
      )}
    </div>
  );
};

export default Social_Media_Management;
