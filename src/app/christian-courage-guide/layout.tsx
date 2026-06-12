import type { Metadata } from "next";

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
