import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Be Holy as I Am Holy: Christian Holiness | The Vine",
  description:
    "A guide to sanctification and holiness — exploring entire sanctification, progressive holiness, union with Christ, the means of grace, and what it means to be set apart for God.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
