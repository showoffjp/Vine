import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Gospel of Luke: A Comprehensive Study Guide | Vine",
  description:
    "A comprehensive guide to Luke's Gospel — the Great Reversal, Luke's special material (parables of grace), the Gentile mission, the Holy Spirit in Luke-Acts, women and the marginalized, and the journey to Jerusalem.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
