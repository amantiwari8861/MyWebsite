// import React, { useEffect } from "react";
// import ServiceNavbar from '../components/ServiceNavbar';
// import { Link } from "react-router-dom";
// import {
//   Database,
//   BarChart,
//   Layers,
//   ShieldCheck,
//   FileText,
//   Search,
//   CheckCircle,
//   ArrowRight,
//   Cpu,
//   TrendingUp,
//   Users,
//   Zap,
//   Star,
//   Clock,
//   Award
// } from "lucide-react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Data_Processing = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const services = [
//     {
//       icon: <Database size={32} className="text-blue-600" />,
//       title: "Data Entry & Management",
//       description: "Accurate and efficient data entry services with quality control and validation processes."
//     },
//     {
//       icon: <BarChart size={32} className="text-blue-600" />,
//       title: "Data Analysis & Reporting",
//       description: "Transform raw data into actionable insights with comprehensive analysis and reporting."
//     },
//     {
//       icon: <Layers size={32} className="text-blue-600" />,
//       title: "Data Migration",
//       description: "Seamless migration of data between systems with data integrity and minimal downtime."
//     },
//     {
//       icon: <ShieldCheck size={32} className="text-blue-600" />,
//       title: "Data Security & Compliance",
//       description: "Ensure data security and compliance with industry standards and regulations."
//     },
//     {
//       icon: <FileText size={32} className="text-blue-600" />,
//       title: "Document Processing",
//       description: "Process and digitize documents with OCR technology and intelligent data extraction."
//     },
//     {
//       icon: <Search size={32} className="text-blue-600" />,
//       title: "Data Mining & Insights",
//       description: "Extract valuable insights from large datasets using advanced mining techniques."
//     }
//   ];

//   const features = [
//     "High Accuracy Rate (99.99%)",
//     "Data Privacy & Security",
//     "Scalable Processing Infrastructure",
//     "Fast Turnaround Times",
//     "AI-Powered Automation",
//     "GDPR & Compliance Standards"
//   ];

//   const stats = [
//     { value: "10M+", label: "Records Processed" },
//     { value: "99.99%", label: "Accuracy Rate" },
//     { value: "500+", label: "Happy Clients" },
//     { value: "24/7", label: "Operations" }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 pt-28 pb-20">
//       {/* HERO SECTION */}
//       <section className="py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div data-aos="fade-right">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
//                 <Database size={16} />
//                 Data Processing Services
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
//                 Transform Your{" "}
//                 <span className="text-blue-600">Data into Insights</span>
//               </h1>

//               <p className="text-slate-600 text-xl leading-relaxed mb-8 max-w-2xl">
//                 Professional data processing services that ensure accuracy, security, and efficiency. From data entry to advanced analytics, we handle your data needs with precision and care.
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <Link
//                   to="/contact-us"
//                   className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group no-underline"
//                 >
//                   Start Processing
//                   <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//                 </Link>
//                 <Link
//                   to="/case-studies"
//                   className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all no-underline"
//                 >
//                   View Analytics
//                 </Link>
//               </div>
//             </div>

//             <div data-aos="fade-left" className="relative">
//               <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 shadow-2xl">
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="text-center p-4 bg-white rounded-xl shadow-sm">
//                     <Database className="mx-auto mb-2 text-blue-600" size={32} />
//                     <div className="text-lg font-bold text-slate-900">Data Entry</div>
//                     <div className="text-xs text-slate-600">99.99% Accuracy</div>
//                   </div>
//                   <div className="text-center p-4 bg-white rounded-xl shadow-sm">
//                     <BarChart className="mx-auto mb-2 text-blue-600" size={32} />
//                     <div className="text-lg font-bold text-slate-900">Analytics</div>
//                     <div className="text-xs text-slate-600">Real-time</div>
//                   </div>
//                   <div className="text-center p-4 bg-white rounded-xl shadow-sm">
//                     <ShieldCheck className="mx-auto mb-2 text-blue-600" size={32} />
//                     <div className="text-lg font-bold text-slate-900">Security</div>
//                     <div className="text-xs text-slate-600">GDPR Compliant</div>
//                   </div>
//                   <div className="text-center p-4 bg-white rounded-xl shadow-sm">
//                     <Cpu className="mx-auto mb-2 text-blue-600" size={32} />
//                     <div className="text-lg font-bold text-slate-900">Automation</div>
//                     <div className="text-xs text-slate-600">AI-Powered</div>
//                   </div>
//                 </div>
//                 <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
//                   <div className="flex items-center gap-2">
//                     <Star className="text-yellow-400 fill-current" size={20} />
//                     <span className="font-bold text-slate-900">4.9/5</span>
//                     <span className="text-slate-600 text-sm">Client Rating</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES GRID */}

