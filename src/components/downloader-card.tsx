"use client";

import React, { useState } from "react";
import { Search, Clipboard, Sparkles, Download, CheckCircle2, Youtube, Music, Instagram, Facebook, Twitter, Film } from "lucide-react";
import { detectPlatform, ExtractedMedia } from "@/lib/extractor";

export function DownloaderCard() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ExtractedMedia | null>(null);
  const [error, setError] = useState<string | null>(null);

  const platform = detectPlatform(url);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text);
        setError(null);
      }
    } catch {
      setError("Please paste the link manually into the input box.");
    }
  };

  const handleExtract = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!url.trim()) {
      setError("Please enter or paste a video link first.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/extract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (data.success) {
        setResult(data.data);
      } else {
        setError(data.error || "Could not parse video metadata.");
      }
    } catch (err: any) {
      setError("Network error while processing link.");
    } finally {
      setLoading(false);
    }
  };

  const renderPlatformBadge = () => {
    switch (platform) {
      case "youtube":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/20 text-red-400 border border-red-500/30">
            <Youtube className="w-3.5 h-3.5" /> YouTube Detected
          </span>
        );
      case "tiktok":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            <Music className="w-3.5 h-3.5" /> TikTok (No Watermark)
          </span>
        );
      case "instagram":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/20 text-pink-300 border border-pink-500/30">
            <Instagram className="w-3.5 h-3.5" /> Instagram Reel
          </span>
        );
      case "facebook":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
            <Facebook className="w-3.5 h-3.5" /> Facebook Watch
          </span>
        );
      case "twitter":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
            <Twitter className="w-3.5 h-3.5" /> Twitter / X Media
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="downloader" className="relative w-full max-w-4xl mx-auto px-4 py-8">
      {/* Downloader Card Container */}
      <div className="relative rounded-3xl bg-stone-900/80 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
        {/* Card Header */}
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#c5a880] uppercase bg-[#c5a880]/10 border border-[#c5a880]/20">
            <Sparkles className="w-4 h-4" /> Multi-Platform Downloader
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Download Any Video or Audio
          </h1>
          <p className="text-sm sm:text-base text-stone-400 max-w-xl mx-auto">
            Paste your YouTube, TikTok, Instagram, Facebook, or Twitter/X link below to extract HD MP4 video or MP3 audio instantly.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleExtract} className="space-y-4">
          <div className="relative flex items-center">
            <div className="absolute left-4 text-stone-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setError(null);
              }}
              placeholder="Paste video URL here (e.g. YouTube, TikTok, Instagram, Facebook...)"
              className="w-full pl-12 pr-28 py-4 bg-stone-950/90 border border-white/15 rounded-2xl text-white placeholder-stone-500 text-sm sm:text-base focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition shadow-inner"
            />
            <button
              type="button"
              onClick={handlePaste}
              className="absolute right-3 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white/90 text-xs font-semibold rounded-xl transition flex items-center gap-1.5"
            >
              <Clipboard className="w-3.5 h-3.5" /> Paste
            </button>
          </div>

          {/* Platform Auto-Detection Indicator */}
          {url.trim() && (
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                {renderPlatformBadge() || (
                  <span className="text-xs text-stone-400 flex items-center gap-1">
                    <Film className="w-3.5 h-3.5" /> Auto-Detecting Platform...
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setUrl("")}
                className="text-xs text-stone-400 hover:text-white underline"
              >
                Clear Input
              </button>
            </div>
          )}

          {error && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium">
              ⚠️ {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl font-black text-sm tracking-wider uppercase bg-gradient-to-r from-[#c5a880] to-[#a48256] text-stone-950 hover:brightness-110 active:scale-[0.99] transition shadow-lg shadow-[#c5a880]/20 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-stone-950 border-t-transparent rounded-full animate-spin" />
                Parsing Media Link...
              </>
            ) : (
              <>
                <Download className="w-5 h-5" /> Download Media Now
              </>
            )}
          </button>
        </form>

        {/* Results Showcase */}
        {result && (
          <div className="mt-8 pt-8 border-t border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-4 rounded-2xl bg-white/5 border border-white/10">
              <img
                src={result.thumbnail}
                alt={result.title}
                className="w-40 h-28 object-cover rounded-xl border border-white/10 shadow-md"
              />
              <div className="space-y-1.5 text-center sm:text-left flex-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#c5a880]/20 text-[#c5a880]">
                  {result.platform}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">{result.title}</h3>
                <p className="text-xs text-stone-400">By {result.uploader} • Duration: {result.duration}</p>
              </div>
            </div>

            {/* Stream Options */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#c5a880]">Available Downloads</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {result.streams.map((stream) => (
                  <div
                    key={stream.id}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-stone-950 border border-white/10 hover:border-[#c5a880]/40 transition group"
                  >
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-[#c5a880] transition">
                        {stream.label}
                      </div>
                      <div className="text-xs text-stone-400">
                        {stream.quality} • {stream.size || "Original Size"}
                      </div>
                    </div>
                    <a
                      href={`/api/download?url=${encodeURIComponent(stream.downloadUrl)}&format=${stream.format}&title=${encodeURIComponent(result.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#c5a880]/15 hover:bg-[#c5a880] text-[#c5a880] hover:text-stone-950 text-xs font-bold transition flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" /> Download {stream.format.toUpperCase()}
                    </a>

                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
