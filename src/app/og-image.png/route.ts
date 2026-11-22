import { renderOgImage } from "@/lib/og";
import { profile } from "@/data/site";

// Served at /og-image.png and generated once at build time.
export const dynamic = "force-static";

export function GET() {
  return renderOgImage({
    eyebrow: profile.name,
    title: profile.headline,
    subtitle: profile.oneLiner,
  });
}
