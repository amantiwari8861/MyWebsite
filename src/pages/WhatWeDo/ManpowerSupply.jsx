import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Briefcase,
  ArrowRight,
  UserCheck,
  CheckCircle2,
  Target,
  ShieldCheck,
  Clock,
  TrendingUp,
  Award,
} from "lucide-react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

function ManpowerSupply() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const manpowerSubServices = [
    {
      title: "Staffing",
      to: "/services/staffing-solutions",
      icon: <Users size={28} />,
      description: "Flexible workforce solutions to scale your business.",
    },
    {
      title: "Recruitment",
      to: "/services/recruitment",
      icon: <UserCheck size={28} />,
      description: "Hire top-tier talent with fast hiring process.",
    },
    {
      title: "HR Services",
      to: "/services/hr-services",
      icon: <Briefcase size={28} />,
      description: "Payroll, compliance & HR management solutions.",
    },
  ];

  const stats = [
    { value: 5000, label: "Candidates", suffix: "+" },
    { value: 200, label: "Clients", suffix: "+" },
    { value: 15, label: "Industries", suffix: "+" },
    { value: 98, label: "Success", suffix: "%" },
  ];

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">

      {/* 🔥 BACKGROUND BLOBS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-30 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="pt-32 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Hire{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Smart Talent
              </span>
            </h1>

            <p className="text-gray-400 mb-10 text-lg">
              Premium manpower solutions for modern businesses.
            </p>

            <div className="flex gap-4">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  to="/contact-us"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl font-bold flex items-center gap-2"
                >
                  Hire Now <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#services"
                className="border border-white/20 px-8 py-4 rounded-xl font-bold"
              >
                Explore
              </motion.a>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="rounded-3xl shadow-2xl"
              alt=""
            />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto text-center gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl"
            >
              <h2 className="text-4xl font-black text-blue-400">
                <CountUp end={s.value} duration={2} />
                {s.suffix}
              </h2>
              <p className="text-gray-400">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black">Our Services</h2>
          <p className="text-gray-400">Premium workforce solutions</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
          {manpowerSubServices.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-3xl"
            >
              <div className="mb-6 text-blue-400">{service.icon}</div>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>

              <Link
                to={service.to}
                className="text-blue-400 flex items-center gap-2"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-black mb-6">
              Why Choose Us
            </h2>

            <div className="space-y-6 text-gray-400">
              <p>✔ Quality Screening</p>
              <p>✔ Fast Hiring</p>
              <p>✔ Full Compliance</p>
              <p>✔ Cost Effective</p>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 p-10 rounded-3xl"
          >
            <Award size={50} className="mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Trusted by Companies
            </h3>
            <p className="mb-6">
              We help businesses scale faster with top talent.
            </p>

            <Link
              to="/contact-us"
              className="bg-white text-black px-6 py-3 rounded-xl font-bold"
            >
              Get Started
            </Link>
          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default ManpowerSupply;




// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";

// // ─── Animated Counter Hook ────────────────────────────────────────────────────
// function useCountUp(target, duration = 1800, start = false) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!start) return;
//     let startTime = null;
//     const step = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);
//       setCount(Math.floor(progress * target));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [target, duration, start]);
//   return count;
// }

// // ─── Stat Item ────────────────────────────────────────────────────────────────
// function StatItem({ value, suffix, label, animate }) {
//   const count = useCountUp(value, 1800, animate);
//   return (
//     <div style={styles.statItem}>
//       <span style={styles.statNum}>
//         {animate ? count.toLocaleString() : value.toLocaleString()}
//         {suffix}
//       </span>
//       <span style={styles.statLabel}>{label}</span>
//     </div>
//   );
// }

// // ─── Main Component ───────────────────────────────────────────────────────────
// function ManpowerSupply() {
//   const statsRef = useRef(null);
//   const [statsVisible, setStatsVisible] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [hoveredWhy, setHoveredWhy] = useState(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
//       { threshold: 0.3 }
//     );
//     if (statsRef.current) observer.observe(statsRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const services = [
//     {
//       num: "01",
//       title: "Staffing",
//       to: "/services/staffing-solutions",
//       desc: "Flexible, scalable workforce solutions tailored to your operational demands — from project-based to permanent placements.",
//       icon: (
//         <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
//           <circle cx="17" cy="14" r="5.5" stroke="#C9A84C" strokeWidth="1.5" />
//           <circle cx="30" cy="14" r="5.5" stroke="#8B9BB4" strokeWidth="1.5" strokeDasharray="3 2" />
//           <path d="M4 38c0-7.18 5.82-13 13-13s13 5.82 13 13" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
//           <path d="M30 25c3.87 1.4 7 5.1 7 13" stroke="#8B9BB4" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" />
//         </svg>
//       ),
//     },
//     {
//       num: "02",
//       title: "Recruitment",
//       to: "/services/staffing-solutions",
//       desc: "Precision hiring with rigorous multi-stage screening. We source, assess, and deliver top-tier candidates aligned to your culture.",
//       icon: (
//         <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
//           <rect x="6" y="8" width="32" height="28" rx="2" stroke="#C9A84C" strokeWidth="1.5" />
//           <path d="M14 22l5 5 11-11" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       ),
//     },
//     {
//       num: "03",
//       title: "HR Services",
//       to: "/services/hr-outsourcing",
//       desc: "End-to-end HR outsourcing — payroll management, statutory compliance, and workforce administration at enterprise scale.",
//       icon: (
//         <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
//           <path d="M22 8L8 14v10c0 8.28 6.08 16.03 14 18 7.92-1.97 14-9.72 14-18V14L22 8z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" />
//           <path d="M16 22h12M16 27h8" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
//         </svg>
//       ),
//     },
//   ];

//   const whyItems = [
//     {
//       icon: "✦",
//       title: "Rigorous Quality Screening",
//       desc: "Multi-layer vetting with skill assessments, background verification, and cultural fit evaluation.",
//     },
//     {
//       icon: "⚡",
//       title: "48-Hour Turnaround",
//       desc: "From requirement submission to shortlisted candidates in under two business days.",
//     },
//     {
//       icon: "⚖",
//       title: "Full Statutory Compliance",
//       desc: "PF, ESI, gratuity, and all labor law obligations managed completely on your behalf.",
//     },
//     {
//       icon: "◈",
//       title: "Cost-Optimised Model",
//       desc: "Transparent pricing with zero hidden costs. Reduce your total HR overhead by up to 40%.",
//     },
//   ];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
//         * { box-sizing: border-box; margin: 0; padding: 0; }
//         html { scroll-behavior: smooth; }
//       `}</style>

//       <div style={styles.root}>

//         {/* ── NAVBAR ── */}
//         <nav style={styles.nav}>
//           <span style={styles.navLogo}>
//             Talent<span style={{ color: "#C9A84C" }}>Force</span>
//           </span>
//           <div style={styles.navLinks}>
//             {["Services", "Industries", "About", "Careers"].map((l) => (
//               <a
//                 key={l}
//                 href="#"
//                 style={styles.navLink}
//                 onMouseEnter={(e) => (e.target.style.color = "#C9A84C")}
//                 onMouseLeave={(e) => (e.target.style.color = "#CBD5E1")}
//               >
//                 {l}
//               </a>
//             ))}
//           </div>
//           <Link
//             to="/contact-us"
//             style={styles.navCta}
//             onMouseEnter={(e) => (e.currentTarget.style.background = "#E8C97A")}
//             onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A84C")}
//           >
//             Get In Touch
//           </Link>
//         </nav>

