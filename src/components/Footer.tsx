"use client";

import React from "react";
import Link from "next/link";
import AdzoopLogo from "./AdzoopLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/919639390951?text=Hi%20Adzoop%2C%20I%27d%20like%20to%20discuss%20an%20auto%20advertising%20campaign.";

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 font-sans relative overflow-hidden">
      
      {/* Ambient Radial Background Glow */}
      <div className="ambient-glow-brand-bottom" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center">
              <AdzoopLogo size="md" showTagline={true} darkTheme={true} />
            </Link>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Lucknow&apos;s premier digital out-of-home (DOOH) transit media platform. Cloud-connected smart displays inside commercial auto-rickshaws, delivering unskippable eye-level brand recall.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[#0052FF]">
              <span className="status-dot-brand" />
              <span className="font-bold">⚡ 500+ ACTIVE DOOH SCREENS IN LUCKNOW</span>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-white font-display uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link href="/#how-it-works" className="hover:text-[#0052FF] transition-colors">Auto LED Display Screens</Link></li>
              <li><Link href="/contact?solution=digital-billboard" className="hover:text-[#0052FF] transition-colors">Digital Billboard Grid</Link></li>
              <li><Link href="/contact?solution=cab-interior" className="hover:text-[#0052FF] transition-colors">Cab Interior Ads</Link></li>
              <li><Link href="/contact?solution=bus-back" className="hover:text-[#0052FF] transition-colors">Transit Bus Back Media</Link></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-white font-display uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link href="/" className="hover:text-[#0052FF] transition-colors">Home</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-[#0052FF] transition-colors">How It Works</Link></li>
              <li><Link href="/#pilot" className="hover:text-[#0052FF] transition-colors">Driver Partner Portal</Link></li>
              <li><Link href="/pricing" className="hover:text-[#0052FF] transition-colors">Pricing Packages</Link></li>
              <li><Link href="/about" className="hover:text-[#0052FF] transition-colors">About Company</Link></li>
              <li><Link href="/contact" className="hover:text-[#0052FF] transition-colors">Contact Desk</Link></li>
            </ul>
          </div>

          {/* Col 4: Lucknow Corridors */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-white font-display uppercase tracking-wider">Active Corridors</h4>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">Hazratganj</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">Gomti Nagar</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">Aminabad</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">Charbagh</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">Aliganj</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">Indira Nagar</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <div suppressHydrationWarning>© {currentYear} ADZOOP MOBILITYADS PRIVATE LIMITED. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Route Telemetry</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
