import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 53 Study Guide -- The Fool Says in His Heart, There Is No God",
  description: "Verse-by-verse study of Psalm 53 -- the Elohistic twin of Psalm 14, a diagnosis of universal human corruption, practical atheism, and the longing for salvation to come out of Zion.",
  openGraph: {
    title: "Psalm 53 Study Guide -- The Fool Says in His Heart, There Is No God",
    description: "Deep dive into Psalm 53: practical atheism, total depravity, Paul's use in Romans 3, and the hope of restoration from the God who looks down from heaven.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
