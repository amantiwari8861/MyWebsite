import React from "react";
import { Users, Briefcase, FileText, ShieldCheck } from "lucide-react";

function HRoutsourcing() {
  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-28">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              HR Outsourcing Solutions
            </h1>

            <p className="text-lg mb-8">
              Simplify workforce management with our professional HR outsourcing
              services. From recruitment to payroll and compliance, we help
              organizations streamline their HR operations efficiently.
            </p>

            <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Get HR Solutions
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="HR Team"
            className="rounded-xl shadow-xl"
          />

        </div>

      </section>


      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-16">
          Our HR Outsourcing Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <Users className="text-purple-700 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-3">
              Recruitment & Hiring
            </h3>
            <p className="text-gray-600">
              Identify and recruit the right talent for your organization
              with our strategic hiring solutions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <FileText className="text-purple-700 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-3">
              Payroll Management
            </h3>
            <p className="text-gray-600">
              Manage payroll processing, employee benefits, and statutory
              compliance accurately.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <Briefcase className="text-purple-700 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-3">
              Workforce Management
            </h3>
            <p className="text-gray-600">
              Improve workforce productivity with effective HR policies
              and performance management systems.
            </p>
          </div>

        </div>

      </section>


      {/* PROCESS */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            Our HR Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-purple-700">1</h3>
              <p className="mt-2">Requirement Analysis</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-purple-700">2</h3>
              <p className="mt-2">Talent Sourcing</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-purple-700">3</h3>
              <p className="mt-2">Candidate Screening</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-purple-700">4</h3>
              <p className="mt-2">Hiring & Onboarding</p>
            </div>

          </div>

        </div>

      </section>


      {/* STATS */}
      <section className="bg-purple-700 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 text-center gap-10">

          <div>
            <h2 className="text-4xl font-bold">500+</h2>
            <p>Companies Served</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">10K+</h2>
            <p>Employees Managed</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">15+</h2>
            <p>Years Experience</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">24/7</h2>
            <p>HR Support</p>
          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            Why Choose Siteforce
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
              <ShieldCheck className="text-purple-700" size={28}/>
              Experienced HR professionals
            </div>

            <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
              <ShieldCheck className="text-purple-700" size={28}/>
              Cost-effective HR management
            </div>

            <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
              <ShieldCheck className="text-purple-700" size={28}/>
              Scalable workforce solutions
            </div>

            <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
              <ShieldCheck className="text-purple-700" size={28}/>
              Compliance & legal expertise
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white text-center py-20">

        <h2 className="text-3xl font-bold mb-4">
          Transform Your HR Operations
        </h2>

        <p className="mb-6">
          Partner with Siteforce Consulting for efficient HR outsourcing solutions.
        </p>

        <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>

      </section>

    </div>
  );
}

export default HRoutsourcing;