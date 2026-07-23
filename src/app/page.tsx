"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { getDailyRate, getPotentialCustomers } from "../utils/pricing";

const LUCKNOW_CORRIDORS = [
  { id: "hazratganj", name: "Hazratganj Hub", autos: 120, potentialCustomers: "3,600 / day", traffic: "High Retail & Commercial Footfall", x: 640, y: 210, textAnchor: "start" },
  { id: "gomti-nagar", name: "Gomti Nagar Corridor", autos: 150, potentialCustomers: "4,500 / day", traffic: "IT Parks & Corporate Hubs", x: 840, y: 260, textAnchor: "start" },
  { id: "aminabad", name: "Aminabad Market", autos: 90, potentialCustomers: "2,700 / day", traffic: "Dense Wholesale Shopping District", x: 380, y: 240, textAnchor: "end" },
  { id: "charbagh", name: "Charbagh Transit Hub", autos: 110, potentialCustomers: "3,300 / day", traffic: "Railway Station & Commuter Traffic", x: 480, y: 350, textAnchor: "start" },
  { id: "alambagh", name: "Alambagh Bus Terminal", autos: 85, potentialCustomers: "2,550 / day", traffic: "Intercity Commuter Intersection", x: 220, y: 380, textAnchor: "end" },
  { id: "aliganj", name: "Aliganj Institutional Zone", autos: 75, potentialCustomers: "2,250 / day", traffic: "Colleges & Coaching Hubs", x: 500, y: 140, textAnchor: "start" },
];

const FAQ_DATA = [
  { 
    q: "How does Adzoop auto rickshaw branding work?", 
    a: "We mount high-quality illuminated backlit panels on commercial auto-rickshaws. Your brand creative is prominently displayed at eye-level to passengers, pedestrians, and vehicular traffic along Lucknow's busiest routes." 
  },
  { 
    q: "Why is auto rickshaw backlit panel advertising effective?", 
    a: "Static roadside billboards are expensive and quickly passed by. Adzoop backlit auto panels travel through dense markets and high-traffic corridors, delivering 15–20 minutes of steady attention directly to potential customers." 
  },
  { 
    q: "Do I get proof of installation and placement?", 
    a: "Yes. Our team conducts on-ground inspections and provides photo/video audit reports confirming that every single auto rickshaw panel is properly mounted and active." 
  },
  { 
    q: "Can I choose specific routes in Lucknow?", 
    a: "Yes. You can select target commercial zones like Hazratganj, Gomti Nagar, Aminabad, or Charbagh to align visibility with your target audience." 
  },
  { 
    q: "How do auto drivers benefit from Adzoop?", 
    a: "Driver partners receive guaranteed monthly payouts for maintaining the backlit panel on their auto, supporting local drivers while promoting your brand." 
  }
];

