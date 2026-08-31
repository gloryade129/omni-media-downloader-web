"use client";

import React, { useState } from "react";
import { Download, Sparkles, Youtube, Music, Instagram, Facebook, Twitter, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0c0a09]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#c5a880] to-[#a48256] flex items-center justify-center text-stone-950 font-black shadow-lg shadow-[#c5a880]/20">
            <Download className="w-6 h-6 stroke-[3]" />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-white via-amber-100 to-[#c5a880] bg-clip-text text-transparent">
              OMNI DOWNLOADER
            </span>
            <div className="flex items-center gap-1.5 text-[10px] tracking-widest text-[#c5a880] font-semibold uppercase">
              <Sparkles className="w-3 h-3" /> Universal Media Converter
            </div>
          </div>
        </div>

        {/* Platform Quick Bar (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10">
          <a
            href="#downloader"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white/90 hover:text-white hover:bg-white/10 transition"
          >
            <Youtube className="w-4 h-4 text-red-500" /> YouTube
          </a>
          <a
            href="#downloader"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white/90 hover:text-white hover:bg-white/10 transition"
          >
            <Music className="w-4 h-4 text-cyan-400" /> TikTok
          </a>
          <a
            href="#downloader"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white/90 hover:text-white hover:bg-white/10 transition"
          >
            <Instagram className="w-4 h-4 text-pink-500" /> Instagram
          </a>
          <a
            href="#downloader"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white/90 hover:text-white hover:bg-white/10 transition"
          >
            <Facebook className="w-4 h-4 text-blue-500" /> Facebook
          </a>
          <a
            href="#downloader"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white/90 hover:text-white hover:bg-white/10 transition"
          >
            <Twitter className="w-4 h-4 text-sky-400" /> Twitter / X
          </a>
        </nav>

        {/* Deploy Badge */}
        <div className="hidden sm:flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Vercel Ready
          </span>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0c0a09] border-b border-white/10 px-4 py-4 space-y-2">
          <a
            href="#downloader"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-white hover:bg-white/10"
          >
            <Youtube className="w-5 h-5 text-red-500" /> YouTube Downloader
          </a>
          <a
            href="#downloader"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-white hover:bg-white/10"
          >
            <Music className="w-5 h-5 text-cyan-400" /> TikTok Downloader (No Watermark)
          </a>
          <a
            href="#downloader"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-white hover:bg-white/10"
          >
            <Instagram className="w-5 h-5 text-pink-500" /> Instagram Reels & Posts
          </a>
          <a
            href="#downloader"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-white hover:bg-white/10"
          >
            <Facebook className="w-5 h-5 text-blue-500" /> Facebook Watch Videos
          </a>
          <a
            href="#downloader"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-white hover:bg-white/10"
          >
            <Twitter className="w-5 h-5 text-sky-400" /> Twitter / X Media
          </a>
        </div>
      )}
    </header>
  );
}
