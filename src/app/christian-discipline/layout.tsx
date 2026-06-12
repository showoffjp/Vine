import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Discipline: Training Yourself in Godliness | The Vine",
  description:
    "A guide to Christian discipline — from the athlete analogy and spiritual formation through training, to Richard Foster&rsquo;s three streams and Dallas Willard&rsquo;s insight that transformation comes through training, not trying.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
