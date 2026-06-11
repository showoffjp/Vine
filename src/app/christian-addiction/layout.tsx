import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Addiction & the Christian | Vine",
  description: "A theological and practical guide to addiction as broken worship, brain science and grace, Celebrate Recovery, community and accountability, relapse and forgiveness, and supporting addicted loved ones.",
  openGraph: {
    title: "Addiction & the Christian | Vine",
    description: "A theological and practical guide to addiction as broken worship, brain science and grace, Celebrate Recovery, community and accountability, relapse and forgiveness, and supporting addicted loved ones.",
    images: ["/api/og?title=Addiction+%26+the+Christian"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Addiction & the Christian | Vine",
    description: "A theological and practical guide to addiction as broken worship, brain science and grace, Celebrate Recovery, community and accountability, relapse and forgiveness, and supporting addicted loved ones.",
    images: ["/api/og?title=Addiction+%26+the+Christian"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
