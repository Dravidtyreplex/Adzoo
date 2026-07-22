"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function PricingPage() {
  const [isMonthly, setIsMonthly] = useState(false);
  const [selectedRoutes, setSelectedRoutes] = useState<string[]>(["Hazratganj Hub", "Gomti Nagar Corridor"]);

  const toggleRoute = (route: string) => {
    if (selectedRoutes.includes(route)) {
      if (selectedRoutes.length > 1) {
        setSelectedRoutes(selectedRoutes.filter(r => r !== route));
      }
    } else {
      setSelectedRoutes([...selectedRoutes, route]);
    }
  };

  const discountMultiplier = isMonthly ? 0.8 : 1.0;

  const packages = [
    {
      name: "Hyperlocal Lite",
      tagline: "Best for local retail outlets & single store promotions.",
      baseRate: 79,
      autos: "5 Autos",
      features: [
        "1 Selected Lucknow Corridor",
        "10\" IPS HD Smart Screen",
        "Weekly Play Logs Report",
        "Cloud Content Upload",
      ],
      link: "/contact?package=hyperlocal-lite",
      featured: false,
    },
    {
      name: "Market Penetrator",
      tagline: "Ideal for growing outlets requiring steady city-wide visibility.",
      baseRate: 69,
      autos: "15 Autos",
      features: [
        "Up to 3 Lucknow Corridors",
        "10\" IPS HD Smart Screen",
        "Dedicated Account Desk",
        "GPS Route Compliance Data",
        "Weekly Content Refresh",
      ],
      link: "/contact?package=market-penetrator",
      featured: false,
    },
    {
      name: "City Domination",
      tagline: "Recommended. Maximizes impressions and builds high local authority.",
      baseRate: 59,
      autos: "30 Autos",
      features: [
        "All Lucknow Commercial Corridors",
        "High-Frequency Loop Priority",
        "Real-Time GPS Telemetry Sync",
        "Creative Graphic Design Support",
        "Proof-of-Play Video Audits",
      ],
      link: "/contact?package=city-domination",
      featured: true,
    },
    {
      name: "Enterprise Network",
      tagline: "Best for large-scale corporate outreach across regions.",
      baseRate: 49,
      autos: "50+ Autos",
      features: [
        "Full City-Wide Fleet Access",
        "Exclusive Loop Scheduling Rules",
        "Custom API Telemetry Feeds",
        "Dedicated Operations Lead",
        "Omnichannel Retargeting Sync",
      ],
      link: "/contact?package=enterprise-network",
      featured: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0B132B] font-sans relative">
      
      <div className="ambient-glow-brand-top" />

      <Header />

      <main className="flex-grow pt-[105px] relative z-10">

        {/* ═══ 1. PRICING HERO ═══ */}
        <section className="px-6 py-12 md:py-16 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-[#0052FF]/30 text-xs font-mono text-[#0052FF]">
            <span>💎 TRANSPARENT DOOH PRICING</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black font-display text-[#0B132B]">
            Transparent, Cost-Effective <br />
            <span className="text-gradient-brand">Campaign Packages</span>
          </h1>

          <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Choose an auto rickshaw LED display plan that directly matches your advertising footprint in Lucknow. Build high brand awareness for a fraction of static billboard rates.
          </p>

          {/* Billing Cycle Toggle Switch */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <span className={`text-xs font-semibold ${!isMonthly ? "text-[#0052FF]" : "text-slate-500"}`}>Weekly Billing</span>
            <button
              onClick={() => setIsMonthly(!isMonthly)}
              className="w-14 h-8 rounded-full bg-slate-200 p-1 border border-slate-300 relative transition-all"
            >
              <div className={`w-6 h-6 rounded-full bg-gradient-to-r from-[#0052FF] to-[#9333EA] transition-transform ${isMonthly ? "translate-x-6" : "translate-x-0"}`} />
            </button>
            <div className="flex items-center gap-1.5">
              <span className={`text-xs font-semibold ${isMonthly ? "text-[#9333EA]" : "text-slate-500"}`}>Monthly Commitment</span>
              <span className="px-2 py-0.5 rounded-full bg-purple-50 border border-[#9333EA]/30 text-[#9333EA] font-mono text-[10px] font-bold">SAVE 20%</span>
            </div>
          </div>
        </section>

        {/* ═══ 2. INTERACTIVE ROUTE SELECTION CHECKLIST ═══ */}
        <section className="px-6 py-6 max-w-5xl mx-auto">
          <div className="brand-card p-6 space-y-4 bg-white border border-slate-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#0052FF] font-bold uppercase">CUSTOM ROUTE TARGETING</span>
              <span className="text-xs text-slate-500 font-mono">{selectedRoutes.length} Corridors Selected</span>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              {[
                "Hazratganj Hub", "Gomti Nagar Corridor", "Aminabad Market", 
                "Charbagh Transit Hub", "Alambagh Bus Terminal", "Aliganj Institutional Zone"
              ].map((route) => {
                const active = selectedRoutes.includes(route);
                return (
                  <button
                    key={route}
                    onClick={() => toggleRoute(route)}
                    className={`px-3.5 py-2 rounded-xl border transition-all ${
                      active 
                        ? "bg-[#0052FF]/10 border-[#0052FF] text-[#0052FF] font-bold" 
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {active ? "✓ " : "+ "}{route}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ 3. PACKAGE CARDS ═══ */}
        <section className="px-6 py-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
            {packages.map((pkg, idx) => {
              const effectiveRate = Math.round(pkg.baseRate * discountMultiplier);
              return (
                <div 
                  key={idx}
                  className={`brand-card p-6 space-y-6 flex flex-col justify-between relative ${
                    pkg.featured ? "border-2 border-[#0052FF] shadow-[0_4px_25px_rgba(0,82,255,0.2)]" : ""
                  }`}
                >
                  {pkg.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#0052FF] to-[#9333EA] text-white font-black text-[10px] font-mono tracking-wider uppercase shadow-md">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="space-y-3">
                    <span className="text-xs font-mono text-slate-400 font-bold uppercase">{pkg.autos}</span>
                    <h3 className="text-xl font-bold font-display text-[#0B132B]">{pkg.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{pkg.tagline}</p>
                    
                    <div className="pt-2">
                      <span className="text-3xl font-black font-display text-gradient-brand">₹{effectiveRate}</span>
                      <span className="text-xs text-slate-500"> / auto / day</span>
                      {isMonthly && <span className="block text-[10px] text-[#9333EA] font-mono font-bold mt-1">20% Monthly Discount Applied</span>}
                    </div>

                    <ul className="space-y-2 text-xs text-slate-700 pt-3 border-t border-slate-100">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-[#0052FF]">✓</span> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href={pkg.link} 
                    className={`w-full py-3.5 rounded-xl text-center font-bold text-xs block transition-all ${
                      pkg.featured 
                        ? "btn-brand-primary shadow-lg" 
                        : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                    }`}
                  >
                    Select Plan →
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
