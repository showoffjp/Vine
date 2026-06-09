import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Formation: A Comprehensive Guide | Vine",
  description:
    "A comprehensive guide to Christian spiritual formation — the process of becoming more like Jesus Christ. Covers the theology of spiritual formation, the classical spiritual disciplines, stages of spiritual growth, formation in community, and common pitfalls.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
