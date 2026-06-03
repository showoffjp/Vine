import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Small Group Leader Guide",
  description: "The New Testament's 'one another' commands are impossible to fulfill in a Sunday auditorium. Small groups are where the church actually happens — and leading them well is a sacred calling.",
  openGraph: {
    title: "Small Group Leader Guide — Vine",
    description: "The New Testament's 'one another' commands are impossible to fulfill in a Sunday auditorium. Small groups are where the church actually happens — and leading them well is a sacred calling.",
    images: ["/api/og?title=Small+Group+Leader+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Group Leader Guide — Vine",
    description: "The New Testament's 'one another' commands are impossible to fulfill in a Sunday auditorium. Small groups are where the church actually happens — and leading them well is a sacred calling.",
    images: ["/api/og?title=Small+Group+Leader+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
