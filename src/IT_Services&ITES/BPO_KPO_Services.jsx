import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Headset, Briefcase, BarChart2, TrendingUp, Users, Globe,
  CheckCircle, ArrowRight, Star, Shield, Zap, Award,
  ChevronRight, Phone, Mail, MapPin
} from "lucide-react";

const BPO_KPO_Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [counted, setCounted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !counted) setCounted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [counted]);

  const services = [
    {
      icon: Headset,
      title: "Customer Support",
      subtitle: "Round-the-clock excellence",
      description:
        "24/7 multilingual customer support with trained specialists. We handle every touchpoint across voice, email, chat and social — ensuring your customers always feel heard and valued.",
      features: ["Omnichannel support", "Multilingual agents", "CSAT tracking", "Real-time reporting"],
      accent: "#2563EB",
    },
    {
      icon: Briefcase,
      title: "Technical Support",
      subtitle: "Expert-level resolution",
      description:
        "Tier 1–3 IT & software troubleshooting by certified professionals. From hardware diagnostics to complex software integrations — we resolve issues fast.",
      features: ["Certified engineers", "Remote & on-site", "SLA-guaranteed", "Incident management"],
      accent: "#0891B2",
    },
    {
      icon: BarChart2,
      title: "Back Office",
      subtitle: "Precision at scale",
      description:
        "Data entry, document processing, and operational workflows handled with unmatched accuracy. We streamline your backend so you can focus on growth.",
      features: ["Data entry & validation", "Document processing", "Workflow automation", "Quality audits"],
      accent: "#7C3AED",
    },
    {
      icon: TrendingUp,
      title: "KPO Services",
      subtitle: "Intelligence-driven decisions",
      description:
        "High-value knowledge process outsourcing — research, analytics, financial modeling, and strategy consulting. Turning data into actionable insights.",
      features: ["Market research", "Financial analytics", "Legal process", "Strategy consulting"],
      accent: "#059669",
    },
    {
      icon: Users,
      title: "Virtual Assistants",
      subtitle: "Your remote A-team",
      description:
        "Professional remote assistants for scheduling, communications, project coordination and administrative tasks — dedicated, trained, and aligned with your brand.",
      features: ["Executive assistants", "Project coordination", "Calendar management", "CRM support"],
      accent: "#DC2626",
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      subtitle: "Global reach, local feel",
      description:
        "Native-speaking agents across 30+ languages enabling seamless global customer engagement. Culturally aware, contextually precise.",
      features: ["30+ languages", "Cultural training", "24/7 global coverage", "Localization"],
      accent: "#D97706",
    },
  ];

  const stats = [
    { value: "500+", label: "Global Clients", icon: Users },
    { value: "10M+", label: "Interactions/Year", icon: Zap },
    { value: "99.5%", label: "Uptime SLA", icon: Shield },
    { value: "4.9★", label: "Client Rating", icon: Award },
  ];

  const whyUs = [
    { title: "ISO-Certified Quality", desc: "Rigorous QA frameworks ensuring consistent delivery excellence." },
    { title: "Rapid Onboarding", desc: "Full operational readiness in as little as 2 weeks." },
    { title: "Dedicated Account Managers", desc: "Single point of contact for seamless partnership." },
    { title: "Data Security", desc: "GDPR compliant with enterprise-grade encryption." },
    { title: "Scalable Infrastructure", desc: "From 10 to 10,000 agents — we scale with you." },
    { title: "Performance Dashboards", desc: "Real-time analytics at your fingertips, always." },
  ];

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#F8F7F4", minHeight: "100vh" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .bpo-root {
          font-family: 'DM Sans', sans-serif;
          background: #F8F7F4;
          color: #0F172A;
        }

        .display-font { font-family: 'Playfair Display', serif; }

        /* NAV */
        .bpo-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(15,23,42,0.96);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 0 2.5rem;
          height: 68px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.01em;
        }
        .nav-logo span { color: #3B82F6; }
        .nav-links { display: flex; gap: 2rem; }
        .nav-link {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #fff; }
        .nav-cta {
          background: #2563EB;
          color: #fff;
          padding: 0.5rem 1.25rem;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s;
        }
        .nav-cta:hover { background: #1D4ED8; }

        /* HERO */
        .bpo-hero {
          background: #0F172A;
          min-height: 100vh;
          padding: 120px 2.5rem 80px;
          position: relative;
          overflow: hidden;
        }
        .hero-bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .hero-glow {
          position: absolute;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%);
          top: -100px; right: -100px;
          pointer-events: none;
        }
        .hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(37,99,235,0.15);
          border: 1px solid rgba(37,99,235,0.3);
          color: #93C5FD;
          padding: 0.375rem 0.875rem;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4.25rem);
          font-weight: 700;
          line-height: 1.1;
          color: #fff;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }
        .hero-h1 .accent { color: #3B82F6; font-style: italic; }
        .hero-p {
          color: rgba(255,255,255,0.55);
          font-size: 1.0625rem;
          line-height: 1.75;
          margin-bottom: 2.5rem;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
        }
        .hero-actions { display: flex; gap: 1rem; align-items: center; }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #2563EB;
          color: #fff;
          padding: 0.875rem 1.75rem;
          border-radius: 8px;
          font-size: 0.9375rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          font-family: 'DM Sans', sans-serif;
        }
        .btn-primary:hover { background: #1D4ED8; transform: translateY(-1px); }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255,255,255,0.65);
          font-size: 0.9375rem;
          font-weight: 400;
          text-decoration: none;
          padding: 0.875rem 0;
          transition: color 0.2s;
          font-family: 'DM Sans', sans-serif;
          border: none;
          background: none;
          cursor: pointer;
        }
        .btn-secondary:hover { color: #fff; }

        /* HERO VISUAL */
        .hero-visual {
          position: relative;
        }
        .hero-card-main {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(8px);
        }
        .metric-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .metric-chip {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 1rem;
          text-align: center;
        }
        .metric-chip .num {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #3B82F6;
        }
        .metric-chip .lbl {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.4);
          margin-top: 0.25rem;
          font-family: 'DM Sans', sans-serif;
        }
        .agent-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(255,255,255,0.03);
          border-radius: 8px;
          margin-bottom: 0.5rem;
        }
        .agent-dot { width: 8px; height: 8px; border-radius: 50%; background: #10B981; flex-shrink: 0; }
        .agent-info { flex: 1; }
        .agent-name { font-size: 0.8125rem; color: rgba(255,255,255,0.8); font-family: 'DM Sans', sans-serif; }
        .agent-role { font-size: 0.6875rem; color: rgba(255,255,255,0.35); font-family: 'DM Sans', sans-serif; }
        .agent-badge {
          font-size: 0.6875rem;
          background: rgba(16,185,129,0.15);
          color: #6EE7B7;
          padding: 0.2rem 0.5rem;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
        }
        .float-badge {
          position: absolute;
          bottom: -1.5rem;
          left: -1.5rem;
          background: #fff;
          border-radius: 10px;
          padding: 0.75rem 1rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .float-badge .stars { color: #F59E0B; font-size: 0.75rem; letter-spacing: 1px; }
        .float-badge .rating { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: #0F172A; }
        .float-badge .sub { font-size: 0.6875rem; color: #64748B; font-family: 'DM Sans', sans-serif; }

        /* STATS STRIP */
        .stats-strip {
          background: #fff;
          border-top: 1px solid #E8E5DF;
          border-bottom: 1px solid #E8E5DF;
          padding: 3rem 2.5rem;
        }
        .stats-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        .stat-item {
          text-align: center;
          padding: 1.5rem 1rem;
          border-right: 1px solid #E8E5DF;
        }
        .stat-item:last-child { border-right: none; }
        .stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #0F172A;
          line-height: 1;
          margin-bottom: 0.375rem;
        }
        .stat-lbl {
          font-size: 0.8125rem;
          color: #64748B;
          font-weight: 400;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* SERVICES */
        .services-section {
          padding: 6rem 2.5rem;
          background: #F8F7F4;
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #2563EB;
          margin-bottom: 0.875rem;
        }
        .section-eyebrow::before {
          content: '';
          display: inline-block;
          width: 20px;
          height: 1px;
          background: #2563EB;
        }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 700;
          color: #0F172A;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }
        .section-sub {
          color: #64748B;
          font-size: 1rem;
          line-height: 1.75;
          max-width: 520px;
          font-weight: 300;
        }
        .services-layout {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
          margin-top: 3.5rem;
          align-items: start;
        }
        .service-tabs {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .service-tab {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          padding: 1rem 1.25rem;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
          background: transparent;
          border: 1px solid transparent;
          text-align: left;
        }
        .service-tab:hover { background: rgba(37,99,235,0.04); }
        .service-tab.active {
          background: #fff;
          border-color: #E8E5DF;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        .service-tab-icon {
          width: 36px; height: 36px;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          background: #EEF2FF;
          color: #2563EB;
        }
        .service-tab.active .service-tab-icon { background: #2563EB; color: #fff; }
        .service-tab-title {
          font-size: 0.9375rem;
          font-weight: 500;
          color: #374151;
          font-family: 'DM Sans', sans-serif;
        }
        .service-tab.active .service-tab-title { color: #0F172A; }

        .service-panel {
          background: #fff;
          border: 1px solid #E8E5DF;
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: 0 4px 24px rgba(0,0,0,0.05);
        }
        .panel-heading {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.375rem;
          letter-spacing: -0.01em;
        }
        .panel-sub {
          font-size: 0.8125rem;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 1.25rem;
          font-weight: 400;
        }
        .panel-divider {
          height: 1px;
          background: #E8E5DF;
          margin-bottom: 1.5rem;
        }
        .panel-body {
          color: #475569;
          font-size: 0.9375rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          font-weight: 300;
        }
        .panel-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        .panel-feature {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-size: 0.875rem;
          color: #374151;
          font-family: 'DM Sans', sans-serif;
        }
        .feature-check {
          width: 18px; height: 18px;
          background: #EEF2FF;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          color: #2563EB;
        }

        /* WHY US */
        .why-section {
          background: #0F172A;
          padding: 6rem 2.5rem;
        }
        .why-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 3.5rem;
        }
        .why-card {
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 1.75rem;
          background: rgba(255,255,255,0.03);
          transition: border-color 0.2s, background 0.2s;
        }
        .why-card:hover {
          border-color: rgba(37,99,235,0.4);
          background: rgba(37,99,235,0.04);
        }
        .why-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: rgba(59,130,246,0.2);
          line-height: 1;
          margin-bottom: 1rem;
        }
        .why-title {
          font-size: 0.9375rem;
          font-weight: 500;
          color: #F1F5F9;
          margin-bottom: 0.5rem;
          font-family: 'DM Sans', sans-serif;
        }
        .why-desc {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.7;
          font-weight: 300;
          font-family: 'DM Sans', sans-serif;
        }

        /* PROCESS */
        .process-section {
          padding: 6rem 2.5rem;
          background: #fff;
        }
        .process-inner { max-width: 1200px; margin: 0 auto; }
        .process-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          margin-top: 3.5rem;
          position: relative;
        }
        .process-steps::before {
          content: '';
          position: absolute;
          top: 24px;
          left: 12.5%;
          right: 12.5%;
          height: 1px;
          background: #E8E5DF;
        }
        .process-step { padding: 0 1rem; }
        .step-dot {
          width: 48px; height: 48px;
          border-radius: 50%;
          background: #0F172A;
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          position: relative;
          z-index: 2;
        }
        .step-title {
          font-size: 0.9375rem;
          font-weight: 500;
          color: #0F172A;
          margin-bottom: 0.5rem;
          font-family: 'DM Sans', sans-serif;
        }
        .step-desc {
          font-size: 0.8125rem;
          color: #94A3B8;
          line-height: 1.65;
          font-weight: 300;
          font-family: 'DM Sans', sans-serif;
        }

        /* CTA */
        .cta-section {
          padding: 6rem 2.5rem;
          background: #F8F7F4;
          border-top: 1px solid #E8E5DF;
        }
        .cta-inner {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .cta-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3.25rem);
          font-weight: 700;
          color: #0F172A;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1.25rem;
        }
        .cta-sub {
          color: #64748B;
          font-size: 1rem;
          line-height: 1.75;
          margin-bottom: 2.5rem;
          font-weight: 300;
        }
        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .contact-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          margin-top: 3.5rem;
          padding-top: 2.5rem;
          border-top: 1px solid #E8E5DF;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          color: #475569;
          font-size: 0.875rem;
          font-family: 'DM Sans', sans-serif;
        }
        .contact-item a { color: inherit; text-decoration: none; }
        .contact-item a:hover { color: #2563EB; }

        /* FOOTER LINE */
        .footer-line {
          background: #0F172A;
          padding: 1.5rem 2.5rem;
          text-align: center;
          font-size: 0.8125rem;
          color: rgba(255,255,255,0.3);
          font-family: 'DM Sans', sans-serif;
        }
        .footer-line span { color: rgba(255,255,255,0.5); }

        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; }
          .hero-visual { display: none; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .stat-item { border-right: none; border-bottom: 1px solid #E8E5DF; }
          .stat-item:nth-child(2n) { }
          .services-layout { grid-template-columns: 1fr; }
          .service-tabs { flex-direction: row; flex-wrap: wrap; }
          .why-grid { grid-template-columns: 1fr 1fr; }
          .process-steps { grid-template-columns: 1fr 1fr; }
          .process-steps::before { display: none; }
        }
      `}</style>

      <div className="bpo-root">

        {/* NAV */}
        <nav className="bpo-nav">
          <div className="nav-logo">Nexus<span>Ops</span></div>
          <div className="nav-links">
            <a href="#" className="nav-link">Services</a>
            <a href="#" className="nav-link">Industries</a>
            <a href="#" className="nav-link">Case Studies</a>
            <a href="#" className="nav-link">About</a>
          </div>
          <Link to="/contact-us" className="nav-cta">Get a Quote</Link>
        </nav>

        {/* HERO */}
        <section className="bpo-hero">
          <div className="hero-bg-grid" />
          <div className="hero-glow" />
          <div className="hero-inner">
            <div>
              <div className="hero-eyebrow">
                <Headset size={12} /> BPO &amp; KPO Services
              </div>
              <h1 className="hero-h1">
                The Outsourcing<br />
                Partner You<br />
                <span className="accent">Deserve.</span>
              </h1>
              <p className="hero-p">
                We manage your operations so you can focus on what matters. From customer support to knowledge processing — delivered with precision, at scale.
              </p>
              <div className="hero-actions">
                <Link to="/contact-us" className="btn-primary">
                  Start a Conversation <ArrowRight size={16} />
                </Link>
                <Link to="/case-studies" className="btn-secondary">
                  View Case Studies <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card-main">
                <div className="metric-row">
                  <div className="metric-chip">
                    <div className="num">10M+</div>
                    <div className="lbl">Annual Interactions</div>
                  </div>
                  <div className="metric-chip">
                    <div className="num">99.5%</div>
                    <div className="lbl">SLA Uptime</div>
                  </div>
                  <div className="metric-chip">
                    <div className="num">500+</div>
                    <div className="lbl">Global Clients</div>
                  </div>
                  <div className="metric-chip">
                    <div className="num">30+</div>
                    <div className="lbl">Languages</div>
                  </div>
                </div>
                <div style={{ padding: "0.5rem 0 0.25rem", fontSize: "0.6875rem", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.625rem" }}>
                  Live Agents Online
                </div>
                {["Sarah M. — Customer Support", "Raj K. — Technical Specialist", "Priya A. — KPO Analyst"].map((name, i) => (
                  <div key={i} className="agent-row">
                    <div className="agent-dot" />
                    <div className="agent-info">
                      <div className="agent-name">{name.split("—")[0].trim()}</div>
                      <div className="agent-role">{name.split("—")[1].trim()}</div>
                    </div>
                    <div className="agent-badge">Active</div>
                  </div>
                ))}
              </div>
              <div className="float-badge">
                <div>
                  <div className="stars">★★★★★</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem" }}>
                    <div className="rating">4.9</div>
                    <div className="sub">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <div className="stats-strip" ref={statsRef}>
          <div className="stats-inner">
            {stats.map((s, i) => (
              <div key={i} className="stat-item">
                <div className="stat-num">{s.value}</div>
                <div className="stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <div className="services-section">
          <div className="section-eyebrow">What We Offer</div>
          <h2 className="section-title">Comprehensive<br />Outsourcing Solutions</h2>
          <p className="section-sub">
            Tailored service lines built for businesses that demand reliability, accuracy, and measurable outcomes.
          </p>

          <div className="services-layout">
            <div className="service-tabs">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className={`service-tab ${activeService === i ? "active" : ""}`}
                    onClick={() => setActiveService(i)}
                  >
                    <div className="service-tab-icon">
                      <Icon size={16} />
                    </div>
                    <div className="service-tab-title">{s.title}</div>
                  </div>
                );
              })}
            </div>

            <div className="service-panel">
              <div className="panel-sub">{services[activeService].subtitle}</div>
              <div className="panel-heading">{services[activeService].title}</div>
              <div className="panel-divider" />
              <p className="panel-body">{services[activeService].description}</p>
              <div className="panel-features">
                {services[activeService].features.map((f, i) => (
                  <div key={i} className="panel-feature">
                    <div className="feature-check">
                      <CheckCircle size={11} />
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #E8E5DF" }}>
                <Link to="/contact-us" className="btn-primary" style={{ display: "inline-flex" }}>
                  Enquire About This Service <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* WHY US */}
        <section className="why-section">
          <div className="why-inner">
            <div className="section-eyebrow" style={{ color: "#60A5FA" }}>
              <span style={{ background: "#60A5FA", display: "inline-block", width: "20px", height: "1px" }} />
              Why NexusOps
            </div>
            <h2 className="section-title" style={{ color: "#fff" }}>
              Built Different.<br />Proven Results.
            </h2>
            <div className="why-grid">
              {whyUs.map((w, i) => (
                <div key={i} className="why-card">
                  <div className="why-num">0{i + 1}</div>
                  <div className="why-title">{w.title}</div>
                  <div className="why-desc">{w.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process-section">
          <div className="process-inner">
            <div className="section-eyebrow">Our Process</div>
            <h2 className="section-title">From Onboarding<br />to Excellence</h2>
            <div className="process-steps">
              {[
                { n: "01", t: "Discovery Call", d: "We understand your operations, goals, and existing pain points in depth." },
                { n: "02", t: "Custom Proposal", d: "Tailored service plan with clear SLAs, pricing, and team structure." },
                { n: "03", t: "Rapid Onboarding", d: "Full setup and training completed in as little as 2 weeks." },
                { n: "04", t: "Ongoing Excellence", d: "Continuous QA, reporting, and dedicated account management." },
              ].map((step, i) => (
                <div key={i} className="process-step">
                  <div className="step-dot">{step.n}</div>
                  <div className="step-title">{step.t}</div>
                  <p className="step-desc">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-inner">
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>Get Started</div>
            <h2 className="cta-title">
              Ready to Transform<br />Your Operations?
            </h2>
            <p className="cta-sub">
              Join 500+ companies that trust NexusOps to run their critical business processes — with precision, care, and measurable impact.
            </p>
            <div className="cta-actions">
              <Link to="/contact-us" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1rem" }}>
                Schedule a Free Consultation <ArrowRight size={17} />
              </Link>
              <Link to="/case-studies" className="btn-secondary" style={{ color: "#374151" }}>
                See Our Work <ChevronRight size={17} />
              </Link>
            </div>

            <div className="contact-row">
              <div className="contact-item">
                <Phone size={14} color="#2563EB" />
                <a href="tel:+911234567890">+91 12345 67890</a>
              </div>
              <div className="contact-item">
                <Mail size={14} color="#2563EB" />
                <a href="mailto:hello@nexusops.com">hello@nexusops.com</a>
              </div>
              <div className="contact-item">
                <MapPin size={14} color="#2563EB" />
                New Delhi, India
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <div className="footer-line">
          © 2025 <span>NexusOps</span>. All rights reserved. Built with precision.
        </div>

      </div>
    </div>
  );
};

export default BPO_KPO_Services;