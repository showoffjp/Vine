import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecclesiology: A Comprehensive Guide to the Doctrine of the Church | Vine",
  description:
    "A comprehensive guide to ecclesiology — the theology of the church. Covers the church's nature and purpose, marks of the true church, church government models, sacraments/ordinances, membership and discipline, unity and diversity, and the church's mission.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
