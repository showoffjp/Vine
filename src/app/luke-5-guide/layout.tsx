import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Luke 5 Chapter Guide – Peter's Call, Healing, and New Wineskins | The Vine",
  description: "A deep guide to Luke 5 — Jesus calling Peter from the miraculous catch of fish, healing a leper and a paralytic lowered through a roof, calling Levi the tax collector, the feast with sinners, and the parable of new wine in old wineskins showing the radical newness of the kingdom.",
  openGraph: { title: "Luke 5 Chapter Guide | The Vine", description: "Luke 5 explained — Peter's call, miraculous catch of fish, healing of leper and paralytic, Levi's calling, and new wine in old wineskins.", images: ["/api/og?title=Luke+5+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 5 Chapter Guide | The Vine", description: "A guide to Luke 5 — Peter's call, healing, Levi, and the parable of new wine and old wineskins.", images: ["/api/og?title=Luke+5+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
