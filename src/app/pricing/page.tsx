"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

const PRICING_FAQ = [
  {
    q: "Is there a minimum duration for campaigns?",
    a: "Our basic billing cycle is weekly. However, for maximum brand recall and optimal route optimization, we recommend running campaigns for at least 4 to 8 weeks."
  },
  {
    q: "Can I choose specific areas or routes in Lucknow?",
    a: "Yes. With our premium tiers (Market Penetrator & City Domination), you can select specific route corridors (e.g., Hazratganj-Gomti Nagar or Chowk-Aminabad) to target your local buyers."
  },
  {
    q: "How many times will my ad play per ride?",
    a: "Ads are played on loop. On an average 12-minute commute, your 15-second ad will play approximately 8 to 10 times, ensuring high frequency and recall."
  },
  {
    q: "Do you help with ad creative design?",
    a: "Yes. Our team can help convert your banners, promotional posters, or videos into high-impact display formats optimized for our HD screen screens."
  },
  {
    q: "What metrics are included in the weekly reports?",
    a: "We provide detailed campaign compliance reports, including the number of active vehicle hours, route telemetry data, and actual screen check-in logs."
  }
];

export default function PricingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const whatsappUrl = "https://wa.me/919639390951?text=Hi%20Adzoop%2C%20I%20want%20to%20know%20more%20about%20your%20pricing%20plans.";
  const phone = "+91 9639390951";

  const packages = [
    {
      title: "Hyperlocal Lite",
      sub: "Best for local retail shops trying out auto LED advertising.",
      price: "79",
      strike: "99",
      popular: false,
      features: [
        "1 Smart Screen Display",
        "Weekly billing cycle",
        "Standard route coverage",
        "15-Sec Ad Loop duration",
        "Weekly GPS telemetry logs",
        "Photo campaign verification"
      ],
      link: "/contact?package=hyperlocal-lite"
    },
    {
      title: "Market Penetrator",
      sub: "Ideal for growing outlets needing steady city-wide visibility.",
      price: "69",
      strike: "89",
      popular: false,
      features: [
        "Select up to 3 routes",
        "Dedicated account support",
        "Priority ad loop rotations",
        "Route corridor targeting",
        "Weekly GPS + telemetry metrics",
        "Video verification audits"
      ],
      link: "/contact?package=market-penetrator"
    },
    {
      title: "City Domination",
      sub: "Recommended. Maximizes impressions and builds high local brand authority.",
      price: "59",
      strike: "79",
      popular: true,
      features: [
        "Select up to 5 routes",
        "Full route-corridor custom filters",
        "Double ad loop volume rotations",
        "Dedicated manager support",
        "Priority GPS telemetry audits",
        "Weekly video/photo checks"
      ],
      link: "/contact?package=city-domination"
    },
    {
      title: "Enterprise Expansion",
      sub: "Best for large-scale campaigns and corporate outreach across regions.",
      price: "49",
      strike: "69",
      popular: false,
      features: [
        "Full city-wide route access",
        "Custom loop scheduling rules",
        "API integration reports",
        "24/7 campaign tracking",
        "Dedicated success manager",
        "Advanced playback telemetry"
      ],
      link: "/contact?package=enterprise-expansion"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-[80px]">

        {/* ═══ 1. PRICING HERO ═══ */}
        <section className="minimal-hero-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-text-dark font-display mb-4">
              Transparent, Cost-Effective <br />
              <span className="text-gradient-brand">Campaign Packages</span>
            </h1>
            <p className="text-base sm:text-lg text-text-grey max-w-2xl mx-auto leading-relaxed font-sans mb-8">
              Choose an auto rickshaw LED display plan that directly matches your advertising footprint. Build high brand awareness for a fraction of static billboard rates.
            </p>
          </div>
        </section>

        {/* ═══ 2. PACKAGES GRID ═══ */}
        <section className="ad-pc-section !pt-0">
          <div className="ad-pc-container">
            <div className="ad-pc-grid">
              {packages.map((pkg, idx) => (
                <div key={idx} className={`ad-pc-card ${pkg.popular ? "ad-pc-highlight" : ""}`}>
                  {pkg.popular && (
                    <div className="ad-pc-badge">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      Most Popular
                    </div>
                  )}
                  <h3 className="ad-pc-title">{pkg.title}</h3>
                  <p className="ad-pc-subtitle">{pkg.sub}</p>
                  
                  <div className="ad-pc-price-box">
                    <span className="ad-pc-price-label">Daily rate per auto</span>
                    <div className="ad-pc-price-wrapper font-sans">
                      <span className="ad-pc-strike">₹{pkg.strike}</span>
                      <span className="ad-pc-price">₹{pkg.price}</span>
                      <span className="ad-pc-price-suffix">/day</span>
                    </div>
                  </div>

                  <ul className="ad-pc-features font-sans">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="ad-pc-feature">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href={pkg.link} 
                    className={`ad-pc-btn ${pkg.popular ? "ad-pc-btn-solid" : "ad-pc-btn-outline"}`}
                  >
                    Select Plan
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 3. VALUE-ADD INCLUSIONS ═══ */}
        <section className="ad-value-section">
          <div className="ad-value-container">
            <div className="ad-value-header">
              <h2 className="ad-value-h2">
                Value Included in <span className="ad-value-highlight">All Plans</span>
              </h2>
              <p className="ad-value-subtitle font-sans">
                Standard features across all packages to deliver transparency and track visibility.
              </p>
            </div>

            <div className="ad-value-grid font-sans text-left">
              <div className="ad-value-card">
                <div className="ad-value-icon-box">📺</div>
                <h3 className="ad-value-title">HD Screen Quality</h3>
                <p className="ad-value-desc">High-brightness digital screens mounted inside autos, ensuring readability in all daylight conditions.</p>
              </div>

              <div className="ad-value-card">
                <div className="ad-value-icon-box">☁️</div>
                <h3 className="ad-value-title">Cloud Ad Scheduling</h3>
                <p className="ad-value-desc">Deploy and rotate creatives remotely through our secure ad management cloud servers.</p>
              </div>

              <div className="ad-value-card">
                <div className="ad-value-icon-box">📍</div>
                <h3 className="ad-value-title">Custom Corridors</h3>
                <p className="ad-value-desc">Choose primary routes and business corridors that match your storefront target market.</p>
              </div>

              <div className="ad-value-card">
                <div className="ad-value-icon-box">📊</div>
                <h3 className="ad-value-title">GPS Reports</h3>
                <p className="ad-value-desc">Receive weekly GPS compliance reports showing exact vehicle run durations and route locations.</p>
              </div>

              <div className="ad-value-card">
                <div className="ad-value-icon-box">📸</div>
                <h3 className="ad-value-title">Verification Logs</h3>
                <p className="ad-value-desc">Get verified physical photo and video checking records confirming your ads are active on the road.</p>
              </div>

              <div className="ad-value-card">
                <div className="ad-value-icon-box">🛠️</div>
                <h3 className="ad-value-title">On-Road Maintenance</h3>
                <p className="ad-value-desc">Our dedicated service team manages physical checks and system configurations proactively.</p>
              </div>
            </div>

            <div className="text-center mt-4">
              <div className="ad-value-footer font-sans">
                Need a custom enterprise campaign? <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline font-bold">Talk to our operations lead</a>
              </div>
            </div>

          </div>
        </section>

        {/* ═══ 4. ROI FLOWCHART ═══ */}
        <section className="ad-roi-section">
          <div className="ad-roi-container">
            <div className="ad-roi-header">
              <h2 className="ad-roi-h2">
                How Adzoop Drives <span className="ad-roi-highlight font-display">Campaign ROI</span>
              </h2>
              <p className="ad-roi-subtitle font-sans">
                A structured funnel built to capture eye-level audience attention and direct it to your business.
              </p>
            </div>

            <div className="ad-roi-flow font-sans">
              
              {/* Step 1 */}
              <div className="ad-roi-step">
                <div className="ad-roi-icon">🛺</div>
                <div className="ad-roi-number font-display">Step 1</div>
                <p className="ad-roi-desc leading-relaxed">
                  <span className="ad-roi-text-hl">Board Commuters</span> <br />
                  Engages passengers as soon as they step inside the auto.
                </p>
              </div>

              <div className="ad-roi-arrow font-bold text-lg hidden lg:flex">→</div>

              {/* Step 2 */}
              <div className="ad-roi-step">
                <div className="ad-roi-icon">📺</div>
                <div className="ad-roi-number font-display">Step 2</div>
                <p className="ad-roi-desc leading-relaxed">
                  <span className="ad-roi-text-hl">Continuous Loops</span> <br />
                  Plays your ad sequence during a 12-15 min captive ride.
                </p>
              </div>

              <div className="ad-roi-arrow font-bold text-lg hidden lg:flex">→</div>

              {/* Step 3 */}
              <div className="ad-roi-step">
                <div className="ad-roi-icon">💬</div>
                <div className="ad-roi-number font-display">Step 3</div>
                <p className="ad-roi-desc leading-relaxed">
                  <span className="ad-roi-text-hl">Direct Engagement</span> <br />
                  Prompts actions via visible WhatsApp, calls, or QR scans.
                </p>
              </div>

              <div className="ad-roi-arrow font-bold text-lg hidden lg:flex">→</div>

              {/* Step 4 */}
              <div className="ad-roi-step">
                <div className="ad-roi-icon">📈</div>
                <div className="ad-roi-number font-display">Step 4</div>
                <p className="ad-roi-desc leading-relaxed">
                  <span className="ad-roi-text-hl">Compliance Check</span> <br />
                  Verify route telemetry data and screen playback logs.
                </p>
              </div>

            </div>

            <div className="ad-roi-punch-box font-sans">
              <h3 className="ad-roi-punch-text">
                Maximize Local Reach: <span>Get your brand in front of thousands of Lucknow buyers daily.</span>
              </h3>
              <p className="ad-roi-disclaimer">
                Estimates are calculated based on typical traffic density and route duration averages.
              </p>
            </div>

          </div>
        </section>

        {/* ═══ 5. FAQ ═══ */}
        <section className="ad-pfaq-section">
          <div className="ad-pfaq-container">
            <div className="ad-pfaq-header">
              <h2 className="ad-pfaq-h2">Pricing FAQs</h2>
              <p className="ad-pfaq-subtitle font-sans">
                Answers to common inquiries regarding our pricing, route metrics, and scheduling capabilities.
              </p>
            </div>

            <div className="ad-pfaq-list font-sans">
              {PRICING_FAQ.map((faq, idx) => (
                <div key={idx} className={`ad-pfaq-item ${activeFaq === idx ? "active" : ""}`}>
                  <button className="ad-pfaq-question" onClick={() => toggleFaq(idx)}>
                    {faq.q}
                    <div className="ad-pfaq-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </button>
                  <div className="ad-pfaq-answer-wrapper">
                    <div className="ad-pfaq-answer">
                      <div className="ad-pfaq-answer-inner leading-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="ad-pfaq-cta font-sans">
              <h3 className="ad-pfaq-cta-text">Have a specific campaign setup in mind?</h3>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ad-pfaq-btn">
                Contact Campaigns Desk
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
