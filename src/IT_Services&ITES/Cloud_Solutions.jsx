import React, { useEffect } from "react";
import ServiceNavbar from '../components/ServiceNavbar';
import { Link } from "react-router-dom";
import {
  Cloud, Server, ShieldCheck, Zap, Database,
  Layers, CheckCircle, ArrowRight, Lock, Globe, Star, BarChart3,
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

  .cl-root * { box-sizing:border-box;margin:0;padding:0; }
  .cl-root {
    font-family:'Outfit',sans-serif;
    background:var(--ink);
    color:var(--ice);
    min-height:100vh;
    overflow-x:hidden;
  }

  /* noise */
  .cl-root::before {
    content:'';position:fixed;inset:0;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events:none;z-index:0;opacity:.45;
  }

  /* mesh */
  .cl-mesh { position:absolute;inset:0;z-index:0;overflow:hidden; }
  .cl-mesh span {
    position:absolute;border-radius:50%;filter:blur(100px);
    animation:cl-drift 14s ease-in-out infinite alternate;
  }
  .cl-mesh span:nth-child(1){width:600px;height:600px;top:-120px;left:-100px;background:rgba(201,168,76,0.07);animation-delay:0s;}
  .cl-mesh span:nth-child(2){width:500px;height:500px;bottom:-80px;right:-80px;background:rgba(50,120,240,0.07);animation-delay:-6s;}
  .cl-mesh span:nth-child(3){width:350px;height:350px;top:40%;left:55%;background:rgba(201,168,76,0.05);animation-delay:-10s;}
  @keyframes cl-drift { to{transform:translate(40px,30px) scale(1.08);} }

  /* badge */
  .cl-badge {
    display:inline-flex;align-items:center;gap:8px;
    padding:6px 18px;border-radius:99px;
    border:1px solid rgba(201,168,76,0.4);
    background:rgba(201,168,76,0.08);
    color:var(--gold-lt);font-size:0.78rem;
    font-weight:600;letter-spacing:0.12em;text-transform:uppercase;
    margin-bottom:22px;
  }

  /* headings */
  .cl-h1 {
    font-family:'Cormorant Garamond',serif;
    font-size:clamp(3rem,7vw,5.4rem);
    font-weight:700;line-height:1.06;
    letter-spacing:-0.02em;color:#fff;margin-bottom:24px;
  }
  .cl-h1 em { color:var(--gold);font-style:normal; }
  .cl-h2 {
    font-family:'Cormorant Garamond',serif;
    font-size:clamp(2.2rem,4.5vw,3.6rem);
    font-weight:700;line-height:1.1;color:#fff;margin-bottom:12px;
  }
  .cl-h2 em { color:var(--gold);font-style:normal; }

  /* buttons */
  .cl-btn-primary {
    display:inline-flex;align-items:center;gap:10px;
    background:var(--gold);color:var(--ink);
    padding:14px 32px;border-radius:var(--radius);
    font-weight:700;font-size:0.95rem;letter-spacing:0.02em;
    text-decoration:none;transition:var(--t);
    box-shadow:0 0 0 0 var(--glow);
  }
  .cl-btn-primary:hover {
    background:var(--gold-lt);
    box-shadow:0 0 32px 4px var(--glow);
    transform:translateY(-2px);
  }
  .cl-btn-outline {
    display:inline-flex;align-items:center;gap:10px;
    border:1.5px solid rgba(232,238,248,0.22);
    color:var(--ice);background:transparent;
    padding:14px 32px;border-radius:var(--radius);
    font-weight:600;font-size:0.95rem;
    text-decoration:none;transition:var(--t);
  }
  .cl-btn-outline:hover {
    border-color:var(--gold);color:var(--gold);
    background:var(--gold-dim);transform:translateY(-2px);
  }

  /* ── cloud architecture hero visual ── */
  .cl-arch {
    position:relative;
    background:linear-gradient(160deg,#0f1a2e 0%,#080c14 100%);
    border:1px solid rgba(232,238,248,0.08);
    border-radius:28px;
    padding:36px 28px 44px;
    box-shadow:0 40px 80px rgba(0,0,0,0.55);
  }
  /* pulsing ring around cloud centre */
  .cl-arch-center {
    position:relative;
    width:96px;height:96px;
    margin:0 auto 28px;
    display:flex;align-items:center;justify-content:center;
  }
  .cl-arch-center::before,
  .cl-arch-center::after {
    content:'';position:absolute;inset:0;border-radius:50%;
    border:1px solid rgba(201,168,76,0.25);
    animation:cl-ring 3s ease-out infinite;
  }
  .cl-arch-center::after { animation-delay:1.5s; }
  @keyframes cl-ring {
    0%   { transform:scale(1);   opacity:0.7; }
    100% { transform:scale(2.4); opacity:0;   }
  }
  .cl-arch-cloud-icon {
    width:96px;height:96px;border-radius:50%;
    background:var(--gold-dim);
    border:1px solid rgba(201,168,76,0.35);
    display:flex;align-items:center;justify-content:center;
    position:relative;z-index:1;
  }
  /* provider tiles */
  .cl-arch-grid {
    display:grid;grid-template-columns:repeat(3,1fr);gap:12px;
    margin-bottom:16px;
  }
  .cl-arch-tile {
    background:rgba(255,255,255,0.04);
    border:1px solid rgba(232,238,248,0.08);
    border-radius:16px;padding:16px 10px;
    text-align:center;transition:var(--t);
  }
  .cl-arch-tile:hover {
    background:rgba(201,168,76,0.07);
    border-color:rgba(201,168,76,0.3);
    transform:translateY(-3px);
  }
  .cl-arch-tile-label { font-size:0.88rem;font-weight:700;color:#fff;margin-top:8px; }
  .cl-arch-tile-sub   { font-size:0.72rem;color:rgba(232,238,248,0.4);margin-top:2px; }
  /* bottom metric bar */
  .cl-arch-metrics {
    display:flex;gap:0;
    border:1px solid rgba(232,238,248,0.07);
    border-radius:14px;overflow:hidden;
    margin-top:4px;
  }
  .cl-arch-metric {
    flex:1;padding:12px 8px;text-align:center;
    border-right:1px solid rgba(232,238,248,0.07);
    background:rgba(255,255,255,0.02);
  }
  .cl-arch-metric:last-child { border-right:none; }
  .cl-arch-metric-val {
    font-family:'Cormorant Garamond',serif;
    font-size:1.4rem;font-weight:700;color:var(--gold);line-height:1;
  }
  .cl-arch-metric-lbl { font-size:0.7rem;color:rgba(232,238,248,0.4);margin-top:3px; }
  /* rating */
  .cl-rating {
    position:absolute;top:-16px;right:16px;
    background:#fff;border-radius:14px;padding:10px 16px;
    box-shadow:0 10px 30px rgba(0,0,0,0.45);
    display:flex;align-items:center;gap:8px;
    color:var(--ink);font-weight:700;font-size:0.88rem;
  }

  /* service cards */
  .cl-card {
    background:var(--mist);
    border:1px solid rgba(232,238,248,0.07);
    border-radius:22px;padding:36px 32px;
    transition:var(--t);position:relative;overflow:hidden;cursor:default;
  }
  .cl-card::before {
    content:'';position:absolute;inset:0;
    background:linear-gradient(135deg,rgba(201,168,76,0.06) 0%,transparent 60%);
    opacity:0;transition:var(--t);
  }
  .cl-card:hover { transform:translateY(-6px);border-color:rgba(201,168,76,0.3);background:rgba(255,255,255,0.04); }
  .cl-card:hover::before { opacity:1; }
  .cl-card:hover .cl-card-icon { background:var(--gold-dim);border-color:rgba(201,168,76,0.4); }
  .cl-card-icon {
    width:58px;height:58px;border-radius:14px;
    background:rgba(255,255,255,0.04);
    border:1px solid rgba(255,255,255,0.1);
    display:flex;align-items:center;justify-content:center;
    margin-bottom:22px;transition:var(--t);
  }

  /* stat cards */
  .cl-stat {
    background:var(--ink-soft);
    border:1px solid rgba(201,168,76,0.15);
    border-radius:20px;padding:36px 28px;
    text-align:center;transition:var(--t);
  }
  .cl-stat:hover { border-color:var(--gold);transform:scale(1.03); }
  .cl-stat-val {
    font-family:'Cormorant Garamond',serif;
    font-size:3rem;font-weight:700;
    color:var(--gold);line-height:1;margin-bottom:8px;
  }

  /* feature list */
  .cl-feature-item {
    display:flex;align-items:center;gap:14px;
    padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.05);
    transition:var(--t);
  }
  .cl-feature-item:last-child { border-bottom:none; }
  .cl-feature-item:hover { padding-left:6px; }
  .cl-feature-dot {
    width:30px;height:30px;flex-shrink:0;border-radius:50%;
    background:var(--gold-dim);border:1px solid rgba(201,168,76,0.35);
    display:flex;align-items:center;justify-content:center;
  }

  /* process */
  .cl-step {
    display:flex;gap:20px;align-items:flex-start;
    padding:24px 0;border-bottom:1px solid rgba(255,255,255,0.05);
  }
  .cl-step:last-child { border-bottom:none; }
  .cl-step-num {
    font-family:'Cormorant Garamond',serif;
    font-size:2.4rem;font-weight:700;
    color:var(--gold);opacity:0.5;line-height:1;min-width:52px;
  }

  /* cta */
  .cl-cta {
    background:linear-gradient(135deg,var(--ink-soft) 0%,var(--ink-mid) 100%);
    border-top:1px solid rgba(201,168,76,0.12);
    position:relative;overflow:hidden;
  }
  .cl-cta-glow {
    position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
    width:700px;height:400px;
    background:radial-gradient(ellipse,rgba(201,168,76,0.1) 0%,transparent 70%);
    pointer-events:none;
  }

  /* scroll reveal */
  .cl-reveal { opacity:0;transform:translateY(36px);transition:opacity 0.7s ease,transform 0.7s ease; }
  .cl-reveal.visible { opacity:1;transform:translateY(0); }
  .cl-reveal-left { opacity:0;transform:translateX(-40px);transition:opacity 0.7s ease,transform 0.7s ease; }
  .cl-reveal-left.visible { opacity:1;transform:translateX(0); }
  .cl-reveal-right { opacity:0;transform:translateX(40px);transition:opacity 0.7s ease,transform 0.7s ease; }
  .cl-reveal-right.visible { opacity:1;transform:translateX(0); }

  @keyframes cl-bounce-x { 0%,100%{transform:translateX(0)}50%{transform:translateX(5px)} }
  .cl-btn-primary:hover .cl-arrow { animation:cl-bounce-x 0.6s ease infinite; }

  /* cloud float */
  @keyframes cl-float { 0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)} }
  .cl-arch-cloud-icon { animation:cl-float 4s ease-in-out infinite; }

  /* layout */
  .cl-section { padding:96px 24px;position:relative;z-index:1; }
  .cl-container { max-width:1200px;margin:0 auto; }
  .cl-grid-2 { display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center; }
  .cl-grid-3 { display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:24px; }
  .cl-grid-stats { display:grid;grid-template-columns:1fr 1fr;gap:20px; }
  .cl-hr { border:none;border-top:1px solid rgba(255,255,255,0.07);margin:0; }

  @media(max-width:900px) { .cl-grid-2 { grid-template-columns:1fr; } }
  @media(max-width:600px) {
    .cl-grid-stats { grid-template-columns:1fr; }
    .cl-h1 { font-size:2.6rem; }
    .cl-arch-grid { grid-template-columns:1fr 1fr; }
  }
