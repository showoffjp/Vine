import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "John 2 Chapter Guide – Wedding at Cana, Temple Cleansing | The Vine",
  description: "A deep guide to John 2 — Jesus turning water into wine at Cana as his first sign, his mother's faith, the cleansing of the temple in Jerusalem, and the disciples believing after his resurrection.",
  openGraph: { title: "John 2 Chapter Guide – The Vine", description: "Jesus turns water into wine at Cana, cleanses the Temple, and declares that the temple of his body will be raised in three days.", images: ["/api/og?title=John+2+Guide"] },
  twitter: { card: "summary_large_image", title: "John 2 Chapter Guide – The Vine", description: "A deep guide to John 2 — the wedding at Cana, the Temple cleansing, and signs and belief.", images: ["/api/og?title=John+2+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
