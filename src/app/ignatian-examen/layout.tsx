import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Ignatian Examen | Vine",
  description: "A practical guide to the Ignatian Examen — the 500-year-old daily prayer practice that transforms how you see God in ordinary moments.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
