import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Apologetics Guide",
  description: "Defending the faith — classical apologetics (Aquinas), evidential apologetics (McDowell), presuppositionalism (Van Til/Bahnsen), the cosmological argument, the resurrection evidence, the problem of evil, and why apologetics is an act of love.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
