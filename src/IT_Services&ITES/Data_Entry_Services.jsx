import React, { useEffect } from "react";
import ServiceNavbar from "../components/ServiceNavbar";
import { Link } from "react-router-dom";
import {
  Edit3,
  ClipboardList,
  Search,
  FileText,
  Database,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
  { value: "50M+", label: "Records Processed" },
  { value: "99.99%", label: "Accuracy Rate" },
  { value: "1000+", label: "Happy Clients" },
  { value: "24/7", label: "Support Available" },
];

const services = [
  { icon: <Edit3 size={24} />, title: "Online Data Entry", desc: "Fast & accurate digital data entry across all platforms and formats." },
  { icon: <ClipboardList size={24} />, title: "Offline Data Entry", desc: "Reliable manual data processing from physical documents and forms." },
  { icon: <Search size={24} />, title: "Data Verification", desc: "Multi-level validation to ensure complete data accuracy." },
  { icon: <FileText size={24} />, title: "Document Processing", desc: "End-to-end digitization of paper-based documents." },
  { icon: <Database size={24} />, title: "Database Management", desc: "Clean, organize and maintain structured data repositories." },
  { icon: <ShieldCheck size={24} />, title: "Quality Assurance", desc: "Rigorous QA checks ensuring 99.99% accuracy on every project." },
];

const features = [
  "99.99% Accuracy",
  "Secure Data",
  "Fast Delivery",
  "Expert Team",
  "Scalable Work",
  "24/7 Support",
];

