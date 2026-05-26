import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter — Vine",
  description: "Curated Christian content delivered to your inbox — never algorithmic, always faithful.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