//         {/* ── HERO ── */}
//         <section style={styles.hero}>
//           <div style={styles.heroLeft}>
//             <div style={styles.eyebrow}>
//               <div style={styles.eyebrowLine} />
//               <span style={styles.eyebrowText}>Premium Manpower Solutions</span>
//             </div>
//             <h1 style={styles.heroH1}>
//               Hire<br />
//               <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Smart.</em>
//               <br />
//               Scale Fast.
//             </h1>
//             <p style={styles.heroSub}>
//               We connect industry-leading companies with exceptional talent —
//               precision-matched, compliance-verified, and ready to deliver from day one.
//             </p>
//             <div style={styles.heroActions}>
//               <Link
//                 to="/contact-us"
//                 style={styles.btnPrimary}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = "#E8C97A";
//                   e.currentTarget.style.transform = "translateY(-2px)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = "#C9A84C";
//                   e.currentTarget.style.transform = "translateY(0)";
//                 }}
//               >
//                 Hire Now
//               </Link>
//               <a
//                 href="#services"
//                 style={styles.btnGhost}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.borderColor = "#CBD5E1";
//                   e.currentTarget.style.color = "#F5F0E8";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.borderColor = "#333";
//                   e.currentTarget.style.color = "#CBD5E1";
//                 }}
//               >
//                 Explore Services
//               </a>
//             </div>
//           </div>
//           <div style={styles.heroRight}>
//             <img
//               src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80"
//               alt="Professional team"
//               style={styles.heroImg}
//             />
//             <div style={styles.heroOverlay} />
//           </div>
//         </section>

