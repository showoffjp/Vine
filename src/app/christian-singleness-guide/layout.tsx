import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Singleness Guide — The Vine",
  description: "Paul called it a gift. Jesus lived it. The celibate tradition — from Anthony of Egypt to Clare of Assisi to Dietrich Bonhoeffer — has always known that singleness is not the waiting room for real life. A full theology of Christian singleness.",
  openGraph: {
    title: "Christian Singleness Guide — Vine",
    description: "Paul called it a gift. Jesus lived it. The celibate tradition — from Anthony of Egypt to Clare of Assisi to Dietrich Bonhoeffer — has always known that singleness is not the waiting room for real life. A full theology of Christian singleness.",
    images: ["/api/og?title=Christian+Singleness+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Singleness Guide — Vine",
    description: "Paul called it a gift. Jesus lived it. The celibate tradition — from Anthony of Egypt to Clare of Assisi to Dietrich Bonhoeffer — has always known that singleness is not the waiting room for real life. A full theology of Christian singleness.",
    images: ["/api/og?title=Christian+Singleness+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