const Data_Entry_Services = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&display=swap');

        .de-page {
          font-family: 'Outfit', sans-serif;
          background: #F9F8F6;
          min-height: 100vh;
          color: #111827;
        }

        .de-hero {
          background: #0B0F1A;
          padding: 120px 1.5rem 90px;
          position: relative;
          overflow: hidden;
        }
        .de-hero-line {
          position: absolute;
          top: 0; left: 50%; width: 1px; height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(59,130,246,0.2), transparent);
          transform: translateX(-50%);
        }
        .de-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .de-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #60A5FA;
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.2);
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 1.5rem;
        }
        .de-h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.75rem, 5vw, 4.5rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 1.25rem;
        }
        .de-h1 .de-accent {
          background: linear-gradient(135deg, #3B82F6, #06B6D4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .de-hero-p {
          color: rgba(255,255,255,0.45);
          font-size: 1rem;
          line-height: 1.8;
          font-weight: 300;
          max-width: 420px;
          margin-bottom: 2.5rem;
        }
        .de-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #2563EB;
          color: #fff;
          padding: 14px 28px;
          border-radius: 10px;
          font-size: 0.9375rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
        }
        .de-btn-primary:hover {
          background: #1D4ED8;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37,99,235,0.4);
        }
        .de-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.5);
          padding: 14px 20px;
          border-radius: 10px;
          font-size: 0.9375rem;
          font-weight: 400;
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
        }
        .de-btn-outline:hover { color: #fff; border-color: rgba(255,255,255,0.25); }
        .de-hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; }

        .de-hero-visual { position: relative; }
        .de-img-wrap {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          box-shadow: 0 32px 80px rgba(0,0,0,0.5);
          aspect-ratio: 4/3;
        }
        .de-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .de-rating-badge {
          position: absolute;
          bottom: -1.25rem;
          right: -1.25rem;
          background: #fff;
          border-radius: 14px;
          padding: 12px 18px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #F1F5F9;
        }
        .de-rating-badge .num {
          font-family: 'Syne', sans-serif;
          font-size: 1.125rem;
          font-weight: 800;
          color: #0F172A;
        }
        .de-rating-badge .lbl { font-size: 0.75rem; color: #94A3B8; }

        /* STATS STRIP */
        .de-stats-strip {
          background: #fff;
          border-bottom: 1px solid #E8E6E1;
        }
        .de-stats-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 0 1.5rem;
        }
        .de-stat-item {
          padding: 2.25rem 1.5rem;
          text-align: center;
          border-right: 1px solid #E8E6E1;
          transition: background 0.2s;
        }
        .de-stat-item:last-child { border-right: none; }
        .de-stat-item:hover { background: #F8FAFF; }
        .de-stat-val {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #2563EB;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 6px;
        }
        .de-stat-lbl {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: #94A3B8;
        }

        /* SERVICES */
        .de-services-section {
          background: #F9F8F6;
          padding: 6rem 1.5rem;
        }
        .de-section-header {
          max-width: 1200px;
          margin: 0 auto 3.5rem;
        }
        .de-section-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #2563EB;
          margin-bottom: 0.75rem;
        }
        .de-section-tag::before { content: '— '; opacity: 0.5; }
        .de-section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 3vw, 2.75rem);
          font-weight: 800;
          color: #0B0F1A;
          letter-spacing: -0.025em;
          line-height: 1.15;
          margin-bottom: 0.75rem;
        }
        .de-section-title span { color: #2563EB; }
        .de-section-sub {
          color: #64748B;
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.75;
          max-width: 500px;
        }
        .de-services-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .de-service-card {
          background: #fff;
          border: 1px solid #E8E6E1;
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.25s;
          position: relative;
          overflow: hidden;
          cursor: default;
        }
        .de-service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #2563EB, #06B6D4);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .de-service-card:hover {
          border-color: #BFDBFE;
          box-shadow: 0 16px 48px rgba(37,99,235,0.09);
          transform: translateY(-4px);
        }
        .de-service-card:hover::before { opacity: 1; }
        .de-icon-box {
          width: 48px; height: 48px;
          background: #EFF6FF;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          color: #2563EB;
          margin-bottom: 1.25rem;
          transition: background 0.25s, color 0.25s;
        }
        .de-service-card:hover .de-icon-box { background: #2563EB; color: #fff; }
        .de-service-card h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }
        .de-service-card p {
          font-size: 0.875rem;
          color: #64748B;
          line-height: 1.7;
          font-weight: 300;
        }

        /* FEATURES */
        .de-features-section {
          background: #0B0F1A;
          padding: 6rem 1.5rem;
        }
        .de-features-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        .de-features-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.025em;
          line-height: 1.15;
          margin-bottom: 0.625rem;
        }
        .de-features-sub {
          color: rgba(255,255,255,0.35);
          font-size: 0.9375rem;
          line-height: 1.75;
          font-weight: 300;
          margin-bottom: 2.5rem;
        }
        .de-feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .de-feature-item:last-child { border-bottom: none; }
        .de-check-wrap {
          width: 28px; height: 28px;
          border-radius: 8px;
          background: rgba(37,99,235,0.15);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          color: #60A5FA;
        }
        .de-feature-item span {
          font-size: 0.9375rem;
          color: rgba(255,255,255,0.75);
          font-weight: 400;
        }
        .de-stat-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .de-stat-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: all 0.2s;
        }
        .de-stat-card:hover {
          background: rgba(37,99,235,0.08);
          border-color: rgba(37,99,235,0.3);
        }
        .de-stat-card-val {
          font-family: 'Syne', sans-serif;
          font-size: 2.25rem;
          font-weight: 800;
          background: linear-gradient(135deg, #3B82F6, #06B6D4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 8px;
        }
        .de-stat-card-lbl {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        /* CTA */
        .de-cta-section {
          background: linear-gradient(135deg, #1D4ED8 0%, #0891B2 100%);
          padding: 6rem 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .de-cta-section::before {
          content: '';
          position: absolute;
          width: 600px; height: 600px;
          background: rgba(255,255,255,0.05);
          border-radius: 50%;
          top: -200px; right: -150px;
          pointer-events: none;
        }
        .de-cta-inner { max-width: 640px; margin: 0 auto; position: relative; z-index: 2; }
        .de-cta-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.025em;
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        .de-cta-sub {
          color: rgba(255,255,255,0.7);
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.75;
          margin-bottom: 2.5rem;
        }
        .de-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          color: #1D4ED8;
          padding: 16px 36px;
          border-radius: 12px;
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 4px 24px rgba(0,0,0,0.15);
        }
        .de-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(0,0,0,0.2); }

        @media (max-width: 900px) {
          .de-hero-inner, .de-features-inner { grid-template-columns: 1fr; gap: 2.5rem; }
          .de-hero-visual { display: none; }
          .de-stats-inner { grid-template-columns: repeat(2, 1fr); }
          .de-stat-item { border-right: none; border-bottom: 1px solid #E8E6E1; }
          .de-services-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .de-services-grid { grid-template-columns: 1fr; }
          .de-stat-cards-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="de-page">

        {/* NAVBAR */}
        <ServiceNavbar />

        {/* HERO */}
        <section className="de-hero">
          <div className="de-hero-line" />
          <div className="de-hero-inner">

            <div data-aos="fade-right">
              <div className="de-eyebrow">
                <Edit3 size={13} />
                Data Entry Services
              </div>
              <h1 className="de-h1">
                Accurate<br />
                <span className="de-accent">Data Entry</span><br />
                at Scale.
              </h1>
              <p className="de-hero-p">
                Professional data entry solutions with high accuracy, fast turnaround, and enterprise-grade security — trusted by 1000+ businesses.
              </p>
              <div className="de-hero-actions">
                <Link to="/contact-us" className="de-btn-primary">
                  Get Started <ArrowRight size={17} />
                </Link>
                <Link to="/case-studies" className="de-btn-outline">
                  View Work
                </Link>
              </div>
            </div>

            <div data-aos="fade-left" className="de-hero-visual">
              <div className="de-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800"
                  alt="Data Entry Services"
                />
              </div>
              <div className="de-rating-badge">
                <Star size={16} fill="#FBBF24" color="#FBBF24" />
                <span className="num">4.9</span>
                <span className="lbl">Rating</span>
              </div>
            </div>

          </div>
        </section>

        {/* STATS STRIP */}
        <div className="de-stats-strip">
          <div className="de-stats-inner">
            {stats.map((s, i) => (
              <div key={i} className="de-stat-item" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="de-stat-val">{s.value}</div>
                <div className="de-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <section className="de-services-section">
          <div className="de-section-header" data-aos="fade-up">
            <span className="de-section-tag">What We Offer</span>
            <h2 className="de-section-title">Our <span>Services</span></h2>
            <p className="de-section-sub">
              Comprehensive data entry solutions tailored to your business needs.
            </p>
          </div>

          <div className="de-services-grid">
            {services.map((item, i) => (
              <div
                key={i}
                className="de-service-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="de-icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES + STATS */}
        <section className="de-features-section">
          <div className="de-features-inner">

            <div data-aos="fade-right">
              <span className="de-section-tag" style={{ color: "#60A5FA" }}>Why Us</span>
              <h2 className="de-features-title">Why Choose Us?</h2>
              <p className="de-features-sub">
                We deliver consistent quality with every project, no matter the scale.
              </p>
              <div>
                {features.map((f, i) => (
                  <div key={i} className="de-feature-item">
                    <div className="de-check-wrap">
                      <CheckCircle size={14} />
                    </div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left" className="de-stat-cards-grid">
              {stats.map((s, i) => (
                <div key={i} className="de-stat-card">
                  <div className="de-stat-card-val">{s.value}</div>
                  <div className="de-stat-card-lbl">{s.label}</div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="de-cta-section">
          <div className="de-cta-inner" data-aos="fade-up">
            <h2 className="de-cta-title">Start Now 🚀</h2>
            <p className="de-cta-sub">
              Get a free quote and see how we can handle your data entry needs.
            </p>
            <Link to="/contact-us" className="de-cta-btn">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};

export default Data_Entry_Services;