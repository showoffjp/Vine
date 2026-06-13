import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Guide to Self-Control",
  description: "Self-control and the Christian faith - the fruit of the Spirit, mastering the passions, self-control over the tongue, appetite, and anger, the role of spiritual disciplines, and the freedom that comes from godly self-mastery.",
  openGraph: { title: "Christian Guide to Self-Control - Vine", description: "Self-control - the fruit of the Spirit, mastering the passions, the role of spiritual disciplines, and godly self-mastery.", images: ["/api/og?title=Christian+Self-Control"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Self-Control - Vine", description: "Self-control and the Christian faith.", images: ["/api/og?title=Christian+Self-Control"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
