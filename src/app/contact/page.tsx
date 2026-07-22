"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    package: "",
    message: ""
  });

  useEffect(() => {
    const pkg = searchParams.get("package");
    const sol = searchParams.get("solution");
    if (pkg) {
      const formattedPkg = pkg
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      setFormData(prev => ({ ...prev, package: formattedPkg }));
    } else if (sol) {
      const formattedSol = sol
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      setFormData(prev => ({ ...prev, package: `${formattedSol} Solution` }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };


  const whatsappUrl = "https://wa.me/919639390951?text=Hi%20Adzoop%2C%20I%27d%20like%20to%20discuss%20an%20auto%20advertising%20campaign.";
  const phoneNumber = "+91 9639390951";

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-[80px]">

        {/* ═══ 1. CONTACT HERO ═══ */}
        <section className="ad-con-hero">
          <div className="ad-con-container">
            
            {/* Left Column */}
            <div className="ad-con-content text-left">
              <span className="ad-con-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Campaign Desk
              </span>
              <h1 className="ad-con-h1">
                Grow Your Brand <br />
                With <span className="ad-con-highlight">Adzoop DOOH</span>
              </h1>
              <p className="ad-con-subtitle">
                Connect with Lucknow&apos;s leading transit media network to design, target, and run unskippable eye-level campaigns.
              </p>
              
              <div className="ad-con-trust font-sans font-semibold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Real-time screen updates &amp; GPS verification reports.
              </div>

              <div className="ad-con-buttons">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ad-con-btn-wa">
                  <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.719-1.465L0 24z"/></svg>
                  Chat on WhatsApp
                </a>
              </div>

              <div className="ad-con-bonus font-sans font-semibold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Direct WhatsApp campaigns desk support.
              </div>
            </div>

            {/* Right Column */}
            <div className="ad-con-visual">
              <img 
                src="/images/adzoop_auto_display.jpg" 
                alt="Adzoop auto media displays" 
                className="ad-con-img"
              />
              <div className="ad-con-overlay">
                <div className="ad-con-overlay-text font-sans">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                  Lucknow Active Media Network
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ═══ 2. CONTACT CHANNELS & FORM ═══ */}
        <section className="ad-comb-section">
          <div className="ad-comb-container">
            
            {/* Info Cards */}
            <div className="ad-comb-info text-left">
              <h2 className="ad-comb-h2">Campaign Channels</h2>
              <p className="ad-comb-subtitle font-sans">
                Contact our support desk directly, email your creative briefs, or visit our office in Lucknow.
              </p>

              <div className="ad-comb-list font-sans">
                
                <div className="ad-comb-item">
                  <div className="ad-comb-icon">📞</div>
                  <div className="ad-comb-text-box">
                    <h3>Call Support</h3>
                    <p>
                      <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`}>{phoneNumber}</a>
                    </p>
                    <p className="text-xs text-text-muted mt-1">Direct campaigns support and dial bookings.</p>
                  </div>
                </div>

                <div className="ad-comb-item">
                  <div className="ad-comb-icon">✉️</div>
                  <div className="ad-comb-text-box">
                    <h3>Email Address</h3>
                    <p>
                      <a href="mailto:support@adzoop.com">support@adzoop.com</a>
                    </p>
                    <p className="text-xs text-text-muted mt-1">Send campaign creatives, proposals, and briefs.</p>
                  </div>
                </div>

                <div className="ad-comb-item">
                  <div className="ad-comb-icon">📍</div>
                  <div className="ad-comb-text-box">
                    <h3>Office Location</h3>
                    <p className="font-bold text-text-dark">Adzoop Office Lucknow</p>
                    <p className="text-xs text-text-muted">Lucknow, Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="mt-2 pt-2 border-t border-dashed border-[#e5e7eb]">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="ad-comb-btn-wa">
                    Chat with Campaigns Manager
                  </a>
                </div>

              </div>
            </div>

            {/* Form */}
            <div className="ad-comb-form-wrapper text-left font-sans">
              <div className="ad-comb-form-header">
                <h3 className="ad-comb-form-h3 font-display">Submit Your Campaign Brief</h3>
                <p className="ad-comb-form-desc">
                  Fill out the fields below and our operations specialist will reach out to design your campaign route.
                </p>
              </div>

              {submitted ? (

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-4 font-sans">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950 font-display">Campaign Brief Received!</h4>
                  <p className="text-sm text-emerald-800 leading-relaxed">
                    Thank you <strong>{formData.name || "there"}</strong>. We have logged your request for <strong>{formData.package || "Custom Campaign"}</strong>. Our Lucknow operations team will contact you within 24 hours.
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", company: "", package: "", message: "" });
                    }} 
                    className="ad-comb-btn-submit !mt-4"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form className="ad-comb-form" onSubmit={handleSubmit}>

                <div className="ad-comb-row">
                  <div className="ad-comb-group">
                    <label className="ad-comb-label">Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      className="ad-comb-input" 
                      placeholder="Enter your name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="ad-comb-group">
                    <label className="ad-comb-label">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      className="ad-comb-input" 
                      placeholder="Enter phone number" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>

                <div className="ad-comb-row">
                  <div className="ad-comb-group">
                    <label className="ad-comb-label">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      className="ad-comb-input" 
                      placeholder="Enter email address" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="ad-comb-group">
                    <label className="ad-comb-label">Company Name</label>
                    <input 
                      type="text" 
                      name="company" 
                      className="ad-comb-input" 
                      placeholder="Enter company name" 
                      value={formData.company} 
                      onChange={handleChange} 
                    />
                  </div>
                </div>

                <div className="ad-comb-group">
                  <label className="ad-comb-label">Select Package</label>
                  <select 
                    name="package" 
                    className="ad-comb-input" 
                    value={formData.package} 
                    onChange={handleChange}
                  >
                    <option value="">Choose a Package Plan...</option>
                    <option value="Hyperlocal Lite">Hyperlocal Lite (₹79/day)</option>
                    <option value="Market Penetrator">Market Penetrator (₹69/day)</option>
                    <option value="City Domination">City Domination (₹59/day)</option>
                    <option value="Enterprise Expansion">Enterprise Expansion (₹49/day)</option>
                  </select>
                </div>

                <div className="ad-comb-group">
                  <label className="ad-comb-label">Campaign Brief / Message</label>
                  <textarea 
                    name="message" 
                    className="ad-comb-textarea" 
                    placeholder="Tell us about your brand targets, routes, and creative timeline..." 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                  ></textarea>
                </div>

                <button type="submit" className="ad-comb-btn-submit">
                  Submit Campaign Brief
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </form>
              )}


              <div className="ad-comb-trust">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                All data is encrypted &amp; shared only with account managers.
              </div>

            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-background font-sans font-semibold text-text-muted">
        Loading Campaign Form...
      </div>
    }>
      <ContactFormContent />
    </Suspense>
  );
}
