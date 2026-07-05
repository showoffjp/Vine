import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 70 Study Guide -- Make Haste, O God, to Deliver Me",
  description: "Verse-by-verse study of Psalm 70 -- the emergency prayer: five verses of pure urgency, reused from Psalm 40, that became the opening cry of the church's daily prayer: O God, make speed to save us; O LORD, make haste to help us.",
  openGraph: {
    title: "Psalm 70 Study Guide -- Make Haste, O God, to Deliver Me",
    description: "Deep dive into Psalm 70: the theology of the short prayer, the reversal petitions, the poverty posture -- I am poor and needy -- and the God who is help and deliverer.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
