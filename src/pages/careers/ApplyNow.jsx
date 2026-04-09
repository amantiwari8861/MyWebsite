import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Send, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import apiService from "../../api";

function ApplyNow() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "Software Developer",
    message: "",
    resume: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.resume) {
      setStatus({ type: "error", message: "Please fill all required fields and upload your resume." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('position', formData.position);
    data.append('message', formData.message);
    data.append('resume', formData.resume);

    try {
      await apiService.submitApplication(data);
      setStatus({ type: "success", message: "Application submitted successfully! We will contact you soon." });
      setTimeout(() => navigate("/careers"), 3000);
    } catch (error) {
      console.error("Error submitting application:", error);
      setStatus({ type: "error", message: error.response?.data?.message || "Failed to submit application. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-900 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/careers" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Careers
        </Link>

        <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12 border-b border-slate-700 bg-gradient-to-br from-purple-600/20 to-blue-600/20">
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Apply for <span className="text-purple-500">Siteforce</span> Career</h2>
            <p className="text-slate-400 text-lg">Join our team of innovators and shape the future of technology.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Position *</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option className="bg-slate-900">Software Developer</option>
                  <option className="bg-slate-900">UI/UX Designer</option>
                  <option className="bg-slate-900">Data Analyst</option>
                  <option className="bg-slate-900">HR Manager</option>
                  <option className="bg-slate-900">Marketing Executive</option>
                  <option className="bg-slate-900">Internship</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Resume / CV (PDF) *</label>
              <div className="relative group">
                <input
                  type="file"
                  name="resume"
                  accept=".pdf"
                  onChange={handleChange}
                  required
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="w-full bg-slate-900/50 border-2 border-dashed border-slate-700 group-hover:border-purple-500/50 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 transition-all">
                  <div className="p-4 rounded-full bg-slate-800 text-purple-500 group-hover:scale-110 transition-transform">
                    <Upload size={32} />
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold">{formData.resume ? formData.resume.name : "Click to upload or drag & drop"}</p>
                    <p className="text-slate-500 text-sm mt-1">Maximum file size: 5MB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Cover Letter / Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us why you're a great fit..."
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <AnimatePresence>
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    status.type === "success" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}
                >
                  {status.type === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                  <p className="font-medium">{status.message}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-purple-900/20 transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>Submit Application <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ApplyNow;
