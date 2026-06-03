import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Habit Tracker",
  description: "Build spiritual disciplines one day at a time.",
  openGraph: {
    title: "Habit Tracker — Vine",
    description: "Build spiritual disciplines one day at a time.",
    images: ["/api/og?title=Habit+Tracker"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Habit Tracker — Vine",
    description: "Build spiritual disciplines one day at a time.",
    images: ["/api/og?title=Habit+Tracker"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
