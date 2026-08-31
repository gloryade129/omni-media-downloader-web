"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { CoverFlowCarousel } from "@/components/ui/3-d-coverflow-carousel";
import { DownloaderCard } from "@/components/downloader-card";
import { FeaturesGrid } from "@/components/features-grid";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0a09] text-white flex flex-col justify-between">
      <div>
        <Navbar />

        {/* 3D Coverflow Carousel Category Showcase */}
        <section className="pt-4">
          <CoverFlowCarousel
            sectionLabel="SUPPORTED MEDIA PLATFORMS"
            onCtaClick={(item) => {
              const element = document.getElementById("downloader");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </section>

        {/* Main Downloader Box */}
        <DownloaderCard />

        {/* Features Matrix */}
        <FeaturesGrid />
      </div>

      <Footer />
    </main>
  );
}
