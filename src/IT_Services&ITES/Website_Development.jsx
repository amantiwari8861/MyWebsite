import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe, Code, Smartphone, ShieldCheck, Search,
  CheckCircle, ArrowRight, Database, Star,
} from "lucide-react";

/* ─────────────────────────────────────────
   INLINE STYLES / CSS VARIABLES
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

  .wd-root * { box-sizing: border-box; margin: 0; padding: 0; }
  .wd-root {
    font-family: 'Outfit', sans-serif;
    background: var(--ink);
    color: var(--ice);
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* ── Noise texture overlay ── */
  .wd-root::before {
    content: '';
    position: fixed; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none; z-index: 0; opacity: .45;
  }

  /* ── Animated gradient mesh ── */
  .wd-mesh {
    position: absolute; inset: 0; z-index: 0; overflow: hidden;
  }
  .wd-mesh span {
    position: absolute; border-radius: 50%; filter: blur(90px);
    animation: drift 12s ease-in-out infinite alternate;
  }
  .wd-mesh span:nth-child(1) { width:600px;height:600px;top:-120px;left:-100px;background:rgba(201,168,76,0.07); animation-delay:0s; }
  .wd-mesh span:nth-child(2) { width:500px;height:500px;bottom:-80px;right:-80px;background:rgba(100,130,200,0.06); animation-delay:-4s; }
  .wd-mesh span:nth-child(3) { width:350px;height:350px;top:40%;left:55%;background:rgba(201,168,76,0.05); animation-delay:-8s; }
  @keyframes drift { to { transform: translate(40px, 30px) scale(1.08); } }

  /* ── Divider line ── */
  .wd-divider { width:60px;height:3px;background:var(--gold);border-radius:99px; }

  /* ── Pill badge ── */
  .wd-badge {
    display:inline-flex;align-items:center;gap:8px;
    padding:6px 18px;border-radius:99px;
    border:1px solid rgba(201,168,76,0.4);
    background:rgba(201,168,76,0.08);
    color:var(--gold-lt);font-size:0.78rem;
    font-weight:600;letter-spacing:0.12em;text-transform:uppercase;
    margin-bottom:22px;
  }

  /* ── Hero heading ── */
  .wd-h1 {
    font-family:'Cormorant Garamond',serif;
    font-size:clamp(3rem,7vw,5.4rem);
    font-weight:700;line-height:1.06;
    letter-spacing:-0.02em;
    color:#fff;
    margin-bottom:24px;
  }
  .wd-h1 em { color:var(--gold);font-style:normal; }

  /* ── Section headings ── */
  .wd-h2 {
    font-family:'Cormorant Garamond',serif;
    font-size:clamp(2.2rem,4.5vw,3.6rem);
    font-weight:700;line-height:1.1;
    color:#fff;margin-bottom:12px;
  }
  .wd-h2 em { color:var(--gold);font-style:normal; }

  /* ── Buttons ── */
  .wd-btn-primary {
    display:inline-flex;align-items:center;gap:10px;
    background:var(--gold);color:var(--ink);
    padding:14px 32px;border-radius:var(--radius);
    font-weight:700;font-size:0.95rem;letter-spacing:0.02em;
    text-decoration:none;
    transition:var(--transition);
    box-shadow:0 0 0 0 var(--glow);
  }
  .wd-btn-primary:hover {
    background:var(--gold-lt);
    box-shadow:0 0 32px 4px var(--glow);
    transform:translateY(-2px);
  }
  .wd-btn-outline {
    display:inline-flex;align-items:center;gap:10px;
    border:1.5px solid rgba(232,238,248,0.22);
    color:var(--ice);background:transparent;
    padding:14px 32px;border-radius:var(--radius);
    font-weight:600;font-size:0.95rem;
    text-decoration:none;
    transition:var(--transition);
  }
  .wd-btn-outline:hover {
    border-color:var(--gold);color:var(--gold);
    background:var(--gold-dim);
    transform:translateY(-2px);
  }

  /* ── Service Cards ── */
  .wd-card {
    background:var(--mist);
    border:1px solid rgba(232,238,248,0.07);
    border-radius:22px;
    padding:36px 32px;
    transition:var(--transition);
    position:relative;overflow:hidden;
    cursor:default;
  }
  .wd-card::before {
    content:'';position:absolute;inset:0;
    background:linear-gradient(135deg,rgba(201,168,76,0.06) 0%,transparent 60%);
    opacity:0;transition:var(--transition);
  }
  .wd-card:hover { transform:translateY(-6px);border-color:rgba(201,168,76,0.3);background:rgba(255,255,255,0.04); }
  .wd-card:hover::before { opacity:1; }
  .wd-card:hover .wd-card-icon { background:var(--gold-dim);border-color:rgba(201,168,76,0.4); }

  .wd-card-icon {
    width:58px;height:58px;
    border-radius:14px;
    background:rgba(255,255,255,0.04);
    border:1px solid rgba(255,255,255,0.1);
    display:flex;align-items:center;justify-content:center;
    margin-bottom:22px;
    transition:var(--transition);
  }

  /* ── Stat cards ── */
  .wd-stat {
    background:var(--ink-soft);
    border:1px solid rgba(201,168,76,0.15);
    border-radius:20px;
    padding:36px 28px;
    text-align:center;
    transition:var(--transition);
  }
  .wd-stat:hover { border-color:var(--gold);transform:scale(1.03); }
  .wd-stat-val {
    font-family:'Cormorant Garamond',serif;
    font-size:3rem;font-weight:700;
    color:var(--gold);line-height:1;
    margin-bottom:8px;
  }

  /* ── Feature list ── */
  .wd-feature-item {
    display:flex;align-items:center;gap:14px;
    padding:14px 0;
    border-bottom:1px solid rgba(255,255,255,0.05);
    transition:var(--transition);
  }
  .wd-feature-item:last-child { border-bottom:none; }
  .wd-feature-item:hover { padding-left:6px; }
  .wd-feature-dot {
    width:30px;height:30px;flex-shrink:0;
    border-radius:50%;
    background:var(--gold-dim);
    border:1px solid rgba(201,168,76,0.35);
    display:flex;align-items:center;justify-content:center;
  }

  /* ── CTA ── */
  .wd-cta {
    background:linear-gradient(135deg,var(--ink-soft) 0%,var(--ink-mid) 100%);
    border-top:1px solid rgba(201,168,76,0.12);
    position:relative;overflow:hidden;
  }
  .wd-cta-glow {
    position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
    width:700px;height:400px;
    background:radial-gradient(ellipse,rgba(201,168,76,0.1) 0%,transparent 70%);
    pointer-events:none;
  }

  /* ── Scroll reveal ── */
  .wd-reveal { opacity:0;transform:translateY(36px);transition:opacity 0.7s ease,transform 0.7s ease; }
  .wd-reveal.visible { opacity:1;transform:translateY(0); }
  .wd-reveal-left { opacity:0;transform:translateX(-40px);transition:opacity 0.7s ease,transform 0.7s ease; }
  .wd-reveal-left.visible { opacity:1;transform:translateX(0); }
  .wd-reveal-right { opacity:0;transform:translateX(40px);transition:opacity 0.7s ease,transform 0.7s ease; }
  .wd-reveal-right.visible { opacity:1;transform:translateX(0); }

  /* ── Arrow bounce ── */
  @keyframes bounce-x { 0%,100%{transform:translateX(0)}50%{transform:translateX(5px)} }
  .wd-btn-primary:hover .wd-arrow { animation:bounce-x 0.6s ease infinite; }

  /* ── Rating badge ── */
  .wd-rating {
    position:absolute;bottom:-18px;right:-18px;
    background:#fff;border-radius:16px;
    padding:12px 20px;
    box-shadow:0 12px 40px rgba(0,0,0,0.5);
    display:flex;align-items:center;gap:10px;
    color:var(--ink);font-weight:700;font-size:0.9rem;
  }

  /* ── Hero image frame ── */
  .wd-img-frame {
    border-radius:28px;overflow:hidden;
    border:1px solid rgba(255,255,255,0.08);
    box-shadow:0 40px 80px rgba(0,0,0,0.6);
    position:relative;
  }
  .wd-img-frame img { width:100%;height:360px;object-fit:cover;display:block; }
  .wd-img-frame::after {
    content:'';position:absolute;inset:0;
    background:linear-gradient(to bottom,transparent 60%,rgba(8,12,20,0.5));
  }

  /* ── Section spacing ── */
  .wd-section { padding:96px 24px;position:relative;z-index:1; }
  .wd-container { max-width:1200px;margin:0 auto; }

  /* ── Grid ── */
  .wd-grid-3 { display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:24px; }
  .wd-grid-2 { display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center; }
  .wd-grid-stats { display:grid;grid-template-columns:1fr 1fr;gap:20px; }

  @media(max-width:900px) {
    .wd-grid-2 { grid-template-columns:1fr; }
    .wd-grid-stats { grid-template-columns:1fr 1fr; }
  }
  @media(max-width:600px) {
    .wd-grid-stats { grid-template-columns:1fr; }
    .wd-h1 { font-size:2.6rem; }
  }

  /* ── Number counter ── */
  .wd-num { font-variant-numeric:tabular-nums; }

  /* ── Horizontal rule ── */
  .wd-hr { border:none;border-top:1px solid rgba(255,255,255,0.07);margin:0; }

  /* ── Process steps ── */
  .wd-step {
    display:flex;gap:20px;align-items:flex-start;
    padding:24px 0;
    border-bottom:1px solid rgba(255,255,255,0.05);
  }
  .wd-step:last-child{border-bottom:none;}
  .wd-step-num {
    font-family:'Cormorant Garamond',serif;
    font-size:2.4rem;font-weight:700;
    color:var(--gold);opacity:0.5;
    line-height:1;min-width:52px;
  }
