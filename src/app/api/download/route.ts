import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get("url");
  const format = (searchParams.get("format") || "mp4").toLowerCase();
  const rawTitle = searchParams.get("title") || "media_download";

  if (!targetUrl) {
    return NextResponse.json({ error: "Missing URL parameter" }, { status: 400 });
  }

  const cleanTitle = rawTitle.replace(/[^a-zA-Z0-9_\- ]/g, "").trim() || "media";
  const filename = `${cleanTitle}.${format}`;

  // If targetUrl is a direct media file URL (ends in .mp4, .mp3, or comes from media CDN)
  if (
    targetUrl.includes(".mp4") ||
    targetUrl.includes(".mp3") ||
    targetUrl.includes("tikwm.com") ||
    targetUrl.includes("googlevideo.com") ||
    targetUrl.includes("cdn")
  ) {
    try {
      const mediaRes = await fetch(targetUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        },
      });

      if (mediaRes.ok && mediaRes.body) {
        const contentType = format === "mp3" ? "audio/mpeg" : format === "m4a" ? "audio/mp4" : "video/mp4";
        const headers = new Headers();
        headers.set("Content-Type", contentType);
        headers.set("Content-Disposition", `attachment; filename="${encodeURIComponent(filename)}"`);

        return new NextResponse(mediaRes.body as any, {
          status: 200,
          headers,
        });
      }
    } catch (e) {
      console.error("Media stream proxy error:", e);
    }
  }

  // If targetUrl is a YouTube URL, redirect to y2mate converter link for instant 1-click video/audio download
  const ytMatch = targetUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  if (ytMatch && ytMatch[1]) {
    const videoId = ytMatch[1];
    return NextResponse.redirect(`https://www.y2mate.com/youtube/${videoId}`);
  }

  // Default HTTP 302 redirect fallback
  return NextResponse.redirect(targetUrl);
}
