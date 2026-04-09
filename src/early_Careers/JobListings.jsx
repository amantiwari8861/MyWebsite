import React, { useState } from "react";
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles, Filter, Building, DollarSign, Users } from "lucide-react";
import { motion } from "framer-motion";

const JobListings = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const jobs = [
    { 
      title: "Frontend Developer", 
      location: "Remote", 
      type: "Full-time",
      salary: "₹6-10 LPA",
      experience: "2-4 years",
      department: "Engineering",
      posted: "2 days ago",
      spots: 5,
      gradient: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
      tags: ["React", "TypeScript", "Tailwind"]
    },
    { 
      title: "Python Developer", 
      location: "Delhi", 
      type: "Full-time",
      salary: "₹8-12 LPA",
      experience: "3-5 years",
      department: "Engineering",
      posted: "1 week ago",
      spots: 3,
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      tags: ["Python", "Django", "PostgreSQL"]
    },
    { 
      title: "React Developer", 
      location: "Bangalore", 
      type: "Full-time",
      salary: "₹7-11 LPA",
      experience: "2-4 years",
      department: "Engineering",
      posted: "3 days ago",
      spots: 4,
      gradient: "from-pink-500 to-rose-600",
      bgColor: "bg-rose-50",
      tags: ["React", "Redux", "Node.js"]
    },
    { 
      title: "Full Stack Developer", 
      location: "Remote", 
      type: "Full-time",
      salary: "₹10-15 LPA",
      experience: "4-6 years",
      department: "Engineering",
      posted: "5 days ago",
      spots: 2,
      gradient: "from-orange-500 to-amber-600",
      bgColor: "bg-orange-50",
      tags: ["MERN", "AWS", "Docker"]
    },
    { 
      title: "DevOps Engineer", 
      location: "Mumbai", 
      type: "Full-time",
      salary: "₹12-18 LPA",
      experience: "5-7 years",
      department: "Infrastructure",
      posted: "1 day ago",
      spots: 2,
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      tags: ["AWS", "Kubernetes", "CI/CD"]
    },
    { 
      title: "Data Analyst", 
      location: "Hyderabad", 
      type: "Full-time",
      salary: "₹5-8 LPA",
      experience: "1-3 years",
      department: "Analytics",
      posted: "4 days ago",
      spots: 6,
      gradient: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      tags: ["SQL", "Python", "Tableau"]
    }
  ];

  const filters = ["All", "Remote", "Engineering", "Hot Jobs"];
  const locations = ["All Locations", "Remote", "Delhi", "Bangalore", "Mumbai", "Hyderabad"];

  const stats = [
    { icon: <Briefcase size={24} />, number: "50+", label: "Open Positions" },
    { icon: <Building size={24} />, number: "30+", label: "Companies Hiring" },
    { icon: <DollarSign size={24} />, number: "5L-50L", label: "Salary Range" },
    { icon: <Users size={24} />, number: "500+", label: "Hired This Year" }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-48 h-48 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles size={16} />
            <span>Career Opportunities</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Open{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Positions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover exciting career opportunities at SiteForce. Join a team that values innovation, 
            growth, and work-life balance.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 text-white">
                {stat.icon}
              </div>
              <div className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-indigo-50 border border-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
          <div className="ml-auto flex items-center space-x-3">
            <Filter size={20} className="text-gray-500" />
            <select className="bg-white px-4 py-3 rounded-xl border border-gray-200 text-gray-700 focus:border-indigo-500 outline-none">
              {locations.map((loc) => (
                <option key={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Job Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${job.bgColor.replace('bg-', 'border-').replace('50', '20')} relative overflow-hidden group`}
            >
              {/* Decorative Background */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${job.gradient} opacity-5 rounded-full blur-3xl`}></div>

              {/* Job Type Badge */}
              <div className={`inline-flex items-center space-x-2 ${job.bgColor} px-3 py-1 rounded-full text-sm font-semibold mb-4`}>
                <Clock size={14} />
                <span>{job.type}</span>
              </div>

              {/* Job Title */}
              <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${job.gradient} bg-clip-text text-transparent`}>
                {job.title}
              </h3>

              {/* Job Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin size={18} className="text-indigo-600" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <DollarSign size={18} className="text-purple-600" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Briefcase size={18} className="text-pink-600" />
                  <span>{job.experience}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {job.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Job Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="text-sm text-gray-500">
                  <div>{job.posted}</div>
                  <div>{job.spots} open {job.spots === 1 ? 'spot' : 'spots'}</div>
                </div>
                <button className={`bg-gradient-to-r ${job.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 group/btn`}>
                  <span>Apply Now</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 shadow-lg">
            Load More Positions
          </button>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Sparkles size={18} />
              <span>Can't Find Your Match?</span>
            </div>
            
            <h3 className="text-4xl font-bold mb-4">Submit Your Resume</h3>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Don't see the perfect role for you? Submit your resume and let us contact you 
              when the right opportunity arises.
            </p>
            
            <button className="group bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all duration-300 shadow-lg flex items-center space-x-3 mx-auto">
              <span>Submit Resume</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JobListings;