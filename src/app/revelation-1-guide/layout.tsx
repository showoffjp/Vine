import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Revelation 1 Guide — The Vision of the Risen Christ and the Mandate to Write",
  description: "A deep verse-by-verse guide to Revelation 1 — the prologue and beatitude, greetings from the Trinity, John exiled on Patmos, and the overwhelming vision of the risen Christ walking among the seven golden lampstands, holding the keys of death and Hades.",
  openGraph: {
    title: "Revelation 1 Guide — The Vision of the Risen Christ | Vine",
    description: "Verse-by-verse commentary on Revelation 1: the prologue, the Trinitarian greeting, John on Patmos, and the vision of the glorified Christ with eyes like fire and voice like rushing waters.",
    images: ["/api/og?title=Revelation+1+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revelation 1 Guide — Vine",
    description: "A deep guide to Revelation 1 — the vision of the risen Christ on Patmos, the keys of death and Hades, and the seven golden lampstands.",
    images: ["/api/og?title=Revelation+1+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
