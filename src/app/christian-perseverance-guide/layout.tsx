import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Perseverance — Remaining Under the Load | The Vine",
  description:
    "A guide to biblical perseverance — hupomone, remaining under the load; running the race with eyes fixed on Jesus (Hebrews 12:1-3); the perseverance of the saints; and the voices who finished well across long obedience.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
