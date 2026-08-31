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

  // If targetUrl is an external stream URL, attempt to stream or proxy with Content-Disposition headers
  try {
    const mediaRes = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
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
    console.error("Direct media proxy error, falling back to 302 redirect:", e);
  }

  // Fallback: 302 Direct HTTP Redirect to the stream URL so browser opens/downloads the file
  return NextResponse.redirect(targetUrl);
}