//         {/* ── STATS BAR ── */}
//         <div ref={statsRef} style={styles.statsBar}>
//           {[
//             { value: 5000, suffix: "+", label: "Candidates Placed" },
//             { value: 200, suffix: "+", label: "Active Clients" },
//             { value: 15, suffix: "+", label: "Industries Served" },
//             { value: 98, suffix: "%", label: "Retention Rate" },
//           ].map((s, i) => (
//             <StatItem key={i} {...s} animate={statsVisible} />
//           ))}
//         </div>

//         {/* ── SERVICES ── */}
//         <section id="services" style={styles.section}>
//           <div style={styles.sectionLabel}>
//             <div style={{ ...styles.sectionLine, background: "#C8BFB0" }} />
//             <span style={{ ...styles.sectionLabelText, color: "#8B9BB4" }}>What We Do</span>
//           </div>
//           <h2 style={{ ...styles.sectionH2, color: "#0A0A0F" }}>
//             Premium Workforce<br />Solutions
//           </h2>
//           <div style={styles.servicesGrid}>
//             {services.map((svc, i) => (
//               <div
//                 key={i}
//                 style={{
//                   ...styles.svcCard,
//                   background: hoveredCard === i ? "#F5F0E8" : "#F8F7F4",
//                 }}
//                 onMouseEnter={() => setHoveredCard(i)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <div
//                   style={{
//                     ...styles.svcCardBar,
//                     transform: hoveredCard === i ? "scaleX(1)" : "scaleX(0)",
//                   }}
//                 />
//                 <span style={styles.svcNum}>{svc.num}</span>
//                 <div style={{ marginBottom: 24, opacity: 0.9 }}>{svc.icon}</div>
//                 <h3 style={styles.svcTitle}>{svc.title}</h3>
//                 <p style={styles.svcDesc}>{svc.desc}</p>
//                 <Link to={svc.to} style={styles.svcLink}>
//                   Learn More{" "}
//                   <span
//                     style={{
//                       display: "inline-block",
//                       transition: "transform 0.2s",
//                       transform: hoveredCard === i ? "translateX(6px)" : "translateX(0)",
//                     }}
//                   >
//                     →
//                   </span>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ── WHY US ── */}
//         <section style={styles.whySection}>
//           <div style={styles.whyGrid}>
//             {/* Left */}
//             <div>
//               <div style={styles.sectionLabel}>
//                 <div style={{ ...styles.sectionLine, background: "#1e1e2e" }} />
//                 <span style={{ ...styles.sectionLabelText, color: "#555" }}>Our Advantage</span>
//               </div>
//               <h2 style={{ ...styles.sectionH2, color: "#F5F0E8", maxWidth: 420, marginBottom: 40 }}>
//                 Why Industry Leaders Choose Us
//               </h2>
//               <div>
//                 {whyItems.map((item, i) => (
//                   <div
//                     key={i}
//                     style={{
//                       ...styles.whyItem,
//                       borderTop: i === 0 ? "1px solid #1e1e2e" : "none",
//                       background: hoveredWhy === i ? "rgba(201,168,76,0.04)" : "transparent",
//                     }}
//                     onMouseEnter={() => setHoveredWhy(i)}
//                     onMouseLeave={() => setHoveredWhy(null)}
//                   >
//                     <div style={styles.whyIconWrap}>
//                       <span style={{ color: "#C9A84C", fontSize: 16 }}>{item.icon}</span>
//                     </div>
//                     <div>
//                       <div style={styles.whyItemTitle}>{item.title}</div>
//                       <div style={styles.whyItemDesc}>{item.desc}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Card */}
//             <div style={styles.whyCard}>
//               <div style={styles.whyCardDeco} />
//               <div style={styles.trustBadge}>
//                 <div style={styles.trustBadgeIcon}>
//                   <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
//                     <path
//                       d="M11 2L4 5v7c0 4.8 3.08 9.3 7 10.36C14.92 21.3 18 16.8 18 12V5L11 2z"
//                       fill="#0A0A0F"
//                     />
//                   </svg>
//                 </div>
//                 <span style={styles.trustBadgeText}>Trusted by 200+ Companies</span>
//               </div>
//               <h3 style={styles.whyCardH3}>
//                 Ready to Scale<br />Your Workforce?
//               </h3>
//               <p style={styles.whyCardP}>
//                 From startups to Fortune 500 enterprises, we've helped businesses across 15+ industries
//                 build high-performing teams without the operational overhead.
//               </p>
//               <div style={styles.whyDivider} />
//               <div style={styles.whyMetrics}>
//                 {[
//                   { num: "₹0", label: "Placement Fee" },
//                   { num: "30-Day", label: "Replacement Guarantee" },
//                   { num: "10+", label: "Years in Business" },
//                   { num: "24/7", label: "Dedicated Support" },
//                 ].map((m, i) => (
//                   <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
//                     <span style={styles.metricNum}>{m.num}</span>
//                     <span style={styles.metricLabel}>{m.label}</span>
//                   </div>
//                 ))}
//               </div>
//               <Link
//                 to="/contact-us"
//                 style={styles.whyCardCta}
//                 onMouseEnter={(e) => (e.currentTarget.style.background = "#E8C97A")}
//                 onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A84C")}
//               >
//                 Schedule a Consultation
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* ── FOOTER ── */}
//         <footer style={styles.footer}>
//           <span style={styles.footerLogo}>
//             Talent<span style={{ color: "#C9A84C" }}>Force</span>
//           </span>
//           <span style={styles.footerCopy}>© 2026 TalentForce. All rights reserved.</span>
//         </footer>
//       </div>
//     </>
//   );
// }

