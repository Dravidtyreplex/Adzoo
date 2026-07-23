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
      setFormData(prev => ({ ...prev, package: `${formattedSol} Service` }));
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

  const whatsappUrl = "https://wa.me/919639390951?text=Hi%20Adzoop%2C%20I%27d%20like%20to%20discuss%20an%20auto%20backlit%20branding%20campaign.";
  const phoneNumber = "+91 9639390951";

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0B132B] font-sans relative">
      
      <div className="ambient-glow-brand-top" />

      <Header />

      <main className="flex-grow pt-[105px] relative z-10">

        {/* ═══ 1. CONTACT HERO ═══ */}
        <section className="px-6 py-12 md:py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-[#0052FF]/30 text-xs font-mono text-[#0052FF]">
                <span>📞 CAMPAIGN DESK</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black font-display text-[#0B132B]">
                Launch Your Campaign <br />
                <span className="text-[#0052FF]">With Adzoop Branding</span>
              </h1>

              <p className="text-base text-slate-600 leading-relaxed">
                Connect with Lucknow&apos;s leading auto-rickshaw transit media team to design, target, and launch high-recall campaigns.
              </p>

              {/* Channels list */}
              <div className="space-y-4 pt-2 text-xs font-sans">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#25D366] flex items-center justify-center text-lg font-bold">💬</div>
                  <div>
                    <span className="text-slate-500 block font-mono">WhatsApp Support</span>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 hover:text-[#0052FF] transition-colors">
                      {phoneNumber} (Instant Response)
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0052FF] flex items-center justify-center text-lg font-bold">✉️</div>
                  <div>
                    <span className="text-slate-500 block font-mono">Email Campaign Briefs</span>
                    <a href="mailto:support@adzoop.com" className="font-bold text-slate-900 hover:text-[#0052FF] transition-colors">
                      support@adzoop.com
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0052FF] flex items-center justify-center text-lg font-bold">📍</div>
                  <div>
                    <span className="text-slate-500 block font-mono">Lucknow Operations Hub</span>
                    <span className="font-bold text-slate-900">Lucknow, Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <div className="brand-card p-6 md:p-8 space-y-6 bg-white border border-slate-200 shadow-xl rounded-2xl">
                
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-xs font-mono text-[#0052FF] font-bold uppercase">DIRECT SUBMISSION</span>
                  <h3 className="text-2xl font-bold font-display text-[#0B132B]">Submit Campaign Brief</h3>
                  <p className="text-xs text-slate-500 font-sans mt-1">Our Lucknow operations team will contact you within 24 hours.</p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl font-bold mx-auto shadow-md">
                      ✓
                    </div>
                    <h4 className="text-2xl font-bold font-display text-slate-900">Campaign Brief Logged!</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans max-w-md mx-auto">
                      Thank you <strong>{formData.name || "there"}</strong>. Your briefing for <strong>{formData.package || "Adzoop Backlit Campaign"}</strong> has been received by our Lucknow team.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", company: "", package: "", message: "" });
                      }}
                      className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs transition-all hover:bg-slate-800"
                    >
                      Submit Another Brief
                    </button>
                  </div>
                ) : (
                  <form className="space-y-4 font-sans text-xs" onSubmit={handleSubmit}>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-slate-700 font-semibold block">Your Name *</label>
                        <input 
                          type="text" 
                          name="name" 
                          required 
                          value={formData.name} 
                          onChange={handleChange} 
                          placeholder="Enter your name" 
                          className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0052FF] transition-colors"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-slate-700 font-semibold block">Phone Number *</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          required 
                          value={formData.phone} 
                          onChange={handleChange} 
                          placeholder="Enter phone number" 
                          className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0052FF] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-slate-700 font-semibold block">Email Address *</label>
                        <input 
                          type="email" 
                          name="email" 
                          required 
                          value={formData.email} 
                          onChange={handleChange} 
                          placeholder="Enter email address" 
                          className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0052FF] transition-colors"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-slate-700 font-semibold block">Company / Brand Name</label>
                        <input 
                          type="text" 
                          name="company" 
                          value={formData.company} 
                          onChange={handleChange} 
                          placeholder="Enter company name" 
                          className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0052FF] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-slate-700 font-semibold block">Select Package or Route Target</label>
                      <select 
                        name="package" 
                        value={formData.package} 
                        onChange={handleChange}
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#0052FF] transition-colors"
                      >
                        <option value="">Choose a Package / Service Plan...</option>
                        <option value="Starter Fleet">Starter Fleet (5 to 19 Autos - ₹110/day)</option>
                        <option value="Market Expansion">Market Expansion (20 to 49 Autos - ₹92–100/day)</option>
                        <option value="City Domination">City Domination (50 to 149 Autos - ₹55–88/day)</option>
                        <option value="Mega Fleet">Mega Fleet (150 to 300 Autos - ₹52–56/day)</option>
                        <option value="Backlit Auto Hood Solution">Backlit Auto Rickshaw Hood Branding</option>
                        <option value="Commercial Corridor Targeting">Lucknow Commercial Corridors</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-slate-700 font-semibold block">Campaign Brief / Message *</label>
                      <textarea 
                        name="message" 
                        required 
                        rows={4} 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Tell us about your brand targets, preferred Lucknow routes, and campaign launch timeline..." 
                        className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0052FF] transition-colors"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-4 rounded-xl bg-[#0052FF] hover:bg-[#0042D0] text-white font-bold text-sm font-sans flex items-center justify-center gap-2 shadow-lg"
                    >
                      Submit Campaign Brief →
                    </button>
                  </form>
                )}

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
      <div className="flex items-center justify-center min-h-screen bg-white text-[#0052FF] font-mono text-sm">
        Loading Campaign Desk...
      </div>
    }>
      <ContactFormContent />
    </Suspense>
  );
}
