import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Self-Control — Enkrateia, the Last Fruit of the Spirit | The Vine",
  description:
    "A guide to Christian self-control — enkrateia as fruit of the Spirit, the broken-walled city of Proverbs 25:28, the athlete of 1 Corinthians 9, Joseph's flight, Jesus in the wilderness, self-control in the digital age, and grace-powered change after failure.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
