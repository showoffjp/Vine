import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 50 Study Guide -- The Mighty One, God the LORD, Speaks",
  description: "Verse-by-verse study of Psalm 50 -- Asaph's courtroom theophany in which God summons heaven and earth, rejects empty ritual, and calls for the sacrifice of thanksgiving and obedience.",
  openGraph: {
    title: "Psalm 50 Study Guide -- The Mighty One, God the LORD, Speaks",
    description: "Deep dive into Psalm 50: God needs no bull from your stall, true worship is thanksgiving, and the warning against those who recite the covenant while living in sin.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
