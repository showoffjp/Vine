import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rest and the Sabbath",
  description: "Rest is not laziness — it is creation ordinance, liberation from slavery, and resistance to the idolatry of productivity. The Sabbath is one of God's best gifts to his people and one of the church'…",
  openGraph: {
    title: "Rest and the Sabbath — Vine",
    description: "Rest is not laziness — it is creation ordinance, liberation from slavery, and resistance to the idolatry of productivity. The Sabbath is one of God's best gifts to his people and one of the church'…",
    images: ["/api/og?title=Rest+and+the+Sabbath"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rest and the Sabbath — Vine",
    description: "Rest is not laziness — it is creation ordinance, liberation from slavery, and resistance to the idolatry of productivity. The Sabbath is one of God's best gifts to his people and one of the church'…",
    images: ["/api/og?title=Rest+and+the+Sabbath"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