//       <ServiceNavbar />
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16" data-aos="fade-up">
//             <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
//               Data <span className="text-blue-600">Services</span>
//             </h2>
//             <p className="text-slate-600 text-xl max-w-3xl mx-auto">
//               Smart solutions for modern businesses with intelligent data processing and analytics
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 data-aos="zoom-in"
//                 data-aos-delay={index * 100}
//                 className="group p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200"
//               >
//                 <div className="mb-6 p-3 bg-blue-50 rounded-xl w-fit group-hover:scale-110 transition-transform">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
//                   {service.title}
//                 </h3>
//                 <p className="text-slate-600 leading-relaxed">
//                   {service.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div data-aos="fade-right">
//               <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8">
//                 Why Choose Our{" "}
//                 <span className="text-blue-600">Data Services</span>{" "}
//                 Services?
//               </h2>

//               <div className="space-y-4">
//                 {features.map((feature, index) => (
//                   <div key={index} className="flex items-center gap-4" data-aos="fade-up" data-aos-delay={index * 50}>
//                     <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
//                       <CheckCircle size={14} className="text-white" />
//                     </div>
//                     <span className="text-slate-700 font-medium">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* STATS */}
//             <div className="grid grid-cols-2 gap-6" data-aos="fade-left">
//               {stats.map((stat, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center border border-slate-100"
//                   data-aos="zoom-in"
//                   data-aos-delay={index * 100}
//                 >
//                   <div className="text-3xl lg:text-4xl font-black text-blue-600 mb-2">
//                     {stat.value}
//                   </div>
//                   <div className="text-slate-600 font-medium">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA SECTION */}
//       <section className="py-20 px-6 bg-slate-900 text-white">
//         <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
//           <h2 className="text-4xl lg:text-5xl font-black mb-6">
//             Ready to Process Your{" "}
//             <span className="text-blue-400">Data</span>?
//           </h2>

//           <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
//             Let's discuss your data processing requirements and create a customized solution for your business.
//           </p>

//           <div className="flex flex-wrap justify-center gap-4">
//             <Link
//               to="/contact-us"
//               className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group no-underline"
//             >
//               Get Started
//               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//             </Link>
//             <Link
//               to="/services"
//               className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all no-underline"
//             >
//               View All Services
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Data_Processing;

import React, { useEffect } from "react";
import ServiceNavbar from '../components/ServiceNavbar';
import { Link } from "react-router-dom";
import {
  Database, BarChart, Layers, ShieldCheck,
  FileText, Search, CheckCircle, ArrowRight,
  Cpu, TrendingUp, Zap, Star,
} from "lucide-react";

