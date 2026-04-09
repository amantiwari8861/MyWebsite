// import React from "react";

// function CompanyStatus() {
//   return (
//     <section className="bg-white py-24">

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Section Title */}

//         <div className="text-center mb-16">

//           <h2 className="text-4xl font-bold mb-4">
//             Company Status
//           </h2>

//           <p className="text-gray-600 max-w-3xl mx-auto">
//             Siteforce Consultants Private Limited operates as a
//             professional consulting and workforce solutions company
//             delivering manpower supply, IT services and digital
//             consulting solutions to businesses.
//           </p>

//         </div>


//         {/* Status Cards */}

//         <div className="grid md:grid-cols-3 gap-10">

//           {/* Legal Status */}

//           <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition">

//             <h3 className="text-xl font-semibold mb-4 text-indigo-700">
//               Legal Status
//             </h3>

//             <p className="text-gray-600">
//               Siteforce Consultants Private Limited is registered
//               as a private limited company under the Companies Act
//               in India.
//             </p>

//           </div>


//           {/* Business Nature */}

//           <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition">

//             <h3 className="text-xl font-semibold mb-4 text-indigo-700">
//               Nature of Business
//             </h3>

//             <p className="text-gray-600">
//               The company provides manpower supply, HR outsourcing,
//               IT consulting, digital marketing services and
//               professional training programs.
//             </p>

//           </div>


//           {/* Industry Focus */}

//           <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition">

//             <h3 className="text-xl font-semibold mb-4 text-indigo-700">
//               Industry Focus
//             </h3>

//             <p className="text-gray-600">
//               Our services support organizations across multiple
//               industries including corporate enterprises, startups,
//               government organizations and institutions.
//             </p>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default CompanyStatus;



import React from "react";
import { Shield, Building2, Globe, FileText, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function CompanyStatus() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const statusCards = [
    {
      icon: <FileText size={40} className="text-indigo-600" />,
      title: "Legal Status",
      content: "Siteforce Consultants Private Limited is registered as a private limited company under the Companies Act in India, ensuring full legal compliance and corporate governance.",
      gradient: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      details: [
        "Private Limited Company",
        "Companies Act Registered",
        "Full Legal Compliance"
      ]
    },
    {
      icon: <Building2 size={40} className="text-indigo-600" />,
      title: "Nature of Business",
      content: "The company provides manpower supply, HR outsourcing, IT consulting, digital marketing services and professional training programs with comprehensive business solutions.",
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      details: [
        "Manpower Supply",
        "HR Outsourcing",
        "IT Consulting"
      ]
    },
    {
      icon: <Globe size={40} className="text-indigo-600" />,
      title: "Industry Focus",
      content: "Our services support organizations across multiple industries including corporate enterprises, startups, government organizations and institutions with tailored solutions.",
      gradient: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      details: [
        "Corporate Enterprises",
        "Startups & SMEs",
        "Government Organizations"
      ]
    }
  ];

  return (
    <section className="bg-white py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-32 left-20 w-48 h-48 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-56 h-56 bg-purple-600 rounded-full blur-3xl"></div>
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
            <span>Company Information</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Company Status
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Siteforce Consultants Private Limited operates as a professional consulting and workforce solutions company delivering manpower supply, IT services and digital consulting solutions to businesses worldwide with proven expertise.
          </p>
        </motion.div>

        {/* Status Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {statusCards.map((card, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${card.borderColor} hover:border-opacity-100 relative overflow-hidden`}
            >
              {/* Icon */}
              <div className={`${card.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                {card.title}
              </h3>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {card.content}
              </p>

              {/* Details */}
              <div className="space-y-3">
                {card.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${card.gradient} rounded-full`}></div>
                    <span className="text-gray-700 text-sm font-medium">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-r ${card.gradient} opacity-5 rounded-full group-hover:scale-150 transition-transform`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white rounded-3xl p-12 relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-6">
                <Shield size={18} />
                <span>Credible & Verified</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Trusted Corporate Entity</h3>
              <p className="text-indigo-200 text-lg">Fully compliant and registered business with proven track record</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: <CheckCircle size={28} />, title: "ISO Certified", desc: "Quality Management" },
                { icon: <Shield size={28} />, title: "Legal Compliance", desc: "All Regulations Met" },
                { icon: <Building2 size={28} />, title: "Registered", desc: "Government Approved" },
                { icon: <FileText size={28} />, title: "Verified", desc: "Business Credentials" }
              ].map((badge, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-indigo-400 to-purple-400 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {badge.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">{badge.title}</h4>
                  <p className="text-indigo-200 text-sm">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Info Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: "Company Type", value: "Private Limited" },
            { label: "Registration", value: "Government Registered" },
            { label: "Operations", value: "Pan-India" }
          ].map((info, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="text-sm text-gray-500 mb-1">{info.label}</div>
              <div className="text-lg font-bold text-gray-900">{info.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CompanyStatus;