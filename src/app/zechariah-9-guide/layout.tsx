import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Zechariah 9 Chapter Guide — Christian Study",
  description: "A deep guide to Zechariah 9 — judgment against surrounding nations, the messianic prophecy of the coming King riding on a donkey fulfilled in the triumphal entry, freeing prisoners by the blood of the covenant, and God fighting for his people like a warrior.",
  openGraph: { title: "Zechariah 9 Chapter Guide — Vine", description: "A guide to Zechariah 9 — the coming King on a donkey, judgment on the nations, freeing prisoners, and God fighting for Israel.", images: ["/api/og?title=Zechariah+9+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Zechariah 9 Chapter Guide — Vine", description: "A deep guide to Zechariah 9 — the messianic King who rides on a donkey.", images: ["/api/og?title=Zechariah+9+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
