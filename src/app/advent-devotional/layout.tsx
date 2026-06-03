import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advent: Waiting With the Church",
  description: "Advent is not early Christmas. It is the church's season of expectant waiting — for the first coming remembered, and the second coming anticipated. Four weeks of preparation, repentance, and joy.",
  openGraph: {
    title: "Advent: Waiting With the Church — Vine",
    description: "Advent is not early Christmas. It is the church's season of expectant waiting — for the first coming remembered, and the second coming anticipated. Four weeks of preparation, repentance, and joy.",
    images: ["/api/og?title=Advent%3A+Waiting+With+the+Church"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advent: Waiting With the Church — Vine",
    description: "Advent is not early Christmas. It is the church's season of expectant waiting — for the first coming remembered, and the second coming anticipated. Four weeks of preparation, repentance, and joy.",
    images: ["/api/og?title=Advent%3A+Waiting+With+the+Church"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
