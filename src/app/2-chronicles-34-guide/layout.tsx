import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "2 Chronicles 34 Chapter Guide — Christian Study",
  description: "A deep guide to 2 Chronicles 34 — King Josiah seeks God at sixteen, purges Judah of idolatry, repairs the Temple, discovers the lost Book of the Law, tears his robes in repentance, consults the prophetess Huldah, and leads all Judah in covenant renewal.",
  openGraph: { title: "2 Chronicles 34 Chapter Guide — Vine", description: "A guide to 2 Chronicles 34 — Josiah's great reform, the Book of the Law discovered, and covenant renewal before all Israel.", images: ["/api/og?title=2+Chronicles+34+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Chronicles 34 Chapter Guide — Vine", description: "A deep guide to 2 Chronicles 34 — Josiah discovers the Book of the Law and leads Judah in covenant renewal.", images: ["/api/og?title=2+Chronicles+34+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
