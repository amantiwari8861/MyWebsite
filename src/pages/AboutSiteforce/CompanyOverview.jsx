// import React from "react";

// function CompanyOverview() {
//   return (
//     <section className="bg-gray-50 py-24">

//       <div className="max-w-7xl mx-auto px-6">

//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">
//             Company Overview
//           </h2>

//           <p className="text-gray-600 max-w-3xl mx-auto">
//             Siteforce Consultants Private Limited is a professional
//             consulting company providing manpower solutions, IT
//             consulting, digital services and skill development programs
//             for organizations.
//           </p>
//         </div>


//         <div className="grid md:grid-cols-3 gap-10">

//           {/* STATUS */}

//           <div className="bg-white p-8 rounded-xl shadow">

//             <h3 className="text-xl font-semibold mb-4 text-indigo-700">
//               Siteforce Consultant Status
//             </h3>

//             <p className="text-gray-600">
//               Siteforce Consultants Private Limited operates as a
//               professional manpower and consulting organization
//               delivering workforce solutions and technology services
//               to businesses and institutions.
//             </p>

//           </div>


//           {/* BACKGROUND */}

//           <div className="bg-white p-8 rounded-xl shadow">

//             <h3 className="text-xl font-semibold mb-4 text-indigo-700">
//               Company Background
//             </h3>

//             <p className="text-gray-600">
//               The company was established to provide manpower supply,
//               HR outsourcing and IT consultancy services. It focuses on
//               helping organizations manage workforce operations and
//               digital transformation efficiently.
//             </p>

//           </div>


//           {/* BUSINESS OVERVIEW */}

//           <div className="bg-white p-8 rounded-xl shadow">

//             <h3 className="text-xl font-semibold mb-4 text-indigo-700">
//               Business Overview
//             </h3>

//             <p className="text-gray-600">
//               Our core business includes staffing solutions, HR
//               outsourcing, IT services, digital marketing and
//               professional training programs for businesses and
//               institutions.
//             </p>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default CompanyOverview;


import React from "react";
import { Building2, Users, Briefcase, TrendingUp, Award, Shield, Target, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function CompanyOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const overviewCards = [
    {
      icon: <Building2 size={36} className="text-indigo-600" />,
      title: "Siteforce Consultant Status",
      content: "Siteforce Consultants Private Limited operates as a professional manpower and consulting organization delivering workforce solutions and technology services to businesses and institutions across multiple industries.",
      gradient: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: <Briefcase size={36} className="text-indigo-600" />,
      title: "Company Background",
      content: "The company was established to provide manpower supply, HR outsourcing and IT consultancy services. It focuses on helping organizations manage workforce operations and digital transformation efficiently with proven methodologies.",
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Target size={36} className="text-indigo-600" />,
      title: "Business Overview",
      content: "Our core business includes staffing solutions, HR outsourcing, IT services, digital marketing and professional training programs for businesses and institutions. We deliver comprehensive solutions that drive organizational success.",
      gradient: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50"
    }
  ];

  const keyHighlights = [
    {
      icon: <Users size={24} />,
      title: "Workforce Experts",
      description: "Team of experienced professionals in staffing and HR"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Proven Track Record",
      description: "500+ successful client engagements delivered"
    },
    {
      icon: <Shield size={24} />,
      title: "Trusted Partner",
      description: "Reliable solutions with 98% client satisfaction"
    },
    {
      icon: <Award size={24} />,
      title: "Industry Certified",
      description: " ISO certified with industry-recognized standards"
    }
  ];

  return (
    <section className="bg-gray-50 py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles size={16} />
            <span>Who We Are</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Company Overview
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Siteforce Consultants Private Limited is a premier professional consulting company providing comprehensive manpower solutions, IT consulting, digital services, and skill development programs that transform organizations and drive sustainable growth.
          </p>
        </motion.div>

        {/* Overview Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {overviewCards.map((card, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-indigo-200"
            >
              <div className={`${card.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                {card.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {card.content}
              </p>
              
              <div className={`mt-6 h-1 w-12 bg-gradient-to-r ${card.gradient} rounded-full group-hover:w-20 transition-all`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Highlights */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white rounded-3xl p-12 relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Why Choose Siteforce?</h3>
              <p className="text-indigo-200 text-lg">We deliver excellence through proven expertise and commitment</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyHighlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-br from-indigo-400 to-purple-400 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {highlight.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{highlight.title}</h4>
                  <p className="text-indigo-200 text-sm">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "500+", label: "Clients Served" },
            { number: "10K+", label: "Professionals Placed" },
            { number: "15+", label: "Years Experience" },
            { number: "98%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CompanyOverview;