// // ─── Styles Object ────────────────────────────────────────────────────────────
// const styles = {
//   root: {
//     fontFamily: "'DM Sans', sans-serif",
//     background: "#F8F7F4",
//     color: "#0A0A0F",
//     lineHeight: 1.6,
//   },

//   // Nav
//   nav: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "20px 60px",
//     background: "#0A0A0F",
//     position: "sticky",
//     top: 0,
//     zIndex: 99,
//     borderBottom: "1px solid #1a1a1a",
//   },
//   navLogo: {
//     fontFamily: "'Playfair Display', serif",
//     fontSize: 22,
//     color: "#F5F0E8",
//     fontWeight: 700,
//     letterSpacing: "0.04em",
//   },
//   navLinks: { display: "flex", gap: 36 },
//   navLink: {
//     color: "#CBD5E1",
//     fontSize: 13,
//     fontWeight: 400,
//     letterSpacing: "0.12em",
//     textTransform: "uppercase",
//     textDecoration: "none",
//     transition: "color 0.2s",
//   },
//   navCta: {
//     background: "#C9A84C",
//     color: "#0A0A0F",
//     padding: "10px 24px",
//     fontSize: 12,
//     fontWeight: 500,
//     letterSpacing: "0.14em",
//     textTransform: "uppercase",
//     border: "none",
//     cursor: "pointer",
//     transition: "background 0.2s",
//     textDecoration: "none",
//     display: "inline-block",
//   },

