import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Life of Christ: An Interactive Harmony of the Gospels | Vine",
  description: "Walk through the life of Jesus chronologically, weaving all four Gospels into one story. An interactive harmony — from the Incarnation to the Ascension — with every event cross-referenced across Matthew, Mark, Luke, and John, theological significance, and reflection prompts.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
