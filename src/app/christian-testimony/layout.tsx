import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tell Your Story: Christian Testimony | The Vine",
  description:
    "A guide to Christian testimony — martyria, Paul and the blind man as models, the three-part testimony structure, and why personal witness is powerful where argument fails.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
