import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Write the Vision: The Christian Prayer Journal | The Vine",
  description:
    "A guide to keeping a Christian prayer journal — why write prayers down, the journals of the saints, the ACTS framework, lament prayer, and praying the Scriptures back to God.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
