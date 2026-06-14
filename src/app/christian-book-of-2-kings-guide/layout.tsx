import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of 2 Kings Guide — Christian Study",
  description: "A deep guide to the Book of 2 Kings — Elijah's ascension and the rise of Elisha, the many miracles of Elisha, the fall of the northern kingdom of Israel to Assyria, the godly reforms of Hezekiah and Josiah, and the fall of Jerusalem and the Babylonian exile.",
  openGraph: { title: "Book of 2 Kings Guide — Vine", description: "A guide to 2 Kings — Elijah and Elisha, the fall of Israel, the reformers Hezekiah and Josiah, and the fall of Jerusalem.", images: ["/api/og?title=Book+of+2+Kings+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of 2 Kings Guide — Vine", description: "A deep guide to the Book of 2 Kings.", images: ["/api/og?title=Book+of+2+Kings+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
