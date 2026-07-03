import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Galatians 2 Guide — Crucified with Christ — Christian Study",
  description: "A deep study of Galatians 2 — Paul's declaration that he has been crucified with Christ and no longer lives but Christ lives in him, the bedrock doctrine of justification by faith alone and not by works of the law, and Paul's bold confrontation of Peter at Antioch when his conduct was not in step with the truth of the gospel.",
  openGraph: { title: "Galatians 2 Guide — Crucified with Christ — Vine", description: "Explore Galatians 2 and Paul's declaration that he has been crucified with Christ, justification by faith alone, and the confrontation with Peter at Antioch.", images: ["/api/og?title=Galatians+2+Guide"] },
  twitter: { card: "summary_large_image", title: "Galatians 2 Guide — Crucified with Christ — Vine", description: "A deep study of Galatians 2, justification by faith, and Paul's radical declaration that Christ now lives in him.", images: ["/api/og?title=Galatians+2+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
