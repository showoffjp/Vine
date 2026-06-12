import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moved with Compassion: Christian Compassion | The Vine",
  description: "An exploration of compassion as the gut-level response of God — splagchnizomai, the Good Samaritan crossing every boundary, the Father running to meet his prodigal son, and what it means to see others as God sees them.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
