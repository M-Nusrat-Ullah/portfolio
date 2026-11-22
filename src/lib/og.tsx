import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Shared Open Graph card. Plain ASCII text only, so the default OG font can render every glyph. */
export function renderOgImage({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0f0f12",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#c4b5fd", fontSize: 30, fontWeight: 600 }}>{eyebrow}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: "#fafafa", fontSize: 76, fontWeight: 800, lineHeight: 1.1 }}>
            {title}
          </div>
          <div style={{ display: "flex", color: "#a1a1aa", fontSize: 36, marginTop: 24, lineHeight: 1.3 }}>
            {subtitle}
          </div>
        </div>
        <div style={{ display: "flex", color: "#a1a1aa", fontSize: 26 }}>
          M Nusrat Ullah · nusrat-ullah.vercel.app
        </div>
      </div>
    ),
    ogSize
  );
}
