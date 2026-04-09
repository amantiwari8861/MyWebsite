// import React, { useEffect } from "react";
// import ServiceNavbar from '../components/ServiceNavbar';
// import { Link, useLocation } from "react-router-dom";
// import {
//   Smartphone,
//   Tablet,
//   Layers,
//   ShieldCheck,
//   Zap,
//   Code,
//   CheckCircle,
//   Rocket,
//   ArrowRight,
//   Apple,
//   Play,
//   Crosshair,
//   Star,
//   Users,
//   Clock,
//   Award,
// } from "lucide-react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Mobile_App_Development = () => {
//   const location = useLocation();

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const serviceNavLinks = [
//     { name: "Software Development", to: "/software-development" },
//     { name: "Website Development", to: "/website-development" },
//     { name: "Mobile App Development", to: "/mobile-app-development" },
//     { name: "Cloud Solutions", to: "/cloud-solutions" },
//   ];

//   const services = [
//     {
//       icon: <Apple size={32} className="text-blue-600" />,
//       title: "iOS App Development",
//       description:
//         "Native iOS applications built with Swift and Objective-C for optimal performance on Apple devices.",
//     },
//     {
//       icon: <Play size={32} className="text-blue-600" />,
//       title: "Android App Development",
//       description:
//         "Native Android applications using Kotlin and Java for seamless user experiences on Android devices.",
//     },
//     {
//       icon: <Layers size={32} className="text-blue-600" />,
//       title: "Cross-Platform Apps",
//       description:
//         "React Native and Flutter applications that work perfectly on both iOS and Android platforms.",
//     },
//     {
//       icon: <Code size={32} className="text-blue-600" />,
//       title: "App UI/UX Design",
//       description:
//         "Intuitive and engaging user interfaces designed for maximum user satisfaction and conversion.",
//     },
//     {
//       icon: <ShieldCheck size={32} className="text-blue-600" />,
//       title: "App Testing & QA",
//       description:
//         "Comprehensive testing services to ensure your app is bug-free and performs flawlessly.",
//     },
//     {
//       icon: <Rocket size={32} className="text-blue-600" />,
//       title: "App Maintenance",
//       description:
//         "Ongoing support, updates, and maintenance to keep your app current and competitive.",
//     },
//   ];

//   const features = [
//     "Native Performance Excellence",
//     "User-Centric Design Approach",
//     "Security-First Development",
//     "Agile Development Process",
//     "Cross-Platform Solutions",
//     "24/7 Technical Support",
//   ];

//   const stats = [
//     { value: "300+", label: "Apps Developed" },
//     { value: "95%", label: "Client Satisfaction" },
//     { value: "2M+", label: "App Downloads" },
//     { value: "50+", label: "Industries Served" },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 pt-28 pb-20">
//       {/* HERO SECTION */}
//       <section className="py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div data-aos="fade-right">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
//                 <Smartphone size={16} />
//                 Mobile App Development Services
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
//                 Build Exceptional{" "}
//                 <span className="text-blue-600">Mobile Experiences</span>
//               </h1>

//               <p className="text-slate-600 text-xl leading-relaxed mb-8 max-w-2xl">
//                 We create innovative mobile applications that engage users,
//                 drive business growth, and deliver exceptional performance
//                 across all platforms.
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <Link
//                   to="/contact-us"
//                   className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group no-underline"
//                 >
//                   Start Your App
//                   <ArrowRight
//                     size={20}
//                     className="group-hover:translate-x-1 transition-transform"
//                   />
//                 </Link>
//                 <Link
//                   to="/case-studies"
//                   className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all no-underline"
//                 >
//                   View Our Apps
//                 </Link>
//               </div>
//             </div>

//             <div data-aos="fade-left" className="relative">
//               <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 shadow-2xl">
//                 <img
//                   src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
//                   className="rounded-2xl w-full h-auto object-cover shadow-lg"
//                   alt="Mobile App Development"
//                 />
//                 <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
//                   <div className="flex items-center gap-2">
//                     <Star className="text-yellow-400 fill-current" size={20} />
//                     <span className="font-bold text-slate-900">4.9/5</span>
//                     <span className="text-slate-600 text-sm">
//                       Client Rating
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SIMPLE SERVICE NAVBAR */}
//       <section className="px-6 mb-12">
//         <div className="max-w-7xl mx-auto" data-aos="fade-up">
//           <div className="overflow-x-auto">
//             <nav className="flex items-center gap-3 rounded-full bg-slate-100 p-2 shadow-sm">
//               {serviceNavLinks.map((link) => {
//                 const isActive = location.pathname === link.to;
//                 return (
//                   <Link
//                     key={link.to}
//                     to={link.to}
//                     className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition ${
//                       isActive
//                         ? "bg-blue-600 text-white"
//                         : "text-slate-700 hover:bg-white hover:text-blue-600"
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 );
//               })}
//             </nav>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES GRID */}

