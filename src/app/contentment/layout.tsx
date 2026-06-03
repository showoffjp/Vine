import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Practice of Contentment",
  description: "Contentment is not a mood — it is a learned discipline. Paul says he learned it through both poverty and abundance. The secret is not different circumstances but a different orientation of soul.",
  openGraph: {
    title: "The Practice of Contentment — Vine",
    description: "Contentment is not a mood — it is a learned discipline. Paul says he learned it through both poverty and abundance. The secret is not different circumstances but a different orientation of soul.",
    images: ["/api/og?title=The+Practice+of+Contentment"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Practice of Contentment — Vine",
    description: "Contentment is not a mood — it is a learned discipline. Paul says he learned it through both poverty and abundance. The secret is not different circumstances but a different orientation of soul.",
    images: ["/api/og?title=The+Practice+of+Contentment"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
