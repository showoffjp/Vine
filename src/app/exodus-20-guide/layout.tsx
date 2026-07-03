import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Exodus 20 Guide — The Ten Commandments",
  description: "A deep guide to Exodus 20 — the Ten Commandments and the Sinai covenant. Explore the preamble, each commandment, the moral order of God, and the purpose of the Law: not to save but to reveal the character of God and our need for grace.",
  openGraph: { title: "Exodus 20 Guide — Vine", description: "A guide to Exodus 20 — the Ten Commandments, the Sinai covenant, and the gospel behind the Law.", images: ["/api/og?title=Exodus+20+Guide"] },
  twitter: { card: "summary_large_image", title: "Exodus 20 Guide — Vine", description: "A deep guide to Exodus 20 and the Ten Commandments.", images: ["/api/og?title=Exodus+20+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
