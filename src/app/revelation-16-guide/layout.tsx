import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Revelation 16: The Seven Bowls and the Call to Faithful Endurance",
  description:
    "A theological study guide to Revelation 16 &mdash; the seven bowl judgments, the justice of God, the hardness of the human heart, and the finality of divine wrath poured out at the end of history.",
  openGraph: {
    title: "Revelation 16: The Seven Bowls &mdash; Vine Study Guide",
    description:
      "Explore Revelation 16 verse by verse: the seven bowls of divine wrath, repeated refusal to repent, Armageddon, and the great earthquake that shakes the nations. Academic and devotional commentary.",
    images: ["/api/og?title=Revelation+16+Study+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revelation 16: The Seven Bowls &mdash; Vine Study Guide",
    description:
      "Explore Revelation 16 verse by verse: the seven bowls of divine wrath, repeated refusal to repent, Armageddon, and the great earthquake that shakes the nations.",
    images: ["/api/og?title=Revelation+16+Study+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
