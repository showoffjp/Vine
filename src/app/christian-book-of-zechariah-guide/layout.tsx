import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Zechariah Guide — Christian Study",
  description: "A deep guide to the Book of Zechariah — the call to return to the Lord, the eight symbolic night visions, the crowning of Joshua the high priest and the promise of the Branch, the humble King coming on a donkey fulfilled on Palm Sunday, and the prophecies of the pierced One and the stricken Shepherd fulfilled in Christ.",
  openGraph: { title: "Book of Zechariah Guide — Vine", description: "A guide to Zechariah — the night visions, the Branch, the coming King on a donkey, and the pierced Shepherd.", images: ["/api/og?title=Book+of+Zechariah+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Zechariah Guide — Vine", description: "A deep guide to the Book of Zechariah.", images: ["/api/og?title=Book+of+Zechariah+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
