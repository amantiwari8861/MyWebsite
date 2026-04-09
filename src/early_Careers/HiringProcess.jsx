// const steps = [
//   "Apply Online",
//   "Aptitude Test",
//   "Technical Interview",
//   "HR Interview",
//   "Offer Letter",
// ];

// const HiringProcess = () => {
//   return (
//     <section className="bg-gray-100 py-16">
//       <h2 className="text-3xl font-bold text-center mb-12">
//         Hiring Process
//       </h2>

//       <div className="flex flex-wrap justify-center gap-6">
//         {steps.map((step, i) => (
//           <div key={i} className="bg-white px-6 py-4 rounded-full shadow">
//             {step}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HiringProcess;


import React, { useState } from "react";
import { 
  CheckCircle, 
  Mail, 
  FileText, 
  UserCheck, 
  Users, 
  Award, 
  ChevronRight, 
  Sparkles,
  Clock,
  Target
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Apply Online",
    description: "Submit your application through our career portal with your resume and details",
    icon: <Mail size={32} />,
    gradient: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-50",
    time: "5 mins"
  },
  {
    title: "Aptitude Test",
    description: "Complete online assessment evaluating quantitative, verbal, and logical reasoning skills",
    icon: <FileText size={32} />,
    gradient: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    time: "30-45 mins"
  },
  {
    title: "Technical Interview",
    description: "Demonstrate your technical knowledge and problem-solving abilities with our expert panel",
    icon: <UserCheck size={32} />,
    gradient: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    time: "45-60 mins"
  },
  {
    title: "HR Interview",
    description: "Discuss your career goals, cultural fit, and learn more about our company values",
    icon: <Users size={32} />,
    gradient: "from-rose-500 to-red-600",
    bgColor: "bg-rose-50",
    time: "30-45 mins"
  },
  {
    title: "Offer Letter",
    description: "Receive your official offer letter with compensation details and joining instructions",
    icon: <Award size={32} />,
    gradient: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    time: "2-3 days"
  }
];

const HiringProcess = () => {
  const [activeStep, setActiveStep] = useState(null);

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
            <span>Join Our Team</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Hiring{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined hiring process is designed to identify the best talent efficiently. 
            Follow these 5 simple steps to join the SiteForce family.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 transform -translate-y-1/2 z-0"></div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className={`relative z-10 cursor-pointer`}
                onClick={() => setActiveStep(activeStep === index ? null : index)}
              >
                {/* Step Card */}
                <div className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${activeStep === index ? 'border-indigo-400' : 'border-gray-100'}`}>
                  
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {index + 1}
                  </div>

                  {/* Icon Container */}
                  <div className={`${step.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <div className={`bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-center mb-3 bg-gradient-to-r bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`, '--tw-gradient-from': '#4f46e5', '--tw-gradient-to': '#9333ea' }}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm text-center leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Time Estimate */}
                  <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
                    <Clock size={14} />
                    <span>{step.time}</span>
                  </div>

                  {/* Decorative Arrow (Desktop only, between steps) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <ChevronRight size={24} className="text-indigo-300" />
                    </div>
                  )}
                </div>

                {/* Check Indicator for Completed Steps */}
                {activeStep && activeStep > index && (
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-2 rounded-full">
                    <CheckCircle size={16} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Overall Timeline</h3>
            <p className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              2-3 Weeks
            </p>
            <p className="text-gray-600 text-sm">From application to offer letter</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Interview Panel</h3>
            <p className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              2-3 Members
            </p>
            <p className="text-gray-600 text-sm">Technical & HR representatives</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-pink-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Selection Rate</h3>
            <p className="text-3xl font-extrabold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">
              15-20%
            </p>
            <p className="text-gray-600 text-sm">We select the best talent</p>
          </div>
        </motion.div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white rounded-3xl p-12 relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-6">
                <Sparkles size={18} />
                <span>Pro Tips</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Ace Your Interview</h3>
              <p className="text-indigo-200 text-lg">Follow these tips to increase your chances of success</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Prepare Well", desc: "Research our company and the role thoroughly" },
                { title: "Be Authentic", desc: "Show your real personality and passion" },
                { title: "Ask Questions", desc: "Demonstrate genuine interest in the role" },
                { title: "Follow Up", desc: "Send a thank-you note after interviews" }
              ].map((tip, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
                  <div className="bg-gradient-to-br from-indigo-400 to-purple-400 w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white font-bold">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{tip.title}</h4>
                  <p className="text-indigo-200 text-sm">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center space-x-3 mx-auto">
            <span>Start Your Application</span>
            <Award size={24} className="group-hover:rotate-12 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HiringProcess;