//       <ServiceNavbar />
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16" data-aos="fade-up">
//             <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
//               Our <span className="text-blue-600">Services</span>
//             </h2>
//             <p className="text-slate-600 text-xl max-w-3xl mx-auto">
//               Comprehensive mobile app development solutions from concept to app
//               store launch and beyond
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
//                 <span className="text-blue-600">Mobile App Development</span>{" "}
//                 Services?
//               </h2>

//               <div className="space-y-4">
//                 {features.map((feature, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-4"
//                     data-aos="fade-up"
//                     data-aos-delay={index * 50}
//                   >
//                     <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
//                       <CheckCircle size={14} className="text-white" />
//                     </div>
//                     <span className="text-slate-700 font-medium">
//                       {feature}
//                     </span>
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
//                   <div className="text-slate-600 font-medium">{stat.label}</div>
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
//             Ready to Launch Your{" "}
//             <span className="text-blue-400">Mobile App</span>?
//           </h2>

//           <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
//             Let's turn your app idea into reality. From concept to launch, we'll
//             guide you through every step of the process.
//           </p>

//           <div className="flex flex-wrap justify-center gap-4">
//             <Link
//               to="/contact-us"
//               className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group no-underline"
//             >
//               Get Started Now
//               <ArrowRight
//                 size={20}
//                 className="group-hover:translate-x-1 transition-transform"
//               />
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

// export default Mobile_App_Development;


