import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baptism: Theology, Debate, and Practice | Vine",
  description:
    "A comprehensive Christian guide to baptism — the theology of death and resurrection with Christ, the credobaptist and paedobaptist debate, what baptism means for incorporation into the body of Christ, and how to live from your baptismal identity.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
