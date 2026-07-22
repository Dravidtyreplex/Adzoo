"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const whatsappUrl = "https://wa.me/919639390951?text=Hi%20Adzoop%2C%20I%20want%20to%20know%20pricing%20details.";

  return (
    <>
      <header className={`premium-white-header ${scrolled ? "scrolled" : ""}`} id="adzoopHeader">
        <div className="nav-container">
          
          {/* Logo (Acts as Home) */}
          <Link href="/" className="logo-link">
            <span className="font-display text-2xl font-black text-text-dark tracking-tight">
              Ad<span className="text-brand-yellow">zoop</span>
            </span>
          </Link>

          {/* Center Navigation (Desktop) */}
          <nav className="desktop-nav">
            
            {/* Solutions Dropdown */}
            <div className="dropdown-wrapper">
              <span className="nav-item cursor-pointer">
                Solutions
                <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
              <div className="dropdown-content">
                <Link href="/#how-it-works" className="dropdown-link">Auto LED Advertising</Link>
                <Link href="/contact?solution=digital-billboard" className="dropdown-link">Digital Billboard Advertising</Link>
                <Link href="/contact?solution=cab-interior" className="dropdown-link">Cab Interior Ads</Link>
                <Link href="/contact?solution=bus-back" className="dropdown-link">Bus Back Ads</Link>
              </div>
            </div>

            
            <Link href="/pricing" className={`nav-item ${pathname === "/pricing" ? "text-dark" : ""}`}>
              Pricing
            </Link>
            <Link href="/about" className={`nav-item ${pathname === "/about" ? "text-dark" : ""}`}>
              About
            </Link>
            <Link href="/contact" className={`nav-item ${pathname === "/contact" ? "text-dark" : ""}`}>
              Contact
            </Link>
          </nav>

          {/* Call to Action (Desktop) */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-demo desktop-btn">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"></path>
            </svg>
            Get Pricing
          </a>

          {/* Mobile Menu Toggle Button */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>
            <svg id="menuIcon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? "active" : ""}`} id="mobileNav">
        <div className="mobile-nav-item" style={{ color: "#FEC200", borderBottom: "none", marginBottom: "10px" }}>Solutions</div>
        <Link href="/#how-it-works" className="mobile-nav-item sub-link" onClick={toggleMobileMenu}>- Auto LED Advertising</Link>
        <Link href="/contact?solution=digital-billboard" className="mobile-nav-item sub-link" onClick={toggleMobileMenu}>- Digital Billboard Advertising</Link>
        <Link href="/contact?solution=cab-interior" className="mobile-nav-item sub-link" onClick={toggleMobileMenu}>- Cab Interior Ads</Link>
        <Link href="/contact?solution=bus-back" className="mobile-nav-item sub-link" onClick={toggleMobileMenu}>- Bus Back Ads</Link>
        
        <Link href="/pricing" className="mobile-nav-item" onClick={toggleMobileMenu}>Pricing</Link>
        <Link href="/about" className="mobile-nav-item" onClick={toggleMobileMenu}>About</Link>
        <Link href="/contact" className="mobile-nav-item" onClick={toggleMobileMenu}>Contact</Link>
        
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-demo" style={{ display: "flex", justifyContent: "center", marginTop: "20px", color: "#fff", background: "#111827" }} onClick={toggleMobileMenu}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ fill: "#ffffff", marginRight: "8px", width: "18px", height: "18px" }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"></path>
          </svg>
          Get Pricing
        </a>
      </div>
    </>
  );
}
