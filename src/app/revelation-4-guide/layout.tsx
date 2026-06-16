import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revelation 4 Guide — The Heavenly Throne Room and the Worship of the Creator",
  description: "A deep verse-by-verse guide to Revelation 4 — the open door into heaven, the throne of God encircled by the emerald rainbow of covenant, the twenty-four elders, the four living creatures crying Holy Holy Holy, and the creation doxology of the elders casting their crowns.",
  openGraph: {
    title: "Revelation 4 Guide — The Heavenly Throne Room | Vine",
    description: "Verse-by-verse commentary on Revelation 4: the open door, God&rsquo;s throne room, the emerald rainbow, the four living creatures, the trisagion, and the elders casting their crowns before the Creator.",
    images: ["/api/og?title=Revelation+4+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revelation 4 Guide — Vine",
    description: "A deep guide to Revelation 4 — the heavenly throne room, the four living creatures, and the ceaseless worship of the Holy, Holy, Holy God.",
    images: ["/api/og?title=Revelation+4+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
