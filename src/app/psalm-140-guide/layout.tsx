import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 140 Study Guide -- Deliver Me, O LORD, from Evil Men",
  description: "Verse-by-verse study of Psalm 140 -- David's prayer against the violent and the venom-tongued: evil speech as warfare, God the covering of the head in battle, vengeance handed to God, and the certainty that the LORD maintains the cause of the afflicted.",
  openGraph: {
    title: "Psalm 140 Study Guide -- Deliver Me, O LORD, from Evil Men",
    description: "Deep dive into Psalm 140: serpent tongues and viper venom (quoted in Romans 3:13), the covered head in the day of battle, and justice for the needy that is sure.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
