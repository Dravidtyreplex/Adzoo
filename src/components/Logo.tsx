"use client";

import React from "react";

export function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="200" x2="200" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="55%" stopColor="#6D3AF0" />
          <stop offset="100%" stopColor="#C026D3" />
        </linearGradient>
      </defs>
      
      {/* Outer A-shape wrapper with smooth curves */}
      <path 
        d="M100 20C82 20 68 35 60 55L22 145C17 157 26 170 39 170H75C81 170 86 166 88 160L98 130C99 126 103 123 107 123H133C137 123 141 126 142 130L152 160C154 166 159 170 165 170H171C184 170 193 157 188 145L140 55C132 35 118 20 100 20Z" 
        fill="url(#logo-gradient)" 
      />
      
      {/* Speech bubble inside the A */}
      <path 
        d="M100 52C82 52 68 62 68 75C68 81 72 87 78 91L73 111L92 101C95 102 97 102 100 102C118 102 132 92 132 75C132 62 118 52 100 52Z" 
        fill="#FFFFFF" 
      />
      
      {/* Three dots in speech bubble */}
      <circle cx="88" cy="75" r="4.5" fill="url(#logo-gradient)" />
      <circle cx="100" cy="75" r="4.5" fill="url(#logo-gradient)" />
      <circle cx="112" cy="75" r="4.5" fill="url(#logo-gradient)" />
      
      {/* Rising Arrow shooting through the bottom left leg to top right */}
      <path 
        d="M16 174L174 38M174 38H132M174 38V80" 
        stroke="url(#logo-gradient)" 
        strokeWidth="20" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

export default function Logo({ showTagline = false }: { showTagline?: boolean }) {
  return (
    <div className="flex flex-col items-start justify-center">
      <div className="flex items-center gap-3">
        <LogoMark className="w-8 h-8 md:w-9 md:h-9" />
        <span className="font-display text-2xl font-bold tracking-tight text-text-primary">
          Ad<span className="text-text-primary">zoop</span>
        </span>
      </div>
      {showTagline && (
        <span className="text-[10px] text-text-muted font-sans font-medium tracking-wide mt-1 block">
          Advertise Better. Grow Smarter.
        </span>
      )}
    </div>
  );
}
