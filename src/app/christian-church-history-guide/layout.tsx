import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Church History Guide",
  description: "The story of the church — the early church and persecution, the councils and creeds, the Great Schism, the Reformation, the Great Awakenings, the global church today, and what church history teaches us about faith and failure.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
