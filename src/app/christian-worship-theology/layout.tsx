import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Worship Theology | Vine",
  description: "A theology of Christian worship — what worship actually is (beyond singing), the regulative vs. normative principle, liturgy and its meaning, the relationship of Word and sacrament, contemporary vs. traditional worship debates, and how corporate worship forms the people of God.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