//   // Hero
//   hero: {
//     background: "#0A0A0F",
//     minHeight: "88vh",
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     position: "relative",
//     overflow: "hidden",
//   },
//   heroLeft: {
//     padding: "90px 60px 80px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     position: "relative",
//     zIndex: 2,
//   },
//   eyebrow: { display: "flex", alignItems: "center", gap: 12, marginBottom: 36 },
//   eyebrowLine: { width: 40, height: 1, background: "#C9A84C" },
//   eyebrowText: {
//     fontSize: 11,
//     letterSpacing: "0.22em",
//     textTransform: "uppercase",
//     color: "#C9A84C",
//     fontWeight: 400,
//   },
//   heroH1: {
//     fontFamily: "'Playfair Display', serif",
//     fontSize: 68,
//     fontWeight: 900,
//     color: "#F5F0E8",
//     lineHeight: 1.05,
//     marginBottom: 28,
//   },
//   heroSub: {
//     fontSize: 16,
//     color: "#8B9BB4",
//     lineHeight: 1.75,
//     maxWidth: 420,
//     marginBottom: 52,
//     fontWeight: 300,
//   },
//   heroActions: { display: "flex", gap: 16, alignItems: "center" },
//   btnPrimary: {
//     background: "#C9A84C",
//     color: "#0A0A0F",
//     padding: "16px 36px",
//     fontSize: 12,
//     fontWeight: 500,
//     letterSpacing: "0.16em",
//     textTransform: "uppercase",
//     border: "none",
//     cursor: "pointer",
//     transition: "all 0.2s",
//     textDecoration: "none",
//     display: "inline-block",
//   },
//   btnGhost: {
//     background: "transparent",
//     color: "#CBD5E1",
//     padding: "16px 28px",
//     fontSize: 12,
//     fontWeight: 400,
//     letterSpacing: "0.14em",
//     textTransform: "uppercase",
//     border: "1px solid #333",
//     cursor: "pointer",
//     transition: "all 0.2s",
//     textDecoration: "none",
//     display: "inline-block",
//   },
//   heroRight: { position: "relative", overflow: "hidden" },
//   heroImg: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     filter: "brightness(0.55) contrast(1.1) saturate(0.8)",
//   },
//   heroOverlay: {
//     position: "absolute",
//     inset: 0,
//     background: "linear-gradient(to right, #0A0A0F 0%, transparent 40%)",
//   },

//   // Stats
//   statsBar: {
//     background: "#C9A84C",
//     padding: "28px 60px",
//     display: "grid",
//     gridTemplateColumns: "repeat(4, 1fr)",
//   },
//   statItem: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: 4,
//     borderRight: "1px solid rgba(10,10,15,0.15)",
//     padding: "0 20px",
//   },
//   statNum: {
//     fontFamily: "'Playfair Display', serif",
//     fontSize: 34,
//     fontWeight: 700,
//     color: "#0A0A0F",
//     lineHeight: 1,
//   },
//   statLabel: {
//     fontSize: 10,
//     letterSpacing: "0.18em",
//     textTransform: "uppercase",
//     color: "rgba(10,10,15,0.65)",
//     fontWeight: 500,
//   },

//   // Section shared
//   section: { padding: "100px 60px" },
//   sectionLabel: { display: "flex", alignItems: "center", gap: 14, marginBottom: 16 },
//   sectionLine: { width: 32, height: 1 },
//   sectionLabelText: {
//     fontSize: 10,
//     letterSpacing: "0.24em",
//     textTransform: "uppercase",
//     fontWeight: 500,
//   },
//   sectionH2: {
//     fontFamily: "'Playfair Display', serif",
//     fontSize: 48,
//     fontWeight: 700,
//     lineHeight: 1.1,
//     marginBottom: 64,
//     maxWidth: 500,
//   },

//   // Services
//   servicesGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, 1fr)",
//     gap: 2,
//     background: "#E2DDD4",
//   },
//   svcCard: {
//     padding: "52px 40px",
//     position: "relative",
//     transition: "background 0.3s",
//     cursor: "pointer",
//     overflow: "hidden",
//   },
//   svcCardBar: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 3,
//     background: "#C9A84C",
//     transformOrigin: "left",
//     transition: "transform 0.35s",
//   },
//   svcNum: {
//     fontFamily: "'Playfair Display', serif",
//     fontSize: 13,
//     color: "#C8BFB0",
//     fontWeight: 400,
//     display: "block",
//     marginBottom: 32,
//     letterSpacing: "0.08em",
//   },
//   svcTitle: {
//     fontFamily: "'Playfair Display', serif",
//     fontSize: 26,
//     fontWeight: 700,
//     color: "#0A0A0F",
//     marginBottom: 14,
//   },
//   svcDesc: {
//     fontSize: 14,
//     color: "#8B9BB4",
//     lineHeight: 1.75,
//     fontWeight: 300,
//     marginBottom: 32,
//   },
//   svcLink: {
//     fontSize: 11,
//     letterSpacing: "0.16em",
//     textTransform: "uppercase",
//     color: "#C9A84C",
//     fontWeight: 500,
//     display: "flex",
//     alignItems: "center",
//     gap: 8,
//     textDecoration: "none",
//   },

