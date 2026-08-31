export interface MediaStream {
  id: string;
  label: string;
  quality: string;
  format: "mp4" | "mp3" | "m4a";
  size?: string;
  downloadUrl: string;
}

export interface ExtractedMedia {
  platform: "youtube" | "tiktok" | "instagram" | "facebook" | "twitter" | "unknown";
  title: string;
  uploader: string;
  thumbnail: string;
  duration?: string;
  streams: MediaStream[];
}

export function detectPlatform(url: str): "youtube" | "tiktok" | "instagram" | "facebook" | "twitter" | "unknown" {
  const u = url.toLowerCase();
  if (u.includes("youtube.com") || u.includes("youtu.be")) return "youtube";
  if (u.includes("tiktok.com")) return "tiktok";
  if (u.includes("instagram.com")) return "instagram";
  if (u.includes("facebook.com") || u.includes("fb.watch")) return "facebook";
  if (u.includes("twitter.com") || u.includes("x.com")) return "twitter";
  return "unknown";
}

export async function extractMediaInfo(url: string): Promise<ExtractedMedia> {
  const platform = detectPlatform(url);
  const cleanUrl = url.trim();

  // Simulated live metadata parsing based on platform
  if (platform === "youtube") {
    return {
      platform: "youtube",
      title: "Sample High Definition Video / Audio Track",
      uploader: "YouTube Channel",
      thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80",
      duration: "03:45",
      streams: [
        { id: "yt-1080p", label: "HD 1080p Video", quality: "1080p (60fps)", format: "mp4", size: "45.2 MB", downloadUrl: cleanUrl },
        { id: "yt-720p", label: "HD 720p Video", quality: "720p", format: "mp4", size: "22.8 MB", downloadUrl: cleanUrl },
        { id: "yt-mp3-320", label: "High Quality Audio", quality: "320 kbps", format: "mp3", size: "8.6 MB", downloadUrl: cleanUrl },
        { id: "yt-m4a", label: "AAC Audio Track", quality: "256 kbps", format: "m4a", size: "5.1 MB", downloadUrl: cleanUrl },
      ],
    };
  }

  if (platform === "tiktok") {
    return {
      platform: "tiktok",
      title: "Trending TikTok Clip (No Watermark)",
      uploader: "@creator_tiktok",
      thumbnail: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&auto=format&fit=crop&q=80",
      duration: "00:58",
      streams: [
        { id: "tt-hd-nowatermark", label: "HD Video (No Watermark)", quality: "Original HD", format: "mp4", size: "12.4 MB", downloadUrl: cleanUrl },
        { id: "tt-watermark", label: "SD Video (With Watermark)", quality: "720p", format: "mp4", size: "8.1 MB", downloadUrl: cleanUrl },
        { id: "tt-mp3", label: "TikTok Audio Sound", quality: "320 kbps", format: "mp3", size: "2.3 MB", downloadUrl: cleanUrl },
      ],
    };
  }

  if (platform === "instagram") {
    return {
      platform: "instagram",
      title: "Instagram Reel / Post Clip",
      uploader: "@insta_creator",
      thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop&q=80",
      duration: "01:15",
      streams: [
        { id: "ig-reel-hd", label: "Instagram Reel HD", quality: "1080p MP4", format: "mp4", size: "18.6 MB", downloadUrl: cleanUrl },
        { id: "ig-audio", label: "Reel Audio Track", quality: "320 kbps", format: "mp3", size: "3.2 MB", downloadUrl: cleanUrl },
      ],
    };
  }

  if (platform === "facebook") {
    return {
      platform: "facebook",
      title: "Facebook Video Stream",
      uploader: "Facebook Watch",
      thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
      duration: "04:12",
      streams: [
        { id: "fb-hd", label: "Facebook Video HD", quality: "1080p", format: "mp4", size: "38.5 MB", downloadUrl: cleanUrl },
        { id: "fb-sd", label: "Facebook Video SD", quality: "480p", format: "mp4", size: "14.2 MB", downloadUrl: cleanUrl },
        { id: "fb-audio", label: "Audio Only MP3", quality: "192 kbps", format: "mp3", size: "5.8 MB", downloadUrl: cleanUrl },
      ],
    };
  }

  if (platform === "twitter") {
    return {
      platform: "twitter",
      title: "Twitter / X Video Post",
      uploader: "@x_user",
      thumbnail: "https://images.unsplash.com/photo-1611605697805-88c4b6932400?w=800&auto=format&fit=crop&q=80",
      duration: "02:05",
      streams: [
        { id: "tw-hd", label: "Twitter Video HD", quality: "1080p MP4", format: "mp4", size: "15.7 MB", downloadUrl: cleanUrl },
        { id: "tw-audio", label: "Audio Extract", quality: "192 kbps", format: "mp3", size: "3.1 MB", downloadUrl: cleanUrl },
      ],
    };
  }

  // Fallback for general links
  return {
    platform: "unknown",
    title: "Universal Media Video / Audio Stream",
    uploader: "Web Media",
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80",
    duration: "02:30",
    streams: [
      { id: "gen-hd", label: "HD Video MP4", quality: "1080p", format: "mp4", size: "25.0 MB", downloadUrl: cleanUrl },
      { id: "gen-mp3", label: "Audio MP3", quality: "320 kbps", format: "mp3", size: "6.0 MB", downloadUrl: cleanUrl },
    ],
  };
}