`;

/* ─────────────────────────────────────────
   REVEAL HOOK
───────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".cl-reveal,.cl-reveal-left,.cl-reveal-right");
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
  { icon: <Cloud size={26} color="#C9A84C" />, title: "Cloud Migration", desc: "Zero-disruption lift-and-shift or full re-architecture migrations to AWS, Azure, or GCP — on schedule and within budget." },
  { icon: <Server size={26} color="#C9A84C" />, title: "Cloud Infrastructure", desc: "IaC-driven, auto-scaling infrastructure built on best-practice landing zones for reliability, cost control, and rapid delivery." },
  { icon: <ShieldCheck size={26} color="#C9A84C" />, title: "Cloud Security", desc: "Zero-trust posture management, encryption at rest and in transit, IAM hardening, and continuous compliance auditing." },
  { icon: <Zap size={26} color="#C9A84C" />, title: "Performance Optimisation", desc: "Right-sizing, reserved capacity planning, and CDN strategies that cut cloud spend by up to 40% without sacrificing performance." },
  { icon: <Database size={26} color="#C9A84C" />, title: "Cloud Database Solutions", desc: "Fully managed RDS, Cosmos DB, and BigQuery implementations with automated backups, failover, and elastic scaling." },
  { icon: <Layers size={26} color="#C9A84C" />, title: "Multi-Cloud Management", desc: "Unified observability and governance across AWS, Azure, and GCP — one pane of glass, no vendor lock-in." },
];

const features = [
  "Expertise Across All Major Platforms",
  "Security-First Cloud Architecture",
  "Cost Optimisation Strategies",
  "24 / 7 Monitoring & Support",
  "Compliance & Regulatory Standards",
  "Scalable & Flexible Solutions",
];

const stats = [
  { value: "500+", label: "Cloud Migrations" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "40%", label: "Avg. Cost Savings" },
  { value: "24 / 7", label: "Active Support" },
];

const providers = [
  { icon: <Cloud size={24} color="#C9A84C" />, label: "AWS", sub: "Amazon" },
  { icon: <Server size={24} color="#C9A84C" />, label: "Azure", sub: "Microsoft" },
  { icon: <Globe size={24} color="#C9A84C" />, label: "GCP", sub: "Google" },
  { icon: <Lock size={24} color="#C9A84C" />, label: "Secure", sub: "Zero-Trust" },
  { icon: <Database size={24} color="#C9A84C" />, label: "Data", sub: "Managed DB" },
  { icon: <BarChart3 size={24} color="#C9A84C" />, label: "Insights", sub: "Observability" },
];

const metrics = [
  { val: "99.9%", lbl: "Uptime" },
  { val: "40%",   lbl: "Cost Cut" },
  { val: "500+",  lbl: "Migrations" },
];

const process = [
  { n: "01", title: "Cloud Readiness Assessment", desc: "We audit your workloads, dependencies, and security posture to produce a migration risk matrix and ROI projection." },
  { n: "02", title: "Architecture & Planning", desc: "A cloud-native blueprint aligned to your compliance requirements, traffic patterns, and growth trajectory." },
  { n: "03", title: "Migration & Deployment", desc: "Phased execution with automated rollback guards, parallel-run validation, and zero-downtime cutover." },
  { n: "04", title: "Optimise & Govern", desc: "Continuous cost intelligence, performance tuning, and policy-as-code governance to keep your cloud lean and secure." },
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
const Cloud_Solutions = () => {
  useReveal();

  return (
    <div className="cl-root">
      <style>{globalCSS}</style>

      {/* ── HERO ── */}
      <section className="cl-section" style={{ paddingTop: 140, minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div className="cl-mesh"><span /><span /><span /></div>
        <div className="cl-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="cl-grid-2">

            {/* Left */}
            <div className="cl-reveal">
              <div className="cl-badge"><Cloud size={13} /> Cloud Solutions</div>
              <h1 className="cl-h1">
                Transform With<br /><em>Cloud</em><br />Technology
              </h1>
              <p style={{ color: "rgba(232,238,248,0.65)", fontSize: "1.1rem", lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
                Scale operations, reduce infrastructure costs, and strengthen security with enterprise cloud solutions tailored precisely to your business needs.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link to="/contact-us" className="cl-btn-primary">
                  Get Started <ArrowRight size={18} className="cl-arrow" />
                </Link>
                <Link to="/case-studies" className="cl-btn-outline">View Case Studies</Link>
              </div>
            </div>

            {/* Right — cloud architecture visual */}
            <div className="cl-reveal-right" style={{ position: "relative" }} data-delay="150">
              <div className="cl-arch">
                {/* Pulsing cloud centre */}
                <div className="cl-arch-center">
                  <div className="cl-arch-cloud-icon">
                    <Cloud size={38} color="#C9A84C" />
                  </div>
                </div>

                {/* 6-tile provider / service grid */}
                <div className="cl-arch-grid">
                  {providers.map((p, i) => (
                    <div className="cl-arch-tile" key={i}>
                      {p.icon}
                      <div className="cl-arch-tile-label">{p.label}</div>
                      <div className="cl-arch-tile-sub">{p.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Metrics bar */}
                <div className="cl-arch-metrics">
                  {metrics.map((m, i) => (
                    <div className="cl-arch-metric" key={i}>
                      <div className="cl-arch-metric-val">{m.val}</div>
                      <div className="cl-arch-metric-lbl">{m.lbl}</div>
                    </div>
                  ))}
                </div>

                {/* SVG connecting lines from centre to tiles */}
                <svg style={{ position: "absolute", inset: 0, width: "100%", height: "60%", opacity: 0.1, pointerEvents: "none", top: 36 }} viewBox="0 0 400 200">
                  <line x1="200" y1="48" x2="66"  y2="120" stroke="#C9A84C" strokeWidth="1" strokeDasharray="3 3"/>
                  <line x1="200" y1="48" x2="200" y2="120" stroke="#C9A84C" strokeWidth="1" strokeDasharray="3 3"/>
                  <line x1="200" y1="48" x2="334" y2="120" stroke="#C9A84C" strokeWidth="1" strokeDasharray="3 3"/>
                </svg>
              </div>

              {/* Rating */}
              <div className="cl-rating">
                <Star size={16} fill="#F5C518" color="#F5C518" />
                <span>4.9 / 5</span>
                <span style={{ color: "#888", fontWeight: 400 }}>Client Rating</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ServiceNavbar />
      <hr className="cl-hr" />

      {/* ── SERVICES ── */}
      <section className="cl-section">
        <div className="cl-container">
          <div className="cl-reveal" style={{ marginBottom: 64 }}>
            <div className="cl-badge"><Server size={13} /> What We Deliver</div>
            <h2 className="cl-h2">Our <em>Cloud Services</em></h2>
            <p style={{ color: "rgba(232,238,248,0.55)", fontSize: "1.05rem", maxWidth: 540, marginTop: 14 }}>
              Enterprise-grade cloud solutions across all major platforms — built for resilience, security, and scale.
            </p>
          </div>
          <div className="cl-grid-3">
            {services.map((s, i) => (
              <div className="cl-card cl-reveal" key={i} data-delay={i * 80}>
                <div className="cl-card-icon">{s.icon}</div>
                <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "1.05rem", color: "#fff", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: "rgba(232,238,248,0.5)", fontSize: "0.92rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="cl-hr" />

      {/* ── WHY US + STATS ── */}
      <section className="cl-section" style={{ background: "linear-gradient(180deg,var(--ink) 0%,var(--ink-soft) 100%)" }}>
        <div className="cl-container">
          <div className="cl-grid-2">
            <div className="cl-reveal-left">
              <div className="cl-badge"><CheckCircle size={13} /> Why Choose Us</div>
              <h2 className="cl-h2">Built for<br /><em>Cloud Excellence</em></h2>
              <p style={{ color: "rgba(232,238,248,0.5)", marginBottom: 32, lineHeight: 1.7 }}>
                We combine deep platform certifications with commercial pragmatism — every cloud decision is weighed against business impact, not just technical elegance.
              </p>
              <div>
                {features.map((f, i) => (
                  <div className="cl-feature-item" key={i}>
                    <div className="cl-feature-dot">
                      <CheckCircle size={14} color="#C9A84C" />
                    </div>
                    <span style={{ fontWeight: 500, color: "rgba(232,238,248,0.85)", fontSize: "0.97rem" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="cl-reveal-right" data-delay="100">
              <div className="cl-grid-stats">
                {stats.map((s, i) => (
                  <div className="cl-stat" key={i}>
                    <div className="cl-stat-val">{s.value}</div>
                    <div style={{ color: "rgba(232,238,248,0.5)", fontSize: "0.88rem", fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="cl-hr" />

      {/* ── PROCESS ── */}
      <section className="cl-section">
        <div className="cl-container">
          <div className="cl-grid-2" style={{ alignItems: "flex-start" }}>
            <div className="cl-reveal-left" style={{ position: "sticky", top: 100 }}>
              <div className="cl-badge">Our Process</div>
              <h2 className="cl-h2">Assess to<br /><em>Cloud-Native</em></h2>
              <p style={{ color: "rgba(232,238,248,0.5)", lineHeight: 1.75, marginTop: 16, maxWidth: 400 }}>
                A proven four-phase framework that de-risks migrations and keeps cloud spend firmly under control.
              </p>
            </div>
            <div className="cl-reveal-right" data-delay="100">
              {process.map((p, i) => (
                <div className="cl-step" key={i}>
                  <div className="cl-step-num">{p.n}</div>
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
      <section className="cl-cta cl-section">
        <div className="cl-cta-glow" />
        <div className="cl-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="cl-reveal">
            <div className="cl-badge" style={{ justifyContent: "center", display: "inline-flex" }}>
              <Cloud size={13} color="#C9A84C" /> Ready to Migrate
            </div>
            <h2 className="cl-h2" style={{ maxWidth: 700, margin: "0 auto 16px" }}>
              Move to the<br /><em>Cloud Today</em>
            </h2>
            <p style={{ color: "rgba(232,238,248,0.55)", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.75 }}>
              Let's build a cloud strategy that cuts costs, boosts resilience, and positions your business to scale without limits.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact-us" className="cl-btn-primary">
                Start Your Cloud Journey <ArrowRight size={18} className="cl-arrow" />
              </Link>
              <Link to="/services" className="cl-btn-outline">View All Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cloud_Solutions;
