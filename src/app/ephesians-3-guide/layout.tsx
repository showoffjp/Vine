import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ephesians 3 Guide &mdash; The Mystery of Christ and Paul&rsquo;s Prayer",
  description: "A deep guide to Ephesians 3 &mdash; the mystery hidden for ages revealed: Gentiles are fellow heirs, the unsearchable riches of Christ, the manifold wisdom of God displayed through the church, and Paul&rsquo;s great prayer for strength and fullness.",
  openGraph: { title: "Ephesians 3 Guide &mdash; Vine", description: "Guide to Ephesians 3: the mystery of Christ, the unsearchable riches, the manifold wisdom of God, and Paul&rsquo;s prayer for the fullness of God.", images: ["/api/og?title=Ephesians+3+Guide"] },
  twitter: { card: "summary_large_image", title: "Ephesians 3 Guide &mdash; Vine", description: "A deep guide to Ephesians 3, the mystery of Christ revealed and Paul&rsquo;s most beautiful prayer.", images: ["/api/og?title=Ephesians+3+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
