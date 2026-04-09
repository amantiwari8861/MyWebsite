import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  .it-root * { box-sizing: border-box; margin: 0; padding: 0; }
  .it-root {
    --navy: #050d1f;
    --navy2: #0a1628;
    --blue: #0057ff;
    --blue2: #0040cc;
    --cyan: #00d4ff;
    --white: #ffffff;
    --gray: #a0aec0;
    --surface: rgba(255,255,255,0.04);
    --border: rgba(255,255,255,0.08);
    font-family: 'DM Sans', sans-serif;
    background: var(--navy);
    color: var(--white);
    overflow-x: hidden;
  }
  .it-root h1, .it-root h2, .it-root h3, .it-root h4 {
    font-family: 'Syne', sans-serif;
  }

  /* HERO */
  .it-hero {
    position: relative; min-height: 640px; display: flex;
    align-items: center; overflow: hidden; padding: 100px 3rem 80px;
  }
  .it-hero-grid {
    position: absolute; inset: 0; opacity: 0.07;
    background-image: linear-gradient(var(--border) 1px, transparent 1px),
      linear-gradient(90deg, var(--border) 1px, transparent 1px);
    background-size: 60px 60px;
  }
  .it-hero-glow {
    position: absolute; top: -200px; right: -100px;
    width: 700px; height: 700px; pointer-events: none;
    background: radial-gradient(circle, rgba(0,87,255,0.18) 0%, transparent 70%);
  }
  .it-hero-glow2 {
    position: absolute; bottom: -200px; left: -100px;
    width: 500px; height: 500px; pointer-events: none;
    background: radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%);
  }
  .it-hero-content {
    position: relative; max-width: 680px;
    animation: it-fadeUp 0.8s ease both;
  }
  .it-hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(0,87,255,0.12); border: 1px solid rgba(0,87,255,0.3);
    padding: 6px 16px; border-radius: 100px; font-size: 12px;
    font-weight: 500; color: var(--cyan); letter-spacing: 0.05em;
    text-transform: uppercase; margin-bottom: 24px;
  }
  .it-hero-badge::before {
    content: ''; width: 6px; height: 6px; border-radius: 50%;
    background: var(--cyan); animation: it-pulse 2s infinite;
  }
  .it-hero-title {
    font-size: clamp(42px, 5vw, 68px); font-weight: 800;
    line-height: 1.05; letter-spacing: -2px; margin-bottom: 24px;
  }
  .it-hero-title span {
    background: linear-gradient(135deg, #0057ff, #00d4ff);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .it-hero-desc {
    font-size: 17px; color: var(--gray); line-height: 1.75;
    margin-bottom: 40px; font-weight: 300; max-width: 560px;
  }
  .it-hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }
  .it-hero-stats {
    display: flex; gap: 40px; margin-top: 56px;
    padding-top: 40px; border-top: 1px solid var(--border); flex-wrap: wrap;
  }
  .it-hstat h3 {
    font-size: 32px; font-weight: 800; color: var(--white); letter-spacing: -1px;
  }
  .it-hstat h3 span { color: var(--cyan); }
  .it-hstat p { font-size: 13px; color: var(--gray); margin-top: 2px; }

  /* BUTTONS */
  .it-btn-primary {
    background: var(--blue); color: var(--white); border: none;
    padding: 14px 30px; border-radius: 10px; font-size: 15px;
    font-weight: 500; font-family: 'DM Sans', sans-serif;
    cursor: pointer; transition: all 0.25s;
  }
  .it-btn-primary:hover {
    background: var(--blue2); transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0,87,255,0.4);
  }
  .it-btn-ghost {
    background: transparent; color: var(--white);
    border: 1px solid var(--border); padding: 14px 30px;
    border-radius: 10px; font-size: 15px; font-weight: 500;
    font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all 0.25s;
  }
  .it-btn-ghost:hover {
    border-color: rgba(255,255,255,0.25); background: var(--surface);
  }

  /* SECTION */
  .it-section { padding: 90px 3rem; }
  .it-section-navy2 { background: var(--navy2); }
  .it-section-label {
    display: inline-block; font-size: 11px; font-weight: 600;
    letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--cyan); margin-bottom: 14px;
  }
  .it-section-title {
    font-size: clamp(28px, 3vw, 42px); font-weight: 800;
    letter-spacing: -1px; margin-bottom: 16px;
  }
  .it-section-sub {
    font-size: 16px; color: var(--gray); font-weight: 300;
    max-width: 520px; line-height: 1.7;
  }
  .it-section-header { margin-bottom: 56px; }

  /* SERVICES GRID */
  .it-services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 20px;
  }
  .it-scard {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 16px; padding: 28px; cursor: pointer;
    transition: all 0.3s; position: relative; overflow: hidden;
    text-decoration: none; color: inherit; display: block;
  }
  .it-scard::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(0,87,255,0.06), transparent);
    opacity: 0; transition: opacity 0.3s;
  }
  .it-scard:hover {
    border-color: rgba(0,87,255,0.4); transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(0,87,255,0.15);
  }
  .it-scard:hover::before { opacity: 1; }
  .it-scard-icon {
    width: 48px; height: 48px; background: rgba(0,87,255,0.12);
    border-radius: 12px; display: flex; align-items: center;
    justify-content: center; margin-bottom: 20px; font-size: 22px;
    transition: all 0.3s;
  }
  .it-scard:hover .it-scard-icon {
    background: rgba(0,87,255,0.25); transform: scale(1.1);
  }
  .it-scard h3 { font-size: 16px; font-weight: 700; margin-bottom: 10px; letter-spacing: -0.3px; }
  .it-scard p { font-size: 14px; color: var(--gray); line-height: 1.65; font-weight: 300; }
  .it-scard-arrow {
    position: absolute; top: 20px; right: 20px; width: 28px; height: 28px;
    background: var(--border); border-radius: 50%; display: flex;
    align-items: center; justify-content: center; font-size: 13px;
    opacity: 0; transition: all 0.3s;
  }
  .it-scard:hover .it-scard-arrow { opacity: 1; background: rgba(0,87,255,0.2); }

  /* TECH STACK */
  .it-tech-grid { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 40px; }
  .it-tech-pill {
    display: flex; align-items: center; gap: 10px;
    background: var(--surface); border: 1px solid var(--border);
    padding: 10px 20px; border-radius: 100px; font-size: 14px;
    font-weight: 500; transition: all 0.2s; cursor: default;
  }
  .it-tech-pill:hover {
    border-color: rgba(0,87,255,0.4); background: rgba(0,87,255,0.08);
    color: var(--cyan);
  }
  .it-tech-dot {
    width: 8px; height: 8px; border-radius: 50%; background: var(--blue);
    display: inline-block;
  }

  /* STATS */
  .it-stats-section {
    padding: 90px 3rem;
    background: linear-gradient(135deg, #050d1f 0%, #0a1a3a 50%, #050d1f 100%);
    position: relative; overflow: hidden;
  }
  .it-stats-bg {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 50% 50%, rgba(0,87,255,0.1), transparent 70%);
  }
  .it-stats-grid {
    position: relative; display: grid;
    grid-template-columns: repeat(4, 1fr); gap: 32px;
  }
  .it-stat-card {
    background: rgba(255,255,255,0.03); border: 1px solid var(--border);
    border-radius: 20px; padding: 36px 28px; text-align: center; transition: all 0.3s;
  }
  .it-stat-card:hover {
    border-color: rgba(0,87,255,0.3); background: rgba(0,87,255,0.05);
    transform: translateY(-4px);
  }
  .it-stat-num {
    font-family: 'Syne', sans-serif; font-size: 48px; font-weight: 800;
    letter-spacing: -2px; line-height: 1; margin-bottom: 8px; color: var(--cyan);
  }
  .it-stat-label { font-size: 14px; color: var(--gray); font-weight: 400; }

  /* INDUSTRIES */
  .it-ind-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px;
  }
  .it-ind-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 14px; padding: 24px 20px; transition: all 0.25s; cursor: default;
  }
  .it-ind-card:hover {
    border-color: rgba(0,212,255,0.3); background: rgba(0,212,255,0.04);
    transform: translateY(-2px);
  }
  .it-ind-icon { font-size: 24px; margin-bottom: 12px; }
  .it-ind-card h4 { font-size: 15px; font-weight: 700; margin-bottom: 6px; letter-spacing: -0.2px; }
  .it-ind-card p { font-size: 13px; color: var(--gray); font-weight: 300; }

  /* CTA */
  .it-cta-section {
    padding: 90px 3rem; background: var(--navy2);
    position: relative; overflow: hidden; text-align: center;
  }
  .it-cta-glow {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 600px; height: 300px;
    background: radial-gradient(ellipse, rgba(0,87,255,0.2), transparent 70%);
  }
  .it-cta-content { position: relative; }
  .it-cta-content h2 {
    font-size: clamp(32px, 4vw, 52px); font-weight: 800;
    letter-spacing: -1.5px; margin-bottom: 20px;
  }
  .it-cta-content h2 span { color: var(--cyan); }
  .it-cta-content p {
    font-size: 17px; color: var(--gray); font-weight: 300; margin-bottom: 40px;
    max-width: 500px; margin-left: auto; margin-right: auto; line-height: 1.75;
  }
  .it-cta-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

  /* FOOTER */
  .it-footer {
    padding: 32px 3rem; border-top: 1px solid var(--border);
    display: flex; justify-content: space-between;
    align-items: center; flex-wrap: wrap; gap: 16px;
    background: var(--navy);
  }
  .it-footer p { font-size: 13px; color: var(--gray); }
  .it-footer-logo {
    font-family: 'Syne', sans-serif; font-size: 20px;
    font-weight: 800; color: var(--white);
  }
  .it-footer-logo span { color: var(--cyan); }

  @keyframes it-fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes it-pulse {
    0%, 100% { opacity: 1; } 50% { opacity: 0.4; }
  }

  @media (max-width: 768px) {
    .it-hero { padding: 60px 1.5rem; }
    .it-section { padding: 60px 1.5rem; }
    .it-stats-section { padding: 60px 1.5rem; }
    .it-cta-section { padding: 60px 1.5rem; }
    .it-stats-grid { grid-template-columns: repeat(2, 1fr); }
    .it-hero-stats { gap: 24px; }
  }
