"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function AboutPage() {
  const whatsappUrl = "https://wa.me/919639390951?text=Hi%20Adzoop%2C%20I%20want%20to%20start%20advertising%20and%20need%20details.";
  const phone = "+91 9639390951";

  const teamMembers = [
    {
      name: "Aman Sharma",
      role: "Co-Founder & CEO",
      bio: "Driving the vision of cloud-connected digital transit media networks across India.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Priya Verma",
      role: "Head of Operations",
      bio: "Overseeing fleet onboarding, route compliance, and on-ground installation audits.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Rajesh Gupta",
      role: "Tech Lead",
      bio: "Managing the cloud scheduling dashboards and screen media player configurations.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Neha Singh",
      role: "Client Success Head",
      bio: "Ensuring campaign optimization, route tracking alignment, and client ROI reports.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const partnerBrands = [
    "RETAIL MART", "HEALTHCARE PLUS", "METRO FITNESS", "LUCKNOW SWEETS",
    "URBAN FASHION", "EDU-SPARK ACADEMY", "FINANCE FIRST"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-[80px]">

        {/* ═══ 1. ABOUT HERO ═══ */}
        <section className="ad-abt-c-hero">
          <div className="ad-abt-c-container">
            <div className="ad-abt-c-content text-left">
              <span className="ad-abt-c-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                Who We Are
              </span>
              <h1 className="ad-abt-c-h1">
                We Are Redefining <br />
                <span className="ad-abt-c-highlight">Transit Advertising</span>
              </h1>
              <p className="ad-abt-c-subtitle">
                Adzoop is Lucknow&apos;s premier digital out-of-home (DOOH) transit media platform. We turn regular passenger rickshaws into smart, engaging advertising assets that capture eye-level audience attention during active daily commutes.
              </p>
              <div className="ad-abt-c-bonus font-sans font-semibold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                 Lucknow&apos;s leading smart auto media grid.
              </div>
              <div className="ad-abt-c-buttons">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ad-abt-c-btn-primary">
                  Start Advertising
                </a>
                <Link href="/pricing" className="ad-abt-c-btn-secondary">
                  View Packages
                </Link>
              </div>
            </div>
            
            <div className="ad-abt-c-visual">
              <img 
                src="/images/adzoop_auto_display.jpg" 
                alt="Adzoop advertising screen" 
                className="ad-abt-c-img"
              />
              <div className="ad-abt-c-overlay">
                <div className="ad-abt-c-overlay-text">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                  Lucknow Corridor Coverage
                </div>
              </div>
            </div>
          </div>
          <div className="ad-abt-c-glow" />
        </section>

        {/* ═══ 2. OUR STORY ═══ */}
        <section className="ad-os-c-section">
          <div className="ad-os-c-container">
            <div className="ad-os-c-visual">
              <img 
                src="/images/adzoop_team_group.jpg" 
                alt="Adzoop team operations" 
                className="ad-os-c-img"
              />
              <div className="ad-os-c-image-caption">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                Fleet Operations
              </div>
            </div>

            <div className="ad-os-c-content text-left">
              <h2 className="ad-os-c-h2">Our Story</h2>
              <p className="ad-os-c-text">
                Adzoop was born out of a simple observation: while traditional static billboards stand expensive and digital screen ads are skipped with a tap, passenger transit fleets offer a massive, captive audience.
              </p>
              <p className="ad-os-c-text">
                We set out to bridge this gap by building Lucknow&apos;s first smart, cloud-managed interactive display network inside commercial auto-rickshaws. By matching local route corridors with business profiles, we ensure brands get real exposure.
              </p>
              <div className="ad-os-c-quote">
                &quot;Our target was not just to put ads on the road, but to create a sustainable revenue ecosystem for local auto drivers while offering absolute ROI transparency for businesses.&quot;
              </div>
              <div className="ad-os-c-power-line">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                 Lucknow corridors live with active GPS route compliance logs.
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 3. MISSION & VISION ═══ */}
        <section className="ad-mv-c-section">
          <div className="ad-mv-c-container">
            <div className="ad-mv-c-header">
              <h2 className="ad-mv-c-h2">Mission &amp; Vision</h2>
            </div>
            
            <div className="ad-mv-c-grid font-sans">
              <div className="ad-mv-c-card text-left">
                <div className="ad-mv-c-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>
                <h3 className="ad-mv-c-title">Our Mission</h3>
                <p className="ad-mv-c-desc">
                  To empower local businesses and growing brands to capture unmatched consumer mindshare through highly targeted, cost-effective digital transit media that cannot be skipped, blocked, or ignored.
                </p>
              </div>

              <div className="ad-mv-c-card text-left">
                <div className="ad-mv-c-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
                </div>
                <h3 className="ad-mv-c-title">Our Vision</h3>
                <p className="ad-mv-c-desc">
                  To build the largest digital out-of-home (DOOH) transit grid across Uttar Pradesh, turning everyday passenger transport into smart, engaging, and highly localized media channels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 4. WHAT WE DO ═══ */}
        <section className="ad-wwd-section">
          <div className="ad-wwd-container">
            <div className="ad-wwd-content text-left">
              <h2 className="ad-wwd-h2">What We Do</h2>
              <p className="ad-wwd-text">
                We deploy high-definition cloud-managed screens inside commercial auto-rickshaws, scheduling remote advertisement loops across major commuter routes, backed by route logs and play verification metrics.
              </p>
              <p className="ad-wwd-text">
                Businesses can choose specific route targets to launch hyperlocal campaign footprints. This allows them to capture continuous exposure during active daily business traffic hours.
              </p>
              <div className="ad-wwd-impact">
                <div className="ad-wwd-impact-text">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  15+ Hours of active on-road corridor exposure daily.
                </div>
              </div>
            </div>

            <div className="ad-wwd-visual">
              <img 
                src="/images/adzoop_campaign_demo.jpg" 
                alt="Adzoop display screen campaign" 
                className="ad-wwd-img"
              />
            </div>
          </div>
          <div className="ad-wwd-glow" />
        </section>

        {/* ═══ 5. WHY ADZOOP ═══ */}
        <section className="ad-why-section">
          <div className="ad-why-container">
            <div className="ad-why-header">
              <span className="ad-why-badge">The Adzoop Advantage</span>
              <h2 className="ad-why-h2">Why Choose Us</h2>
              <p className="ad-why-subtitle font-sans">
                We bridge the gap between outdoor visibility and actual campaign compliance logs.
              </p>
            </div>

            <div className="ad-why-grid font-sans text-left">
              <div className="ad-why-card">
                <div className="ad-why-icon-box">👁️</div>
                <h3 className="ad-why-title">Eye-Level Attention</h3>
                <p className="ad-why-desc">Ads are mounted directly inside the passenger cabin, remaining unskippable throughout the commute.</p>
              </div>

              <div className="ad-why-card">
                <div className="ad-why-icon-box">🗺️</div>
                <h3 className="ad-why-title">Verified Reach</h3>
                <p className="ad-why-desc">Receive actual screen playback logs and route-compliance GPS data reports.</p>
              </div>

              <div className="ad-why-card">
                <div className="ad-why-icon-box">🛺</div>
                <h3 className="ad-why-title">City-Wide Mobility</h3>
                <p className="ad-why-desc">Autos traverse highly commercial junctions and busy business hubs continuously.</p>
              </div>

              <div className="ad-why-card">
                <div className="ad-why-icon-box">📈</div>
                <h3 className="ad-why-title">Affordable Pricing</h3>
                <p className="ad-why-desc">Hyperlocal campaign budgets start at just ₹2,000/week to fit local businesses.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. LEADERSHIP TEAM ═══ */}
        <section className="ad-team-c-section">
          <div className="ad-team-c-container">
            <div className="ad-team-c-header">
              <h2 className="ad-team-c-h2">Meet Our <span>Team</span></h2>
              <p className="ad-team-c-subtitle">
                The operations, technical, and client specialists driving Adzoop&apos;s growth and transit media excellence.
              </p>
            </div>

            <div className="ad-team-c-grid font-sans">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="ad-team-c-card">
                  <div className="ad-team-c-photo-wrap">
                    <img src={member.img} alt={member.name} className="ad-team-c-photo" />
                  </div>
                  <h3 className="ad-team-c-name">{member.name}</h3>
                  <span className="ad-team-c-role">{member.role}</span>
                  <p className="ad-team-c-bio">{member.bio}</p>
                </div>
              ))}
            </div>

            <div className="ad-team-c-footer">
              <div className="ad-team-c-power-line font-sans">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                Growing Lucknow&apos;s largest transit-LED network.
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 7. STATS ═══ */}
        <section className="ad-stat-c-section">
          <div className="ad-stat-c-container font-sans">
            <div className="ad-stat-c-header">
              <h2 className="ad-stat-c-h2">Adzoop by the Numbers</h2>
              <p className="ad-stat-c-subtitle">Verifiable proof of our route footprint and visibility impact.</p>
            </div>

            <div className="ad-stat-c-grid">
              
              <div className="ad-stat-c-card">
                <div className="ad-stat-c-icon-wrapper">🛺</div>
                <div className="ad-stat-c-number-box font-display">
                  500<span className="ad-stat-c-suffix">+</span>
                </div>
                <h3 className="ad-stat-c-title font-display">Onboarded Vehicles</h3>
                <p className="ad-stat-c-desc">Active commercial auto-rickshaws traversing Lucknow daily.</p>
              </div>

              <div className="ad-stat-c-card">
                <div className="ad-stat-c-icon-wrapper">👁️</div>
                <div className="ad-stat-c-number-box font-display">
                  15<span className="ad-stat-c-suffix">K+</span>
                </div>
                <h3 className="ad-stat-c-title font-display">Daily Impressions</h3>
                <p className="ad-stat-c-desc">Average eye-level audience reaches per active display screen.</p>
              </div>

              <div className="ad-stat-c-card">
                <div className="ad-stat-c-icon-wrapper">💼</div>
                <div className="ad-stat-c-number-box font-display">
                  50<span className="ad-stat-c-suffix">+</span>
                </div>
                <h3 className="ad-stat-c-title font-display">Trusted Brands</h3>
                <p className="ad-stat-c-desc">Brands and retail outlets executing monthly campaigns.</p>
              </div>

            </div>

            <div className="ad-stat-c-bonus font-sans font-semibold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4"><polyline points="20 6 9 17 4 12"></polyline></svg>
              All tracking stats are backed by active fleet telemetry log sheets.
            </div>
          </div>
        </section>

        {/* ═══ 8. PARTNER LOGO SLIDER ═══ */}
        <section className="ad-trust-section">
          <div className="ad-trust-container font-sans">
            <div className="ad-trust-header">
              <span className="ad-trust-badge">Brand Network</span>
              <h2 className="ad-trust-h2">Brands We Work With</h2>
              <p className="ad-trust-subtitle">Prominent brands and local institutions utilizing Adzoop transit channels.</p>
            </div>

            <div className="ad-trust-slider">
              <div className="ad-trust-track animate-marquee">
                {[...partnerBrands, ...partnerBrands].map((partner, idx) => (
                  <div key={idx} className="ad-trust-logo-box font-display font-bold text-xs tracking-wider text-text-grey">
                    {partner}
                  </div>
                ))}
              </div>
            </div>

            <div className="ad-trust-power">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Delivering high recall campaigns for Lucknow retail businesses.
            </div>
          </div>
        </section>

        {/* ═══ 9. NEWSLETTER / CONVERSION FORM ═══ */}
        <section className="ad-acta-section">
          <div className="ad-acta-overlay" />
          <div className="ad-acta-container font-sans">
            <h2 className="ad-acta-h2">
              Ready to advertise on <span className="ad-acta-highlight font-display">Adzoop?</span>
            </h2>
            <p className="ad-acta-subtitle">
              Enter your email below to receive our complete transit media kit, pricing packages, and route maps directly in your inbox.
            </p>
            
            <div className="ad-acta-form">
              <form className="ad-acta-input-group" onSubmit={(e) => { e.preventDefault(); alert("Media kit sent to your email!"); }}>
                <input 
                  type="email" 
                  className="ad-acta-input" 
                  placeholder="Enter your email address" 
                  required
                />
                <button type="submit" className="ad-acta-btn">
                  Get Media Kit
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </form>
            </div>

            <div className="ad-acta-bonus font-semibold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Or dial us directly at {phone} to discuss customized quotes.
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
