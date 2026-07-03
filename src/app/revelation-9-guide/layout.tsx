import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Revelation 9: The Fifth and Sixth Trumpets -- Locusts from the Abyss and the Army of 200 Million | Vine",
  description:
    "A comprehensive study guide to Revelation 9 -- the fifth trumpet unleashes demonic locusts from the Abyss to torment the unsealed for five months, and the sixth trumpet releases four angels and an army of 200 million. Despite catastrophic judgment, mankind does not repent.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
