// const faqs = [
//   {
//     q: "Who can apply?",
//     a: "Fresh graduates and students are eligible.",
//   },
//   {
//     q: "Is internship paid?",
//     a: "Yes, we provide stipend-based internships.",
//   },
//   {
//     q: "What is selection process?",
//     a: "Test + Interviews.",
//   },
// ];

// const FAQSection = () => {
//   return (
//     <section className="bg-gray-100 py-16 px-6">
//       <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>

//       <div className="max-w-3xl mx-auto space-y-6">
//         {faqs.map((f, i) => (
//           <div key={i} className="bg-white p-5 rounded-lg shadow">
//             <h3 className="font-semibold">{f.q}</h3>
//             <p className="text-gray-600 mt-2">{f.a}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQSection;


import React, { useState } from "react";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Who can apply?",
    a: "Fresh graduates and students are eligible. We welcome candidates from diverse backgrounds including B.Tech, B.Sc, BCA, MCA, MBA, and other related fields. No prior experience is required for entry-level positions.",
    icon: "👥"
  },
  {
    q: "Is internship paid?",
    a: "Yes, we provide stipend-based internships. The stipend varies based on the role, duration, and performance. Top performers may receive pre-placement offers with competitive salary packages upon successful completion.",
    icon: "💰"
  },
  {
    q: "What is selection process?",
    a: "Our selection process includes an online test (technical/aptitude), followed by technical and HR interviews. We evaluate candidates on their skills, potential, and cultural fit. The entire process typically takes 1-2 weeks.",
    icon: "📝"
  },
  {
    q: "What are the job openings available?",
    a: "We offer positions in HR outsourcing, IT consulting, digital marketing, software development, data analysis, and customer support. Check our Job Openings page for current vacancies and detailed job descriptions.",
    icon: "💼"
  },
  {
    q: "Do you provide training?",
    a: "Yes! We provide comprehensive training programs for all new hires. Our training includes technical skills, soft skills, industry knowledge, and tools specific to your role. Mentorship is provided throughout your journey.",
    icon: "🎓"
  },
  {
    q: "What is the work culture like?",
    a: "Our work culture is collaborative, innovative, and supportive. We believe in work-life balance, continuous learning, and recognizing achievements. Team events, hackathons, and regular feedback sessions are part of our culture.",
    icon: "🌟"
  },
  {
    q: "Is there growth opportunity?",
    a: "Absolutely! We offer clear career progression paths with regular promotion cycles. High performers get fast-tracked for leadership roles. We invest in our employees' growth through training, certifications, and skill development programs.",
    icon: "🚀"
  },
  {
    q: "How do I apply?",
    a: "You can apply by clicking the 'Apply Now' button on any job listing, uploading your resume, and filling out the application form. Our HR team will review your application and contact you within 3-5 business days if selected.",
    icon: "📧"
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-52 h-52 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles size={16} />
            <span>Common Questions</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about careers, internships, and working at SiteForce. Can't find what you're looking for? Reach out to our HR team.
          </p>
        </motion.div>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <span className="text-2xl">{faq.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {faq.q}
                  </h3>
                </div>
                
                <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? (
                    <ChevronUp size={24} className="text-indigo-600" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="h-px bg-gradient-to-r from-indigo-200 to-purple-200 mb-4"></div>
                      <p className="text-gray-600 leading-relaxed text-lg pl-12">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-indigo-100 text-lg mb-8">Our HR team is here to help you with any concerns or queries</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2">
                <span>Contact HR Team</span>
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "95%", label: "Response Time < 24hrs" },
            { number: "500+", label: "Candidates Helped" },
            { number: "50+", label: "HR Professionals" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100">
              <div className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;