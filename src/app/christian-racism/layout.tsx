import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "One Blood: The Christian Response to Racism | The Vine",
  description:
    "A Christian reckoning with racism — the imago Dei as the foundation of racial equality, the church's history of complicity, and the gospel call to reconciliation. From one blood God made all nations (Acts 17:26).",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
