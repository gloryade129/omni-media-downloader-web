import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get("url");
  const format = searchParams.get("format") || "mp4";
  const title = searchParams.get("title") || "download";

  if (!targetUrl) {
    return NextResponse.json({ error: "Missing URL parameter" }, { status: 400 });
  }

  const filename = `${title.replace(/[^a-zA-Z0-9_\- ]/g, "").trim() || "media"}.${format}`;
  
  return NextResponse.json({
    success: true,
    message: "Starting download stream...",
    filename,
    downloadUrl: targetUrl,
  });
}