/* ─────────────────────────────────────────
   GLOBAL CSS
───────────────────────────────────────── */
const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

  :root {
    --ink:      #080C14;
    --ink-soft: #10172A;
    --ink-mid:  #1B2640;
    --gold:     #C9A84C;
    --gold-lt:  #E8C97A;
    --gold-dim: rgba(201,168,76,0.18);
    --ice:      #E8EEF8;
    --mist:     rgba(232,238,248,0.07);
    --glow:     rgba(201,168,76,0.35);
    --radius:   18px;
    --t:        0.45s cubic-bezier(0.22,1,0.36,1);
  }

  .dp-root * { box-sizing:border-box;margin:0;padding:0; }
  .dp-root {
    font-family:'Outfit',sans-serif;
    background:var(--ink);
    color:var(--ice);
    min-height:100vh;
    overflow-x:hidden;
  }

  /* noise */
  .dp-root::before {
    content:'';position:fixed;inset:0;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events:none;z-index:0;opacity:.45;
  }

  /* mesh */
  .dp-mesh { position:absolute;inset:0;z-index:0;overflow:hidden; }
  .dp-mesh span {
    position:absolute;border-radius:50%;filter:blur(100px);
    animation:dp-drift 13s ease-in-out infinite alternate;
  }
  .dp-mesh span:nth-child(1){width:580px;height:580px;top:-100px;left:-80px;background:rgba(201,168,76,0.07);animation-delay:0s;}
  .dp-mesh span:nth-child(2){width:480px;height:480px;bottom:-70px;right:-70px;background:rgba(40,180,140,0.06);animation-delay:-5s;}
  .dp-mesh span:nth-child(3){width:320px;height:320px;top:45%;left:58%;background:rgba(201,168,76,0.05);animation-delay:-9s;}
  @keyframes dp-drift { to{transform:translate(38px,28px) scale(1.08);} }

  /* badge */
  .dp-badge {
    display:inline-flex;align-items:center;gap:8px;
    padding:6px 18px;border-radius:99px;
    border:1px solid rgba(201,168,76,0.4);
    background:rgba(201,168,76,0.08);
    color:var(--gold-lt);font-size:0.78rem;
    font-weight:600;letter-spacing:0.12em;text-transform:uppercase;
    margin-bottom:22px;
  }

  /* headings */
  .dp-h1 {
    font-family:'Cormorant Garamond',serif;
    font-size:clamp(3rem,7vw,5.4rem);
    font-weight:700;line-height:1.06;
    letter-spacing:-0.02em;color:#fff;margin-bottom:24px;
  }
  .dp-h1 em { color:var(--gold);font-style:normal; }
  .dp-h2 {
    font-family:'Cormorant Garamond',serif;
    font-size:clamp(2.2rem,4.5vw,3.6rem);
    font-weight:700;line-height:1.1;color:#fff;margin-bottom:12px;
  }
  .dp-h2 em { color:var(--gold);font-style:normal; }

  /* buttons */
  .dp-btn-primary {
    display:inline-flex;align-items:center;gap:10px;
    background:var(--gold);color:var(--ink);
    padding:14px 32px;border-radius:var(--radius);
    font-weight:700;font-size:0.95rem;letter-spacing:0.02em;
    text-decoration:none;transition:var(--t);
    box-shadow:0 0 0 0 var(--glow);
  }
  .dp-btn-primary:hover {
    background:var(--gold-lt);
    box-shadow:0 0 32px 4px var(--glow);
    transform:translateY(-2px);
  }
  .dp-btn-outline {
    display:inline-flex;align-items:center;gap:10px;
    border:1.5px solid rgba(232,238,248,0.22);
    color:var(--ice);background:transparent;
    padding:14px 32px;border-radius:var(--radius);
    font-weight:600;font-size:0.95rem;
    text-decoration:none;transition:var(--t);
  }
  .dp-btn-outline:hover {
    border-color:var(--gold);color:var(--gold);
    background:var(--gold-dim);transform:translateY(-2px);
  }

  /* ── DATA PIPELINE HERO VISUAL ── */
  .dp-pipeline {
    background:linear-gradient(160deg,#0f1a2e 0%,#080c14 100%);
    border:1px solid rgba(232,238,248,0.08);
    border-radius:28px;
    padding:32px 28px;
    box-shadow:0 40px 80px rgba(0,0,0,0.55);
    position:relative;overflow:hidden;
  }

  /* top bar — live indicator */
  .dp-live-bar {
    display:flex;align-items:center;justify-content:space-between;
    margin-bottom:24px;
    padding-bottom:16px;
    border-bottom:1px solid rgba(255,255,255,0.06);
  }
  .dp-live-dot {
    width:8px;height:8px;border-radius:50%;
    background:#2ECC71;
    box-shadow:0 0 8px rgba(46,204,113,0.7);
    animation:dp-blink 1.8s ease-in-out infinite;
  }
  @keyframes dp-blink { 0%,100%{opacity:1}50%{opacity:0.3} }

  /* pipeline stages */
  .dp-stages {
    display:flex;align-items:center;gap:0;
    margin-bottom:24px;
  }
  .dp-stage {
    flex:1;display:flex;flex-direction:column;
    align-items:center;gap:8px;
    padding:16px 8px;
    background:rgba(255,255,255,0.03);
    border:1px solid rgba(232,238,248,0.07);
    border-radius:14px;
    transition:var(--t);position:relative;
  }
  .dp-stage:hover {
    background:rgba(201,168,76,0.07);
    border-color:rgba(201,168,76,0.3);
    transform:translateY(-3px);
  }
  .dp-stage-label {
    font-size:0.72rem;font-weight:600;
    color:rgba(232,238,248,0.5);
    letter-spacing:0.06em;text-transform:uppercase;
    text-align:center;
  }

  /* animated arrow between stages */
  .dp-arrow-wrap {
    display:flex;align-items:center;
    padding:0 4px;flex-shrink:0;
  }
  .dp-arrow-line {
    width:24px;height:2px;
    background:linear-gradient(90deg,rgba(201,168,76,0.15),rgba(201,168,76,0.6));
    position:relative;overflow:hidden;
  }
  .dp-arrow-line::after {
    content:'';position:absolute;top:0;left:-100%;
    width:100%;height:100%;
    background:linear-gradient(90deg,transparent,rgba(201,168,76,0.9),transparent);
    animation:dp-flow 2s linear infinite;
  }
  .dp-arrow-line:nth-child(1)::after{animation-delay:0s;}
  .dp-arrow-line:nth-child(2)::after{animation-delay:0.67s;}
  .dp-arrow-line:nth-child(3)::after{animation-delay:1.34s;}
  @keyframes dp-flow { to{left:100%;} }

  /* mini bar chart */
  .dp-chart {
    display:flex;align-items:flex-end;gap:4px;
    height:48px;padding:0 4px;
  }
  .dp-bar {
    flex:1;border-radius:3px 3px 0 0;
    background:linear-gradient(to top,rgba(201,168,76,0.4),rgba(201,168,76,0.8));
    animation:dp-grow 2s ease-out forwards;
    transform-origin:bottom;
  }
  @keyframes dp-grow { from{transform:scaleY(0)} to{transform:scaleY(1)} }

  /* accuracy ring */
  .dp-ring-wrap {
    display:flex;align-items:center;justify-content:center;gap:20px;
    margin-top:4px;
  }
  .dp-ring {
    position:relative;width:72px;height:72px;
    flex-shrink:0;
  }
  .dp-ring svg { transform:rotate(-90deg); }
  .dp-ring-val {
    position:absolute;inset:0;
    display:flex;flex-direction:column;
    align-items:center;justify-content:center;
  }
  .dp-ring-num {
    font-family:'Cormorant Garamond',serif;
    font-size:1rem;font-weight:700;color:var(--gold);line-height:1;
  }
  .dp-ring-sub { font-size:0.6rem;color:rgba(232,238,248,0.4);margin-top:2px; }

  /* key-value metrics */
  .dp-kv-list { flex:1;display:flex;flex-direction:column;gap:8px; }
  .dp-kv {
    display:flex;justify-content:space-between;align-items:center;
    padding:7px 12px;
    background:rgba(255,255,255,0.03);
    border:1px solid rgba(232,238,248,0.06);
    border-radius:10px;
    font-size:0.8rem;
  }
  .dp-kv-key { color:rgba(232,238,248,0.45); }
  .dp-kv-val { color:var(--gold-lt);font-weight:600; }

  /* rating */
  .dp-rating {
    position:absolute;top:-16px;right:16px;
    background:#fff;border-radius:14px;padding:10px 16px;
    box-shadow:0 10px 30px rgba(0,0,0,0.45);
    display:flex;align-items:center;gap:8px;
    color:var(--ink);font-weight:700;font-size:0.88rem;
  }

  /* service cards */
  .dp-card {
    background:var(--mist);
    border:1px solid rgba(232,238,248,0.07);
    border-radius:22px;padding:36px 32px;
    transition:var(--t);position:relative;overflow:hidden;cursor:default;
  }
  .dp-card::before {
    content:'';position:absolute;inset:0;
    background:linear-gradient(135deg,rgba(201,168,76,0.06) 0%,transparent 60%);
    opacity:0;transition:var(--t);
  }
  .dp-card:hover { transform:translateY(-6px);border-color:rgba(201,168,76,0.3);background:rgba(255,255,255,0.04); }
  .dp-card:hover::before { opacity:1; }
  .dp-card:hover .dp-card-icon { background:var(--gold-dim);border-color:rgba(201,168,76,0.4); }
  .dp-card-icon {
    width:58px;height:58px;border-radius:14px;
    background:rgba(255,255,255,0.04);
    border:1px solid rgba(255,255,255,0.1);
    display:flex;align-items:center;justify-content:center;
    margin-bottom:22px;transition:var(--t);
  }

  /* stat cards */
  .dp-stat {
    background:var(--ink-soft);
    border:1px solid rgba(201,168,76,0.15);
    border-radius:20px;padding:36px 28px;
    text-align:center;transition:var(--t);
  }
  .dp-stat:hover { border-color:var(--gold);transform:scale(1.03); }
  .dp-stat-val {
    font-family:'Cormorant Garamond',serif;
    font-size:3rem;font-weight:700;
    color:var(--gold);line-height:1;margin-bottom:8px;
  }

  /* feature list */
  .dp-feature-item {
    display:flex;align-items:center;gap:14px;
    padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.05);
    transition:var(--t);
  }
  .dp-feature-item:last-child { border-bottom:none; }
  .dp-feature-item:hover { padding-left:6px; }
  .dp-feature-dot {
    width:30px;height:30px;flex-shrink:0;border-radius:50%;
    background:var(--gold-dim);border:1px solid rgba(201,168,76,0.35);
    display:flex;align-items:center;justify-content:center;
  }

  /* process */
  .dp-step {
    display:flex;gap:20px;align-items:flex-start;
    padding:24px 0;border-bottom:1px solid rgba(255,255,255,0.05);
  }
  .dp-step:last-child { border-bottom:none; }
  .dp-step-num {
    font-family:'Cormorant Garamond',serif;
    font-size:2.4rem;font-weight:700;
    color:var(--gold);opacity:0.5;line-height:1;min-width:52px;
  }

  /* cta */
  .dp-cta {
    background:linear-gradient(135deg,var(--ink-soft) 0%,var(--ink-mid) 100%);
    border-top:1px solid rgba(201,168,76,0.12);
    position:relative;overflow:hidden;
  }
  .dp-cta-glow {
    position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
    width:700px;height:400px;
    background:radial-gradient(ellipse,rgba(201,168,76,0.1) 0%,transparent 70%);
    pointer-events:none;
  }

  /* scroll reveal */
  .dp-reveal { opacity:0;transform:translateY(36px);transition:opacity 0.7s ease,transform 0.7s ease; }
  .dp-reveal.visible { opacity:1;transform:translateY(0); }
  .dp-reveal-left { opacity:0;transform:translateX(-40px);transition:opacity 0.7s ease,transform 0.7s ease; }
  .dp-reveal-left.visible { opacity:1;transform:translateX(0); }
  .dp-reveal-right { opacity:0;transform:translateX(40px);transition:opacity 0.7s ease,transform 0.7s ease; }
  .dp-reveal-right.visible { opacity:1;transform:translateX(0); }

  @keyframes dp-bounce-x { 0%,100%{transform:translateX(0)}50%{transform:translateX(5px)} }
  .dp-btn-primary:hover .dp-arrow { animation:dp-bounce-x 0.6s ease infinite; }

  /* layout */
  .dp-section { padding:96px 24px;position:relative;z-index:1; }
  .dp-container { max-width:1200px;margin:0 auto; }
  .dp-grid-2 { display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center; }
  .dp-grid-3 { display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:24px; }
  .dp-grid-stats { display:grid;grid-template-columns:1fr 1fr;gap:20px; }
  .dp-hr { border:none;border-top:1px solid rgba(255,255,255,0.07);margin:0; }

  @media(max-width:900px) { .dp-grid-2 { grid-template-columns:1fr; } }
  @media(max-width:600px) {
    .dp-grid-stats { grid-template-columns:1fr; }
    .dp-h1 { font-size:2.6rem; }
    .dp-stages { flex-wrap:wrap; }
    .dp-arrow-wrap { display:none; }
  }
