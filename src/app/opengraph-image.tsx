import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "M Nusrat Ullah — Software Engineer | AI/ML & MLOps";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
          fontFamily: "system-ui, sans-serif",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#a78bfa",
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          {"<Nusrat Ullah />"}
        </div>
        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: 80,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: 20,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          M Nusrat Ullah
        </div>
        <div
          style={{
            display: "flex",
            color: "#a78bfa",
            fontSize: 36,
            fontWeight: 600,
            marginBottom: 24,
          }}
        >
          Software Engineer · AI/ML · MLOps
        </div>
        <div
          style={{
            display: "flex",
            color: "#9ca3af",
            fontSize: 24,
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Building production RAG, LLM, and Kubernetes systems
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 60,
            color: "#6b7280",
            fontSize: 22,
            gap: 20,
          }}
        >
          <span>github.com/M-Nusrat-Ullah</span>
          <span style={{ color: "#a78bfa" }}>·</span>
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>
    ),
    { ...size }
  );
}