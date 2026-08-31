"use client";

import React from "react";
import { Zap, ShieldCheck, Music, Video, Layers, Smartphone } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Ultra-Fast Processing",
    desc: "Instant serverless media extraction and high-speed streaming directly to your laptop or phone.",
  },
  {
    icon: Video,
    title: "No Watermark TikTok Downloads",
    desc: "Download clean TikTok HD videos without any watermark overlays or compression degradation.",
  },
  {
    icon: Music,
    title: "320kbps Audio Converter",
    desc: "Convert YouTube, TikTok, and Reels directly into high-fidelity MP3 or M4A audio files.",
  },
  {
    icon: Layers,
    title: "All Social Media Supported",
    desc: "One universal downloader for YouTube, TikTok, Instagram, Facebook Watch, and Twitter / X.",
  },
  {
    icon: ShieldCheck,
    title: "100% Private & Secure",
    desc: "No registration, no tracking, and no logs. Downloads stream safely directly to your local device.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Desktop Optimized",
    desc: "Works seamlessly on all browsers, Windows, macOS, Android, and iOS devices.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Why Use Omni Downloader?
        </h2>
        <p className="text-stone-400 text-sm sm:text-base max-w-lg mx-auto">
          The ultimate multi-platform media downloader engineered for maximum speed, privacy, and quality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-stone-900/60 border border-white/10 hover:border-[#c5a880]/40 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#c5a880]/10 border border-[#c5a880]/20 flex items-center justify-center text-[#c5a880] mb-4 group-hover:scale-110 transition">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
