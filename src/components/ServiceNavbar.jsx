import React from "react";
import { Link, useLocation } from "react-router-dom";

const serviceNavItems = [
  { label: "Manpower Supply", to: "/services/manpower-supply" },
  { label: "IT Services", to: "/services/it-services" },
  { label: "Digital Marketing", to: "/services/digital-marketing" },
  { label: "Training", to: "/services/training-skill-development" },
];

const ServiceNavbar = () => {
  const location = useLocation();

  return (
    <section className="px-6 mb-12">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-x-auto">
          <nav className="flex min-w-max items-center gap-3 rounded-full bg-slate-100 p-2 shadow-sm">
            {serviceNavItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-700 hover:bg-white hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default ServiceNavbar;
