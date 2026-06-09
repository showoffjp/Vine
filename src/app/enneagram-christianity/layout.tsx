import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "The Enneagram & Christianity | Vine",
  description: "A balanced Christian guide to the Enneagram — its history, the theological debate, the nine types through a spiritual lens, and how to use it wisely.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
