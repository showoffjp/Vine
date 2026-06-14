import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ruth 1 Guide — Naomi, Ruth, and Covenant Loyalty",
  description: "A deep guide to Ruth 1 — Elimelech and Naomi in Moab, the deaths of Mahlon and Chilion, Naomi urging her daughters-in-law to return home, Ruth's unforgettable pledge of loyalty, and Naomi returning to Bethlehem in bitterness, yet held by the providence of God.",
  openGraph: { title: "Ruth 1 Guide — Vine", description: "A guide to Ruth 1 — Ruth's covenant loyalty, Naomi's bitter return, and the God who works through human loss and love.", images: ["/api/og?title=Ruth+1+Guide"] },
  twitter: { card: "summary_large_image", title: "Ruth 1 Guide — Vine", description: "A deep guide to Ruth 1 — Naomi, Ruth, and the God of hesed.", images: ["/api/og?title=Ruth+1+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
