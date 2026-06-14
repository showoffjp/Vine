import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Ezra Guide — Christian Study",
  description: "A deep guide to the Book of Ezra — the decree of Cyrus, the return from exile under Zerubbabel, the rebuilding of the temple in Jerusalem amid opposition, the ministry of Ezra the scribe, and the painful renewal of the covenant in devotion to the Law of God.",
  openGraph: { title: "Book of Ezra Guide — Vine", description: "A guide to Ezra — the decree of Cyrus, the return from exile, rebuilding the temple, Ezra the scribe, and covenant renewal.", images: ["/api/og?title=Book+of+Ezra+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Ezra Guide — Vine", description: "A deep guide to the Book of Ezra.", images: ["/api/og?title=Book+of+Ezra+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
