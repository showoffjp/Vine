import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caring for Aging Parents",
  description: "Honor your father and your mother does not expire when you turn 18. From the cross, Jesus ensured his mother's care. Caring for aging parents is not a distraction from discipleship — it is disciple…",
  openGraph: {
    title: "Caring for Aging Parents — Vine",
    description: "Honor your father and your mother does not expire when you turn 18. From the cross, Jesus ensured his mother's care. Caring for aging parents is not a distraction from discipleship — it is disciple…",
    images: ["/api/og?title=Caring+for+Aging+Parents"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caring for Aging Parents — Vine",
    description: "Honor your father and your mother does not expire when you turn 18. From the cross, Jesus ensured his mother's care. Caring for aging parents is not a distraction from discipleship — it is disciple…",
    images: ["/api/og?title=Caring+for+Aging+Parents"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
