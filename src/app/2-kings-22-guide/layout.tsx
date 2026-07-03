import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "2 Kings 22 Chapter Guide – Josiah and the Book of the Law | The Vine",
  description: "A deep guide to 2 Kings 22 — Josiah repairs the temple, Hilkiah finds the lost Book of the Law, Josiah tears his robes in repentance, and Huldah the prophetess delivers God's word of judgment and mercy.",
  openGraph: { title: "2 Kings 22 Chapter Guide – Josiah and the Book of the Law | The Vine", description: "2 Kings 22: Josiah repairs the Temple, Hilkiah finds the lost Book of the Law, the king tears his robes in grief, and Huldah prophesies.", images: ["/api/og?title=2+Kings+22+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Kings 22 Chapter Guide | The Vine", description: "A deep guide to 2 Kings 22 — Josiah, the Book of the Law, and Huldah the prophetess.", images: ["/api/og?title=2+Kings+22+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
