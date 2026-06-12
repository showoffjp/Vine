import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trusting God — The Theology and Practice of Christian Trust | The Vine",
  description:
    "A guide to biblical trust — exploring batach (Hebrew leaning), Proverbs 3:5-6, faith vs. trust, Psalm 22, Job, Isaiah 26:3, John of the Cross, and the antidote to anxiety and control.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
