import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "2 Peter 3: The Day of the Lord, God's Patience, and Holy Living | Vine",
  description:
    "A comprehensive chapter guide to 2 Peter 3 -- scoffers who deny the parousia, God's makrothumia as the meaning of the delay, the Day of the Lord coming like a thief, the dissolution of the stoicheia, and the call to grow in grace and epignosis of Jesus Christ.",
  openGraph: {
    title: "2 Peter 3: The Day of the Lord, God's Patience, and Holy Living | Vine",
    description: "A deep guide to 2 Peter 3 -- eschatology, God's patience, and holy living in light of eternity.",
    images: ["/api/og?title=2+Peter+3+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "2 Peter 3: The Day of the Lord | Vine",
    description: "A guide to 2 Peter 3 -- the Day of the Lord, God's patience, and growing in grace.",
    images: ["/api/og?title=2+Peter+3+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
