"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phone = "+91 9639390951";
  const email = "support@adzoop.com";
  const whatsappUrl = "https://wa.me/919639390951?text=Hi%20Adzoop%2C%20I%20want%20to%20start%20advertising%20and%20need%20details.";

  return (
    <footer className="ad-ft-fw-section">
      
      {/* CONVERSION HACK: MINI CTA */}
      <div className="ad-ft-fw-mini-cta">
        <h3>Ready to grow your business with <span>Adzoop?</span></h3>
        <Link href="/contact" className="ad-ft-fw-btn-primary">
          Start Your Campaign 
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </Link>
      </div>

      <div className="ad-ft-fw-container">
        
        {/* MAIN FOOTER GRID */}
        <div className="ad-ft-fw-grid">
          
          {/* Column 1: Brand Info */}
          <div className="ad-ft-fw-col">
            <Link href="/" className="ad-ft-fw-logo">Ad<span>zoop</span></Link><br />
            <div className="ad-ft-fw-tagline">Ads That Can&apos;t Be Skipped</div>
            <p className="ad-ft-fw-desc font-sans text-sm">On-road LED advertising platform delivering eye-level, unskippable visibility across the city.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="ad-ft-fw-col">
            <h4>Quick Links</h4>
            <ul className="ad-ft-fw-links font-sans text-sm p-0 m-0">
              <li><Link href="/" className="ad-ft-fw-link">Home</Link></li>
              <li><Link href="/#how-it-works" className="ad-ft-fw-link">Solutions</Link></li>
              <li><Link href="/#how-it-works" className="ad-ft-fw-link">How It Works</Link></li>
              <li><Link href="/#pilot" className="ad-ft-fw-link">Pilot</Link></li>
              <li><Link href="/contact" className="ad-ft-fw-link">Contact</Link></li>
            </ul>
          </div>


          {/* Column 3: Contact */}
          <div className="ad-ft-fw-col">
            <h4>Contact</h4>
            <ul className="ad-ft-fw-contact-list font-sans text-sm p-0 m-0">
              <li className="ad-ft-fw-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href={`tel:${phone.replace(/\s+/g, "")}`} className="ad-ft-fw-active-link">{phone}</a>
              </li>
              <li className="ad-ft-fw-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href={`mailto:${email}`} className="ad-ft-fw-active-link">{email}</a>
              </li>
              <li className="ad-ft-fw-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Hazratganj, Lucknow, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="ad-ft-fw-col">
            <h4>Connect</h4>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ad-ft-fw-wa-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Chat on WhatsApp
            </a>
            <div className="ad-ft-fw-socials">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="ad-ft-fw-social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="ad-ft-fw-social-icon" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="ad-ft-fw-social-icon" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM STRIP */}
        <div className="ad-ft-fw-bottom font-sans text-xs pt-5">
          <div suppressHydrationWarning>© {currentYear} ADZOOP MOBILITYADS PRIVATE LIMITED. All rights reserved.</div>

          <div className="ad-ft-fw-bottom-links">
            <Link href="/contact">Privacy Policy</Link>
            <Link href="/contact">Payment Policy</Link>
            <Link href="/contact">Terms &amp; Conditions</Link>
            <Link href="/contact">Disclaimer</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
