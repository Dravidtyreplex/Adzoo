"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const FAQ_DATA = [
  { 
    q: "What is auto advertising and how does it work?", 
    a: "Auto advertising displays your brand on high-brightness LED screens mounted inside or on auto-rickshaws. Your ad plays on loop as autos travel through busy corridors, markets, and junctions, capturing eye-level attention from passengers and pedestrians." 
  },
  { 
    q: "Why is Adzoop better than online ads and billboards?", 
    a: "Billboards are static, expensive, and easy to ignore. Online ads suffer from skip buttons and ad-blockers. Adzoop is eye-level, moves where the crowd moves, and provides uninterrupted exposure for a fraction of the cost." 
  },
  { 
    q: "Who will see my ads with Adzoop?", 
    a: "Your ads will be seen by commuters, shoppers, pedestrians, and passengers inside high-traffic markets, transit hubs, and commercial streets across Lucknow." 
  },
  { 
    q: "Do I get proof that my ads are running?", 
    a: "Yes. We provide complete transparency with real-time GPS tracking data and video/photo proofs showing your campaign live on the road." 
  },
  { 
    q: "Which businesses can benefit from Adzoop advertising?", 
    a: "Any retail shop, local brand, service provider, medical center, educational institute, or corporate brand looking to build hyper-local awareness and drive high recall." 
  },
  { 
    q: "Is auto advertising effective for local marketing?", 
    a: "Extremely. It targets specific routes and high-traffic markets where your prospective buyers live and shop, maximizing local footfall and inquiries." 
  },
  { 
    q: "How can I join Adzoop as a driver (partner)?", 
    a: "If you drive a commercial auto-rickshaw in Lucknow, you can register with us. We will mount a smart LED display on your auto, and you will earn extra passive income." 
  },
  { 
    q: "How do drivers earn with Adzoop?", 
    a: "Drivers receive direct monthly payments simply for keeping the display running while driving their regular routes. There is zero extra effort required." 
  },
  { 
    q: "Do drivers need to do extra work?", 
    a: "No. The smart LED system turns on and off automatically with the vehicle's ignition and syncs cloud creatives without driver intervention." 
  }
];

