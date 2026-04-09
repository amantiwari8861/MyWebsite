// import React from "react";
// import { Search } from "lucide-react"; // optional icon lib

// const ExperiencedHero = () => {
//   return (
//     <div className="w-full">

//       {/* 🔥 HERO IMAGE SECTION */}
//       <div className="relative h-[350px] md:h-[420px]">
        
//         {/* Background Image */}
//         <img
//           src="https://k2space.imgix.net/app/uploads/2023/06/K2-Criteo-Office-Curator-LARGE-102-scaled.jpg?auto=format&fit=max&q=90&w=5000"
//           alt="Experienced Professionals"
//           className="w-full h-full object-cover"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40"></div>

//         {/* Text */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="text-white text-3xl md:text-5xl font-bold">
//             Experienced Professionals
//           </h1>
//         </div>
//       </div>

//       {/* 🔍 SEARCH BAR SECTION */}
//       <div className="bg-black py-8 px-4">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4">

//           {/* Search Input 1 */}
//           <input
//             type="text"
//             placeholder="Search by 'Skills' or 'Keywords' or 'Requisition ID'"
//             className="w-full md:w-1/2 px-6 py-3 rounded-full bg-gray-200 text-gray-700 outline-none"
//           />

//           {/* Search Input 2 */}
//           <input
//             type="text"
//             placeholder="Search by Location"
//             className="w-full md:w-1/3 px-6 py-3 rounded-full bg-gray-200 text-gray-700 outline-none"
//           />

//           {/* Search Button */}
//           <button className="bg-white p-3 rounded-full hover:bg-gray-200 transition">
//             <Search size={20} />
//           </button>

//         </div>
//       </div>

//       {/* Bottom Border Line */}
//       <div className="h-1 bg-purple-600 w-full"></div>

//     </div>
//   );
// };

// export default ExperiencedHero;



import React, { useState } from "react";
import { Search, Briefcase, MapPin, Filter, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ExperiencedHero = () => {
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");

  const popularRoles = [
    "Software Developer",
    "Data Analyst",
    "Project Manager",
    "UX Designer",
    "DevOps Engineer"
  ];

  const popularLocations = [
    "Delhi NCR",
    "Bangalore",
    "Mumbai",
    "Pune",
    "Hyderabad"
  ];

  return (
    <div className="w-full">
      {/* HERO IMAGE SECTION */}
      <div className="relative h-[450px] md:h-[550px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c')"
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/80 to-indigo-800/90"></div>

        {/* Animated Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-32 left-10 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 animate-bounce" style={{ animationDuration: '3s' }}>
          <Briefcase size={32} className="text-white" />
        </div>
        <div className="absolute bottom-32 right-20 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <MapPin size={32} className="text-white" />
        </div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Sparkles size={18} />
                <span>For Experienced Professionals</span>
              </div>
              
              <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                Experienced
                <span className="block bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                  Professionals
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Discover exciting career opportunities with top companies. 
                Your next big break is just a search away.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-t border-white/20">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { number: "10K+", label: "Open Positions" },
                { number: "500+", label: "Partner Companies" },
                { number: "50+", label: "Cities" },
                { number: "95%", label: "Success Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH BAR SECTION */}
      <div className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 py-10 px-4 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row items-stretch gap-4">
              {/* Skills Search Input */}
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Briefcase size={20} />
                </div>
                <input
                  type="text"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="Search by Skills, Keywords, or Requisition ID"
                  className="w-full pl-12 pr-6 py-4 rounded-xl bg-gray-50 text-gray-700 outline-none border-2 border-gray-200 focus:border-indigo-500 focus:bg-white transition-all text-base"
                />
              </div>

              {/* Location Search Input */}
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <MapPin size={20} />
                </div>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Search by Location"
                  className="w-full pl-12 pr-6 py-4 rounded-xl bg-gray-50 text-gray-700 outline-none border-2 border-gray-200 focus:border-purple-500 focus:bg-white transition-all text-base"
                />
              </div>

              {/* Search Button */}
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center space-x-2 min-w-[160px]">
                <Search size={24} />
                <span>Search</span>
              </button>

              {/* Filter Button */}
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center space-x-2">
                <Filter size={20} />
                <span className="hidden md:inline">Filters</span>
              </button>
            </div>

            {/* Popular Searches */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-gray-500 text-sm font-medium">Popular:</span>
                {popularRoles.map((role, index) => (
                  <button
                    key={index}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-indigo-100 hover:text-indigo-700 transition-all"
                  >
                    {role}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <span className="text-gray-500 text-sm font-medium">Locations:</span>
                {popularLocations.map((loc, index) => (
                  <button
                    key={index}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-purple-100 hover:text-purple-700 transition-all"
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Fresh Jobs Today", value: "200+" },
              { label: "Companies Hiring", value: "150+" },
              { label: "Cities Available", value: "50+" },
              { label: "Industries", value: "30+" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                <div className="text-2xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Border Line */}
      <div className="h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 w-full"></div>
    </div>
  );
};

export default ExperiencedHero;