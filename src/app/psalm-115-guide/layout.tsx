import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 115 Study Guide -- Not to Us, O LORD, Not to Us",
  description: "Verse-by-verse study of Psalm 115 -- the great anti-idolatry psalm: God's glory versus the futility of idols, the devastating satire 'they have mouths but do not speak,' and the threefold blessing of Israel, Aaron, and God-fearers.",
  openGraph: {
    title: "Psalm 115 Study Guide -- Not to Us, O LORD, Not to Us",
    description: "Deep dive into Psalm 115: the theology of divine glory versus idol futility, the satire of dead gods, the blessing liturgy, and the NT echo in Paul's critique of idolatry in Romans 1.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
