import React from "react";
import { Users, Briefcase, UserCheck, Building } from "lucide-react";

function StaffingSolutions() {
  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-28">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl font-bold mb-6">
              Staffing Solutions
            </h1>

            <p className="text-lg mb-8">
              We provide reliable staffing solutions that help organizations
              hire the right talent quickly and efficiently. Our staffing
              services support businesses with skilled professionals across
              multiple industries.
            </p>

            <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Hire Talent
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Staffing"
            className="rounded-xl shadow-xl"
          />

        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-16">
          Our Staffing Services
        </h2>

        <div className="grid md:grid-cols-4 gap-10">

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <Users size={40} className="text-indigo-700 mb-4"/>
            <h3 className="text-xl font-semibold mb-3">
              Permanent Staffing
            </h3>
            <p className="text-gray-600">
              Hire full-time employees who match your company’s culture
              and long-term business goals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <Briefcase size={40} className="text-indigo-700 mb-4"/>
            <h3 className="text-xl font-semibold mb-3">
              Contract Staffing
            </h3>
            <p className="text-gray-600">
              Flexible staffing solutions for project-based or temporary
              workforce requirements.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <UserCheck size={40} className="text-indigo-700 mb-4"/>
            <h3 className="text-xl font-semibold mb-3">
              Recruitment Services
            </h3>
            <p className="text-gray-600">
              End-to-end recruitment process from candidate sourcing
              to final onboarding.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
            <Building size={40} className="text-indigo-700 mb-4"/>
            <h3 className="text-xl font-semibold mb-3">
              Workforce Management
            </h3>
            <p className="text-gray-600">
              Manage employee operations including payroll,
              attendance and HR compliance.
            </p>
          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            Our Recruitment Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div>
              <h3 className="text-xl font-bold text-indigo-700">1</h3>
              <p>Understanding Requirements</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-indigo-700">2</h3>
              <p>Candidate Sourcing</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-indigo-700">3</h3>
              <p>Screening & Interview</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-indigo-700">4</h3>
              <p>Hiring & Onboarding</p>
            </div>

          </div>

        </div>

      </section>

      {/* INDUSTRIES */}
      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div className="bg-white p-6 rounded-lg shadow">
              IT & Technology
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              Healthcare
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              Manufacturing
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              Retail
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white text-center py-20">

        <h2 className="text-3xl font-bold mb-4">
          Looking for the Right Talent?
        </h2>

        <p className="mb-6">
          Partner with us to hire skilled professionals for your business.
        </p>

        <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Contact Our Team
        </button>

      </section>

    </div>
  );
}

export default StaffingSolutions;