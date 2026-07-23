"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function AboutPage() {
  const whatsappUrl = "https://wa.me/919639390951?text=Hi%20Adzoop%2C%20I%20want%20to%20know%20more%20about%20your%20company%20and%20auto%20backlit%20branding.";

  const teamMembers = [
    {
      name: "Aman Sharma",
      role: "Co-Founder & Operations Lead",
      bio: "Managing fleet partnerships, on-ground installation quality, and route execution across Lucknow.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Priya Verma",
      role: "Head of Client Growth",
      bio: "Helping local retail businesses and growing brands plan high-recall transit campaigns.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Rajesh Gupta",
      role: "Field Operations Manager",
      bio: "Overseeing daily auto rickshaw panel mounting inspections and fleet compliance.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Neha Singh",
      role: "Brand Strategy Coordinator",
      bio: "Ensuring campaign design quality, print production alignment, and client reports.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0B132B] font-sans relative">
      
      <div className="ambient-glow-brand-top" />

      <Header />

      <main className="flex-grow pt-[105px] relative z-10">

        {/* ═══ 1. ABOUT HERO ═══ */}
        <section className="px-6 py-12 md:py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-[#0052FF]/30 text-xs font-mono text-[#0052FF]">
                <span>🌐 ADVERTISE BETTER. GROW SMARTER.</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black font-display text-[#0B132B]">
                High-Impact Transit Media <br />
                <span className="text-[#0052FF]">Built for Lucknow Brands</span>
              </h1>

              <p className="text-base text-slate-600 max-w-xl leading-relaxed">
                Adzoop helps local businesses and growing brands achieve eye-level visibility across Lucknow. By placing illuminated backlit panels on commercial auto-rickshaws, we ensure your message travels through high-density markets and commercial hubs every single day.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#0052FF] hover:bg-[#0042D0] text-white font-bold text-xs font-sans shadow-lg transition-all"
                >
                  Connect with Operations →
                </a>
                <Link 
                  href="/pricing" 
                  className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-900 font-semibold text-xs transition-all"
                >
                  View Pricing Packages
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-xl relative">
                <img src="/images/adzoop_auto_display.jpg" alt="Adzoop Auto Display" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-mono">
                  <span className="text-[#0052FF] font-bold block">Lucknow Fleet Operations</span>
                  <span className="text-slate-600">500+ active backlit panels across major routes.</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ═══ 2. MISSION & VISION (AUTHENTIC REWRITE) ═══ */}
        <section className="px-6 py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            
            <div className="brand-card p-8 space-y-4 bg-white border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-[#0052FF]/20 flex items-center justify-center text-[#0052FF] text-xl font-bold">
                🎯
              </div>
              <h3 className="text-2xl font-bold font-display text-[#0B132B]">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To give Lucknow brands a high-impact, cost-effective outdoor advertising channel that reaches real commuters at eye-level, eliminating the massive overhead of static billboards while delivering reliable daily brand recall.
              </p>
            </div>

            <div className="brand-card p-8 space-y-4 bg-white border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-[#0052FF]/20 flex items-center justify-center text-[#0052FF] text-xl font-bold">
                🚀
              </div>
              <h3 className="text-2xl font-bold font-display text-[#0B132B]">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To become Uttar Pradesh&apos;s most trusted transit media partner, building strong relationships with auto driver partners while helping local businesses grow smarter through high-visibility outdoor branding.
              </p>
            </div>

          </div>
        </section>

        {/* ═══ 3. LEADERSHIP TEAM ═══ */}
        <section className="px-6 py-16 max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-wider">OUR TEAM</span>
            <h2 className="text-3xl font-black font-display text-[#0B132B]">Meet the People Behind Adzoop</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="brand-card p-6 space-y-4 text-center bg-white border border-slate-200">
                <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-[#0052FF]/30 shadow-md" />
                <div>
                  <h3 className="text-lg font-bold font-display text-[#0B132B]">{member.name}</h3>
                  <span className="text-xs text-[#0052FF] font-mono font-bold block">{member.role}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
