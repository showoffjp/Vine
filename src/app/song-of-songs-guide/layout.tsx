import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Song of Songs: A Comprehensive Study Guide | Vine",
  description: "Explore the most intimate book of the Bible — its Hebrew love poetry, the voices of the Beloved and Lover, the theology of human love, and how the Song shapes Christian spirituality.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
