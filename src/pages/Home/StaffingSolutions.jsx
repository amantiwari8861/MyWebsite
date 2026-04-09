import React from "react";
import { Link } from "react-router-dom";
import { Users, Briefcase, ClipboardList, UserCheck, ArrowRight } from "lucide-react";

const StaffingSolutions = () => {

  const solutions = [
    {
      icon: <Users size={30} />,
      title: "Contract Staffing",
      desc: "Hire skilled professionals for short-term projects and flexible workforce needs."
    },
    {
      icon: <Briefcase size={30} />,
      title: "Permanent Recruitment",
      desc: "Find the right talent for long-term success and organizational growth."
    },
    {
      icon: <ClipboardList size={30} />,
      title: "Payroll Management",
      desc: "Streamline payroll operations with compliance and accuracy."
    },
    {
      icon: <UserCheck size={30} />,
      title: "HR Outsourcing",
      desc: "Complete HR services including recruitment, management and consulting."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            Smart Staffing <br/> Solutions for Modern Businesses
          </h2>

          <p className="text-gray-600 mt-6">
            We provide reliable workforce solutions that help companies
            scale faster. Our staffing services connect businesses with
            the right talent while reducing hiring complexity.
          </p>

          {/* CTA */}
          
          <Link to="/contact-us" className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
            Hire Talent
            <ArrowRight size={18}/>
          </Link>
        </div>


        {/* Right Cards */}
        <div className="grid sm:grid-cols-2 gap-8">

          {solutions.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3 border border-gray-100"
            >

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StaffingSolutions;