`;

const itSubServices = [
  { title: "Software Development", to: "/services/software-development", icon: "⚙️", description: "Custom enterprise software engineered for performance, scale, and long-term maintainability." },
  { title: "Website Development", to: "/services/website-development", icon: "🌐", description: "Modern web applications with blazing performance, beautiful UX, and robust backend architecture." },
  { title: "Mobile App Development", to: "/services/mobile-app-development", icon: "📱", description: "Native and cross-platform apps for iOS and Android with seamless user experiences." },
  { title: "Cloud Solutions", to: "/services/cloud-solutions", icon: "☁️", description: "AWS, Azure & GCP infrastructure, DevOps pipelines, and cloud-native migrations at enterprise scale." },
  { title: "System Integration", to: "/services/system-integration", icon: "🔗", description: "Seamless API orchestration and middleware solutions connecting your entire technology ecosystem." },
  { title: "Data & Analytics", to: "/services/data-processing", icon: "📊", description: "Advanced data pipelines, BI dashboards, and real-time analytics to drive business decisions." },
  { title: "Data Entry Services", to: "/services/data-entry-services", icon: "📋", description: "High-accuracy, scalable data entry and document processing with quality assurance built-in." },
  { title: "BPO / KPO Services", to: "/services/bpo-kpo-services", icon: "🎧", description: "Strategic business and knowledge process outsourcing handled by domain experts worldwide." },
];

const techStack = [
  "React", "Next.js", "Angular", "Vue.js", "Python", "Django",
  "Node.js", "TypeScript", "AWS", "Azure", "Google Cloud",
  "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "Terraform"
];

const industries = [
  { icon: "🏦", title: "Banking & Finance", desc: "Fintech platforms, payment systems, risk analytics" },
  { icon: "🏥", title: "Healthcare", desc: "HL7/FHIR compliant systems, patient portals, telemedicine" },
  { icon: "🛒", title: "Retail & E-Commerce", desc: "Commerce platforms, inventory intelligence, CX optimization" },
  { icon: "🏭", title: "Manufacturing", desc: "ERP integration, IoT dashboards, supply chain automation" },
  { icon: "✈️", title: "Travel & Logistics", desc: "Booking engines, fleet management, route optimization" },
  { icon: "🎓", title: "Education", desc: "LMS platforms, adaptive learning, student analytics" },
  { icon: "📡", title: "Telecom", desc: "BSS/OSS transformation, network monitoring, CDR processing" },
  { icon: "🏛️", title: "Government", desc: "Digital governance, citizen portals, secure data systems" },
];

function useCountUp(ref, target, duration = 1500) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start = 0;
    const step = target / (duration / 16);
    const suffix = target >= 1000 ? "+" : "+";
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      el.textContent = Math.round(start) + suffix;
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, []);
}

function ITServices() {
  const s1 = useRef(null);
  const s2 = useRef(null);
  const s3 = useRef(null);
  const s4 = useRef(null);

  useCountUp(s1, 500);
  useCountUp(s2, 1200);
  useCountUp(s3, 15);
  useCountUp(s4, 40);

  return (
    <div className="it-root">
      <style>{styles}</style>

      {/* HERO */}
      <section className="it-hero">
        <div className="it-hero-grid" />
        <div className="it-hero-glow" />
        <div className="it-hero-glow2" />
        <div className="it-hero-content">
          <div className="it-hero-badge">Global Technology Partner</div>
          <h1 className="it-hero-title">
            Enterprise IT <span>Solutions</span> for Tomorrow
          </h1>
          <p className="it-hero-desc">
            Accelerate your digital transformation with cloud-native architecture,
            intelligent automation, and enterprise-grade security — built for scale.
          </p>
          <div className="it-hero-btns">
            <button className="it-btn-primary">Explore Services →</button>
            <button className="it-btn-ghost">View Case Studies</button>
          </div>
          <div className="it-hero-stats">
            <div className="it-hstat"><h3>500<span>+</span></h3><p>Enterprise Clients</p></div>
            <div className="it-hstat"><h3>1.2<span>K</span></h3><p>Projects Delivered</p></div>
            <div className="it-hstat"><h3>15<span>+</span></h3><p>Years of Excellence</p></div>
            <div className="it-hstat"><h3>24<span>/7</span></h3><p>Expert Support</p></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="it-section">
        <div className="it-section-header">
          <div className="it-section-label">What We Build</div>
          <h2 className="it-section-title">Our Core IT Service Portfolio</h2>
          <p className="it-section-sub">
            End-to-end technology services designed to modernize operations,
            accelerate growth, and reduce complexity.
          </p>
        </div>
        <div className="it-services-grid">
          {itSubServices.map((service, i) => (
            <Link key={i} to={service.to} className="it-scard">
              <div className="it-scard-icon">{service.icon}</div>
              <div className="it-scard-arrow">↗</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="it-section it-section-navy2">
        <div className="it-section-header">
          <div className="it-section-label">Technology Stack</div>
          <h2 className="it-section-title">Built With the Best</h2>
          <p className="it-section-sub">
            We work across modern frameworks, cloud platforms, and cutting-edge
            tools to deliver future-proof solutions.
          </p>
        </div>
        <div className="it-tech-grid">
          {techStack.map((tech, i) => (
            <div key={i} className="it-tech-pill">
              <span className="it-tech-dot" />
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="it-stats-section">
        <div className="it-stats-bg" />
        <div className="it-stats-grid">
          <div className="it-stat-card">
            <div className="it-stat-num" ref={s1}>0</div>
            <div className="it-stat-label">Enterprise Clients Served</div>
          </div>
          <div className="it-stat-card">
            <div className="it-stat-num" ref={s2}>0</div>
            <div className="it-stat-label">Projects Delivered</div>
          </div>
          <div className="it-stat-card">
            <div className="it-stat-num" ref={s3}>0</div>
            <div className="it-stat-label">Years of Experience</div>
          </div>
          <div className="it-stat-card">
            <div className="it-stat-num" ref={s4}>0</div>
            <div className="it-stat-label">Countries Served</div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="it-section">
        <div className="it-section-header">
          <div className="it-section-label">Industries</div>
          <h2 className="it-section-title">Sectors We Empower</h2>
          <p className="it-section-sub">
            Deep domain expertise across verticals — we understand your industry's
            unique challenges and compliance requirements.
          </p>
        </div>
        <div className="it-ind-grid">
          {industries.map((ind, i) => (
            <div key={i} className="it-ind-card">
              <div className="it-ind-icon">{ind.icon}</div>
              <h4>{ind.title}</h4>
              <p>{ind.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="it-cta-section">
        <div className="it-cta-glow" />
        <div className="it-cta-content">
          <h2>Ready to Build <span>What's Next?</span></h2>
          <p>
            Join 500+ enterprises that trust us to design, build, and scale
            their most critical technology initiatives.
          </p>
          <div className="it-cta-btns">
            <button className="it-btn-primary">Schedule a Consultation →</button>
            <button className="it-btn-ghost">Download Capability Deck</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="it-footer">
        <div className="it-footer-logo">NOVA<span>TECH</span></div>
        <p>© 2025 NovaTech. All rights reserved.</p>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>
          Enterprise Technology Solutions
        </p>
      </div>
    </div>
  );
}

export default ITServices;