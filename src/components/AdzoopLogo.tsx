"use client";

import React from "react";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  darkTheme?: boolean;
}

export default function AdzoopLogo({ className = "", showTagline = true, size = "md", darkTheme = false }: LogoProps) {
  const iconSizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14",
  };

  const textSizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
  };

  const taglineSizes = {
    sm: "text-[9px]",
    md: "text-[11px]",
    lg: "text-[13px]",
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      
      {/* Official Vector Logo Mark */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} aspect-square`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
          <defs>
            <linearGradient id="adzoopLogoGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0052FF" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#9333EA" />
            </linearGradient>
            <linearGradient id="adzoopArrowGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>

          {/* Outer Letter "A" Loop with Upward Arrow */}
          <path 
            d="M 22,82 C 12,82 10,70 18,55 L 42,18 C 46,11 54,11 58,18 L 74,45 C 76,48 78,50 82,45 L 88,38 C 91,35 95,37 95,42 L 95,68 C 95,72 91,76 87,76 L 61,76 C 56,76 54,72 57,69 L 64,63 C 68,59 66,57 63,55 L 45,30 C 43,27 40,27 38,30 L 26,52 C 24,56 26,60 30,60 L 40,60 C 44,60 45,64 42,67 L 35,74 C 30,79 26,82 22,82 Z" 
            fill="url(#adzoopLogoGradient)" 
          />

          {/* Upward Growth Arrow Dynamic Stem */}
          <path 
            d="M 32,54 C 42,54 58,48 78,24 L 88,14 C 91,11 96,15 93,19 L 85,29 C 70,48 52,58 36,60 Z" 
            fill="url(#adzoopArrowGradient)" 
          />
          {/* Arrow Head */}
          <path 
            d="M 75,12 L 95,10 L 93,30 Z" 
            fill="#9333EA" 
          />

          {/* Speech / Chat Bubble with 3 Dots inside A */}
          <path 
            d="M 32,60 C 32,54 38,48 46,48 C 54,48 60,54 60,60 C 60,66 54,72 46,72 C 42,72 38,70 35,67 L 29,69 L 31,64 C 30,62 32,60 32,60 Z" 
            fill="#FFFFFF" 
            opacity="0.95" 
          />
          {/* Chat Bubble Dots */}
          <circle cx="40" cy="60" r="2.2" fill="#0052FF" />
          <circle cx="46" cy="60" r="2.2" fill="#2563EB" />
          <circle cx="52" cy="60" r="2.2" fill="#9333EA" />
        </svg>
      </div>

      {/* Typography & Wordmark */}
      <div className="flex flex-col leading-tight">
        <div className={`font-black font-display tracking-tight ${textSizes[size]}`}>
          <span className={darkTheme ? "text-white" : "text-[#0B132B]"}>Ad</span>
          <span className="bg-gradient-to-r from-[#0052FF] via-[#2563EB] to-[#9333EA] bg-clip-text text-transparent">zoop</span>
        </div>
        {showTagline && (
          <span className={`font-semibold font-sans tracking-tight ${darkTheme ? "text-gray-400" : "text-[#475569]"} ${taglineSizes[size]}`}>
            Advertise Better. Grow Smarter.
          </span>
        )}
      </div>

    </div>
  );
}
