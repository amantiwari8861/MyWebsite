import React from "react";
import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      {/* Newsletter / CTA Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">Ready to transform your business?</h2>
            <p className="text-slate-400">Join 500+ companies growing with Siteforce solutions.</p>
          </div>
          <div className="flex flex-col w-full md:w-auto gap-4">
            <form className="flex w-full md:w-96 gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                required
              />
              <button 
                type="submit" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold transition-all"
              >
                Subscribe
              </button>
            </form>
            <div className="flex gap-2">
              <Link 
                to="/contact-us" 
                className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group"
              >
                Start Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group no-underline">
              <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg group-hover:rotate-6 transition-all duration-300 overflow-hidden">
                <Zap size={24} className="text-white z-10" fill="currentColor" />
                <div className="absolute inset-0 bg-white/20 blur-sm"></div>
              </div>
              <span className="text-xl font-black tracking-tighter text-white">
                SITE<span className="text-purple-500">FORCE</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering organizations with next-generation manpower, staffing, and IT solutions. We bridge the gap between talent and opportunity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about-siteforce" className="hover:text-purple-400 transition-colors no-underline">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-purple-400 transition-colors no-underline">Careers</Link></li>
              <li><Link to="/what-we-think" className="hover:text-purple-400 transition-colors no-underline">Our Insights</Link></li>
              <li><Link to="/chat" className="hover:text-purple-400 transition-colors no-underline">Global Hub</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Solutions</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/it-services" className="hover:text-purple-400 transition-colors no-underline">IT Services</Link></li>
              <li><Link to="/hr-outsourcing" className="hover:text-purple-400 transition-colors no-underline">HR Outsourcing</Link></li>
              <li><Link to="/on-demand-developer" className="hover:text-purple-400 transition-colors no-underline">On-Demand Talent</Link></li>
              <li><Link to="/corporate-training" className="hover:text-purple-400 transition-colors no-underline">Corporate Training</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-purple-500 shrink-0" />
                <span>Block K, Mahipalpur, South West Delhi, Delhi 110037</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-purple-500 shrink-0" />
                <a href="mailto:info@siteforce.com" className="hover:text-purple-400 transition-colors">info@siteforce.com</a>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-purple-500 shrink-0" />
                <a href="tel:+919661034151" className="hover:text-purple-400 transition-colors">+91 96610 34151</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Siteforce Consultants Pvt Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
