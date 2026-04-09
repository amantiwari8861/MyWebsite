import React from "react";

function CSharpDeveloper() {

  const services = [
    "Custom C# Application Development",
    "Enterprise Software Solutions",
    "ASP.NET Web Applications",
    "API Development & Integration",
    "Cloud Applications using Azure",
    "Application Maintenance & Support"
  ];

  const skills = [
    "C# Programming",
    "ASP.NET Core",
    "MVC Architecture",
    "REST API Development",
    "Azure Cloud Services",
    "Microservices Architecture"
  ];

  const benefits = [
    "Experienced C# Developers",
    "Enterprise Level Architecture",
    "Secure & Scalable Applications",
    "Flexible Hiring Models",
    "Agile Development Process",
    "Fast Project Delivery"
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}

      <section className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-32 text-center">

        <h1 className="text-5xl font-bold mb-6">
          Hire C# Developers
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-200">
          Build powerful enterprise applications with experienced
          C# developers from Siteforce Consultants. Our developers
          deliver secure, scalable and high-performance solutions.
        </p>

      </section>


      {/* SERVICES */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold text-center mb-16">
          C# Development Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
            >
              <p className="font-semibold text-indigo-700">
                {service}
              </p>
            </div>
          ))}

        </div>

      </section>


      {/* SKILLS */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            Technical Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg text-center font-semibold"
              >
                {skill}
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* WHY HIRE */}

      <section className="bg-gray-100 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            Why Hire C# Developers From Siteforce
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow"
              >
                <p className="font-semibold text-indigo-700">
                  ✓ {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-indigo-700 text-white text-center py-20">

        <h2 className="text-4xl font-bold mb-6">
          Start Your C# Project Today
        </h2>

        <p className="mb-8 text-lg">
          Hire experienced C# developers and build enterprise software solutions.
        </p>

        <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Hire C# Developers
        </button>

      </section>

    </div>
  );
}

export default CSharpDeveloper;