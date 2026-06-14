import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "John 3 Guide — Christian Study",
  description: "A deep guide to John 3 — Nicodemus coming by night, the call to be born again of water and the Spirit, the wind blowing where it wills, the Son of Man lifted up like the bronze serpent, and the love of God in John 3:16 that sent the Son to save and not to condemn the world.",
  openGraph: { title: "John 3 Guide — Vine", description: "A guide to John 3 — the new birth, the Spirit, the bronze serpent, and For God so loved the world.", images: ["/api/og?title=John+3+Guide"] },
  twitter: { card: "summary_large_image", title: "John 3 Guide — Vine", description: "A deep guide to John 3 and the new birth.", images: ["/api/og?title=John+3+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