import React, { useEffect } from "react";
import ServiceNavbar from '../components/ServiceNavbar';
import { Link, useLocation } from "react-router-dom";
import {
  Smartphone, Layers, ShieldCheck, Code,
  Rocket, CheckCircle, ArrowRight, Apple, Play, Star,
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

  .ma-root * { box-sizing:border-box;margin:0;padding:0; }
  .ma-root {
    font-family:'Outfit',sans-serif;
    background:var(--ink);
    color:var(--ice);
    min-height:100vh;
    overflow-x:hidden;
  }

  /* noise */
  .ma-root::before {
    content:'';position:fixed;inset:0;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events:none;z-index:0;opacity:.45;
  }

  /* mesh */
  .ma-mesh { position:absolute;inset:0;z-index:0;overflow:hidden; }
  .ma-mesh span {
    position:absolute;border-radius:50%;filter:blur(100px);
    animation:ma-drift 13s ease-in-out infinite alternate;
  }
  .ma-mesh span:nth-child(1){width:560px;height:560px;top:-100px;left:-80px;background:rgba(201,168,76,0.07);animation-delay:0s;}
  .ma-mesh span:nth-child(2){width:460px;height:460px;bottom:-60px;right:-60px;background:rgba(100,80,220,0.06);animation-delay:-5s;}
  .ma-mesh span:nth-child(3){width:300px;height:300px;top:50%;left:58%;background:rgba(201,168,76,0.05);animation-delay:-9s;}
  @keyframes ma-drift { to{transform:translate(35px,28px) scale(1.07);} }

  /* badge */
  .ma-badge {
    display:inline-flex;align-items:center;gap:8px;
    padding:6px 18px;border-radius:99px;
    border:1px solid rgba(201,168,76,0.4);
    background:rgba(201,168,76,0.08);
    color:var(--gold-lt);font-size:0.78rem;
    font-weight:600;letter-spacing:0.12em;text-transform:uppercase;
    margin-bottom:22px;
  }

  /* headings */
  .ma-h1 {
    font-family:'Cormorant Garamond',serif;
    font-size:clamp(3rem,7vw,5.4rem);
    font-weight:700;line-height:1.06;
    letter-spacing:-0.02em;color:#fff;margin-bottom:24px;
  }
  .ma-h1 em { color:var(--gold);font-style:normal; }
  .ma-h2 {
    font-family:'Cormorant Garamond',serif;
    font-size:clamp(2.2rem,4.5vw,3.6rem);
    font-weight:700;line-height:1.1;color:#fff;margin-bottom:12px;
  }
  .ma-h2 em { color:var(--gold);font-style:normal; }

  /* buttons */
  .ma-btn-primary {
    display:inline-flex;align-items:center;gap:10px;
    background:var(--gold);color:var(--ink);
    padding:14px 32px;border-radius:var(--radius);
    font-weight:700;font-size:0.95rem;letter-spacing:0.02em;
    text-decoration:none;transition:var(--t);
    box-shadow:0 0 0 0 var(--glow);
  }
  .ma-btn-primary:hover {
    background:var(--gold-lt);
    box-shadow:0 0 32px 4px var(--glow);
    transform:translateY(-2px);
  }
  .ma-btn-outline {
    display:inline-flex;align-items:center;gap:10px;
    border:1.5px solid rgba(232,238,248,0.22);
    color:var(--ice);background:transparent;
    padding:14px 32px;border-radius:var(--radius);
    font-weight:600;font-size:0.95rem;
    text-decoration:none;transition:var(--t);
  }
  .ma-btn-outline:hover {
    border-color:var(--gold);color:var(--gold);
    background:var(--gold-dim);transform:translateY(-2px);
  }

  /* service cards */
  .ma-card {
    background:var(--mist);
    border:1px solid rgba(232,238,248,0.07);
    border-radius:22px;padding:36px 32px;
    transition:var(--t);position:relative;overflow:hidden;cursor:default;
  }
  .ma-card::before {
    content:'';position:absolute;inset:0;
    background:linear-gradient(135deg,rgba(201,168,76,0.06) 0%,transparent 60%);
    opacity:0;transition:var(--t);
  }
  .ma-card:hover { transform:translateY(-6px);border-color:rgba(201,168,76,0.3);background:rgba(255,255,255,0.04); }
  .ma-card:hover::before { opacity:1; }
  .ma-card:hover .ma-card-icon { background:var(--gold-dim);border-color:rgba(201,168,76,0.4); }
  .ma-card-icon {
    width:58px;height:58px;border-radius:14px;
    background:rgba(255,255,255,0.04);
    border:1px solid rgba(255,255,255,0.1);
    display:flex;align-items:center;justify-content:center;
    margin-bottom:22px;transition:var(--t);
  }

  /* phone mockup */
  .ma-phone-wrap {
    position:relative;
    display:flex;justify-content:center;align-items:flex-end;
    gap:24px;
  }
  .ma-phone {
    background:linear-gradient(160deg,#1a2540 0%,#0d1322 100%);
    border:1px solid rgba(232,238,248,0.12);
    border-radius:36px;
    overflow:hidden;
    box-shadow:0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05);
    transition:var(--t);
  }
  .ma-phone:hover { transform:translateY(-6px); }
  .ma-phone-main { width:180px;height:340px; }
  .ma-phone-side { width:150px;height:280px;opacity:0.7; }
  .ma-phone-screen {
    width:100%;height:100%;
    display:flex;flex-direction:column;
    align-items:center;justify-content:center;
    gap:12px;padding:24px 16px;
  }
  .ma-phone-notch {
    width:60px;height:6px;background:rgba(255,255,255,0.08);
    border-radius:99px;margin-bottom:8px;
  }
  .ma-phone-bar {
    width:100%;height:8px;background:rgba(201,168,76,0.15);
    border-radius:99px;
  }
  .ma-phone-bar-sm { width:70%;height:6px; }
  .ma-phone-bar-xs { width:50%;height:6px; }
  .ma-phone-icon-row { display:flex;gap:10px;margin-top:4px; }
  .ma-phone-icon-box {
    width:40px;height:40px;border-radius:12px;
    background:rgba(201,168,76,0.1);
    border:1px solid rgba(201,168,76,0.2);
    display:flex;align-items:center;justify-content:center;
  }

  /* platform pills */
  .ma-platform-row {
    position:absolute;bottom:-18px;left:50%;transform:translateX(-50%);
    display:flex;gap:10px;
  }
  .ma-platform-pill {
    background:#fff;border-radius:12px;
    padding:8px 14px;
    box-shadow:0 10px 30px rgba(0,0,0,0.45);
    display:flex;align-items:center;gap:7px;
    color:var(--ink);font-weight:700;font-size:0.82rem;
    white-space:nowrap;
  }

  /* stat cards */
  .ma-stat {
    background:var(--ink-soft);
    border:1px solid rgba(201,168,76,0.15);
    border-radius:20px;padding:36px 28px;
    text-align:center;transition:var(--t);
  }
  .ma-stat:hover { border-color:var(--gold);transform:scale(1.03); }
  .ma-stat-val {
    font-family:'Cormorant Garamond',serif;
    font-size:3rem;font-weight:700;
    color:var(--gold);line-height:1;margin-bottom:8px;
  }

  /* feature list */
  .ma-feature-item {
    display:flex;align-items:center;gap:14px;
    padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.05);
    transition:var(--t);
  }
  .ma-feature-item:last-child { border-bottom:none; }
  .ma-feature-item:hover { padding-left:6px; }
  .ma-feature-dot {
    width:30px;height:30px;flex-shrink:0;border-radius:50%;
    background:var(--gold-dim);border:1px solid rgba(201,168,76,0.35);
    display:flex;align-items:center;justify-content:center;
  }

  /* process */
  .ma-step {
    display:flex;gap:20px;align-items:flex-start;
    padding:24px 0;border-bottom:1px solid rgba(255,255,255,0.05);
  }
  .ma-step:last-child { border-bottom:none; }
  .ma-step-num {
    font-family:'Cormorant Garamond',serif;
    font-size:2.4rem;font-weight:700;
    color:var(--gold);opacity:0.5;line-height:1;min-width:52px;
  }

  /* cta */
  .ma-cta {
    background:linear-gradient(135deg,var(--ink-soft) 0%,var(--ink-mid) 100%);
    border-top:1px solid rgba(201,168,76,0.12);
    position:relative;overflow:hidden;
  }
  .ma-cta-glow {
    position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
    width:700px;height:400px;
    background:radial-gradient(ellipse,rgba(201,168,76,0.1) 0%,transparent 70%);
    pointer-events:none;
  }

  /* scroll reveal */
  .ma-reveal { opacity:0;transform:translateY(36px);transition:opacity 0.7s ease,transform 0.7s ease; }
  .ma-reveal.visible { opacity:1;transform:translateY(0); }
  .ma-reveal-left { opacity:0;transform:translateX(-40px);transition:opacity 0.7s ease,transform 0.7s ease; }
  .ma-reveal-left.visible { opacity:1;transform:translateX(0); }
  .ma-reveal-right { opacity:0;transform:translateX(40px);transition:opacity 0.7s ease,transform 0.7s ease; }
  .ma-reveal-right.visible { opacity:1;transform:translateX(0); }

  @keyframes ma-bounce-x { 0%,100%{transform:translateX(0)}50%{transform:translateX(5px)} }
  .ma-btn-primary:hover .ma-arrow { animation:ma-bounce-x 0.6s ease infinite; }

  /* phone float animation */
  @keyframes ma-float { 0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)} }
  .ma-phone-main { animation:ma-float 5s ease-in-out infinite; }
  .ma-phone-side:first-of-type { animation:ma-float 5s ease-in-out infinite 0.8s; }
  .ma-phone-side:last-of-type  { animation:ma-float 5s ease-in-out infinite 1.6s; }

  /* rating */
  .ma-rating {
    position:absolute;top:-18px;right:-10px;
    background:#fff;border-radius:14px;padding:10px 18px;
    box-shadow:0 12px 40px rgba(0,0,0,0.5);
    display:flex;align-items:center;gap:8px;
    color:var(--ink);font-weight:700;font-size:0.88rem;
  }

  /* layout */
  .ma-section { padding:96px 24px;position:relative;z-index:1; }
  .ma-container { max-width:1200px;margin:0 auto; }
  .ma-grid-2 { display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center; }
  .ma-grid-3 { display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:24px; }
  .ma-grid-stats { display:grid;grid-template-columns:1fr 1fr;gap:20px; }
  .ma-hr { border:none;border-top:1px solid rgba(255,255,255,0.07);margin:0; }

  @media(max-width:900px) {
    .ma-grid-2 { grid-template-columns:1fr; }
  }
  @media(max-width:600px) {
    .ma-grid-stats { grid-template-columns:1fr; }
    .ma-h1 { font-size:2.6rem; }
    .ma-phone-side { display:none; }
  }
