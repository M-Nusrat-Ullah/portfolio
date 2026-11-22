import { renderOgImage, ogSize } from "@/lib/og";
import { caseStudies, getCaseStudy } from "@/data/case-studies";

export const alt = "Case study by M Nusrat Ullah";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  return renderOgImage({
    eyebrow: "Case study",
    title: study?.title ?? "Case study",
    subtitle: (study?.subtitle ?? "").replace(/′/g, "'"),
  });
}
