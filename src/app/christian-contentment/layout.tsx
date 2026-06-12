import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Godliness with Contentment: Christian Contentment | The Vine",
  description:
    "Contentment is a learned discipline, not a feeling — freedom from coveting, rooted in the sufficiency of Christ. Explore Philippians 4:11, 1 Timothy 6:6, Jeremiah Burroughs, and the manna principle.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
