"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function AboutPage() {
  const whatsappUrl = "https://wa.me/919639390951?text=Hi%20Adzoop%2C%20I%20want%20to%20know%20more%20about%20your%20company%20and%20DOOH%20screens.";

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
      bio: "Managing cloud scheduling dashboards and screen media player configurations.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Neha Singh",
      role: "Client Success Head",
      bio: "Ensuring campaign optimization, route tracking alignment, and client ROI reports.",
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
                We Are Redefining <br />
                <span className="text-gradient-brand">Transit Media Networks</span>
              </h1>

              <p className="text-base text-slate-600 max-w-xl leading-relaxed">
                Adzoop is Lucknow&apos;s premier digital out-of-home (DOOH) transit platform. We convert commercial auto-rickshaws into smart, interactive advertising channels that command captive eye-level attention during active daily commutes.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl btn-brand-primary text-xs font-sans shadow-lg transition-all"
                >
                  Connect with Operations →
                </a>
                <Link 
                  href="/pricing" 
                  className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-900 font-semibold text-xs transition-all"
                >
                  View Packages
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-xl relative">
                <img src="/images/adzoop_auto_display.jpg" alt="Adzoop Auto Display" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-mono">
                  <span className="text-[#0052FF] font-bold block">Lucknow Fleet Operations</span>
                  <span className="text-slate-600">500+ active displays across 6 corridors.</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ═══ 2. MISSION & VISION ═══ */}
        <section className="px-6 py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            
            <div className="brand-card p-8 space-y-4 bg-white border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-[#0052FF]/20 flex items-center justify-center text-[#0052FF] text-xl font-bold">
                🎯
              </div>
              <h3 className="text-2xl font-bold font-display text-[#0B132B]">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To empower local retail brands and national businesses to achieve maximum mindshare through eye-level, cost-effective digital transit media that cannot be skipped or blocked.
              </p>
            </div>

            <div className="brand-card p-8 space-y-4 bg-white border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-[#9333EA]/20 flex items-center justify-center text-[#9333EA] text-xl font-bold">
                🚀
              </div>
              <h3 className="text-2xl font-bold font-display text-[#0B132B]">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To build the largest smart DOOH transit network across Uttar Pradesh, turning daily passenger transport into interactive, cloud-managed brand channels.
              </p>
            </div>

          </div>
        </section>

        {/* ═══ 3. LEADERSHIP TEAM ═══ */}
        <section className="px-6 py-16 max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono text-[#0052FF] font-bold uppercase tracking-wider">TEAM &amp; LEADERSHIP</span>
            <h2 className="text-3xl font-black font-display text-[#0B132B]">Meet the Minds Behind Adzoop</h2>
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
