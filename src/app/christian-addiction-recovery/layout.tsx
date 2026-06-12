import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Addiction Recovery Guide",
  description: "Christian addiction recovery — the theology of enslavement in Romans 7, Celebrate Recovery vs AA, the 12 steps through a Christian lens, community and accountability, the neuroscience of addiction and grace, sobriety as spiritual warfare.",
  openGraph: {
    title: "Christian Addiction Recovery Guide — Vine",
    description: "Christian addiction recovery — the theology of enslavement in Romans 7, Celebrate Recovery vs AA, the 12 steps through a Christian lens, community and accountability, the neuroscience of addiction and grace, sobriety as spiritual warfare.",
    images: ["/api/og?title=Christian+Addiction+Recovery+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Addiction Recovery Guide — Vine",
    description: "Christian addiction recovery — the theology of enslavement in Romans 7, Celebrate Recovery vs AA, the 12 steps through a Christian lens, community and accountability, the neuroscience of addiction and grace, sobriety as spiritual warfare.",
    images: ["/api/og?title=Christian+Addiction+Recovery+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
