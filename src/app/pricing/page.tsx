"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { getDailyRate, getPotentialCustomers } from "../../utils/pricing";

export default function PricingPage() {
  const [autoCount, setAutoCount] = useState<number>(20);
  const [campaignDays, setCampaignDays] = useState<number>(14);
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

  const currentRate = getDailyRate(autoCount);
  const totalBudget = autoCount * campaignDays * currentRate;
  const potentialCustomersCount = getPotentialCustomers(autoCount, campaignDays).toLocaleString("en-IN");

  const packages = [
    {
      name: "Starter Fleet",
      autos: "5 to 19 Autos",
      rate: "₹110 / day / auto",
      desc: "Ideal for single store promotions & local retail launches.",
      features: [
        "1 Target Lucknow Commercial Route",
        "High-Visibility Backlit Auto Hood Panel",
        "On-Ground Mounting Inspection Proof",
        "Weekly Operational Report",
      ],
      link: "/contact?package=starter-fleet",
      featured: false,
    },
    {
      name: "Market Expansion",
      autos: "20 to 49 Autos",
      rate: "₹92 – ₹100 / day / auto",
      desc: "Best for growing retail chains & multi-location brands.",
      features: [
        "Up to 3 Lucknow Commercial Routes",
        "High-Visibility Backlit Auto Hood Panel",
        "Dedicated Campaign Manager",
        "Photo & Video Placement Verification",
        "Mid-Campaign Route Optimization",
      ],
      link: "/contact?package=market-expansion",
      featured: false,
    },
    {
      name: "City Domination",
      autos: "50 to 149 Autos",
      rate: "₹55 – ₹88 / day / auto",
      desc: "Recommended. Maximizes mindshare and footfall across Lucknow.",
      features: [
        "All Lucknow Commercial Routes Included",
        "High-Visibility Backlit Auto Hood Panel",
        "Priority On-Ground Mounting Execution",
        "Complete Placement Audit Verification",
        "Custom Creative Print Guidance",
      ],
      link: "/contact?package=city-domination",
      featured: true,
    },
    {
      name: "Mega Fleet",
      autos: "150 to 300 Autos",
      rate: "₹52 – ₹56 / day / auto",
      desc: "Large-scale corporate campaigns & regional market takeovers.",
      features: [
        "Full Lucknow City Fleet Coverage",
        "High-Visibility Backlit Auto Hood Panel",
        "Dedicated Field Operations Lead",
        "Omnichannel Marketing Alignment",
        "Exclusive Route Distribution Rules",
      ],
      link: "/contact?package=mega-fleet",
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
            <span>💎 TRANSPARENT AUTO BACKLIT BRANDING PRICING</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black font-display text-[#0B132B]">
            Transparent, Cost-Effective <br />
            <span className="text-[#0052FF]">Campaign Packages</span>
          </h1>

          <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Choose an auto rickshaw backlit panel package that directly matches your advertising footprint in Lucknow. Build high brand awareness for a fraction of static billboard rates.
          </p>
        </section>

        {/* ═══ 2. INTERACTIVE PRICING CALCULATOR (5 TO 300 AUTOS) ═══ */}
        <section className="px-6 py-6 max-w-4xl mx-auto">
          <div className="brand-card p-6 md:p-8 space-y-6 bg-white border border-slate-200 shadow-xl rounded-2xl">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-wider block">CUSTOM CAMPAIGN ESTIMATOR</span>
                <h3 className="text-xl font-bold font-display text-[#0B132B]">Interactive Budget &amp; Reach Calculator</h3>
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

            {/* Live Metrics */}
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

            {/* Budget Bar */}
            <div className="p-4 rounded-xl bg-[#0B132B] text-white flex items-center justify-between shadow-lg">
              <div>
                <span className="text-xs text-slate-400 font-mono uppercase block">Total Campaign Budget</span>
                <span className="text-2xl font-black font-display text-white">₹{totalBudget.toLocaleString("en-IN")}</span>
              </div>
              <a 
                href={`https://wa.me/919639390951?text=Hi%20Adzoop%2C%20I%20want%20to%20book%20${autoCount}%20autos%20for%20${campaignDays}%20days.%20Budget%3A%20%E2%82%B9${totalBudget.toLocaleString("en-IN")}.`}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#0052FF] hover:bg-[#0042D0] text-white font-bold text-xs font-sans transition-all shadow-md"
              >
                Book This Plan →
              </a>
            </div>

          </div>
        </section>

        {/* ═══ 3. INTERACTIVE ROUTE SELECTION CHECKLIST ═══ */}
        <section className="px-6 py-6 max-w-4xl mx-auto">
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

        {/* ═══ 4. PACKAGE CARDS (UPDATED TIER RATES) ═══ */}
        <section className="px-6 py-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
            {packages.map((pkg, idx) => {
              return (
                <div 
                  key={idx}
                  className={`brand-card p-6 space-y-6 flex flex-col justify-between relative ${
                    pkg.featured ? "border-2 border-[#0052FF] shadow-[0_4px_25px_rgba(0,82,255,0.2)]" : ""
                  }`}
                >
                  {pkg.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#0052FF] text-white font-black text-[10px] font-mono tracking-wider uppercase shadow-md">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="space-y-3">
                    <span className="text-xs font-mono text-slate-400 font-bold uppercase">{pkg.autos}</span>
                    <h3 className="text-xl font-bold font-display text-[#0B132B]">{pkg.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{pkg.desc}</p>
                    
                    <div className="pt-2">
                      <span className="text-2xl font-black font-display text-[#0052FF]">{pkg.rate}</span>
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
                        ? "bg-[#0052FF] hover:bg-[#0042D0] text-white shadow-lg" 
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
