// import React, { useEffect } from "react";
// import ServiceNavbar from '../components/ServiceNavbar';
// import { Link } from "react-router-dom";
// import {
//   Layers,
//   Share2,
//   Database,
//   ShieldCheck,
//   Zap,
//   Network,
//   CheckCircle,
//   ArrowRight,
//   Settings,
//   Globe,
//   BarChart3,
//   Users,
//   Star,
//   Clock,
//   Award
// } from "lucide-react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const System_Integration = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const services = [
//     {
//       icon: <Network size={32} className="text-blue-600" />,
//       title: "API Integration",
//       description: "Seamlessly connect disparate systems through robust API development and integration services."
//     },
//     {
//       icon: <Database size={32} className="text-blue-600" />,
//       title: "Database Integration",
//       description: "Unify data across multiple databases and systems for consistent and reliable information access."
//     },
//     {
//       icon: <Layers size={32} className="text-blue-600" />,
//       title: "Application Integration",
//       description: "Connect enterprise applications including ERP, CRM, and custom software systems."
//     },
//     {
//       icon: <ShieldCheck size={32} className="text-blue-600" />,
//       title: "Security Integration",
//       description: "Implement secure integration solutions with encryption, authentication, and compliance."
//     },
//     {
//       icon: <Zap size={32} className="text-blue-600" />,
//       title: "Real-time Data Sync",
//       description: "Enable real-time data synchronization between systems for instant information updates."
//     },
//     {
//       icon: <Share2 size={32} className="text-blue-600" />,
//       title: "Legacy System Modernization",
//       description: "Modernize and integrate legacy systems with contemporary technologies and platforms."
//     }
//   ];

//   const features = [
//     "Seamless System Connectivity",
//     "Enterprise-Grade Security",
//     "Performance Optimization",
//     "Scalable Integration Solutions",
//     "Real-time Data Synchronization",
//     "Legacy System Modernization"
//   ];

//   const stats = [
//     { value: "300+", label: "Systems Integrated" },
//     { value: "99.5%", label: "Uptime Guarantee" },
//     { value: "50%", label: "Performance Boost" },
//     { value: "24/7", label: "Monitoring" }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 pt-28 pb-20">
//       {/* HERO SECTION */}
//       <section className="py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div data-aos="fade-right">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
//                 <Settings size={16} />
//                 System Integration Services
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
//                 Connect Your{" "}
//                 <span className="text-blue-600">Enterprise Systems</span>
//               </h1>

//               <p className="text-slate-600 text-xl leading-relaxed mb-8 max-w-2xl">
//                 Seamlessly integrate disparate systems, applications, and data sources to create a unified, efficient enterprise ecosystem that drives productivity and innovation.
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <Link
//                   to="/contact-us"
//                   className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group no-underline"
//                 >
//                   Get Started
//                   <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//                 </Link>
//                 <Link
//                   to="/case-studies"
//                   className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all no-underline"
//                 >
//                   View Integrations
//                 </Link>
//               </div>
//             </div>

//             <div data-aos="fade-left" className="relative">
//               <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 shadow-2xl">
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="text-center p-4 bg-white rounded-xl shadow-sm">
//                     <Network className="mx-auto mb-2 text-blue-600" size={32} />
//                     <div className="text-lg font-bold text-slate-900">API</div>
//                     <div className="text-xs text-slate-600">Integration</div>
//                   </div>
//                   <div className="text-center p-4 bg-white rounded-xl shadow-sm">
//                     <Database className="mx-auto mb-2 text-blue-600" size={32} />
//                     <div className="text-lg font-bold text-slate-900">Database</div>
//                     <div className="text-xs text-slate-600">Sync</div>
//                   </div>
//                   <div className="text-center p-4 bg-white rounded-xl shadow-sm">
//                     <Layers className="mx-auto mb-2 text-blue-600" size={32} />
//                     <div className="text-lg font-bold text-slate-900">Legacy</div>
//                     <div className="text-xs text-slate-600">Modernization</div>
//                   </div>
//                   <div className="text-center p-4 bg-white rounded-xl shadow-sm">
//                     <ShieldCheck className="mx-auto mb-2 text-blue-600" size={32} />
//                     <div className="text-lg font-bold text-slate-900">Security</div>
//                     <div className="text-xs text-slate-600">First</div>
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
//               Integration <span className="text-blue-600">Services</span>
//             </h2>
//             <p className="text-slate-600 text-xl max-w-3xl mx-auto">
//               Scalable solutions for modern enterprises with seamless system connectivity
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
//                 <span className="text-blue-600">Integration Services</span>{" "}
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
//             Ready to Integrate Your{" "}
//             <span className="text-blue-400">Systems</span>?
//           </h2>

