import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Romans 4 Guide — Abraham Believed God — Christian Study",
  description: "A deep guide to Romans 4 — Paul's argument that Abraham was justified by faith before circumcision and centuries before the Law, showing that justification has always been by faith alone through grace. Explore Abraham as the father of all who believe, the meaning of righteousness credited by faith, hoping against hope, and how the resurrection of Jesus grounds the justification of all believers.",
  openGraph: { title: "Romans 4 Guide — Abraham Believed God — Vine", description: "A guide to Romans 4 — Abraham's faith, justification apart from works, hoping against hope, and the promise guaranteed by grace.", images: ["/api/og?title=Romans+4+Guide"] },
  twitter: { card: "summary_large_image", title: "Romans 4 Guide — Abraham Believed God — Vine", description: "A deep guide to Romans 4 — justification by faith, Abraham as father of all who believe, and hope against hope.", images: ["/api/og?title=Romans+4+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