export default function HomePage() {
  const [modalActive, setModalActive] = useState(false);
  const [activeCorridor, setActiveCorridor] = useState(LUCKNOW_CORRIDORS[0]);
  const [activeEcosystemTab, setActiveEcosystemTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // ROI Calculator State (5 to 300 Autos)
  const [autoCount, setAutoCount] = useState<number>(20);
  const [campaignDays, setCampaignDays] = useState<number>(14);

  // Exact Dynamic Rate & Potential Customer Calculations
  const currentRate = getDailyRate(autoCount);
  const totalBudget = autoCount * campaignDays * currentRate;
  const potentialCustomersCount = getPotentialCustomers(autoCount, campaignDays).toLocaleString("en-IN");

  const whatsappCalculatorUrl = `https://wa.me/919639390951?text=Hi%20Adzoop%2C%20I%20want%20to%20book%20${autoCount}%20autos%20for%20${campaignDays}%20days.%20Calculated%20budget%3A%20%E2%82%B9${totalBudget.toLocaleString("en-IN")}.`;

  const clientBrands = [
    "RETAIL MART", "HEALTHCARE PLUS", "METRO FITNESS", "LUCKNOW SWEETS",
    "URBAN FASHION", "EDU-SPARK ACADEMY", "FINANCE FIRST", "BURGER CLUB"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0B132B] font-sans relative overflow-x-hidden">
      
      {/* Background Ambient Radial Glow */}
      <div className="ambient-glow-brand-top" />

      <Header />

      <main className="flex-grow pt-[105px] relative z-10">

        {/* ═══ 1. HERO SECTION WITH LIVE ROI CALCULATOR ═══ */}
        <section className="px-6 py-10 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Headline & Subtitle */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-[#0052FF]/20 text-xs font-semibold font-mono text-[#0052FF]">
                  <span className="status-dot-brand" />
                  <span>⚡ ADVERTISE BETTER. GROW SMARTER.</span>
                </div>

                <h1 className="hero-title text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.1] font-display text-[#0B132B]">
                  Transform Transit Into <br />
                  <span className="text-[#0052FF]">Unskippable Recall</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-sans">
                  High-impact illuminated backlit panels mounted on commercial auto-rickshaws. Delivering 15–20 minutes of eye-level audience attention across Lucknow&apos;s busiest commercial routes.
                </p>

                {/* Hero Feature Pills */}
                <div className="grid grid-cols-2 gap-3 pt-2 max-w-lg text-left font-sans text-xs font-semibold text-slate-700">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                    <span className="text-[#0052FF] font-bold">👁️</span> High Dwell Attention
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                    <span className="text-[#0052FF] font-bold">💡</span> Premium Backlit Panels
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                    <span className="text-[#25D366] font-bold">📍</span> Lucknow Corridor Coverage
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                    <span className="text-[#0052FF] font-bold">💰</span> Starts ₹52/day per auto
                  </div>
                </div>

                {/* Hero CTAs */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a 
                    href={whatsappCalculatorUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0052FF] hover:bg-[#0042D0] text-white font-bold text-sm font-sans flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.719-1.465L0 24z"/></svg>
                    Book Campaign Brief
                  </a>

                  <button
                    onClick={() => setModalActive(true)}
                    className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-semibold text-sm font-sans transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4 text-[#0052FF]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    Watch Live Demo
                  </button>
                </div>

              </div>

              {/* Right Column: Unified Clean ROI & Budget Estimator Card (5 to 300 Autos) */}
              <div className="lg:col-span-6">
                <div className="brand-card p-6 md:p-8 space-y-6 bg-white border border-slate-200 shadow-xl rounded-2xl">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-wider block">INTERACTIVE CALCULATOR</span>
                      <h3 className="text-xl font-bold font-display text-[#0B132B]">Campaign ROI &amp; Budget Estimator</h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-[#0052FF]/20 flex items-center justify-center text-[#0052FF] text-base font-black">
                      ₹
                    </div>
                  </div>

                  {/* Slider 1: Auto Count (5 to 300) */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-700">Target Autos Fleet:</span>
                      <span className="text-[#0052FF] font-mono font-bold text-sm">{autoCount} Auto Rickshaws</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="300" 
                      step="5" 
                      value={autoCount} 
                      onChange={(e) => setAutoCount(Number(e.target.value))}
                      className="custom-brand-slider"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                      <span>5 Autos</span>
                      <span>100 Autos</span>
                      <span>300 Autos</span>
                    </div>
                  </div>

                  {/* Slider 2: Duration */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-700">Campaign Duration:</span>
                      <span className="text-[#0052FF] font-mono font-bold text-sm">{campaignDays} Days</span>
                    </div>
                    <input 
                      type="range" 
                      min="7" 
                      max="30" 
                      step="1" 
                      value={campaignDays} 
                      onChange={(e) => setCampaignDays(Number(e.target.value))}
                      className="custom-brand-slider"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                      <span>7 Days</span>
                      <span>14 Days</span>
                      <span>30 Days</span>
                    </div>
                  </div>

                  {/* Live Metric Cards: Potential Customers & Rate */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                      <span className="text-[11px] text-slate-500 font-mono uppercase block">Potential Customers</span>
                      <span className="text-2xl font-black font-display text-[#0052FF]">{potentialCustomersCount}</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                      <span className="text-[11px] text-slate-500 font-mono uppercase block">Rate / Auto / Day</span>
                      <span className="text-2xl font-black font-display text-[#0052FF]">₹{currentRate}</span>
                    </div>
                  </div>

                  {/* Total Budget Result Bar */}
                  <div className="p-4 rounded-xl bg-[#0B132B] text-white flex items-center justify-between shadow-lg">
                    <div>
                      <span className="text-xs text-slate-400 font-mono uppercase block">Total Campaign Budget</span>
                      <span className="text-2xl font-black font-display text-white">₹{totalBudget.toLocaleString("en-IN")}</span>
                    </div>
                    <a 
                      href={whatsappCalculatorUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-[#0052FF] hover:bg-[#0042D0] text-white font-bold text-xs font-sans transition-all shadow-md"
                    >
                      Reserve Fleet →
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══ 2. CLIENT BRAND MARQUEE ═══ */}
        <section className="py-8 border-y border-slate-200 bg-slate-50/60 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-4 flex items-center gap-3">
            <span className="status-dot-brand" />
            <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">TRUSTED BY 50+ LUCKNOW BRANDS &amp; RETAIL OUTLETS</span>
          </div>
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee flex gap-8">
              {[...clientBrands, ...clientBrands, ...clientBrands].map((brand, idx) => (
                <div 
                  key={idx} 
                  className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-xs font-bold font-mono tracking-wider text-slate-700 whitespace-nowrap shadow-xs hover:border-[#0052FF]/50 hover:text-[#0052FF] transition-all"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 3. LUCKNOW FLEET RADAR SECTION ═══ */}
        <section className="px-6 py-20 bg-white relative" id="route-map">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-[#0052FF]/30 text-xs font-mono text-[#0052FF]">
                <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-ping" />
                <span>COMMERCIAL CORRIDORS &amp; REACH</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0B132B]">Lucknow Transit Fleet Radar</h2>
              <p className="text-sm text-slate-600 font-sans">
                Our backlit auto panels traverse high-density business districts and commuter routes daily. Select a corridor below to inspect coverage.
              </p>
            </div>

            {/* Corridor Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-2 font-sans text-xs font-semibold">
              {LUCKNOW_CORRIDORS.map((corridor) => (
                <button
                  key={corridor.id}
                  onClick={() => setActiveCorridor(corridor)}
                  className={`px-4 py-2.5 rounded-xl border transition-all ${
                    activeCorridor.id === corridor.id 
                      ? "bg-[#0052FF] text-white border-[#0052FF] font-bold shadow-md scale-105" 
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#0052FF]/30"
                  }`}
                >
                  {corridor.name}
                </button>
              ))}
            </div>

            {/* Active Corridor Card & Responsive Fleet Radar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Selected Corridor Detailed Info Card */}
              <div className="lg:col-span-5 brand-card p-6 space-y-6 bg-white border border-slate-200 shadow-md">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#0052FF] font-bold uppercase">SELECTED CORRIDOR</span>
                  <h3 className="text-2xl font-bold font-display text-[#0B132B]">{activeCorridor.name}</h3>
                  <p className="text-xs text-slate-500">{activeCorridor.traffic}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[10px] text-slate-500 font-mono uppercase block">Active Autos</span>
                    <span className="text-xl font-bold font-display text-[#0052FF]">{activeCorridor.autos} Rickshaws</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[10px] text-slate-500 font-mono uppercase block">Potential Customers</span>
                    <span className="text-xl font-bold font-display text-[#0052FF]">{activeCorridor.potentialCustomers}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs font-sans">
                  <div className="flex justify-between text-slate-700">
                    <span>Audience Dwell Time:</span>
                    <span className="font-mono text-[#0052FF] font-bold">15–20 Minutes</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span>Panel Specification:</span>
                    <span className="font-mono text-slate-900 font-bold">High-Impact Backlit Hood Panel</span>
                  </div>
                  <div className="flex justify-between text-slate-700">
                    <span>Quality Audit:</span>
                    <span className="font-mono text-[#0052FF] font-bold">On-Ground Placement Proof</span>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/919639390951?text=Hi%20Adzoop%2C%20I%20want%20to%20target%20the%20${encodeURIComponent(activeCorridor.name)}%20route.`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs font-sans flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  Target This Route via WhatsApp →
                </a>
              </div>

              {/* ═══ MOBILE MAP VIEW: Clean White/Slate Mobile Radar Card ═══ */}
              <div className="block lg:hidden lg:col-span-7 brand-card p-6 space-y-6 bg-white text-[#0B132B] border border-slate-200 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0052FF] animate-ping" />
                    LIVE FLEET RADAR TRACKER
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-bold">LUCKNOW CITY</span>
                </div>

                {/* Animated Rickshaw Transit Bar */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold font-mono">
                    <span className="text-[#0052FF]">{activeCorridor.name}</span>
                    <span className="text-slate-500">Reach Velocity ⚡</span>
                  </div>
                  
                  {/* Progress Line with Moving Auto */}
                  <div className="relative w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0052FF] w-3/4 rounded-full animate-pulse" />
                  </div>

                  <div className="flex justify-between items-center text-xs font-mono text-slate-700">
                    <span>🛺 Active Fleet: <strong className="text-[#0B132B]">{activeCorridor.autos} Autos</strong></span>
                    <span className="text-[#0052FF]"><strong>{activeCorridor.potentialCustomers}</strong></span>
                  </div>
                </div>

                {/* Touch Corridor Node Chips */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block font-bold">Tap Corridor to Inspect:</span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-bold font-sans">
                    {LUCKNOW_CORRIDORS.map((cor) => {
                      const isSel = activeCorridor.id === cor.id;
                      return (
                        <button
                          key={cor.id}
                          onClick={() => setActiveCorridor(cor)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            isSel 
                              ? "bg-[#0052FF] text-white border-[#0052FF] shadow-md font-bold" 
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#0052FF]/30"
                          }`}
                        >
                          <span className={`text-[10px] block font-mono ${isSel ? "text-blue-100" : "text-slate-400"}`}>Corridor Node</span>
                          {cor.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* ═══ DESKTOP MAP VIEW: Clean High-Legibility SVG Canvas ═══ */}
              <div className="hidden lg:flex lg:col-span-7 brand-card p-6 h-[420px] items-center justify-center relative overflow-hidden bg-[#F8FAFC] border border-slate-200 shadow-xl">
                
                <svg viewBox="0 0 1000 500" className="w-full h-full relative z-10">
                  <defs>
                    <linearGradient id="brandRouteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0052FF" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>

                    <path id="heroRoute1" d="M 100 250 C 300 150, 450 350, 640 210 C 750 120, 840 260, 950 250"></path>
                    <path id="heroRoute2" d="M 150 400 C 220 380, 380 240, 500 140 C 650 300, 750 400, 950 200"></path>
                  </defs>

                  {/* Gomti River Water Way */}
                  <path d="M -50,70 Q 250,110 550,70 T 1050,90 L 1050,0 L -50,0 Z" fill="#E0F2FE" opacity="0.8"></path>
                  <text x="500" y="40" fill="#0284C7" fontFamily="Inter" fontSize="12" fontWeight="800" letterSpacing="4" textAnchor="middle">GOMTI RIVER CORRIDOR</text>

                  {/* Road Paths */}
                  <use href="#heroRoute1" stroke="#E2E8F0" strokeWidth="22" strokeLinecap="round" fill="none"></use>
                  <use href="#heroRoute1" stroke="url(#brandRouteGradient)" strokeWidth="8" strokeDasharray="12 10" fill="none" className="animate-pulse"></use>
                  
                  <use href="#heroRoute2" stroke="#E2E8F0" strokeWidth="22" strokeLinecap="round" fill="none"></use>
                  <use href="#heroRoute2" stroke="url(#brandRouteGradient)" strokeWidth="8" strokeDasharray="12 10" fill="none" className="animate-pulse"></use>

                  {/* Prominent Large Forward-Moving Auto-Rickshaws */}
                  <g className="vehicle-auto" transform="translate(-20, -20)">
                    <text fontSize="42" filter="drop-shadow(0px 4px 10px rgba(0, 82, 255, 0.4))">🛺
                      <animateMotion dur="14s" repeatCount="indefinite">
                        <mpath href="#heroRoute1"></mpath>
                      </animateMotion>
                    </text>
                  </g>

                  <g className="vehicle-auto" transform="translate(-20, -20)">
                    <text fontSize="42" filter="drop-shadow(0px 4px 10px rgba(0, 82, 255, 0.4))">🛺
                      <animateMotion dur="18s" begin="3s" repeatCount="indefinite">
                        <mpath href="#heroRoute2"></mpath>
                      </animateMotion>
                    </text>
                  </g>

                  {/* Render ALL 6 Lucknow Corridor Markers with Crisp High-Contrast Badges */}
                  {LUCKNOW_CORRIDORS.map((corridor) => {
                    const isSelected = activeCorridor.id === corridor.id;
                    const textWidth = corridor.name.length * 7.5 + 24;
                    const isLeftAnchor = corridor.textAnchor === "end";
                    const rectX = isLeftAnchor ? -(textWidth + 14) : 14;

                    return (
                      <g 
                        key={corridor.id} 
                        transform={`translate(${corridor.x}, ${corridor.y})`}
                        className="cursor-pointer group"
                        onClick={() => setActiveCorridor(corridor)}
                      >
                        {/* Selected Ping Ripple Aura */}
                        {isSelected && (
                          <circle r="22" fill="rgba(0, 82, 255, 0.25)" className="animate-ping"></circle>
                        )}

                        {/* Outer Pin Circle */}
                        <circle 
                          r={isSelected ? "10" : "8"} 
                          fill={isSelected ? "#0052FF" : "#FFFFFF"} 
                          stroke={isSelected ? "#0052FF" : "#0052FF"} 
                          strokeWidth={isSelected ? "3.5" : "2.5"} 
                          className="shadow-md transition-all"
                        />

                        {/* High-Contrast Badge Container */}
                        <g transform={`translate(0, -12)`}>
                          <rect 
                            x={rectX}
                            y="-12" 
                            width={textWidth} 
                            height="24" 
                            rx="12" 
                            fill={isSelected ? "#0052FF" : "#FFFFFF"} 
                            stroke={isSelected ? "#0052FF" : "#CBD5E1"} 
                            strokeWidth={isSelected ? "2" : "1.5"}
                            className="shadow-lg transition-all"
                          />

                          <text 
                            x={rectX + 12} 
                            y="4" 
                            fill={isSelected ? "#FFFFFF" : "#0B132B"} 
                            fontSize="11" 
                            fontWeight={isSelected ? "800" : "700"} 
                            fontFamily="Inter, sans-serif"
                          >
                            {corridor.name}
                          </text>
                        </g>

                      </g>
                    );
                  })}

                </svg>
              </div>

            </div>

          </div>
        </section>

        {/* ═══ 4. ADZOOP PLATFORM SERVICES (AUTHENTIC STEPS) ═══ */}
        <section className="px-6 py-20 bg-slate-50 border-y border-slate-200 relative" id="how-it-works">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-wider">PLATFORM PROCESS</span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0B132B]">How Adzoop Branding Works</h2>
              <p className="text-sm text-slate-600 font-sans">
                A simple 4-step physical campaign execution process across Lucknow commercial routes.
              </p>
            </div>

            {/* Ecosystem Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { title: "01. Backlit Hood Panels", desc: "High-quality illuminated panels mounted securely on auto-rickshaw hoods." },
                { title: "02. Commercial Routes", desc: "Selected high-footfall commercial zones like Hazratganj, Gomti Nagar & Aminabad." },
                { title: "03. Route Compliance", desc: "Continuous daily transit along active passenger commuter corridors." },
                { title: "04. On-Ground Audit", desc: "Physical inspection and placement proof provided for every campaign." },
              ].map((tab, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveEcosystemTab(idx)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                    activeEcosystemTab === idx
                      ? "bg-white border-[#0052FF] shadow-lg shadow-blue-500/10"
                      : "bg-white/60 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span className={`text-xs font-mono font-bold block mb-2 ${activeEcosystemTab === idx ? "text-[#0052FF]" : "text-slate-400"}`}>
                    STEP 0{idx + 1}
                  </span>
                  <h4 className="text-base font-bold font-display text-[#0B132B] mb-1">{tab.title.split(". ")[1]}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">{tab.desc}</p>
                </div>
              ))}
            </div>

            {/* Active Tab Preview Window */}
            <div className="brand-card p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono text-[#0052FF] font-bold uppercase">CAPABILITY HIGHLIGHT</span>
                <h3 className="text-2xl font-bold font-display text-[#0B132B]">
                  {activeEcosystemTab === 0 && "High-Impact Backlit Auto Hood Panels"}
                  {activeEcosystemTab === 1 && "Lucknow Commercial Corridor Targeting"}
                  {activeEcosystemTab === 2 && "Maximum Commuter & Passenger Dwell Attention"}
                  {activeEcosystemTab === 3 && "Verifiable On-Ground Mounting Audit Reports"}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {activeEcosystemTab === 0 && "Built with weather-resistant materials and bright backlighting to keep your brand glowing vividly day and night."}
                  {activeEcosystemTab === 1 && "Position your brand in high-density shopping hubs, coaching corridors, and railway station intersections across Lucknow."}
                  {activeEcosystemTab === 2 && "Auto-rickshaws move closely alongside cars, buses, and pedestrians, ensuring 15–20 minutes of repeated eye-level exposure."}
                  {activeEcosystemTab === 3 && "Complete campaign transparency. Our team verifies every single auto installation and provides comprehensive photo proof."}
                </p>
                <div className="pt-2">
                  <a href={whatsappCalculatorUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold font-mono text-[#0052FF] hover:underline">
                    Inquire About Campaign Placement →
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-xl relative group cursor-pointer" onClick={() => setModalActive(true)}>
                  <img 
                    src={activeEcosystemTab === 0 ? "/images/adzoop_auto_display.jpg" : activeEcosystemTab === 1 ? "/images/adzoop_campaign_demo.jpg" : activeEcosystemTab === 2 ? "/images/adzoop_driver_partner.jpg" : "/images/adzoop_team_group.jpg"} 
                    alt="Adzoop feature showcase" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-sans font-bold text-white">
                    <span>Click to view campaign showcase</span>
                    <span className="w-8 h-8 rounded-full bg-[#0052FF] text-white flex items-center justify-center shadow-lg">▶</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ═══ 5. CORRECTED MEDIA COMPARISON MATRIX ═══ */}
        <section className="px-6 py-20 bg-white relative">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-wider">MEDIA COMPARISON</span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0B132B]">Why Adzoop Beats Static Billboards</h2>
              <p className="text-sm text-slate-600 font-sans">
                Static billboards are expensive and missed by fast-moving traffic. Adzoop moves with potential customers through high-density markets.
              </p>
            </div>

            {/* Desktop Table View (hidden on mobile) */}
            <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left border-collapse font-sans text-xs min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 font-mono text-[11px] uppercase">
                    <th className="p-4">Advertising Media</th>
                    <th className="p-4">Audience Attention Dwell</th>
                    <th className="p-4">Targeted Mobility</th>
                    <th className="p-4">Cost per 1,000 Potential Customers</th>
                    <th className="p-4 text-[#0052FF]">Placement Verification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-white">
                    <td className="p-4 font-bold text-slate-700 flex items-center gap-2">
                      <span className="text-red-500">✕</span> Static Billboards
                    </td>
                    <td className="p-4 text-slate-600">2–3 Seconds (Glance)</td>
                    <td className="p-4 text-slate-600">Fixed Single Location</td>
                    <td className="p-4 text-slate-600">High (Expensive Overhead)</td>
                    <td className="p-4 text-slate-400 font-mono">Static Photo Only</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-bold text-slate-700 flex items-center gap-2">
                      <span className="text-red-500">✕</span> Social Digital Ads
                    </td>
                    <td className="p-4 text-slate-600">3–5 Seconds (Skipped)</td>
                    <td className="p-4 text-slate-600">Screen Feeds</td>
                    <td className="p-4 text-slate-600">Moderate to High</td>
                    <td className="p-4 text-slate-500 font-mono">Digital Clicks Only</td>
                  </tr>
                  <tr className="bg-blue-50/60 border-2 border-[#0052FF]/40">
                    <td className="p-4 font-bold text-[#0052FF] text-sm flex items-center gap-2">
                      <span className="text-[#0052FF]">✓</span> Adzoop Backlit Transit
                    </td>
                    <td className="p-4 font-bold text-slate-900 text-sm">15–20 Minutes (Captive)</td>
                    <td className="p-4 font-bold text-[#0052FF]">Mobile Across Lucknow Corridors</td>
                    <td className="p-4 font-bold text-[#0052FF]">Highly Cost-Effective (Starts ₹52/day)</td>
                    <td className="p-4 font-bold text-[#0052FF] font-mono">100% On-Ground Mounting Audit</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Card View (block on mobile, hidden on md+) */}
            <div className="block md:hidden space-y-4 font-sans text-xs">
              
              {/* Static Billboards Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                    <span className="text-red-500 font-bold">✕</span> Static Billboards
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 font-mono text-[10px]">Fixed</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-600">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Attention Dwell</span>
                    <span className="font-semibold text-slate-800">2–3 Seconds</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Mobility</span>
                    <span className="font-semibold text-slate-800">Fixed Location</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Cost Efficiency</span>
                    <span className="font-semibold text-slate-800">Expensive Overhead</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Verification</span>
                    <span className="font-mono text-slate-500">Static Photo Only</span>
                  </div>
                </div>
              </div>

              {/* Social / Video Ads Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                    <span className="text-red-500 font-bold">✕</span> Social / Video Ads
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 font-mono text-[10px]">Digital</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-600">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Attention Dwell</span>
                    <span className="font-semibold text-slate-800">3–5 Seconds</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Mobility</span>
                    <span className="font-semibold text-slate-800">Screen Feeds</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Cost Efficiency</span>
                    <span className="font-semibold text-slate-800">Moderate</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Verification</span>
                    <span className="font-mono text-slate-500">Digital Clicks Only</span>
                  </div>
                </div>
              </div>

              {/* Adzoop Backlit Transit Featured Card */}
              <div className="p-5 rounded-2xl bg-blue-50/80 border-2 border-[#0052FF] space-y-3 shadow-lg relative">
                <div className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-[#0052FF] text-white font-bold text-[9px] font-mono tracking-wider uppercase shadow-xs">
                  WINNER
                </div>
                <div className="flex items-center justify-between border-b border-blue-200 pb-2">
                  <span className="font-bold text-[#0052FF] text-sm flex items-center gap-1.5">
                    <span className="text-[#0052FF] font-bold">✓</span> Adzoop Backlit Transit
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-slate-700">
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">Attention Dwell</span>
                    <span className="font-black text-[#0052FF] text-sm">15–20 Minutes</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">Mobility</span>
                    <span className="font-bold text-[#0052FF]">Commercial Corridors</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">Cost Efficiency</span>
                    <span className="font-black text-[#0052FF] text-sm">Starts ₹52/day</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">Verification</span>
                    <span className="font-mono font-bold text-[#0052FF]">100% On-Ground Audit</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ═══ 6. PRICING PACKAGES (UPDATED RATES) ═══ */}
        <section className="px-6 py-20 bg-slate-50 border-t border-slate-200 relative" id="pricing">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-wider">TRANSPARENT PRICING</span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0B132B]">Campaign Plans Built for Growth</h2>
              <p className="text-sm text-slate-600 font-sans">
                Choose an auto rickshaw backlit panel package that matches your brand footprint in Lucknow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
              
              {/* Tier 1 */}
              <div className="brand-card p-6 space-y-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-mono text-slate-400 font-bold uppercase">5 TO 19 AUTOS</span>
                  <h3 className="text-xl font-bold font-display text-[#0B132B]">Starter Fleet</h3>
                  <p className="text-xs text-slate-600">Best for local retail outlets &amp; single store launches.</p>
                  <div className="pt-2">
                    <span className="text-3xl font-black font-display text-[#0B132B]">₹110</span>
                    <span className="text-xs text-slate-500"> / auto / day</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                    <li className="flex items-center gap-2"><span className="text-[#0052FF]">✓</span> 5 to 19 Backlit Autos</li>
                    <li className="flex items-center gap-2"><span className="text-[#0052FF]">✓</span> Target 1 Lucknow Corridor</li>
                    <li className="flex items-center gap-2"><span className="text-[#0052FF]">✓</span> On-Ground Placement Audit</li>
                  </ul>
                </div>
                <Link href="/contact?package=starter-fleet" className="w-full py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs text-center block transition-all">
                  Book Plan →
                </Link>
              </div>

              {/* Tier 2 */}
              <div className="brand-card p-6 space-y-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-mono text-[#0052FF] font-bold uppercase">20 TO 49 AUTOS</span>
                  <h3 className="text-xl font-bold font-display text-[#0B132B]">Market Expansion</h3>
                  <p className="text-xs text-slate-600">Ideal for expanding chains &amp; multi-branch services.</p>
                  <div className="pt-2">
                    <span className="text-3xl font-black font-display text-[#0052FF]">₹92–100</span>
                    <span className="text-xs text-slate-500"> / auto / day</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                    <li className="flex items-center gap-2"><span className="text-[#0052FF]">✓</span> 20 to 49 Backlit Autos</li>
                    <li className="flex items-center gap-2"><span className="text-[#0052FF]">✓</span> Up to 3 Lucknow Corridors</li>
                    <li className="flex items-center gap-2"><span className="text-[#0052FF]">✓</span> Dedicated Account Manager</li>
                  </ul>
                </div>
                <Link href="/contact?package=market-expansion" className="w-full py-3.5 rounded-xl bg-[#0052FF] hover:bg-[#0042D0] text-white font-bold text-xs text-center block transition-all shadow-md">
                  Book Plan →
                </Link>
              </div>

              {/* Tier 3 (Featured) */}
              <div className="brand-card p-6 space-y-6 flex flex-col justify-between border-2 border-[#0052FF] relative shadow-[0_4px_25px_rgba(0,82,255,0.2)]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#0052FF] text-white font-black text-[10px] font-mono tracking-wider uppercase shadow-md">
                  MOST POPULAR
                </div>
                <div className="space-y-3">
                  <span className="text-xs font-mono text-[#0052FF] font-bold uppercase">50 TO 149 AUTOS</span>
                  <h3 className="text-xl font-bold font-display text-[#0B132B]">City Domination</h3>
                  <p className="text-xs text-slate-600">Maximum brand authority &amp; footfall across Lucknow.</p>
                  <div className="pt-2">
                    <span className="text-3xl font-black font-display text-[#0052FF]">₹55–88</span>
                    <span className="text-xs text-slate-500"> / auto / day</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                    <li className="flex items-center gap-2"><span className="text-[#0052FF]">✓</span> 50 to 149 Backlit Autos</li>
                    <li className="flex items-center gap-2"><span className="text-[#0052FF]">✓</span> All Lucknow Commercial Routes</li>
                    <li className="flex items-center gap-2"><span className="text-[#0052FF]">✓</span> Photo &amp; Video Audit Proof</li>
                  </ul>
                </div>
                <Link href="/contact?package=city-domination" className="w-full py-3.5 rounded-xl bg-[#0052FF] hover:bg-[#0042D0] text-white font-bold text-xs text-center block transition-all shadow-lg">
                  Book Plan →
                </Link>
              </div>

              {/* Tier 4 */}
              <div className="brand-card p-6 space-y-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-mono text-slate-400 font-bold uppercase">150 TO 300 AUTOS</span>
                  <h3 className="text-xl font-bold font-display text-[#0B132B]">Mega Fleet</h3>
                  <p className="text-xs text-slate-600">Large-scale regional campaigns &amp; custom fleet outreaches.</p>
                  <div className="pt-2">
                    <span className="text-3xl font-black font-display text-[#0B132B]">₹52–56</span>
                    <span className="text-xs text-slate-500"> / auto / day</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                    <li className="flex items-center gap-2"><span className="text-[#0052FF]">✓</span> 150 to 300 Backlit Autos</li>
                    <li className="flex items-center gap-2"><span className="text-[#0052FF]">✓</span> Full Lucknow City Coverage</li>
                    <li className="flex items-center gap-2"><span className="text-[#0052FF]">✓</span> Priority Mounting Execution</li>
                  </ul>
                </div>
                <Link href="/contact?package=mega-fleet" className="w-full py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs text-center block transition-all">
                  Contact Enterprise →
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* ═══ 7. DRIVER PARTNER PORTAL ═══ */}
        <section className="px-6 py-20 bg-white relative" id="pilot">
          <div className="max-w-7xl mx-auto brand-card p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-blue-50/30 border border-slate-200">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-[#0052FF]/30 text-xs font-mono text-[#0052FF]">
                <span className="status-dot-brand" />
                <span>500+ ONBOARDED DRIVER PARTNERS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0B132B]">
                Drive &amp; Earn Passive Income with Adzoop
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Join Lucknow&apos;s largest auto-rickshaw transit network. Earn guaranteed monthly income simply by mounting an illuminated Adzoop backlit panel on your auto.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs font-sans font-semibold">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[#0052FF] font-bold block mb-1">💰 Extra Monthly Payout</span>
                  <span className="text-slate-500">Guaranteed passive income directly to your bank account.</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[#0052FF] font-bold block mb-1">🛠️ Free Panel Installation</span>
                  <span className="text-slate-500">Zero maintenance or upfront cost for drivers.</span>
                </div>
              </div>

              <a 
                href="https://wa.me/919639390951?text=Hi%20Adzoop%2C%20I%20am%20an%20auto%20driver%20in%20Lucknow%20and%20want%20to%20join%20as%20a%20partner."
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs font-sans shadow-lg transition-all"
              >
                Join as Driver Partner via WhatsApp →
              </a>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[380px] rounded-2xl overflow-hidden border border-slate-200 shadow-xl relative">
                <img src="/images/adzoop_driver_partner.jpg" alt="Adzoop Driver Partner" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-mono">
                  <span className="text-[#0052FF] font-bold block">Lucknow Driver Onboarding</span>
                  <span className="text-slate-600">Free backlit panel installation at our hub.</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ═══ 8. FAQ SECTION ═══ */}
        <section className="px-6 py-20 bg-slate-50 border-t border-slate-200 relative" id="faq">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0B132B]">Got Questions? We Have Answers.</h2>
            </div>

            <div className="space-y-4 font-sans text-xs">
              {FAQ_DATA.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="brand-card p-5 rounded-2xl cursor-pointer transition-all border border-slate-200 bg-white"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <div className="flex justify-between items-center text-sm font-bold text-[#0B132B]">
                    <span>{faq.q}</span>
                    <span className="text-[#0052FF] font-mono text-lg">{activeFaq === idx ? "−" : "+"}</span>
                  </div>
                  <div className={`faq-answer-wrapper ${activeFaq === idx ? "active" : ""}`}>
                    <div className="faq-answer-inner pt-3 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />

      {/* Video Modal Component */}
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
