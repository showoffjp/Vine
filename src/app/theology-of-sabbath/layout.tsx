import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of the Sabbath",
  description: "In a world that never stops, one day in seven is an act of defiance and trust. Sabbath is not legalism — it is the rhythm God wove into creation and the rest that Christ fulfills and invites.",
  openGraph: {
    title: "Theology of the Sabbath — Vine",
    description: "In a world that never stops, one day in seven is an act of defiance and trust. Sabbath is not legalism — it is the rhythm God wove into creation and the rest that Christ fulfills and invites.",
    images: ["/api/og?title=Theology+of+the+Sabbath"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theology of the Sabbath — Vine",
    description: "In a world that never stops, one day in seven is an act of defiance and trust. Sabbath is not legalism — it is the rhythm God wove into creation and the rest that Christ fulfills and invites.",
    images: ["/api/og?title=Theology+of+the+Sabbath"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
