import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Luke 4 Guide — The Spirit of the Lord Is Upon Me — Christian Study",
  description: "A deep guide to Luke 4 — Jesus overcomes Satan's three temptations in the Judean wilderness, declares his Spirit-anointed mission by reading Isaiah 61 in the Nazareth synagogue, faces rejection by his hometown, and demonstrates his divine authority over unclean spirits and sickness in Capernaum.",
  openGraph: { title: "Luke 4 Guide — The Spirit of the Lord Is Upon Me — Vine", description: "Guide to Luke 4: Jesus tempted in the wilderness, anointed to proclaim liberty, rejected at Nazareth, and teaching with authority in Capernaum.", images: ["/api/og?title=Luke+4+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 4 Guide — The Spirit of the Lord Is Upon Me — Vine", description: "A deep guide to Luke 4 and Jesus' temptation and his declaration of his anointed mission.", images: ["/api/og?title=Luke+4+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
