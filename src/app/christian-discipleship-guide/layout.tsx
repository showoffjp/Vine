import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Discipleship Guide — Take Up Your Cross and Follow",
  description: "A deep guide to Christian discipleship: mathetes (learner-follower), Bonhoeffer on the cost of discipleship, take up your cross daily (Luke 9:23), spiritual formation stages, mentoring, and the difference between education and transformation.",
  openGraph: {
    title: "Christian Discipleship Guide — Take Up Your Cross and Follow — Vine",
    description: "A deep guide to Christian discipleship: mathetes (learner-follower), Bonhoeffer on the cost of discipleship, take up your cross daily (Luke 9:23), spiritual formation stages, mentoring, and the difference between education and transformation.",
    images: ["/api/og?title=Christian+Discipleship+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Discipleship Guide — Take Up Your Cross and Follow — Vine",
    description: "A deep guide to Christian discipleship: mathetes (learner-follower), Bonhoeffer on the cost of discipleship, take up your cross daily (Luke 9:23), spiritual formation stages, mentoring, and the difference between education and transformation.",
    images: ["/api/og?title=Christian+Discipleship+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
