import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Code, ShieldCheck, Layers, CheckCircle, ArrowRight, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const CustomSoftware = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    "Tailored architecture for your business needs",
    "Full-stack development with modern tools",
    "Secure, scalable, and maintainable software",
    "Dedicated delivery and support team",
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
              <Code size={16} />
              Custom Software Development
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
              Build custom software that fits <span className="text-blue-600">your business</span>
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed mb-8 max-w-2xl">
              From discovery to deployment, we design and deliver custom software systems that solve real problems and create measurable value.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact-us"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group no-underline"
              >
                Request a Demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all no-underline"
              >
                Back to Services
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&h=500&fit=crop"
                className="rounded-2xl w-full h-auto object-cover shadow-lg"
                alt="Custom Software"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <span className="font-bold text-slate-900">4.9/5</span>
                  <span className="text-slate-600 text-sm">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-slate-900 mb-6" data-aos="fade-up">
            What makes our custom software different?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-4 text-blue-600">
                  <CheckCircle size={20} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item}</h3>
                <p className="text-slate-600">We tailor every feature to your workflow, risks, and growth plan.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to start your custom software journey?</h2>
          <p className="text-slate-300 text-xl mb-10">
            Our team helps you build enterprise-grade systems, automation tools, and customer-facing platforms with speed and reliability.
          </p>
          <Link
            to="/contact-us"
            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all no-underline"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftware;
