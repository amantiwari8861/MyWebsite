import React from "react";

function DotNetDeveloper() {

  const skills = [
    ".NET Core",
    "ASP.NET MVC",
    "C# Development",
    "REST API Development",
    "Azure Cloud Integration",
    "Microservices Architecture"
  ];

  const services = [
    "Enterprise Application Development",
    "Custom .NET Web Applications",
    "API Development & Integration",
    "Cloud-Based Solutions",
    "Legacy System Modernization",
    "Maintenance & Support"
  ];

  return (

    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}

      <section className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-32 text-center">

        <h1 className="text-5xl font-bold mb-6">
          Hire .NET Developers
        </h1>

        <p className="max-w-3xl mx-auto text-lg">
          Build scalable enterprise applications with experienced
          .NET developers from Siteforce Consultants. Our experts
          deliver secure, high-performance software solutions.
        </p>

      </section>


      {/* SERVICES */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold text-center mb-16">
          Our .NET Development Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service,index)=>(
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

            {skills.map((skill,index)=>(
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


      {/* HIRING PROCESS */}

      <section className="bg-gray-100 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            Simple Hiring Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div>
              <h3 className="text-2xl font-bold text-indigo-700">1</h3>
              <p>Share Requirements</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-indigo-700">2</h3>
              <p>Select Developers</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-indigo-700">3</h3>
              <p>Start Development</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-indigo-700">4</h3>
              <p>Scale Your Team</p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-indigo-700 text-white text-center py-20">

        <h2 className="text-4xl font-bold mb-6">
          Need Experienced .NET Developers?
        </h2>

        <p className="mb-8">
          Partner with Siteforce Consultants to build powerful
          enterprise software solutions.
        </p>

        <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold">
          Hire .NET Developers
        </button>

      </section>

    </div>

  );
}

export default DotNetDeveloper;