`;

/* ─────────────────────────────────────────
   REVEAL HOOK
───────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".dp-reveal,.dp-reveal-left,.dp-reveal-right");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => {
      el.style.transitionDelay = `${el.dataset.delay || 0}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const services = [
  { icon: <Database size={26} color="#C9A84C" />, title: "Data Entry & Management", desc: "High-velocity, error-free data entry with multi-layer validation and QC checkpoints — 99.99% accuracy guaranteed." },
  { icon: <BarChart size={26} color="#C9A84C" />, title: "Data Analysis & Reporting", desc: "Turn raw datasets into executive-ready dashboards and narrative reports that surface the insights that matter." },
  { icon: <Layers size={26} color="#C9A84C" />, title: "Data Migration", desc: "Schema mapping, transformation, and phased migration between systems with full data-integrity verification and zero downtime." },
  { icon: <ShieldCheck size={26} color="#C9A84C" />, title: "Data Security & Compliance", desc: "GDPR, HIPAA, and ISO 27001-aligned data governance — encryption, access control, audit trails, and breach-response planning." },
  { icon: <FileText size={26} color="#C9A84C" />, title: "Document Processing", desc: "AI-powered OCR and intelligent extraction that digitises, classifies, and indexes documents at enterprise scale." },
  { icon: <Search size={26} color="#C9A84C" />, title: "Data Mining & Insights", desc: "Pattern recognition and predictive models across large datasets — surfacing trends before they become obvious." },
];

