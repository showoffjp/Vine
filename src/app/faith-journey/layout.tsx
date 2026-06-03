import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your story with God.",
  description: "Mark the moments that shaped your faith. Conversions, trials, breakthroughs, callings — every milestone is evidence of God's faithfulness.",
  openGraph: {
    title: "Your story with God. — Vine",
    description: "Mark the moments that shaped your faith. Conversions, trials, breakthroughs, callings — every milestone is evidence of God's faithfulness.",
    images: ["/api/og?title=Your+story+with+God."],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your story with God. — Vine",
    description: "Mark the moments that shaped your faith. Conversions, trials, breakthroughs, callings — every milestone is evidence of God's faithfulness.",
    images: ["/api/og?title=Your+story+with+God."],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
