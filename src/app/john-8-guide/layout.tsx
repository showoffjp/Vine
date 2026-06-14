import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "John 8 Guide — I Am the Light of the World — Christian Study",
  description: "A deep study of John 8 — Jesus declares himself the light of the world, forgives the woman caught in adultery, and promises that the truth will set you free. Explore what it means to follow the eternal I AM who existed before Abraham, and discover how his light, grace, and truth can transform your life today.",
  openGraph: { title: "John 8 Guide — I Am the Light of the World — Vine", description: "Study John 8 — the woman caught in adultery, I am the light of the world, the truth that sets you free, and Jesus as the eternal I AM.", images: ["/api/og?title=John+8+Guide"] },
  twitter: { card: "summary_large_image", title: "John 8 Guide — I Am the Light of the World — Vine", description: "A deep study of John 8: forgiveness, light, truth, and the eternal I AM.", images: ["/api/og?title=John+8+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