const features = [
  "High Accuracy Rate (99.99%)",
  "Data Privacy & Security",
  "Scalable Processing Infrastructure",
  "Fast Turnaround Times",
  "AI-Powered Automation",
  "GDPR & Compliance Standards",
];

const stats = [
  { value: "10M+",   label: "Records Processed" },
  { value: "99.99%", label: "Accuracy Rate" },
  { value: "500+",   label: "Happy Clients" },
  { value: "24 / 7", label: "Operations" },
];

const pipelineStages = [
  { icon: <Database size={22} color="#C9A84C" />, label: "Ingest" },
  { icon: <Zap size={22} color="#C9A84C" />, label: "Clean" },
  { icon: <Cpu size={22} color="#C9A84C" />, label: "Process" },
  { icon: <TrendingUp size={22} color="#C9A84C" />, label: "Analyse" },
];

const barHeights = [35, 55, 42, 70, 50, 85, 60, 75, 45, 90];

const kvData = [
  { k: "Throughput",  v: "2.4M rec/hr" },
  { k: "Accuracy",    v: "99.99%" },
  { k: "Latency",     v: "< 120 ms" },
];

const process = [
  { n: "01", title: "Data Audit & Profiling", desc: "We assess your data sources, formats, and quality gaps — producing a cleansing roadmap and volume-based processing plan." },
  { n: "02", title: "Pipeline Architecture", desc: "Custom ETL or ELT pipeline design with schema validation, transformation rules, and error-handling protocols defined upfront." },
  { n: "03", title: "Processing & QA", desc: "Automated and human-reviewed processing with dual-pass accuracy checks and full audit logs at every transformation step." },
  { n: "04", title: "Delivery & Insights", desc: "Structured outputs delivered to your warehouse or BI tool, with an executive summary report and recommendations for next iteration." },
];

