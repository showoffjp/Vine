import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mastered by Nothing: Christian Self-Control | The Vine",
  description: "A guide to the fruit of self-control — Spirit-empowered mastery over impulses, appetites, and habits, and the freedom found in restraint.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
