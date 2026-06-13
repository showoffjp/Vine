import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Jonah Guide - Christian Study",
  description: "A deep guide to the Book of Jonah - the reluctant prophet who fled from God, the storm and the great fish, the repentance of Nineveh, Jonahs anger at Gods mercy, and the question of Gods compassion for all peoples. A story about the scandal of grace.",
  openGraph: { title: "Book of Jonah Guide - Vine", description: "A guide to Jonah - the reluctant prophet, the great fish, the repentance of Nineveh, and the scandal of Gods mercy.", images: ["/api/og?title=Jonah+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Jonah Guide - Vine", description: "A deep guide to the Book of Jonah.", images: ["/api/og?title=Jonah+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