`;

/* ─────────────────────────────────────────
   HOOK — scroll reveal
───────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".wd-reveal,.wd-reveal-left,.wd-reveal-right");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach((el, i) => {
      el.style.transitionDelay = `${(el.dataset.delay || 0)}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const services = [
  { icon: <Globe size={26} color="#C9A84C" />, title: "Custom Website Development", desc: "Bespoke digital experiences engineered from the ground up—architected for performance, scalability, and your exact business goals." },
  { icon: <Code size={26} color="#C9A84C" />, title: "Frontend Engineering", desc: "Pixel-perfect interfaces built with React and modern frameworks. Fast, accessible, and visually flawless on every viewport." },
  { icon: <Database size={26} color="#C9A84C" />, title: "Backend & API Development", desc: "Robust server-side systems with Node.js, Python, and optimised databases—powering seamless data flow behind your product." },
  { icon: <Smartphone size={26} color="#C9A84C" />, title: "Responsive & Mobile-First", desc: "Fluid layouts and touch-optimised interactions that deliver a premium experience across all devices and screen densities." },
  { icon: <Search size={26} color="#C9A84C" />, title: "Technical SEO", desc: "Schema markup, Core Web Vitals optimisation, and clean semantic HTML that search engines reward with higher rankings." },
  { icon: <ShieldCheck size={26} color="#C9A84C" />, title: "Maintenance & Support", desc: "Proactive monitoring, security patches, and continuous performance tuning—so your site stays fast, secure, and reliable." },
];

