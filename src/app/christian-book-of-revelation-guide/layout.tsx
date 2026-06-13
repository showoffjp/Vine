import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Revelation Guide — Christian Study",
  description: "A deep guide to the Book of Revelation — apocalyptic genre, the four main interpretive approaches, the seven churches, the throne room and the Lamb, the seals/trumpets/bowls, the millennium debate, and the New Jerusalem. A sober, non-sensationalist reading.",
  openGraph: { title: "Book of Revelation Guide — Vine", description: "A deep guide to Revelation — apocalyptic genre, interpretive approaches, the Lamb, the millennium, and the New Jerusalem.", images: ["/api/og?title=Book+of+Revelation+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Revelation Guide — Vine", description: "A deep guide to the Book of Revelation.", images: ["/api/og?title=Book+of+Revelation+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
