import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "John 9 Chapter Guide – Man Born Blind, Spiritual Sight | The Vine",
  description: "A deep guide to John 9 — the healing of the man born blind, Jesus answering who sinned, making mud and sending him to the pool of Siloam, the Pharisees’ interrogation, the man’s growing faith from ‘a man called Jesus’ to ‘Lord, I believe,’ and Jesus revealing himself as the Light of the World while exposing the blindness of religious pride.",
  openGraph: { title: "John 9 Chapter Guide – The Man Born Blind | The Vine", description: "John 9 — the healing of the man born blind, the pool of Siloam, the Pharisees’ interrogation, and spiritual sight.", images: ["/api/og?title=John+9+Guide"] },
  twitter: { card: "summary_large_image", title: "John 9 Chapter Guide | The Vine", description: "A deep guide to John 9 — the man born blind and the nature of spiritual sight.", images: ["/api/og?title=John+9+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
