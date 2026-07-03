import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Christian Guide to Job Loss",
  description: "Losing a job as a Christian — the theology of work and vocation, why job loss feels like identity loss, what the Bible says about provision and anxiety, lamenting unemployment, finding meaning in the waiting, and trusting God in financial uncertainty.",
  openGraph: { title: "Christian Job Loss Guide — Vine", description: "Losing a job as a Christian — theology of work, identity, provision, and trusting God in uncertainty.", images: ["/api/og?title=Christian+Job+Loss+Guide"] },
  twitter: { card: "summary_large_image", title: "Christian Job Loss Guide — Vine", description: "Job loss and the Christian faith — theology, identity, and provision.", images: ["/api/og?title=Christian+Job+Loss+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
