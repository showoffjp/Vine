import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Matthew 4 Chapter Guide – Temptation of Jesus, Kingdom Proclamation | The Vine",
  description: "A deep guide to Matthew 4 — Jesus tempted forty days in the wilderness, his proclamation of the kingdom of heaven in Galilee, the calling of Simon, Andrew, James and John, and his healing ministry throughout the region.",
  openGraph: { title: "Matthew 4 Chapter Guide – The Vine", description: "Jesus tempted forty days in the wilderness, proclaims the kingdom of heaven, and calls his first disciples.", images: ["/api/og?title=Matthew+4+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 4 Chapter Guide – The Vine", description: "A deep guide to Matthew 4 — temptation, kingdom, and the calling of the first disciples.", images: ["/api/og?title=Matthew+4+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
