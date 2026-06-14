import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Luke 2 Guide — The Birth of Jesus — Christian Study",
  description: "A deep guide to Luke 2 — the birth of Jesus in Bethlehem, the angels' proclamation to the shepherds in the fields, Simeon's Nunc Dimittis and his prophecy in the Temple, Anna the prophetess, and the boy Jesus found among the teachers. Explore the nativity narrative, the good news of great joy for all people, and the light of salvation prepared for the Gentiles and glory for Israel.",
  openGraph: { title: "Luke 2 Guide — The Birth of Jesus — Vine", description: "A guide to Luke 2 — the nativity, angels and shepherds, Simeon's song, Anna's witness, and the boy Jesus in the Temple.", images: ["/api/og?title=Luke+2+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 2 Guide — The Birth of Jesus — Vine", description: "A deep guide to Luke 2 — the nativity, shepherds, Simeon's Nunc Dimittis, and the boy Jesus in the Temple.", images: ["/api/og?title=Luke+2+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
