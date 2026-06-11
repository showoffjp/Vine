import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freedom from Pornography | Vine",
  description: "Gospel-centered guidance for breaking free from pornography — the theology of sexual brokenness, brain science of addiction, identity in Christ, accountability, and the church's response.",
  openGraph: {
    title: "Freedom from Pornography | Vine",
    description: "Gospel-centered guidance for breaking free from pornography — the theology of sexual brokenness, brain science of addiction, identity in Christ, accountability, and the church's response.",
    images: ["/api/og?title=Freedom+from+Pornography"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freedom from Pornography | Vine",
    description: "Gospel-centered guidance for breaking free from pornography — the theology of sexual brokenness, brain science of addiction, identity in Christ, accountability, and the church's response.",
    images: ["/api/og?title=Freedom+from+Pornography"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
