import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Colossians Guide - Christian Study",
  description: "A deep guide to Pauls Letter to the Colossians - the supremacy of Christ, the great Christ hymn, fullness in Christ against false teaching, putting off the old self and putting on the new, and living as those raised with Christ.",
  openGraph: { title: "Book of Colossians Guide - Vine", description: "A guide to Colossians - the supremacy of Christ, the Christ hymn, fullness in Christ, and the new self.", images: ["/api/og?title=Colossians+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Colossians Guide - Vine", description: "A deep guide to the Book of Colossians.", images: ["/api/og?title=Colossians+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
