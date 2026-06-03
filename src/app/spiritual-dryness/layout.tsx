import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Dryness",
  description: "'My God, my God, why have you forsaken me?' David said it. Jesus quoted it from the cross. The absence of felt nearness to God is not evidence of divine absence — it is one of the oldest experience…",
  openGraph: {
    title: "Spiritual Dryness — Vine",
    description: "'My God, my God, why have you forsaken me?' David said it. Jesus quoted it from the cross. The absence of felt nearness to God is not evidence of divine absence — it is one of the oldest experience…",
    images: ["/api/og?title=Spiritual+Dryness"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiritual Dryness — Vine",
    description: "'My God, my God, why have you forsaken me?' David said it. Jesus quoted it from the cross. The absence of felt nearness to God is not evidence of divine absence — it is one of the oldest experience…",
    images: ["/api/og?title=Spiritual+Dryness"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
