import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psalm 131 Study Guide -- Like a Weaned Child Is My Soul",
  description: "Verse-by-verse study of Psalm 131 -- a Song of Ascents by David: a psalm of humility and quieted trust, the soul calmed like a weaned child with its mother, and the call for Israel to hope in the LORD from this time forth and forevermore.",
  openGraph: {
    title: "Psalm 131 Study Guide -- Like a Weaned Child Is My Soul",
    description: "Deep dive into Psalm 131: David's portrait of humble contentment, the discipline of not occupying oneself with things too great, the weaned child as the image of mature trust, and hope anchored in the LORD.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
