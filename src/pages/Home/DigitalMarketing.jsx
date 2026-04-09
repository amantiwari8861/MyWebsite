import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  BarChart3,
  Share2,
  Target,
  TrendingUp,
  ArrowRight
} from "lucide-react";

const DigitalMarketing = () => {
  const services = [
    {
      icon: <Search size={26} />,
      title: "SEO Optimization",
      desc: "Boost search engine visibility and drive organic traffic."
    },
    {
      icon: <BarChart3 size={26} />,
      title: "Performance Marketing",
      desc: "Data-driven campaigns designed to maximize ROI."
    },
    {
      icon: <Share2 size={26} />,
      title: "Social Media Marketing",
      desc: "Engage audiences and grow brand presence online."
    },
    {
      icon: <Target size={26} />,
      title: "Digital Advertising",
      desc: "Target the right audience with strategic ad campaigns."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            Accelerate Your Growth with
            <span className="text-blue-600"> Digital Marketing</span>
          </h2>

          <p className="text-gray-600 mt-6">
            Our digital marketing experts help businesses grow faster
            using innovative strategies, SEO optimization, targeted
            advertising, and performance-driven campaigns.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-8">

            <div>
              <h3 className="text-3xl font-bold text-blue-600">500+</h3>
              <p className="text-sm text-gray-600">Campaigns</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">300+</h3>
              <p className="text-sm text-gray-600">Clients</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">120%</h3>
              <p className="text-sm text-gray-600">ROI Growth</p>
            </div>

          </div>

          {/* CTA */}
          <Link to="/contact-us" className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
            Start Marketing
            <ArrowRight size={18}/>
          </Link>
        </div>


        {/* Right Service Cards */}
        <div className="grid sm:grid-cols-2 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-5">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default DigitalMarketing;