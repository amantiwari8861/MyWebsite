import React, { useEffect } from "react";
import ServiceNavbar from "../components/ServiceNavbar";
import { Link } from "react-router-dom";
import {
  Code,
  Terminal,
  Layers,
  ShieldCheck,
  Database,
  Rocket,
  Cpu,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Software_Development = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    { icon: <Terminal size={28} />, title: "Custom Software", desc: "Business solutions" },
    { icon: <Layers size={28} />, title: "Enterprise Apps", desc: "Scalable systems" },
    { icon: <Code size={28} />, title: "Full Stack", desc: "Frontend + Backend" },
    { icon: <Database size={28} />, title: "Database", desc: "Optimized DB" },
    { icon: <ShieldCheck size={28} />, title: "Testing", desc: "Bug-free apps" },
    { icon: <Rocket size={28} />, title: "Support", desc: "24/7 support" },
  ];

  const features = [
    "Expert Developers",
    "Agile Process",
    "Secure Systems",
    "Modern Tech",
    "High Performance",
    "24/7 Support",
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white pt-16">

      {/* HERO */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
              <Cpu size={16} />
              Software Development
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-4">
              Build <span className="text-blue-600">Smart Software</span>
            </h1>

            <p className="text-slate-600 mb-6">
              We create scalable, secure, and high-performance applications.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                to="/contact-us"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition"
              >
                Get Started <ArrowRight size={18} />
              </Link>

              <Link
                to="/case-studies"
                className="border px-6 py-3 rounded-xl font-semibold hover:bg-slate-100"
              >
                View Work
              </Link>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
                alt="software"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceNavbar />

      {/* SERVICES */}
      <section className="px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Our <span className="text-blue-600">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
            >
              <div className="text-blue-600 mb-3">{item.icon}</div>
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>

            <div className="space-y-3">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="text-blue-600" size={18} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["500+", "99%", "50+", "24/7"].map((s, i) => (
              <div key={i} className="bg-white p-5 rounded-xl text-center shadow">
                <h3 className="text-xl font-bold text-blue-600">{s}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Project 🚀</h2>

        <Link
          to="/contact-us"
          className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold inline-flex items-center gap-2"
        >
          Contact Now <ArrowRight size={18} />
        </Link>
      </section>

    </div>
  );
};

export default Software_Development;