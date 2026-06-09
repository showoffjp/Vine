import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Resurrection: Theology & Evidence | Vine",
  description:
    "A comprehensive guide to the resurrection of Jesus Christ — the historical evidence, what it means theologically, the resurrection body, and the resurrection as the foundation of Christian hope.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