//           <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
//             Let's design a comprehensive integration strategy that connects all your enterprise systems seamlessly.
//           </p>

//           <div className="flex flex-wrap justify-center gap-4">
//             <Link
//               to="/contact-us"
//               className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group no-underline"
//             >
//               Start Integration
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

// export default System_Integration;


import React, { useEffect } from "react";
import ServiceNavbar from '../components/ServiceNavbar';
import { Link } from "react-router-dom";
import {
  Layers, Share2, Database, ShieldCheck, Zap,
  Network, CheckCircle, ArrowRight, Settings, Star,
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
    --transition: 0.45s cubic-bezier(0.22,1,0.36,1);
  }

  .si-root * { box-sizing:border-box;margin:0;padding:0; }
  .si-root {
    font-family:'Outfit',sans-serif;
    background:var(--ink);
    color:var(--ice);
    min-height:100vh;
    overflow-x:hidden;
  }

  /* noise overlay */
  .si-root::before {
    content:'';position:fixed;inset:0;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events:none;z-index:0;opacity:.45;
  }

  /* gradient mesh */
  .si-mesh { position:absolute;inset:0;z-index:0;overflow:hidden; }
  .si-mesh span {
    position:absolute;border-radius:50%;filter:blur(90px);
    animation:si-drift 14s ease-in-out infinite alternate;
  }
  .si-mesh span:nth-child(1){width:580px;height:580px;top:-100px;left:-80px;background:rgba(201,168,76,0.07);animation-delay:0s;}
  .si-mesh span:nth-child(2){width:480px;height:480px;bottom:-60px;right:-60px;background:rgba(80,120,220,0.07);animation-delay:-5s;}
  .si-mesh span:nth-child(3){width:320px;height:320px;top:45%;left:60%;background:rgba(201,168,76,0.05);animation-delay:-9s;}
  @keyframes si-drift { to{transform:translate(35px,28px) scale(1.07);} }

  /* badge */
  .si-badge {
    display:inline-flex;align-items:center;gap:8px;
    padding:6px 18px;border-radius:99px;
    border:1px solid rgba(201,168,76,0.4);
    background:rgba(201,168,76,0.08);
    color:var(--gold-lt);font-size:0.78rem;
    font-weight:600;letter-spacing:0.12em;text-transform:uppercase;
    margin-bottom:22px;
  }

  /* headings */
  .si-h1 {
    font-family:'Cormorant Garamond',serif;
    font-size:clamp(3rem,7vw,5.4rem);
    font-weight:700;line-height:1.06;
    letter-spacing:-0.02em;color:#fff;margin-bottom:24px;
  }
  .si-h1 em { color:var(--gold);font-style:normal; }
  .si-h2 {
    font-family:'Cormorant Garamond',serif;
    font-size:clamp(2.2rem,4.5vw,3.6rem);
    font-weight:700;line-height:1.1;color:#fff;margin-bottom:12px;
  }
  .si-h2 em { color:var(--gold);font-style:normal; }

  /* buttons */
  .si-btn-primary {
    display:inline-flex;align-items:center;gap:10px;
    background:var(--gold);color:var(--ink);
    padding:14px 32px;border-radius:var(--radius);
    font-weight:700;font-size:0.95rem;letter-spacing:0.02em;
    text-decoration:none;transition:var(--transition);
    box-shadow:0 0 0 0 var(--glow);
  }
  .si-btn-primary:hover {
    background:var(--gold-lt);
    box-shadow:0 0 32px 4px var(--glow);
    transform:translateY(-2px);
  }
  .si-btn-outline {
    display:inline-flex;align-items:center;gap:10px;
    border:1.5px solid rgba(232,238,248,0.22);
    color:var(--ice);background:transparent;
    padding:14px 32px;border-radius:var(--radius);
    font-weight:600;font-size:0.95rem;
    text-decoration:none;transition:var(--transition);
  }
  .si-btn-outline:hover {
    border-color:var(--gold);color:var(--gold);
    background:var(--gold-dim);transform:translateY(-2px);
  }

  /* service cards */
  .si-card {
    background:var(--mist);
    border:1px solid rgba(232,238,248,0.07);
    border-radius:22px;padding:36px 32px;
    transition:var(--transition);position:relative;overflow:hidden;cursor:default;
  }
  .si-card::before {
    content:'';position:absolute;inset:0;
    background:linear-gradient(135deg,rgba(201,168,76,0.06) 0%,transparent 60%);
    opacity:0;transition:var(--transition);
  }
  .si-card:hover { transform:translateY(-6px);border-color:rgba(201,168,76,0.3);background:rgba(255,255,255,0.04); }
  .si-card:hover::before { opacity:1; }
  .si-card:hover .si-card-icon { background:var(--gold-dim);border-color:rgba(201,168,76,0.4); }
  .si-card-icon {
    width:58px;height:58px;border-radius:14px;
    background:rgba(255,255,255,0.04);
    border:1px solid rgba(255,255,255,0.1);
    display:flex;align-items:center;justify-content:center;
    margin-bottom:22px;transition:var(--transition);
  }

  /* hero visual grid */
  .si-hero-grid {
    display:grid;grid-template-columns:1fr 1fr;gap:16px;
  }
  .si-hero-tile {
    background:rgba(255,255,255,0.04);
    border:1px solid rgba(232,238,248,0.09);
    border-radius:18px;padding:22px 18px;
    text-align:center;transition:var(--transition);
  }
  .si-hero-tile:hover {
    background:rgba(201,168,76,0.08);
    border-color:rgba(201,168,76,0.3);
    transform:translateY(-3px);
  }
  .si-hero-tile-label { font-size:1rem;font-weight:700;color:#fff;margin:10px 0 4px; }
  .si-hero-tile-sub   { font-size:0.78rem;color:rgba(232,238,248,0.45);letter-spacing:0.04em; }

  /* connector dots between tiles */
  .si-connector {
    position:absolute;inset:0;
    background:radial-gradient(circle at 50% 50%, rgba(201,168,76,0.1) 0%, transparent 70%);
    pointer-events:none;
  }

  /* stat cards */
  .si-stat {
    background:var(--ink-soft);
    border:1px solid rgba(201,168,76,0.15);
    border-radius:20px;padding:36px 28px;
    text-align:center;transition:var(--transition);
  }
  .si-stat:hover { border-color:var(--gold);transform:scale(1.03); }
  .si-stat-val {
    font-family:'Cormorant Garamond',serif;
    font-size:3rem;font-weight:700;
    color:var(--gold);line-height:1;margin-bottom:8px;
  }

  /* feature list */
  .si-feature-item {
    display:flex;align-items:center;gap:14px;
    padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.05);
    transition:var(--transition);
  }
  .si-feature-item:last-child { border-bottom:none; }
  .si-feature-item:hover { padding-left:6px; }
  .si-feature-dot {
    width:30px;height:30px;flex-shrink:0;border-radius:50%;
    background:var(--gold-dim);border:1px solid rgba(201,168,76,0.35);
    display:flex;align-items:center;justify-content:center;
  }

  /* cta */
  .si-cta {
    background:linear-gradient(135deg,var(--ink-soft) 0%,var(--ink-mid) 100%);
    border-top:1px solid rgba(201,168,76,0.12);
    position:relative;overflow:hidden;
  }
  .si-cta-glow {
    position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
    width:700px;height:400px;
    background:radial-gradient(ellipse,rgba(201,168,76,0.1) 0%,transparent 70%);
    pointer-events:none;
  }

  /* scroll reveal */
  .si-reveal { opacity:0;transform:translateY(36px);transition:opacity 0.7s ease,transform 0.7s ease; }
  .si-reveal.visible { opacity:1;transform:translateY(0); }
  .si-reveal-left { opacity:0;transform:translateX(-40px);transition:opacity 0.7s ease,transform 0.7s ease; }
  .si-reveal-left.visible { opacity:1;transform:translateX(0); }
  .si-reveal-right { opacity:0;transform:translateX(40px);transition:opacity 0.7s ease,transform 0.7s ease; }
  .si-reveal-right.visible { opacity:1;transform:translateX(0); }

  @keyframes si-bounce-x { 0%,100%{transform:translateX(0)}50%{transform:translateX(5px)} }
  .si-btn-primary:hover .si-arrow { animation:si-bounce-x 0.6s ease infinite; }

  /* rating badge */
  .si-rating {
    position:absolute;bottom:-18px;right:-18px;
    background:#fff;border-radius:16px;padding:12px 20px;
    box-shadow:0 12px 40px rgba(0,0,0,0.5);
    display:flex;align-items:center;gap:10px;
    color:var(--ink);font-weight:700;font-size:0.9rem;
  }

  /* process steps */
  .si-step {
    display:flex;gap:20px;align-items:flex-start;
    padding:24px 0;border-bottom:1px solid rgba(255,255,255,0.05);
  }
  .si-step:last-child { border-bottom:none; }
  .si-step-num {
    font-family:'Cormorant Garamond',serif;
    font-size:2.4rem;font-weight:700;
    color:var(--gold);opacity:0.5;
    line-height:1;min-width:52px;
  }

  /* layout */
  .si-section { padding:96px 24px;position:relative;z-index:1; }
  .si-container { max-width:1200px;margin:0 auto; }
  .si-grid-2 { display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center; }
  .si-grid-3 { display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:24px; }
  .si-grid-stats { display:grid;grid-template-columns:1fr 1fr;gap:20px; }
  .si-hr { border:none;border-top:1px solid rgba(255,255,255,0.07);margin:0; }

  @media(max-width:900px) {
    .si-grid-2 { grid-template-columns:1fr; }
    .si-hero-grid { grid-template-columns:1fr 1fr; }
  }
  @media(max-width:600px) {
    .si-grid-stats { grid-template-columns:1fr; }
    .si-h1 { font-size:2.6rem; }
  }
