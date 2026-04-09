import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

const Guidance = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>24/7 Expert Support</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 leading-tight max-w-3xl"
          >
            Get Expert Guidance—<span className="text-yellow-300 underline decoration-wavy decoration-2 underline-offset-8">Connect With Us</span> Today!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-12"
          >
            A roadmap for readying key roles in your organization for business in the digital age.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <motion.a
              href="tel:+917070905090"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-3 bg-white text-blue-600 font-black py-4 px-10 rounded-2xl shadow-xl shadow-blue-900/20 transition-all group"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>+91-6202365315</span>
            </motion.a>

            <motion.a
              href="https://wa.me/6205645919"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-3 bg-green-500 text-white font-black py-4 px-10 rounded-2xl shadow-xl shadow-green-900/20 transition-all group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>WhatsApp Now</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full scale-110" />
            <img
              src="data:image/png;base64,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"
              alt="Guidance Illustration"
              className="relative z-10 w-full max-w-lg mx-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guidance;
