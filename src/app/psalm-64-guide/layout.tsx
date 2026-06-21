import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 64 Study Guide -- Hear My Voice, O God, in My Complaint",
  description: "Verse-by-verse study of Psalm 64 -- David's prayer against the secret plots and sharp tongues of the wicked, God's sudden arrow of judgment, and the rejoicing of the righteous.",
  openGraph: {
    title: "Psalm 64 Study Guide -- Hear My Voice, O God, in My Complaint",
    description: "Deep dive into Psalm 64: the ambush of slanderous words, the God who turns the schemers' arrows back on themselves, and the gladness of all the upright in heart.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
