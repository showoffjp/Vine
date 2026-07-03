import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Sexual Ethics Guide",
  description: "A biblical theology of the body, sex as covenant sign, chastity as positive virtue, pastoral care for sexual sin, celibacy as spiritual gift, and same-sex attraction — theologically grounded and pastorally honest.",
  openGraph: {
    title: "Christian Sexual Ethics Guide — Vine",
    description: "A biblical theology of the body, sex as covenant sign, chastity as positive virtue, pastoral care for sexual sin, celibacy as spiritual gift, and same-sex attraction — theologically grounded and pastorally honest.",
    images: ["/api/og?title=Christian+Sexual+Ethics+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Sexual Ethics Guide — Vine",
    description: "A biblical theology of the body, sex as covenant sign, chastity as positive virtue, pastoral care for sexual sin, celibacy as spiritual gift, and same-sex attraction — theologically grounded and pastorally honest.",
    images: ["/api/og?title=Christian+Sexual+Ethics+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
