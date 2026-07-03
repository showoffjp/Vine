import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Courage Guide — Be Strong and Courageous",
  description: "A deep guide to Christian courage — Joshua 1:9, andreia as a virtue, spiritual warfare, courage in suffering, Shadrach Meshach and Abednego, and the boldness to speak truth.",
  openGraph: {
    title: "Christian Courage Guide — Vine",
    description: "A deep guide to Christian courage — Joshua 1:9, andreia as a virtue, spiritual warfare, courage in suffering, Shadrach Meshach and Abednego, and the boldness to speak truth.",
    images: ["/api/og?title=Christian+Courage+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Courage Guide — Vine",
    description: "A deep guide to Christian courage — Joshua 1:9, andreia as a virtue, spiritual warfare, courage in suffering, Shadrach Meshach and Abednego, and the boldness to speak truth.",
    images: ["/api/og?title=Christian+Courage+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
