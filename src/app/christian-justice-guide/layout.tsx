import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Justice Guide",
  description: "A biblical theology of justice — mishpat, the prophets' passion for the poor, Jesus and the marginalized, Jubilee, systemic sin, and the integration of evangelism and justice.",
  openGraph: {
    title: "Christian Justice Guide — Vine",
    description: "A biblical theology of justice — mishpat, the prophets' passion for the poor, Jesus and the marginalized, Jubilee, systemic sin, and the integration of evangelism and justice.",
    images: ["/api/og?title=Christian+Justice+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Justice Guide — Vine",
    description: "A biblical theology of justice — mishpat, the prophets' passion for the poor, Jesus and the marginalized, Jubilee, systemic sin, and the integration of evangelism and justice.",
    images: ["/api/og?title=Christian+Justice+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
