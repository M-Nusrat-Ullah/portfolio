import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/case-study/case-study-view";
import { caseStudies, getCaseStudy } from "@/data/case-studies";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const title = `${study.title}: ${study.subtitle}`;
  return {
    title,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      type: "article",
      url: `/work/${study.slug}`,
      title,
      description: study.summary,
    },
    twitter: { card: "summary_large_image", title, description: study.summary },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  return <CaseStudyView study={study} />;
}