`;

/* ─────────────────────────────────────────
   REVEAL HOOK
───────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".ma-reveal,.ma-reveal-left,.ma-reveal-right");
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
  { icon: <Apple size={26} color="#C9A84C" />, title: "iOS App Development", desc: "Native iOS apps built with Swift — fluid animations, tight system integration, and App Store-ready from day one." },
  { icon: <Play size={26} color="#C9A84C" />, title: "Android App Development", desc: "Kotlin-first Android apps with Material You design, optimised for the full spectrum of Android devices and OS versions." },
  { icon: <Layers size={26} color="#C9A84C" />, title: "Cross-Platform Apps", desc: "React Native and Flutter solutions that share a single codebase while delivering truly native-grade performance on both platforms." },
  { icon: <Code size={26} color="#C9A84C" />, title: "App UI / UX Design", desc: "Research-driven interface design that reduces friction, boosts retention, and turns first-time users into loyal advocates." },
  { icon: <ShieldCheck size={26} color="#C9A84C" />, title: "Testing & QA", desc: "Automated and manual testing across real devices — functional, performance, security, and accessibility — before every release." },
  { icon: <Rocket size={26} color="#C9A84C" />, title: "App Maintenance", desc: "Proactive OS updates, performance monitoring, and iterative feature delivery to keep your app competitive and crash-free." },
];

const features = [
  "Native Performance Excellence",
  "User-Centric Design Approach",
  "Security-First Development",
  "Agile Development Process",
  "Cross-Platform Expertise",
  "24 / 7 Technical Support",
];

const stats = [
  { value: "300+", label: "Apps Developed" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "2M+", label: "Total App Downloads" },
  { value: "50+", label: "Industries Served" },
];

const process = [
  { n: "01", title: "Concept & Discovery", desc: "User research, competitive analysis, and feature mapping to define an app that solves real problems and stands out in the store." },
  { n: "02", title: "Wireframes & Prototyping", desc: "Interactive prototypes validated with real users before development begins — saving time, money, and rework." },
  { n: "03", title: "Development & Testing", desc: "Sprint-based builds with continuous integration, automated tests, and regular client demos at every milestone." },
  { n: "04", title: "Launch & Grow", desc: "Store submission, ASO setup, and post-launch analytics to drive installs, track retention, and plan the next release." },
];

/* ─────────────────────────────────────────
   PHONE MOCKUP COMPONENT
───────────────────────────────────────── */
const PhoneMockup = ({ size = "main" }) => {
  const isMain = size === "main";
  return (
    <div className={`ma-phone ${isMain ? "ma-phone-main" : "ma-phone-side"}`}>
      <div className="ma-phone-screen">
        <div className="ma-phone-notch" />
        <div style={{ width: "100%", height: isMain ? 80 : 60, borderRadius: 14, background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)", marginBottom: 10 }} />
        <div className="ma-phone-bar" />
        <div className="ma-phone-bar ma-phone-bar-sm" />
        <div className="ma-phone-bar ma-phone-bar-xs" />
        {isMain && (
          <div className="ma-phone-icon-row">
            {[Apple, Play, Smartphone].map((Icon, i) => (
              <div className="ma-phone-icon-box" key={i}><Icon size={18} color="#C9A84C" /></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
const Mobile_App_Development = () => {
  const location = useLocation();
  useReveal();

  return (
    <div className="ma-root">
      <style>{globalCSS}</style>

      {/* ── HERO ── */}
      <section className="ma-section" style={{ paddingTop: 140, minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div className="ma-mesh"><span /><span /><span /></div>
        <div className="ma-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="ma-grid-2">

            {/* Left */}
            <div className="ma-reveal">
              <div className="ma-badge"><Smartphone size={13} /> Mobile App Development</div>
              <h1 className="ma-h1">
                Build Exceptional<br /><em>Mobile</em><br />Experiences
              </h1>
              <p style={{ color: "rgba(232,238,248,0.65)", fontSize: "1.1rem", lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
                We engineer high-performance iOS and Android apps that captivate users, drive growth, and set new standards for mobile excellence.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link to="/contact-us" className="ma-btn-primary">
                  Start Your App <ArrowRight size={18} className="ma-arrow" />
                </Link>
                <Link to="/case-studies" className="ma-btn-outline">View Our Apps</Link>
              </div>
            </div>

            {/* Right — phone mockups */}
            <div className="ma-reveal-right" style={{ position: "relative", paddingBottom: 40 }} data-delay="150">
              <div className="ma-phone-wrap">
                <PhoneMockup size="side" />
                <PhoneMockup size="main" />
                <PhoneMockup size="side" />
              </div>
              <div className="ma-platform-row">
                <div className="ma-platform-pill">
                  <Apple size={15} color="#111" /> iOS
                </div>
                <div className="ma-platform-pill">
                  <Play size={15} color="#3DDC84" /> Android
                </div>
                <div className="ma-platform-pill">
                  <Layers size={15} color="#0081FB" /> Cross-Platform
                </div>
              </div>
              <div className="ma-rating">
                <Star size={16} fill="#F5C518" color="#F5C518" />
                <span>4.9 / 5</span>
                <span style={{ color: "#888", fontWeight: 400 }}>Client Rating</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ServiceNavbar />
      <hr className="ma-hr" />

      {/* ── SERVICES ── */}
      <section className="ma-section">
        <div className="ma-container">
          <div className="ma-reveal" style={{ marginBottom: 64 }}>
            <div className="ma-badge"><Code size={13} /> What We Build</div>
            <h2 className="ma-h2">Our <em>Services</em></h2>
            <p style={{ color: "rgba(232,238,248,0.55)", fontSize: "1.05rem", maxWidth: 540, marginTop: 14 }}>
              Full-lifecycle mobile development from concept and design through to launch and growth.
            </p>
          </div>
          <div className="ma-grid-3">
            {services.map((s, i) => (
              <div className="ma-card ma-reveal" key={i} data-delay={i * 80}>
                <div className="ma-card-icon">{s.icon}</div>
                <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "1.05rem", color: "#fff", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: "rgba(232,238,248,0.5)", fontSize: "0.92rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="ma-hr" />

      {/* ── WHY US + STATS ── */}
      <section className="ma-section" style={{ background: "linear-gradient(180deg,var(--ink) 0%,var(--ink-soft) 100%)" }}>
        <div className="ma-container">
          <div className="ma-grid-2">
            <div className="ma-reveal-left">
              <div className="ma-badge"><CheckCircle size={13} /> Why Choose Us</div>
              <h2 className="ma-h2">Engineered for<br /><em>Excellence</em></h2>
              <p style={{ color: "rgba(232,238,248,0.5)", marginBottom: 32, lineHeight: 1.7 }}>
                We combine technical depth with design thinking to build apps that users love and businesses rely on.
              </p>
              <div>
                {features.map((f, i) => (
                  <div className="ma-feature-item" key={i}>
                    <div className="ma-feature-dot">
                      <CheckCircle size={14} color="#C9A84C" />
                    </div>
                    <span style={{ fontWeight: 500, color: "rgba(232,238,248,0.85)", fontSize: "0.97rem" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ma-reveal-right" data-delay="100">
              <div className="ma-grid-stats">
                {stats.map((s, i) => (
                  <div className="ma-stat" key={i}>
                    <div className="ma-stat-val">{s.value}</div>
                    <div style={{ color: "rgba(232,238,248,0.5)", fontSize: "0.88rem", fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="ma-hr" />

      {/* ── PROCESS ── */}
      <section className="ma-section">
        <div className="ma-container">
          <div className="ma-grid-2" style={{ alignItems: "flex-start" }}>
            <div className="ma-reveal-left" style={{ position: "sticky", top: 100 }}>
              <div className="ma-badge">Our Process</div>
              <h2 className="ma-h2">Idea to<br /><em>App Store</em></h2>
              <p style={{ color: "rgba(232,238,248,0.5)", lineHeight: 1.75, marginTop: 16, maxWidth: 400 }}>
                A proven four-step process that turns your vision into a polished, store-ready app on schedule and on budget.
              </p>
            </div>
            <div className="ma-reveal-right" data-delay="100">
              {process.map((p, i) => (
                <div className="ma-step" key={i}>
                  <div className="ma-step-num">{p.n}</div>
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
      <section className="ma-cta ma-section">
        <div className="ma-cta-glow" />
        <div className="ma-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="ma-reveal">
            <div className="ma-badge" style={{ justifyContent: "center", display: "inline-flex" }}>
              <Rocket size={13} color="#C9A84C" /> Ready to Launch
            </div>
            <h2 className="ma-h2" style={{ maxWidth: 700, margin: "0 auto 16px" }}>
              Launch Your<br /><em>Mobile App</em>
            </h2>
            <p style={{ color: "rgba(232,238,248,0.55)", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.75 }}>
              From concept to the App Store — we guide every step of the journey and build apps your users will love.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact-us" className="ma-btn-primary">
                Get Started Now <ArrowRight size={18} className="ma-arrow" />
              </Link>
              <Link to="/services" className="ma-btn-outline">View All Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mobile_App_Development;
