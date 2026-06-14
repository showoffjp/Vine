import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Micah Guide — Christian Study",
  description: "A deep guide to the Book of Micah — the prophet of Moresheth, judgment on Samaria and Jerusalem, the rebuke of corrupt leaders, the promise of a ruler from Bethlehem fulfilled in Christ, the call to do justice and love mercy, and the incomparable pardoning love of God.",
  openGraph: { title: "Book of Micah Guide — Vine", description: "A guide to Micah — coming judgment, corrupt leaders, the ruler from Bethlehem, what the Lord requires, and the God who pardons.", images: ["/api/og?title=Book+of+Micah+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Micah Guide — Vine", description: "A deep guide to the Book of Micah.", images: ["/api/og?title=Book+of+Micah+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