export default function HomePage() {
  const [modalActive, setModalActive] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const whatsappUrl = "https://wa.me/919639390951?text=Hi%20Adzoop%2C%20I%27d%20like%20to%20know%20more%20about%20advertising%20on%20your%20LED%20displays.";

  // Brand badges for marquee (using styled text badges for 100% original representation)
  const clientBrands = [
    "RETAIL MART", "HEALTHCARE PLUS", "METRO FITNESS", "LUCKNOW SWEETS",
    "URBAN FASHION", "EDU-SPARK ACADEMY", "FINANCE FIRST", "BURGER CLUB"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-[80px]">

        {/* ═══ HERO SECTION ═══ */}
        <section className="minimal-hero-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4 md:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Column (Renders first, center-aligned on mobile) */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start order-1 lg:order-1">
                <div className="ad-map-badge">
                  <div className="ad-map-live-dot" /> NOW LIVE IN LUCKNOW
                </div>
                <h1 className="hero-title text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.1] text-text-dark font-display text-center lg:text-left">
                  Turn Daily Commutes Into <br className="hidden md:inline" />
                  High-Impact Campaigns.
                </h1>
                <p className="text-base sm:text-lg text-text-grey max-w-xl leading-relaxed font-sans text-center lg:text-left">
                  Smart cloud-connected LED screens securely mounted inside commercial auto-rickshaws, delivering 10–15 minutes of unskippable attention from Lucknow passengers and pedestrians.
                </p>
                <div className="pt-2 flex justify-center lg:justify-start w-full">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-submit font-sans">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.719-1.465L0 24z"/></svg>
                    Chat on WhatsApp
                  </a>
                </div>
                <p className="text-xs text-text-muted font-sans font-medium text-center lg:text-left">Instant response. Zero commitment.</p>
              </div>

              {/* Video Column (Renders second below text) */}
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-2">
                <div className="ad-demo-c-visual-wrap w-full max-w-[450px]" onClick={() => setModalActive(true)}>
                  <div className="ad-demo-c-img-container">
                    <img 
                      src="/images/adzoop_auto_display.jpg" 
                      alt="Adzoop LED screen display" 
                      loading="lazy"
                    />
                    <div className="ad-demo-c-play-btn">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    <div className="ad-demo-c-overlay-label font-sans">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                      See it in action.
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </section>

        {/* ═══ MAP SECTION ═══ */}
        <section className="ad-map-section" id="route-map">
          <div className="ad-map-container">
            <div className="ad-map-header">
              <div className="ad-map-badge font-sans">
                <div className="ad-map-live-dot" /> LIVE ACROSS LUCKNOW
              </div>
              <h2 className="ad-map-h2 font-display">See Your Brand Move</h2>
              <p className="ad-map-subtitle font-sans">
                Our network of smart transit vehicles traverses high-footfall business districts and commuter corridors across Lucknow, ensuring continuous daily impressions.
              </p>
            </div>

            <div className="ad-map-visual">
              <div className="ad-map-svg-wrap">
                <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path id="route1" d="M 600,150 C 450,200 400,290 350,280 C 200,260 150,260 80,280"></path>
                    <path id="route2" d="M 850,450 C 800,450 750,430 750,400 C 750,320 680,300 600,300 C 550,300 500,250 450,200"></path>
                    <path id="route3" d="M 600,300 C 600,300 650,200 600,150 C 500,150 450,120 300,120"></path>
                  </defs>

                  <path d="M -50,80 Q 250,120 550,80 T 1050,100 L 1050,0 L -50,0 Z" fill="#1e293b" opacity="0.2"></path>
                  <text x="500" y="45" fill="#475569" fontFamily="Inter" fontSize="18" fontWeight="700" letterSpacing="8" textAnchor="middle" opacity="0.3">GOMTI RIVER</text>

                  <use href="#route1" className="map-road"></use>
                  <use href="#route2" className="map-road"></use>
                  <use href="#route3" className="map-road"></use>

                  <text className="vehicle-auto">🛺
                    <animateMotion dur="14s" repeatCount="indefinite">
                      <mpath href="#route1"></mpath>
                    </animateMotion>
                  </text>

                  <text className="vehicle-auto">🛺
                    <animateMotion dur="18s" begin="6s" repeatCount="indefinite">
                      <mpath href="#route1"></mpath>
                    </animateMotion>
                  </text>

                  <text className="vehicle-auto">🛺
                    <animateMotion dur="13s" repeatCount="indefinite">
                      <mpath href="#route2"></mpath>
                    </animateMotion>
                  </text>

                  <text className="vehicle-auto">🛺
                    <animateMotion dur="16s" begin="5s" repeatCount="indefinite">
                      <mpath href="#route2"></mpath>
                    </animateMotion>
                  </text>

                  <text className="vehicle-auto">🛺
                    <animateMotion dur="11s" repeatCount="indefinite">
                      <mpath href="#route3"></mpath>
                    </animateMotion>
                  </text>

                  {/* Pins mapping for Lucknow */}
                  <g className="map-pin">
                    <circle className="pin-pulse" r="10" cx="80" cy="280"></circle>
                    <circle className="pin-core" r="4" cx="80" cy="280"></circle>
                    <text x="80" y="266" className="pin-label-text">Kakori</text>
                  </g>

                  <g className="map-pin">
                    <circle className="pin-pulse" r="10" cx="200" cy="260"></circle>
                    <circle className="pin-core" r="4" cx="200" cy="260"></circle>
                    <text x="200" y="246" className="pin-label-text">Aminabad</text>
                  </g>

                  <g className="map-pin">
                    <circle className="pin-pulse" r="10" cx="300" cy="120"></circle>
                    <circle className="pin-core" r="4" cx="300" cy="120"></circle>
                    <text x="300" y="106" className="pin-label-text">Chowk</text>
                  </g>

                  <g className="map-pin">
                    <circle className="pin-pulse" r="10" cx="350" cy="280"></circle>
                    <circle className="pin-core" r="4" cx="350" cy="280"></circle>
                    <text x="350" y="300" className="pin-label-text">Mahanagar</text>
                  </g>

                  <g className="map-pin">
                    <circle className="pin-pulse" r="10" cx="450" cy="200"></circle>
                    <circle className="pin-core" r="4" cx="450" cy="200"></circle>
                    <text x="450" y="186" className="pin-label-text">Aliganj</text>
                  </g>

                  <g className="map-pin">
                    <circle className="pin-pulse" r="10" cx="600" cy="150"></circle>
                    <circle className="pin-core" r="4" cx="600" cy="150"></circle>
                    <text x="600" y="136" className="pin-label-text">Hazratganj</text>
                  </g>

                  <g className="map-pin">
                    <circle className="pin-pulse" r="10" cx="600" cy="300"></circle>
                    <circle className="pin-core" r="4" cx="600" cy="300"></circle>
                    <text x="600" y="320" className="pin-label-text">Charbagh</text>
                  </g>

                  <g className="map-pin">
                    <circle className="pin-pulse" r="10" cx="750" cy="320"></circle>
                    <circle className="pin-core" r="4" cx="750" cy="320"></circle>
                    <text x="750" y="306" className="pin-label-text">Gomti Nagar</text>
                  </g>

                  <g className="map-pin">
                    <circle className="pin-pulse" r="10" cx="750" cy="400"></circle>
                    <circle className="pin-core" r="4" cx="750" cy="400"></circle>
                    <text x="750" y="420" className="pin-label-text">Alambagh</text>
                  </g>

                  <g className="map-pin">
                    <circle className="pin-pulse" r="10" cx="850" cy="450"></circle>
                    <circle className="pin-core" r="4" cx="850" cy="450"></circle>
                    <text x="850" y="436" className="pin-label-text">Indira Nagar</text>
                  </g>

                </svg>
              </div>
            </div>

            <div className="ad-map-footer font-sans">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              Your brand travels where the city moves.
            </div>

          </div>
        </section>

        {/* ═══ CLIENT LOGO SECTION ═══ */}
        <section className="ad-drag-banner">
          <p className="ad-drag-text font-sans">
            Adzoop&apos;s smart on-road media network is trusted by <strong>50+ top brands</strong> and local retail businesses, delivering thousands of daily impressions and executing high-impact campaigns across Lucknow.
          </p>
          <div className="ad-drag-marquee">
            <div className="ad-drag-track animate-marquee">
              {[...clientBrands, ...clientBrands].map((brand, idx) => (
                <div key={idx} className="ad-drag-logo-box font-display font-bold text-xs tracking-wider text-text-grey">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PROBLEM → SOLUTION SECTION ═══ */}
        <section className="ad-ps-light-section">
          <span className="ad-ps-light-badge font-sans">Problem → Solution</span>
          <h2 className="ad-ps-light-h2 font-display">Why Traditional Advertising Fails</h2>
          <p className="ad-ps-light-subtitle font-sans">
            Traditional media channels are cluttered and skipped. Adzoop places your brand at eye-level inside Lucknow&apos;s transit fleet where commuter attention is naturally focused.
          </p>

          <div className="ad-ps-light-grid">
            
            {/* The Problem */}
            <div className="ad-ps-light-card ad-ps-light-card-red">
              <div className="ad-ps-light-card-header font-sans">
                <span className="ad-ps-light-icon-red">✕</span>
                <span className="ad-ps-light-card-label ad-ps-light-label-red">The Problem</span>
              </div>
              <h3 className="ad-ps-light-card-title font-display">Traditional ads are ignored or forgotten.</h3>
              
              <div className="ad-ps-light-list font-sans">
                <div className="ad-ps-light-list-item">
                  <span className="ad-ps-light-list-icon">✕</span>
                  <div className="ad-ps-light-list-text">
                    <h4>Traditional ads get filtered out.</h4>
                    <p>Modern consumers ignore static banners, paper flyers, and crowded brochures.</p>
                  </div>
                </div>
                <div className="ad-ps-light-list-item">
                  <span className="ad-ps-light-list-icon">✕</span>
                  <div className="ad-ps-light-list-text">
                    <h4>Digital ads are skipped or blocked.</h4>
                    <p>Ad blockers, premium tiers, and 5-second skip triggers limit online visibility.</p>
                  </div>
                </div>
                <div className="ad-ps-light-list-item">
                  <span className="ad-ps-light-list-icon">✕</span>
                  <div className="ad-ps-light-list-text">
                    <h4>Out-of-home ads pass by too quickly.</h4>
                    <p>High-speed billboards get only a brief glance before vanishing from view.</p>
                  </div>
                </div>
              </div>

              <img 
                src="/images/adzoop_auto_display.jpg" 
                alt="Adzoop LED Screen display" 
                className="ad-ps-light-problem-img"
                loading="lazy"
              />
            </div>

            {/* Glowing Arrow */}
            <div className="ad-ps-light-center">
              <div className="ad-ps-light-arrow-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>

            {/* The Solution */}
            <div className="ad-ps-light-card ad-ps-light-card-green">
              <div className="ad-ps-light-card-header font-sans">
                <span className="ad-ps-light-icon-green">✓</span>
                <span className="ad-ps-light-card-label ad-ps-light-label-green">The Solution</span>
              </div>
              <h3 className="ad-ps-light-card-title font-display">The Adzoop Edge.</h3>

              <div className="ad-ps-light-green-content">
                <div className="ad-ps-light-green-text font-sans">
                  <div className="ad-ps-light-list-item">
                    <span className="ad-ps-light-list-icon-green font-bold">✓</span>
                    <div className="ad-ps-light-list-text">
                      <h4>Eye-level LED displays on autos</h4>
                      <p>Placed directly in the passenger cabin, making them impossible to miss.</p>
                    </div>
                  </div>
                  <div className="ad-ps-light-list-item">
                    <span className="ad-ps-light-list-icon-green font-bold">✓</span>
                    <div className="ad-ps-light-list-text">
                      <h4>Moves through high-traffic areas all day</h4>
                      <p>15+ hours of daily movement across Lucknow&apos;s busiest commercial hubs.</p>
                    </div>
                  </div>
                  <div className="ad-ps-light-list-item">
                    <span className="ad-ps-light-list-icon-green font-bold">✓</span>
                    <div className="ad-ps-light-list-text">
                      <h4>Starts at just ₹2,000/week per auto</h4>
                      <p>High impressions and strong recall for a fraction of traditional billboard budgets.</p>
                    </div>
                  </div>
                </div>
                
                <div className="ad-ps-light-green-img-wrap hidden md:block">
                  <img 
                    src="/images/adzoop_auto_display.jpg" 
                    alt="Adzoop Auto Display" 
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="ad-ps-light-bonus-box font-sans">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                <p>Starts at just <span className="text-[#10B981] font-bold">₹2,000/week</span> per auto.</p>
              </div>

            </div>

          </div>

          {/* Bottom CTA Bar */}
          <div className="ad-ps-light-bottom-bar font-sans">
            <div className="ad-ps-light-bar-left">
              <div className="ad-ps-light-bar-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
              <span>Tailored B2B Proposals</span>
            </div>
            <div className="ad-ps-light-bar-center">
              Our specialists curate custom routes for maximum local target footprint.
            </div>
            <Link href="/contact" className="ad-ps-light-btn">
              Book a Demo
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>

        </section>

        {/* ═══ HOW IT WORKS SECTION ═══ */}
        <section className="ad-hiw-light-section" id="how-it-works">
          <h2 className="ad-hiw-light-h2 font-display">How Adzoop Works</h2>
          <p className="ad-hiw-light-subtitle font-sans">
            Simple. Intelligent. <span>Scalable.</span>
          </p>

          <div className="ad-hiw-light-grid">
            
            {/* Step 1 */}
            <div className="ad-hiw-light-card">
              <div className="ad-hiw-light-bg-number font-display">01</div>
              <div className="ad-hiw-light-content font-sans">
                <div className="ad-hiw-light-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <span className="ad-hiw-light-step-label">Step 01</span>
                <h3 className="ad-hiw-light-title font-display text-text-dark">High-Definition Displays</h3>
                <p className="ad-hiw-light-desc leading-relaxed">
                  We mount smart, high-brightness LED screens securely inside vended commercial auto-rickshaws.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="ad-hiw-light-card">
              <div className="ad-hiw-light-bg-number font-display">02</div>
              <div className="ad-hiw-light-content font-sans">
                <div className="ad-hiw-light-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <span className="ad-hiw-light-step-label">Step 02</span>
                <h3 className="ad-hiw-light-title font-display text-text-dark">Cloud-Scheduled Campaigns</h3>
                <p className="ad-hiw-light-desc leading-relaxed">
                  Your creatives are deployed remotely on loop across selected high-traffic routes in Lucknow.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="ad-hiw-light-card">
              <div className="ad-hiw-light-bg-number font-display">03</div>
              <div className="ad-hiw-light-content font-sans">
                <div className="ad-hiw-light-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <span className="ad-hiw-light-step-label">Step 03</span>
                <h3 className="ad-hiw-light-title font-display text-text-dark">High-Impact Recall</h3>
                <p className="ad-hiw-light-desc leading-relaxed">
                  Passengers and street-level crowds engage with your brand during active transit times, creating high recall.
                </p>
              </div>
            </div>

          </div>

          <div className="ad-hiw-light-footer-text font-sans">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            No active efforts needed from your side. We manage content delivery remotely.
          </div>
        </section>

        {/* ═══ WHY CHOOSE US SECTION ═══ */}
        <section className="ad-why-c-section">
          <div className="ad-why-c-top-badge font-sans">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            ADS THAT CAN&apos;T BE SKIPPED
          </div>
          <h2 className="ad-why-c-h2 font-display">Why Choose Adzoop</h2>
          <p className="ad-why-c-subtitle font-sans">
            A smarter, more effective way to reach your audience where attention actually exists.
          </p>

          <div className="ad-why-c-grid font-sans">
            
            {/* Card 1 */}
            <div className="ad-why-c-card">
              <div className="ad-why-c-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className="ad-why-c-card-title font-display">Extended Attention Span</h3>
              <p className="ad-why-c-card-desc leading-relaxed">
                Your message stays directly in front of passengers during their entire commute, ensuring high retention.
              </p>
            </div>

            {/* Card 2 */}
            <div className="ad-why-c-card">
              <div className="ad-why-c-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h3 className="ad-why-c-card-title font-display">Route-Specific Targeting</h3>
              <p className="ad-why-c-card-desc leading-relaxed">
                Filter visibility by choosing commercial routes and markets that directly match your business profile.
              </p>
            </div>

            {/* Card 3 */}
            <div className="ad-why-c-card">
              <div className="ad-why-c-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
              </div>
              <h3 className="ad-why-c-card-title font-display">Vetted Analytics &amp; GPS</h3>
              <p className="ad-why-c-card-desc leading-relaxed">
                Get real campaign logs showing exact vehicle run durations alongside physical photo and video verification logs.
              </p>
            </div>

            {/* Card 4 */}
            <div className="ad-why-c-card">
              <div className="ad-why-c-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="ad-why-c-card-title font-display">Cost-Efficient Visibility</h3>
              <p className="ad-why-c-card-desc leading-relaxed">
                High local impressions and premium screen recall for a fraction of traditional hoarding media costs.
              </p>
            </div>

          </div>
        </section>

        {/* ═══ SEE YOUR AD IN ACTION (DEMO) ═══ */}
        <section className="ad-demo-c-section">
          <div className="ad-demo-c-container">
            
            {/* Left Column */}
            <div className="ad-demo-c-content">
              <div className="ad-demo-c-badge font-sans">
                <div className="ad-demo-c-live-dot" /> LIVE DEMO
              </div>
              <h2 className="ad-demo-c-h2 font-display text-text-dark">See Your Ad in Action</h2>
              <p className="ad-demo-c-subtitle font-sans text-text-grey text-left">
                Experience how your advertisement appears inside autos exactly as your customers see it.
              </p>
              <div className="ad-demo-c-bonus-quote font-sans">
                &quot;Vivid display, zero friction—exactly as your target audience experiences it.&quot;
              </div>

              <div className="ad-demo-c-list font-sans text-left">
                <div className="ad-demo-c-list-item">
                  <span className="ad-demo-c-list-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <div className="ad-demo-c-list-text">
                    Real-time ad display inside autos
                    <span>Delivered on high-definition LED screens.</span>
                  </div>
                </div>
                <div className="ad-demo-c-list-item">
                  <span className="ad-demo-c-list-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <div className="ad-demo-c-list-text">
                    Captures attention for 10–15 minutes
                    <span>Brand remains visible throughout the commute.</span>
                  </div>
                </div>
              </div>

              <div className="ad-demo-c-cta-wrap">
                <button className="ad-demo-c-btn font-sans" onClick={() => setModalActive(true)}>
                  View Live Campaign
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex justify-center">
              <div className="ad-demo-c-visual-wrap w-full max-w-[450px]" onClick={() => setModalActive(true)}>
                <div className="ad-demo-c-img-container">
                  <img 
                    src="/images/adzoop_campaign_demo.jpg" 
                    alt="Adzoop LED screen demo" 
                    loading="lazy"
                  />
                  <div className="ad-demo-c-play-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <div className="ad-demo-c-overlay-label font-sans">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    LIVE PREVIEW
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ═══ GROW YOUR BUSINESS SECTION ═══ */}
        <section className="ad-biz-section">
          <div className="ad-biz-container">
            
            {/* Left Column */}
            <div className="ad-biz-content text-left">
              <h2 className="ad-biz-h2 font-display">Grow Your Business with Adzoop</h2>
              <p className="ad-biz-subtitle font-sans text-text-grey">
                Build high brand authority, trigger instant walk-ins, and capture local markets with Adzoop&apos;s unskippable transit media.
              </p>

              <div className="ad-biz-points font-sans">
                <div className="ad-biz-point">
                  <div className="ad-biz-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                  </div>
                  <div className="ad-biz-text">
                    <h4>More Footfall</h4>
                    <p>Attract more customers to your business through consistent on-road visibility.</p>
                  </div>
                </div>
                <div className="ad-biz-point">
                  <div className="ad-biz-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <div className="ad-biz-text">
                    <h4>Better Recall</h4>
                    <p>Stay in your customer’s mind with ads that remain visible for longer.</p>
                  </div>
                </div>
                <div className="ad-biz-point">
                  <div className="ad-biz-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                  </div>
                  <div className="ad-biz-text">
                    <h4>Local Targeting</h4>
                    <p>Reach your ideal audience in specific areas where your business operates.</p>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="ad-biz-cta font-sans">
                Start Your Campaign
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>

            {/* Right Column */}
            <div className="flex justify-center">
              <div className="ad-biz-visual-wrap w-full max-w-[450px]">
                <div className="ad-biz-img-container">
                  <img 
                    src="/images/adzoop_auto_display.jpg" 
                    alt="Adzoop LED Screen inside Auto" 
                    loading="lazy"
                  />
                  <div className="ad-biz-overlay font-sans">
                    <div className="ad-biz-overlay-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="ad-biz-overlay-text">15,000+ Daily impressions per auto</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ═══ DRIVER PARTNER (PILOTS) SECTION ═══ */}
        <section className="ad-pilot-c-section" id="pilot">
          <div className="ad-pilot-c-container">
            
            {/* Left Column */}
            <div className="ad-pilot-c-content text-left">
              <div className="ad-pilot-c-badge font-sans">
                <div className="ad-pilot-c-live-dot" /> 500+ ACTIVE DRIVERS
              </div>
              <h2 className="ad-pilot-c-h2 font-display text-text-dark">Drive &amp; Earn More with Adzoop</h2>
              <p className="ad-pilot-c-subtitle font-sans text-text-grey">
                Join Lucknow&apos;s largest smart transit driver network. Turn your passenger rides into guaranteed monthly passive income with simple and reliable earning opportunities.
              </p>

              <div className="ad-pilot-c-benefits font-sans">
                <div className="ad-pilot-c-benefit-card">
                  <div className="ad-pilot-c-icon">🛺</div>
                  <h4>Extra Income</h4>
                  <p>Earn additional money by displaying ads inside your auto.</p>
                </div>
                <div className="ad-pilot-c-benefit-card">
                  <div className="ad-pilot-c-icon">🛡️</div>
                  <h4>Insurance Support</h4>
                  <p>Access insurance benefits after completing required durations.</p>
                </div>
                <div className="ad-pilot-c-benefit-card">
                  <div className="ad-pilot-c-icon">⚙️</div>
                  <h4>Simple Process</h4>
                  <p>Easy onboarding and minimal effort to start earning.</p>
                </div>
                <div className="ad-pilot-c-benefit-card">
                  <div className="ad-pilot-c-icon">⏱️</div>
                  <h4>Flexible Work</h4>
                  <p>Continue regular driving while earning passive income.</p>
                </div>
              </div>

              <a 
                href="https://wa.me/919639390951?text=Hi%20Adzoop%2C%20I%20want%20to%20join%20as%20a%20driver%20partner."
                target="_blank"
                rel="noopener noreferrer"
                className="ad-pilot-c-cta font-sans"
              >
                Join as a Partner
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>

            {/* Right Column (Driver Photo Gallery) */}
            <div className="ad-pilot-c-gallery">
              <div className="ad-pilot-c-col">
                <div className="ad-pilot-c-photo-wrap ad-pilot-c-tall">
                  <img 
                    src="/images/adzoop_driver_partner.jpg" 
                    alt="Adzoop Driver Partner" 
                    loading="lazy"
                  />
                  <div className="ad-pilot-c-overlay font-sans font-bold">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3.5 h-3.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Lucknow Pilot
                  </div>
                </div>
              </div>
              <div className="ad-pilot-c-col">
                <div className="ad-pilot-c-photo-wrap ad-pilot-c-short">
                  <img 
                    src="/images/adzoop_team_group.jpg" 
                    alt="Driver Team" 
                    loading="lazy"
                  />
                </div>
                <div className="ad-pilot-c-photo-wrap ad-pilot-c-short">
                  <img 
                    src="/images/adzoop_driver_partner.jpg" 
                    alt="Partner onboarding" 
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ═══ CTA SECTION ═══ */}
        <section className="ad-cta-c-section">
          <div className="ad-cta-c-glow" />
          <div className="ad-cta-c-container">
            <div className="ad-cta-c-badge font-sans">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              ADS THAT CAN&apos;T BE SKIPPED
            </div>
            <h2 className="ad-cta-c-h2 font-display">
              Your customers are already inside the auto. <br className="hidden md:inline" />
              Let&apos;s make sure they see your brand.
            </h2>
            <p className="ad-cta-c-subtitle font-sans">
              Stop wasting money on ads that get ignored. Start reaching real customers where attention actually exists.
            </p>
            <div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ad-cta-c-btn-primary font-sans">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.719-1.465L0 24z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
            <div className="ad-cta-c-trust font-sans">
              <div className="ad-cta-c-avatars">
                <div className="ad-cta-c-avatar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <div className="ad-cta-c-avatar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <div className="ad-cta-c-avatar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
              </div>
              <span>Trusted by 500+ autos across Lucknow.</span>
            </div>
          </div>
        </section>

        {/* ═══ FAQ SECTION ═══ */}
        <section className="ad-faq-fw-section" id="faq">
          <div className="ad-faq-fw-container">
            <h2 className="ad-faq-fw-h2 font-display text-text-dark">Frequently Asked Questions</h2>
            <p className="ad-faq-fw-subtitle font-sans">
              Discover how Adzoop’s LED auto advertising works, how it helps local businesses grow, and why it is one of the most effective outdoor advertising solutions in India.
            </p>

            <div className="ad-faq-fw-list font-sans">
              {FAQ_DATA.map((faq, idx) => (
                <div key={idx} className={`ad-faq-fw-item ${activeFaq === idx ? "active" : ""}`}>
                  <button className="ad-faq-fw-question" onClick={() => toggleFaq(idx)}>
                    {faq.q}
                    <div className="ad-faq-fw-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </button>
                  <div className="ad-faq-fw-answer-wrapper">
                    <div className="ad-faq-fw-answer">
                      <div className="ad-faq-fw-answer-inner leading-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>
      <Footer />

      {/* Video Modal component */}
      <div className={`ad-video-modal ${modalActive ? "active" : ""}`} onClick={() => setModalActive(false)}>
        <div className="ad-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="ad-modal-close" onClick={() => setModalActive(false)}>×</button>
          <div className="ad-modal-video-wrapper">
            {modalActive && (
              <iframe
                src="https://www.youtube.com/embed/0BuZ-OY15yk?autoplay=1&mute=1&loop=1&playlist=0BuZ-OY15yk&controls=1&rel=0&modestbranding=1"
                title="Adzoop Campaign Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
