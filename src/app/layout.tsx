import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omni Downloader - Multi-Platform Video & Audio Downloader",
  description: "Download YouTube, TikTok, Instagram, Facebook, and Twitter/X videos & MP3 audio effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0c0a09] text-white antialiased selection:bg-[#c5a880] selection:text-stone-950">
        {children}
      </body>
    </html>
  );
}
