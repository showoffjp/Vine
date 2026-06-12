import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filled with Goodness: Christian Goodness | The Vine",
  description: "A guide to the fruit of goodness — agathos, moral excellence, good works, and the goodness of God as our foundation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
