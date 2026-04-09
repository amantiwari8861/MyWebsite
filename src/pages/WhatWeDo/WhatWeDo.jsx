import React from "react";
import { Users, Code, Megaphone, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WhatWeDo = () => {

  const services = [
    {
      icon: <Users size={34} />,
      title: "Staffing Solutions",
      desc: "Flexible workforce solutions including recruitment, contract staffing, and HR outsourcing.",
      link: "/staffing-solutions"
    },
    {
      icon: <Code size={34} />,
      title: "IT Services",
      desc: "Modern web development, enterprise software solutions, and scalable technology platforms.",
      link: "/it-services"
    },
    {
      icon: <Megaphone size={34} />,
      title: "Digital Marketing",
      desc: "SEO, social media marketing, online branding, and performance-driven campaigns.",
      link: "/digital-marketing"
    },
    {
      icon: <GraduationCap size={34} />,
      title: "Training & Skill Development",
      desc: "Corporate training programs and technical skill development courses.",
      link: "/training-skill-development"
    }
  ];

  return (
    <section className="bg-gray-50">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24 text-center">

        <h1 className="text-4xl font-bold">
          What We Do
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-lg">
          We provide innovative technology, staffing, and digital solutions
          that help businesses grow faster in the digital world.
        </p>

      </div>


      {/* SERVICES GRID */}
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">

          <h2 className="text-3xl font-bold text-gray-800">
            Our Core Services
          </h2>

          <p className="text-gray-600 mt-4">
            Delivering professional services across multiple industries.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-3 transition duration-300"
            >

              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {service.desc}
              </p>

              <Link
                to={service.link}
                className="flex items-center mt-4 text-blue-600 font-medium"
              >
                Learn More
                <ArrowRight size={18} className="ml-2"/>
              </Link>

            </div>
          ))}

        </div>

      </div>


      {/* WHY CHOOSE US */}
      <div className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Why Choose Our Services?
            </h2>

            <p className="text-gray-600 mt-4">
              Our experienced professionals deliver high-quality solutions
              tailored to your business needs.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">

              <li>✔ Experienced Industry Experts</li>
              <li>✔ Innovative Technology Solutions</li>
              <li>✔ Customer-Centric Approach</li>
              <li>✔ Reliable Workforce Solutions</li>

            </ul>

          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
              alt="services"
              className="rounded-xl shadow-lg"
            />
          </div>

        </div>

      </div>


      {/* CTA SECTION */}
      <div className="bg-blue-600 text-white py-20 text-center">

        <h2 className="text-3xl font-bold">
          Ready to Transform Your Business?
        </h2>

        <p className="mt-4">
          Let’s build innovative solutions together.
        </p>

        <Link
          to="/contact-us"
          className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>

      </div>

    </section>
  );
};

export default WhatWeDo;