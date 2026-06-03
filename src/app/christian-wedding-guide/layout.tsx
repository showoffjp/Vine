import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Wedding Guide",
  description: "A Christian wedding is not a performance of a cultural ritual — it is the founding of a covenant before God. Here is the theology, the ceremony, the premarital preparation, and the vows that make i…",
  openGraph: {
    title: "Christian Wedding Guide — Vine",
    description: "A Christian wedding is not a performance of a cultural ritual — it is the founding of a covenant before God. Here is the theology, the ceremony, the premarital preparation, and the vows that make i…",
    images: ["/api/og?title=Christian+Wedding+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Wedding Guide — Vine",
    description: "A Christian wedding is not a performance of a cultural ritual — it is the founding of a covenant before God. Here is the theology, the ceremony, the premarital preparation, and the vows that make i…",
    images: ["/api/og?title=Christian+Wedding+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
