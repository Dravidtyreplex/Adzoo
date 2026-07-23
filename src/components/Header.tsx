"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AdzoopLogo from "./AdzoopLogo";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const whatsappUrl = "https://wa.me/919639390951?text=Hi%20Adzoop%2C%20I%27d%20like%20to%20know%20pricing%20details%20for%20auto%20backlit%20branding.";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 transition-all duration-300 shadow-xs">
      <div className="max-w-7xl mx-auto px-6 h-[85px] flex items-center justify-between">
        
        {/* Brand Logo Component */}
        <Link href="/" className="flex items-center group">
          <AdzoopLogo size="md" showTagline={true} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold font-sans text-slate-700">
          <Link 
            href="/" 
            className={`transition-colors hover:text-[#0052FF] ${pathname === "/" ? "text-[#0052FF] font-bold" : ""}`}
          >
            Home
          </Link>

          {/* Solutions Dropdown */}
          <div 
            className="relative py-4"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1.5 transition-colors hover:text-[#0052FF] focus:outline-none">
              Services
              <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180 text-[#0052FF]" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-2xl p-2.5 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200 space-y-1">
                <Link href="/#how-it-works" className="block px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#0052FF] hover:bg-slate-50 transition-all">
                  🛺 Backlit Auto Hood Branding
                </Link>
                <Link href="/contact?solution=commercial-corridors" className="block px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#0052FF] hover:bg-slate-50 transition-all">
                  📍 Lucknow Commercial Corridors
                </Link>
                <Link href="/contact?solution=transit-media" className="block px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#0052FF] hover:bg-slate-50 transition-all">
                  🚕 High-Impact Mobile Media
                </Link>
                <Link href="/contact?solution=fleet-branding" className="block px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#0052FF] hover:bg-slate-50 transition-all">
                  🏬 Retail &amp; Brand Outreaches
                </Link>
              </div>
            )}
          </div>

          <Link 
            href="/pricing" 
            className={`transition-colors hover:text-[#0052FF] ${pathname === "/pricing" ? "text-[#0052FF] font-bold" : ""}`}
          >
            Pricing
          </Link>
          
          <Link 
            href="/about" 
            className={`transition-colors hover:text-[#0052FF] ${pathname === "/about" ? "text-[#0052FF] font-bold" : ""}`}
          >
            About
          </Link>

          <Link 
            href="/contact" 
            className={`transition-colors hover:text-[#0052FF] ${pathname === "/contact" ? "text-[#0052FF] font-bold" : ""}`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#0052FF] hover:bg-[#0042D0] text-white font-bold text-xs tracking-wide font-sans flex items-center gap-2 shadow-md transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.719-1.465L0 24z"/></svg>
            Get Pricing Brief
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#0052FF]"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 font-sans shadow-xl animate-in slide-in-from-top-4">
          <Link href="/" onClick={toggleMobileMenu} className="block text-slate-800 font-bold text-base hover:text-[#0052FF]">
            Home
          </Link>
          <div className="space-y-2 pl-3 border-l-2 border-[#0052FF]/30">
            <span className="text-xs font-mono text-[#0052FF] uppercase tracking-wider block font-bold">Services</span>
            <Link href="/#how-it-works" onClick={toggleMobileMenu} className="block text-sm text-slate-600 hover:text-[#0052FF]">Backlit Auto Hood Branding</Link>
            <Link href="/contact?solution=commercial-corridors" onClick={toggleMobileMenu} className="block text-sm text-slate-600 hover:text-[#0052FF]">Lucknow Commercial Corridors</Link>
            <Link href="/contact?solution=transit-media" onClick={toggleMobileMenu} className="block text-sm text-slate-600 hover:text-[#0052FF]">High-Impact Mobile Media</Link>
          </div>
          <Link href="/pricing" onClick={toggleMobileMenu} className="block text-slate-800 font-bold text-base hover:text-[#0052FF]">
            Pricing
          </Link>
          <Link href="/about" onClick={toggleMobileMenu} className="block text-slate-800 font-bold text-base hover:text-[#0052FF]">
            About Us
          </Link>
          <Link href="/contact" onClick={toggleMobileMenu} className="block text-slate-800 font-bold text-base hover:text-[#0052FF]">
            Contact Desk
          </Link>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.719-1.465L0 24z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
