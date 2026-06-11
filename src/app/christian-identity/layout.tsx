import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Identity | Vine",
  description: "Who are you in Christ? Explore the biblical foundation of Christian identity — new creation, adoption as sons and daughters, royal priesthood, and the security that comes from God's declaration rather than personal performance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
