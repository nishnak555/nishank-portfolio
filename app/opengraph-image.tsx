import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} - ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#fbfbf8", color: "#14140f" }}>
        <div style={{ fontSize: 28, letterSpacing: 4, color: "#6b6a62", textTransform: "uppercase" }}>Web · Design · AI agents</div>
        <div style={{ fontSize: 92, fontWeight: 700, marginTop: 24, lineHeight: 1.05 }}>Ideas worth shipping.</div>
        <div style={{ fontSize: 92, fontWeight: 700, color: "#4f46e5", lineHeight: 1.05 }}>Let&apos;s build.</div>
        <div style={{ fontSize: 36, marginTop: 48 }}>{site.name}</div>
      </div>
    ),
    size,
  );
}
