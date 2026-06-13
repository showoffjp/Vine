import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Daniel Guide - Christian Study",
  description: "A deep guide to the Book of Daniel - faithfulness in exile, the fiery furnace and the lions den, Nebuchadnezzars dreams, the writing on the wall, the apocalyptic visions, and the Son of Man. Living faithfully under a pagan empire.",
  openGraph: { title: "Book of Daniel Guide - Vine", description: "A guide to Daniel - faithfulness in exile, the fiery furnace, the lions den, the visions, and the Son of Man.", images: ["/api/og?title=Daniel+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Daniel Guide - Vine", description: "A deep guide to the Book of Daniel.", images: ["/api/og?title=Daniel+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