/* ─────────────────────────────────────────
   ACCURACY RING SVG
───────────────────────────────────────── */
const AccuracyRing = ({ pct = 99.99, size = 72, stroke = 5 }) => {
  const r = (size - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <div className="dp-ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#C9A84C" strokeWidth={stroke}
          strokeDasharray={`${dash} ${circ - dash}`} strokeLinecap="round"
          style={{ transition: "stroke-dasharray 1.5s ease" }} />
      </svg>
      <div className="dp-ring-val">
        <span className="dp-ring-num">99.9%</span>
        <span className="dp-ring-sub">Accuracy</span>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
const Data_Processing = () => {
  useReveal();

  return (
    <div className="dp-root">
      <style>{globalCSS}</style>

      {/* ── HERO ── */}
      <section className="dp-section" style={{ paddingTop: 140, minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div className="dp-mesh"><span /><span /><span /></div>
        <div className="dp-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="dp-grid-2">

            {/* Left */}
            <div className="dp-reveal">
              <div className="dp-badge"><Database size={13} /> Data Processing</div>
              <h1 className="dp-h1">
                Transform Your<br /><em>Data</em> into<br />Insights
              </h1>
              <p style={{ color: "rgba(232,238,248,0.65)", fontSize: "1.1rem", lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
                Professional data processing that ensures accuracy, security, and speed — from raw entry to actionable intelligence delivered at enterprise scale.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link to="/contact-us" className="dp-btn-primary">
                  Start Processing <ArrowRight size={18} className="dp-arrow" />
                </Link>
                <Link to="/case-studies" className="dp-btn-outline">View Analytics</Link>
              </div>
            </div>

            {/* Right — data pipeline visual */}
            <div className="dp-reveal-right" style={{ position: "relative" }} data-delay="150">
              <div className="dp-pipeline">

                {/* Live header */}
                <div className="dp-live-bar">
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div className="dp-live-dot" />
                    <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "rgba(232,238,248,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Pipeline Active</span>
                  </div>
                  <span style={{ fontSize: "0.78rem", color: "rgba(232,238,248,0.3)", fontFamily: "'Outfit',monospace" }}>2,400 rec / s</span>
                </div>

                {/* Pipeline stages with animated arrows */}
                <div className="dp-stages">
                  {pipelineStages.map((s, i) => (
                    <React.Fragment key={i}>
                      <div className="dp-stage">
                        {s.icon}
                        <span className="dp-stage-label">{s.label}</span>
                      </div>
                      {i < pipelineStages.length - 1 && (
                        <div className="dp-arrow-wrap">
                          <div className="dp-arrow-line" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Mini bar chart */}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: "0.72rem", color: "rgba(232,238,248,0.35)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>Throughput — last 10 intervals</div>
                  <div className="dp-chart">
                    {barHeights.map((h, i) => (
                      <div key={i} className="dp-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                </div>

                {/* Accuracy ring + KV metrics */}
                <div className="dp-ring-wrap">
                  <AccuracyRing />
                  <div className="dp-kv-list">
                    {kvData.map((item, i) => (
                      <div className="dp-kv" key={i}>
                        <span className="dp-kv-key">{item.k}</span>
                        <span className="dp-kv-val">{item.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="dp-rating">
                <Star size={16} fill="#F5C518" color="#F5C518" />
                <span>4.9 / 5</span>
                <span style={{ color: "#888", fontWeight: 400 }}>Client Rating</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ServiceNavbar />
      <hr className="dp-hr" />

      {/* ── SERVICES ── */}
      <section className="dp-section">
        <div className="dp-container">
          <div className="dp-reveal" style={{ marginBottom: 64 }}>
            <div className="dp-badge"><BarChart size={13} /> What We Process</div>
            <h2 className="dp-h2">Data <em>Services</em></h2>
            <p style={{ color: "rgba(232,238,248,0.55)", fontSize: "1.05rem", maxWidth: 540, marginTop: 14 }}>
              Smart, scalable solutions for businesses that run on data.
            </p>
          </div>
          <div className="dp-grid-3">
            {services.map((s, i) => (
              <div className="dp-card dp-reveal" key={i} data-delay={i * 80}>
                <div className="dp-card-icon">{s.icon}</div>
                <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "1.05rem", color: "#fff", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: "rgba(232,238,248,0.5)", fontSize: "0.92rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="dp-hr" />

      {/* ── WHY US + STATS ── */}
      <section className="dp-section" style={{ background: "linear-gradient(180deg,var(--ink) 0%,var(--ink-soft) 100%)" }}>
        <div className="dp-container">
          <div className="dp-grid-2">
            <div className="dp-reveal-left">
              <div className="dp-badge"><CheckCircle size={13} /> Why Choose Us</div>
              <h2 className="dp-h2">Precision at<br /><em>Any Scale</em></h2>
              <p style={{ color: "rgba(232,238,248,0.5)", marginBottom: 32, lineHeight: 1.7 }}>
                We combine AI automation with human verification to guarantee accuracy levels that manual-only or fully-automated approaches simply can't match.
              </p>
              <div>
                {features.map((f, i) => (
                  <div className="dp-feature-item" key={i}>
                    <div className="dp-feature-dot">
                      <CheckCircle size={14} color="#C9A84C" />
                    </div>
                    <span style={{ fontWeight: 500, color: "rgba(232,238,248,0.85)", fontSize: "0.97rem" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="dp-reveal-right" data-delay="100">
              <div className="dp-grid-stats">
                {stats.map((s, i) => (
                  <div className="dp-stat" key={i}>
                    <div className="dp-stat-val">{s.value}</div>
                    <div style={{ color: "rgba(232,238,248,0.5)", fontSize: "0.88rem", fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="dp-hr" />

      {/* ── PROCESS ── */}
      <section className="dp-section">
        <div className="dp-container">
          <div className="dp-grid-2" style={{ alignItems: "flex-start" }}>
            <div className="dp-reveal-left" style={{ position: "sticky", top: 100 }}>
              <div className="dp-badge">Our Process</div>
              <h2 className="dp-h2">Raw Data to<br /><em>Decision</em></h2>
              <p style={{ color: "rgba(232,238,248,0.5)", lineHeight: 1.75, marginTop: 16, maxWidth: 400 }}>
                A four-phase pipeline that takes your data from chaotic source to structured, decision-ready output.
              </p>
            </div>
            <div className="dp-reveal-right" data-delay="100">
              {process.map((p, i) => (
                <div className="dp-step" key={i}>
                  <div className="dp-step-num">{p.n}</div>
                  <div>
                    <h4 style={{ fontWeight: 600, fontSize: "1.05rem", color: "#fff", marginBottom: 8 }}>{p.title}</h4>
                    <p style={{ color: "rgba(232,238,248,0.5)", fontSize: "0.93rem", lineHeight: 1.7 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="dp-cta dp-section">
        <div className="dp-cta-glow" />
        <div className="dp-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="dp-reveal">
            <div className="dp-badge" style={{ justifyContent: "center", display: "inline-flex" }}>
              <Zap size={13} color="#C9A84C" /> Ready to Process
            </div>
            <h2 className="dp-h2" style={{ maxWidth: 700, margin: "0 auto 16px" }}>
              Unlock the Value<br />in Your <em>Data</em>
            </h2>
            <p style={{ color: "rgba(232,238,248,0.55)", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.75 }}>
              Tell us your data challenge. We'll design a custom processing solution that delivers accuracy, speed, and insights at scale.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact-us" className="dp-btn-primary">
                Get Started <ArrowRight size={18} className="dp-arrow" />
              </Link>
              <Link to="/services" className="dp-btn-outline">View All Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Data_Processing;