//   // Why Section
//   whySection: { background: "#0A0A0F", padding: "100px 60px" },
//   whyGrid: {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     gap: 100,
//     alignItems: "start",
//   },
//   whyItem: {
//     display: "flex",
//     alignItems: "flex-start",
//     gap: 24,
//     padding: "24px 16px",
//     borderBottom: "1px solid #1e1e2e",
//     transition: "background 0.2s",
//   },
//   whyIconWrap: {
//     width: 40,
//     height: 40,
//     background: "#111827",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexShrink: 0,
//     marginTop: 2,
//   },
//   whyItemTitle: { fontSize: 15, fontWeight: 500, color: "#F5F0E8", marginBottom: 4 },
//   whyItemDesc: { fontSize: 13, color: "#8B9BB4", fontWeight: 300, lineHeight: 1.65 },

//   // Why Card
//   whyCard: { background: "#111827", padding: 56, position: "relative", overflow: "hidden" },
//   whyCardDeco: {
//     position: "absolute",
//     top: -40,
//     right: -40,
//     width: 180,
//     height: 180,
//     border: "1px solid #222",
//     transform: "rotate(12deg)",
//     pointerEvents: "none",
//   },
//   trustBadge: { display: "flex", alignItems: "center", gap: 12, marginBottom: 40 },
//   trustBadgeIcon: {
//     width: 48,
//     height: 48,
//     background: "#C9A84C",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexShrink: 0,
//   },
//   trustBadgeText: {
//     fontSize: 12,
//     letterSpacing: "0.16em",
//     textTransform: "uppercase",
//     color: "#CBD5E1",
//   },
//   whyCardH3: {
//     fontFamily: "'Playfair Display', serif",
//     fontSize: 32,
//     fontWeight: 700,
//     color: "#F5F0E8",
//     lineHeight: 1.2,
//     marginBottom: 20,
//   },
//   whyCardP: {
//     fontSize: 14,
//     color: "#8B9BB4",
//     lineHeight: 1.8,
//     fontWeight: 300,
//     marginBottom: 40,
//   },
//   whyDivider: { width: "100%", height: 1, background: "#1e1e2e", marginBottom: 40 },
//   whyMetrics: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 40 },
//   metricNum: {
//     fontFamily: "'Playfair Display', serif",
//     fontSize: 28,
//     fontWeight: 700,
//     color: "#C9A84C",
//   },
//   metricLabel: {
//     fontSize: 11,
//     letterSpacing: "0.12em",
//     textTransform: "uppercase",
//     color: "#8B9BB4",
//     fontWeight: 400,
//   },
//   whyCardCta: {
//     background: "#C9A84C",
//     color: "#0A0A0F",
//     padding: "14px 32px",
//     fontSize: 12,
//     fontWeight: 500,
//     letterSpacing: "0.14em",
//     textTransform: "uppercase",
//     border: "none",
//     cursor: "pointer",
//     transition: "background 0.2s",
//     width: "100%",
//     display: "block",
//     textAlign: "center",
//     textDecoration: "none",
//   },

//   // Footer
//   footer: {
//     background: "#060608",
//     padding: "32px 60px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     borderTop: "1px solid #141414",
//   },
//   footerLogo: {
//     fontFamily: "'Playfair Display', serif",
//     fontSize: 18,
//     color: "#F5F0E8",
//     fontWeight: 700,
//   },
//   footerCopy: { fontSize: 12, color: "#444", letterSpacing: "0.06em" },
// };

// export default ManpowerSupply;







