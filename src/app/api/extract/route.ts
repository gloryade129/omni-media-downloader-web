import { NextRequest, NextResponse } from "next/server";
import { extractMediaInfo } from "@/lib/extractor";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();
    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "Invalid URL provided" }, { status: 400 });
    }

    const data = await extractMediaInfo(url);
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || "Extraction failed" }, { status: 500 });
  }
}
