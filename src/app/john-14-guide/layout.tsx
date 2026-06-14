import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "John 14 Guide — Let Not Your Hearts Be Troubled",
  description: "A deep guide to John 14 — Jesus comforting his disciples on the night he was betrayed: the many rooms in the Father's house, I am the way, the truth, and the life, whoever has seen me has seen the Father, and the promise of the Helper, the Spirit of truth.",
  openGraph: { title: "John 14 Guide — Vine", description: "A guide to John 14 — the Father's house, the way to the Father, seeing the Father in the Son, and the promise of the Helper.", images: ["/api/og?title=John+14+Guide"] },
  twitter: { card: "summary_large_image", title: "John 14 Guide — Vine", description: "A deep guide to John 14 — Let Not Your Hearts Be Troubled.", images: ["/api/og?title=John+14+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
