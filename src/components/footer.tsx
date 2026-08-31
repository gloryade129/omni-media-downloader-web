"use client";

import React from "react";
import { Download, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#0c0a09] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#c5a880] to-[#a48256] flex items-center justify-center text-stone-950 font-black">
            <Download className="w-5 h-5 stroke-[3]" />
          </div>
          <span className="text-base font-extrabold text-white tracking-wider">
            OMNI DOWNLOADER
          </span>
        </div>

        <p className="text-xs text-stone-500 flex items-center gap-1">
          Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Vercel Deployment • Universal Media Converter
        </p>

        <div className="flex items-center gap-4 text-xs text-stone-400">
          <a href="#downloader" className="hover:text-[#c5a880] transition">YouTube</a>
          <a href="#downloader" className="hover:text-[#c5a880] transition">TikTok</a>
          <a href="#downloader" className="hover:text-[#c5a880] transition">Instagram</a>
          <a href="#downloader" className="hover:text-[#c5a880] transition">Facebook</a>
          <a href="#downloader" className="hover:text-[#c5a880] transition">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
