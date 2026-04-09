import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Building2, User, Mail, Phone, MapPin, BookOpen, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TrainingBenefits from "./TrainingBenefits";
import CorporateCompany from "./CorporateCompany";
import Guidance from "./Guidence";
import apiService from "../../api";

const CorporateTraining = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    center: "Gurugram",
    course: "",
    company_name: "",
    query: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.course || !formData.company_name) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);
    try {
      await apiService.submitEnquiry(formData);
      alert("Enquiry submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        center: "Gurugram",
        course: "",
        company_name: "",
        query: "",
      });
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("Failed to submit enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-950">
      <section className="relative w-full bg-blue-900 overflow-hidden py-24 lg:py-32">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side - Text */}
          <div className="lg:w-1/2 text-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-800/50 border border-blue-700 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Building2 className="w-4 h-4 mr-2" />
              Corporate Excellence
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-black leading-tight mb-8"
            >
              Level Up Your <span className="text-yellow-400">Workforce,</span>
              <br />
              Invest In Skills For <span className="text-yellow-400 underline decoration-wavy decoration-2 underline-offset-8">Future Growth</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 leading-relaxed max-w-xl"
            >
              By investing in your team's skills today, you're building a strong foundation for future success in the digital age.
            </motion.p>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:w-[550px] w-full"
          >
            <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl p-10 border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
                ENQUIRY NOW
                <span className="ml-3 h-px w-12 bg-blue-600"></span>
              </h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name*"
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email*"
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone*"
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="center"
                      value={formData.center}
                      onChange={handleChange}
                      placeholder="Center*"
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
                    />
                  </div>
                </div>

                <div className="relative">
                  <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all dark:text-white appearance-none"
                  >
                    <option value="">Select a Course*</option>
                    <option value="Python Fullstack">Python Fullstack</option>
                    <option value="React.js">React.js</option>
                    <option value="Django">Django</option>
                    <option value="Data Science">Data Science</option>
                  </select>
                </div>

                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    placeholder="Company Name*"
                    required
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-400" />
                  <textarea
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    placeholder="Any Query?"
                    rows="3"
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{loading ? "Submitting..." : "Submit Enquiry"}</span>
                  {!loading && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
      <TrainingBenefits />
      <CorporateCompany />
      <Guidance />
    </div>
  );
};

export default CorporateTraining;
