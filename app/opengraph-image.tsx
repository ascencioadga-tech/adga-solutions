import { ImageResponse } from "next/og";

// Required for file-based metadata image routes under `output: "export"`.
export const dynamic = "force-static";

export const alt =
  "ADGA Solutions — Tailor made software solutions for produce distribution businesses.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#faf9f6",
          padding: "80px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* Top: mark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <svg width="78" height="78" viewBox="0 0 200 200">
            <path d="M 30 120 A 70 70 0 0 1 170 120 Z" fill="#3a4622" />
            <rect x="14" y="134" width="172" height="8" fill="#3a4622" />
            <rect
              x="40"
              y="158"
              width="120"
              height="4"
              fill="#3a4622"
              opacity="0.45"
            />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: "44px",
              color: "#3a4622",
              letterSpacing: "-0.01em",
            }}
          >
            ADGA Solutions
          </div>
        </div>

        {/* Middle: tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: "82px",
              fontStyle: "italic",
              color: "#5b6b3a",
              lineHeight: 1.05,
            }}
          >
            Tailor made
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "82px",
              color: "#1a1f14",
              lineHeight: 1.1,
              maxWidth: "1000px",
            }}
          >
            software for produce distribution.
          </div>
        </div>

        {/* Bottom: label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: "26px",
            color: "#5b6b3a",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "56px",
              height: "2px",
              backgroundColor: "#5b6b3a",
            }}
          />
          <div
            style={{
              display: "flex",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
            }}
          >
            Custom software · Nogales
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
