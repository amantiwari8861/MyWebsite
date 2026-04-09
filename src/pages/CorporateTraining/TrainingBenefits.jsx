import React from "react";
import { motion } from "framer-motion";
import { Users, Handshake, BarChart3, Star, Beaker, Scroll, MessageCircle, GraduationCap } from "lucide-react";

const benefits = [
  {
    title: "Changing Administration",
    description: "Employees can quickly adapt to changes in their working atmosphere and stay aligned with company objectives.",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    title: "Grow your skills",
    description: "We bridge the skills gap for industries, building future-ready workforces.",
    icon: Handshake,
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    title: "Return on Investment (ROI)",
    description: "Training increases revenue and prepares staff for leadership positions.",
    icon: BarChart3,
    color: "text-orange-600",
    bg: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    title: "Acquire personality",
    description: "Having the skills and know-how to stand out from the crowd and finish your assignment more quickly.",
    icon: Star,
    color: "text-purple-600",
    bg: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    title: "Project-based Learning",
    description: "We combine theoretical knowledge with practical application through project-based learning.",
    icon: Beaker,
    color: "text-pink-600",
    bg: "bg-pink-50 dark:bg-pink-900/20",
  },
  {
    title: "Crack Certification Exams",
    description: "Most employees receiving our assistance can pass the global certification exam on the first attempt.",
    icon: Scroll,
    color: "text-indigo-600",
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
  },
  {
    title: "100% Assistance",
    description: "We provide constant assistance to answer your queries at any place with professional help.",
    icon: MessageCircle,
    color: "text-cyan-600",
    bg: "bg-cyan-50 dark:bg-cyan-900/20",
  },
  {
    title: "Training Certification",
    description: "After completing the training program, you will receive a course completion certificate recognized worldwide.",
    icon: GraduationCap,
    color: "text-rose-600",
    bg: "bg-rose-50 dark:bg-rose-900/20",
  },
];

const TrainingBenefits = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6"
          >
            Why Choose Our <span className="text-blue-600">Corporate Training</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Our comprehensive training programs are designed to transform your workforce into a high-performing, future-ready team.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-blue-100 dark:hover:border-blue-900/30 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${benefit.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingBenefits;
