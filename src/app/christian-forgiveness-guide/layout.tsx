import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Forgiveness Guide",
  description: "Forgive as the Lord has forgiven you. This guide explores the biblical theology of forgiveness — aphiemi, Joseph's story, the unforgiving servant, forgiveness vs. reconciliation, forgiving yourself, and forgiveness as healing.",
  openGraph: {
    title: "Christian Forgiveness Guide — Vine",
    description: "Forgive as the Lord has forgiven you. This guide explores the biblical theology of forgiveness — aphiemi, Joseph's story, the unforgiving servant, forgiveness vs. reconciliation, forgiving yourself, and forgiveness as healing.",
    images: ["/api/og?title=Christian+Forgiveness+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Forgiveness Guide — Vine",
    description: "Forgive as the Lord has forgiven you. This guide explores the biblical theology of forgiveness — aphiemi, Joseph's story, the unforgiving servant, forgiveness vs. reconciliation, forgiving yourself, and forgiveness as healing.",
    images: ["/api/og?title=Christian+Forgiveness+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
