import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "In Spirit and Truth: Christian Worship | The Vine",
  description:
    "Worship is a whole-life response — not only what happens on Sunday but the living sacrifice of every moment offered to God. Explore the theology of gathered worship, what it means to worship in spirit and truth, and the practices that shape a life of genuine offering.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
