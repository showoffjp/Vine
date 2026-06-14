import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mark 16 Guide — Go Into All the World — Christian Study",
  description: "A deep study of Mark 16 — the resurrection of Jesus Christ on the first day of the week, the women at the empty tomb, the angelic announcement that he has risen, the Great Commission to go into all the world and proclaim the gospel to the whole creation, the signs that accompany those who believe, and the ascension of the risen Lord. Explore what the resurrection means for Christian faith and mission today.",
  openGraph: { title: "Mark 16 Guide — Go Into All the World — Vine", description: "A guide to Mark 16 — the resurrection of Jesus, the empty tomb, the Great Commission, and signs following.", images: ["/api/og?title=Mark+16+Guide"] },
  twitter: { card: "summary_large_image", title: "Mark 16 Guide — Go Into All the World — Vine", description: "A deep study of Mark 16 and the resurrection commission of Jesus Christ.", images: ["/api/og?title=Mark+16+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