`;

/* ─────────────────────────────────────────
   REVEAL HOOK
───────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".si-reveal,.si-reveal-left,.si-reveal-right");
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
  { icon: <Network size={26} color="#C9A84C" />, title: "API Integration", desc: "Seamlessly connect disparate systems through battle-tested REST and GraphQL APIs — reliable, versioned, and documented." },
  { icon: <Database size={26} color="#C9A84C" />, title: "Database Integration", desc: "Unify data across multiple databases and warehouses for consistent, single-source-of-truth information access enterprise-wide." },
  { icon: <Layers size={26} color="#C9A84C" />, title: "Application Integration", desc: "Bridge ERP, CRM, HRMS, and custom applications into a coherent ecosystem that eliminates silos and manual hand-offs." },
  { icon: <ShieldCheck size={26} color="#C9A84C" />, title: "Security Integration", desc: "Zero-trust architecture with end-to-end encryption, OAuth 2.0, and compliance controls built into every integration layer." },
  { icon: <Zap size={26} color="#C9A84C" />, title: "Real-Time Data Sync", desc: "Event-driven pipelines powered by Kafka and WebSockets for sub-millisecond data propagation across all connected systems." },
  { icon: <Share2 size={26} color="#C9A84C" />, title: "Legacy Modernisation", desc: "Wrap, extend, and gradually replace ageing systems with modern adapters — zero downtime, full backward compatibility." },
];

const features = [
  "Seamless System Connectivity",
  "Enterprise-Grade Security",
  "Performance Optimisation",
  "Horizontally Scalable Solutions",
  "Real-Time Data Synchronisation",
  "Legacy System Modernisation",
];

const stats = [
  { value: "300+", label: "Systems Integrated" },
  { value: "99.5%", label: "Uptime Guarantee" },
  { value: "50%", label: "Avg. Performance Boost" },
  { value: "24 / 7", label: "Active Monitoring" },
];

const heroTiles = [
  { icon: <Network size={28} color="#C9A84C" />, label: "API", sub: "Integration" },
  { icon: <Database size={28} color="#C9A84C" />, label: "Database", sub: "Sync" },
  { icon: <Layers size={28} color="#C9A84C" />, label: "Legacy", sub: "Modernisation" },
  { icon: <ShieldCheck size={28} color="#C9A84C" />, label: "Security", sub: "First" },
];

const process = [
  { n: "01", title: "Audit & Discovery", desc: "We map every system, data flow, and integration point across your enterprise to expose gaps, redundancies, and risk." },
  { n: "02", title: "Architecture Design", desc: "A custom integration blueprint — middleware, event buses, API gateways — built for your exact scale and compliance requirements." },
  { n: "03", title: "Build & Test", desc: "Iterative development with rigorous contract testing, load simulation, and security penetration review at every milestone." },
  { n: "04", title: "Deploy & Monitor", desc: "Zero-downtime rollout followed by continuous observability dashboards, alerting, and proactive performance tuning." },
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
const System_Integration = () => {
  useReveal();

  return (
    <div className="si-root">
      <style>{globalCSS}</style>

      {/* ── HERO ── */}
      <section className="si-section" style={{ paddingTop: 140, minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div className="si-mesh"><span /><span /><span /></div>
        <div className="si-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="si-grid-2">

            {/* Left */}
            <div className="si-reveal">
              <div className="si-badge"><Settings size={13} /> System Integration</div>
              <h1 className="si-h1">
                Connect Your<br /><em>Enterprise</em><br />Systems
              </h1>
              <p style={{ color: "rgba(232,238,248,0.65)", fontSize: "1.1rem", lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
                Seamlessly integrate disparate applications, data sources, and legacy platforms into a unified ecosystem that accelerates productivity and drives innovation.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link to="/contact-us" className="si-btn-primary">
                  Get Started <ArrowRight size={18} className="si-arrow" />
                </Link>
                <Link to="/case-studies" className="si-btn-outline">View Integrations</Link>
              </div>
            </div>

            {/* Right — tiles */}
            <div className="si-reveal-right" style={{ position: "relative" }} data-delay="150">
              <div style={{
                background: "linear-gradient(135deg,rgba(27,38,64,0.9) 0%,rgba(16,23,42,0.9) 100%)",
                border: "1px solid rgba(232,238,248,0.08)",
                borderRadius: 28,
                padding: 32,
                position: "relative",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
              }}>
                <div className="si-connector" />
                {/* Decorative connecting lines SVG */}
                <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.15, pointerEvents: "none" }} viewBox="0 0 400 300">
                  <line x1="100" y1="75" x2="300" y2="75" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="100" y1="225" x2="300" y2="225" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="100" y1="75" x2="100" y2="225" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="300" y1="75" x2="300" y2="225" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="200" cy="150" r="20" fill="rgba(201,168,76,0.08)" stroke="#C9A84C" strokeWidth="1" />
                  <text x="200" y="155" textAnchor="middle" fill="#C9A84C" fontSize="10" fontFamily="Outfit,sans-serif" fontWeight="600">CORE</text>
                </svg>
                <div className="si-hero-grid" style={{ position: "relative", zIndex: 1 }}>
                  {heroTiles.map((t, i) => (
                    <div className="si-hero-tile" key={i}>
                      {t.icon}
                      <div className="si-hero-tile-label">{t.label}</div>
                      <div className="si-hero-tile-sub">{t.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="si-rating">
                <Star size={18} fill="#F5C518" color="#F5C518" />
                <span style={{ fontSize: "1.05rem" }}>4.9 / 5</span>
                <span style={{ color: "#888", fontWeight: 400 }}>Client Rating</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ServiceNavbar />
      <hr className="si-hr" />

      {/* ── SERVICES ── */}
      <section className="si-section">
        <div className="si-container">
          <div className="si-reveal" style={{ marginBottom: 64 }}>
            <div className="si-badge"><Network size={13} /> What We Integrate</div>
            <h2 className="si-h2">Integration <em>Services</em></h2>
            <p style={{ color: "rgba(232,238,248,0.55)", fontSize: "1.05rem", maxWidth: 540, marginTop: 14 }}>
              Scalable, secure connectivity solutions built for modern enterprise complexity.
            </p>
          </div>
          <div className="si-grid-3">
            {services.map((s, i) => (
              <div className="si-card si-reveal" key={i} data-delay={i * 80}>
                <div className="si-card-icon">{s.icon}</div>
                <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "1.05rem", color: "#fff", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: "rgba(232,238,248,0.5)", fontSize: "0.92rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="si-hr" />

      {/* ── WHY US + STATS ── */}
      <section className="si-section" style={{ background: "linear-gradient(180deg,var(--ink) 0%,var(--ink-soft) 100%)" }}>
        <div className="si-container">
          <div className="si-grid-2">
            <div className="si-reveal-left">
              <div className="si-badge"><CheckCircle size={13} /> Why Choose Us</div>
              <h2 className="si-h2">Built for<br /><em>Enterprise Scale</em></h2>
              <p style={{ color: "rgba(232,238,248,0.5)", marginBottom: 32, lineHeight: 1.7 }}>
                We don't just connect systems — we design integration architectures that are resilient, observable, and ready to scale with your business.
              </p>
              <div>
                {features.map((f, i) => (
                  <div className="si-feature-item" key={i}>
                    <div className="si-feature-dot">
                      <CheckCircle size={14} color="#C9A84C" />
                    </div>
                    <span style={{ fontWeight: 500, color: "rgba(232,238,248,0.85)", fontSize: "0.97rem" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="si-reveal-right" data-delay="100">
              <div className="si-grid-stats">
                {stats.map((s, i) => (
                  <div className="si-stat" key={i}>
                    <div className="si-stat-val">{s.value}</div>
                    <div style={{ color: "rgba(232,238,248,0.5)", fontSize: "0.88rem", fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="si-hr" />

      {/* ── PROCESS ── */}
      <section className="si-section">
        <div className="si-container">
          <div className="si-grid-2" style={{ alignItems: "flex-start" }}>
            <div className="si-reveal-left" style={{ position: "sticky", top: 100 }}>
              <div className="si-badge">Our Process</div>
              <h2 className="si-h2">From Audit<br />to <em>Live</em></h2>
              <p style={{ color: "rgba(232,238,248,0.5)", lineHeight: 1.75, marginTop: 16, maxWidth: 400 }}>
                A proven four-phase methodology that de-risks complex integrations and delivers measurable results on schedule.
              </p>
            </div>
            <div className="si-reveal-right" data-delay="100">
              {process.map((p, i) => (
                <div className="si-step" key={i}>
                  <div className="si-step-num">{p.n}</div>
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
      <section className="si-cta si-section">
        <div className="si-cta-glow" />
        <div className="si-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="si-reveal">
            <div className="si-badge" style={{ justifyContent: "center", display: "inline-flex" }}>
              <Star size={13} fill="#C9A84C" color="#C9A84C" /> Ready to Integrate
            </div>
            <h2 className="si-h2" style={{ maxWidth: 700, margin: "0 auto 16px" }}>
              Unify Your<br /><em>Enterprise Systems</em>
            </h2>
            <p style={{ color: "rgba(232,238,248,0.55)", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.75 }}>
              Let's design a comprehensive integration strategy that connects every system in your stack — reliably, securely, and at scale.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact-us" className="si-btn-primary">
                Start Integration <ArrowRight size={18} className="si-arrow" />
              </Link>
              <Link to="/services" className="si-btn-outline">View All Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default System_Integration;