const features = [
  "Modern Design Excellence",
  "Mobile-First Approach",
  "SEO-Optimized Architecture",
  "Sub-Second Load Speeds",
  "Enterprise-Grade Security",
  "24 / 7 Dedicated Support",
];

const stats = [
  { value: "500+", label: "Websites Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3M+", label: "Monthly Visitors Served" },
  { value: "40+", label: "Industries Covered" },
];

const process = [
  { n: "01", title: "Discovery & Strategy", desc: "We map your goals, audience, and competitive landscape to define a precise technical and creative brief." },
  { n: "02", title: "Design & Prototyping", desc: "High-fidelity mockups and interactive prototypes that align stakeholders before a single line of production code is written." },
  { n: "03", title: "Development & QA", desc: "Agile sprints with rigorous testing across browsers, devices, and network conditions." },
  { n: "04", title: "Launch & Optimise", desc: "Smooth deployment followed by data-driven iterations to continuously improve performance and conversion." },
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
const Website_Development = () => {
  useReveal();

  return (
    <div className="wd-root">
      <style>{globalCSS}</style>

      {/* ── HERO ── */}
      <section className="wd-section" style={{ paddingTop: 140, minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div className="wd-mesh">
          <span /><span /><span />
        </div>
        <div className="wd-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="wd-grid-2">
            {/* Left */}
            <div className="wd-reveal">
              <div className="wd-badge"><Globe size={13} /> Website Development</div>
              <h1 className="wd-h1">
                Build Stunning<br /><em>Digital Experiences</em><br />That Convert
              </h1>
              <p style={{ color: "rgba(232,238,248,0.65)", fontSize: "1.1rem", lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
                We engineer modern, high-performance websites that captivate visitors, establish authority, and drive measurable business results.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link to="/contact-us" className="wd-btn-primary">
                  Start Your Project <ArrowRight size={18} className="wd-arrow" />
                </Link>
                <Link to="/portfolio" className="wd-btn-outline">View Our Work</Link>
              </div>
            </div>

            {/* Right — image */}
            <div className="wd-reveal-right" style={{ position: "relative" }} data-delay="150">
              <div className="wd-img-frame">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=420&fit=crop"
                  alt="Website Development"
                />
              </div>
              <div className="wd-rating">
                <Star size={18} fill="#F5C518" color="#F5C518" />
                <span style={{ fontSize: "1.05rem" }}>4.9 / 5</span>
                <span style={{ color: "#666", fontWeight: 400 }}>Client Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="wd-hr" />

      {/* ── SERVICES ── */}
      <section className="wd-section">
        <div className="wd-container">
          <div className="wd-reveal" style={{ marginBottom: 64 }}>
            <div className="wd-badge"><Code size={13} /> What We Build</div>
            <h2 className="wd-h2">Our <em>Core Services</em></h2>
            <p style={{ color: "rgba(232,238,248,0.55)", fontSize: "1.05rem", maxWidth: 540, marginTop: 14 }}>
              End-to-end web development from concept to continuous optimisation.
            </p>
          </div>
          <div className="wd-grid-3">
            {services.map((s, i) => (
              <div className="wd-card wd-reveal" key={i} data-delay={i * 80}>
                <div className="wd-card-icon">{s.icon}</div>
                <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "1.05rem", color: "#fff", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: "rgba(232,238,248,0.5)", fontSize: "0.92rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="wd-hr" />

      {/* ── WHY US + STATS ── */}
      <section className="wd-section" style={{ background: "linear-gradient(180deg,var(--ink) 0%,var(--ink-soft) 100%)" }}>
        <div className="wd-container">
          <div className="wd-grid-2">
            {/* Features */}
            <div className="wd-reveal-left">
              <div className="wd-badge"><CheckCircle size={13} /> Why Choose Us</div>
              <h2 className="wd-h2">Crafted for<br /><em>Excellence</em></h2>
              <p style={{ color: "rgba(232,238,248,0.5)", marginBottom: 32, lineHeight: 1.7 }}>
                We combine strategic thinking with technical precision to deliver websites that don't just look great—they perform.
              </p>
              <div>
                {features.map((f, i) => (
                  <div className="wd-feature-item" key={i}>
                    <div className="wd-feature-dot">
                      <CheckCircle size={14} color="#C9A84C" />
                    </div>
                    <span style={{ fontWeight: 500, color: "rgba(232,238,248,0.85)", fontSize: "0.97rem" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="wd-reveal-right" data-delay="100">
              <div className="wd-grid-stats">
                {stats.map((s, i) => (
                  <div className="wd-stat" key={i}>
                    <div className="wd-stat-val wd-num">{s.value}</div>
                    <div style={{ color: "rgba(232,238,248,0.5)", fontSize: "0.88rem", fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="wd-hr" />

      {/* ── PROCESS ── */}
      <section className="wd-section">
        <div className="wd-container">
          <div className="wd-grid-2" style={{ alignItems: "flex-start" }}>
            <div className="wd-reveal-left" style={{ position: "sticky", top: 100 }}>
              <div className="wd-badge">Our Process</div>
              <h2 className="wd-h2">From Brief<br />to <em>Launch</em></h2>
              <p style={{ color: "rgba(232,238,248,0.5)", lineHeight: 1.75, marginTop: 16, maxWidth: 400 }}>
                A battle-tested four-step process that keeps projects on time, on budget, and above expectation.
              </p>
            </div>
            <div className="wd-reveal-right" data-delay="100">
              {process.map((p, i) => (
                <div className="wd-step" key={i}>
                  <div className="wd-step-num">{p.n}</div>
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
      <section className="wd-cta wd-section">
        <div className="wd-cta-glow" />
        <div className="wd-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="wd-reveal">
            <div className="wd-badge" style={{ justifyContent: "center", display: "inline-flex" }}>
              <Star size={13} fill="#C9A84C" color="#C9A84C" /> Ready to Begin
            </div>
            <h2 className="wd-h2" style={{ maxWidth: 700, margin: "0 auto 16px" }}>
              Let's Build Your<br /><em>Dream Website</em>
            </h2>
            <p style={{ color: "rgba(232,238,248,0.55)", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.75 }}>
              Tell us your vision. We'll transform it into a high-performance digital experience that sets you apart.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact-us" className="wd-btn-primary">
                Get Started Today <ArrowRight size={18} className="wd-arrow" />
              </Link>
              <Link to="/services" className="wd-btn-outline">View All Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Website_Development;