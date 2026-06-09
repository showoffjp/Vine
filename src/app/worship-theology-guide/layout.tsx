import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of Worship: A Comprehensive Guide | Vine",
  description:
    "A comprehensive guide to Christian worship — the biblical theology of worship, the regulative vs. normative principles, music in the church, liturgy and structure, corporate vs. private worship, contemporary vs. traditional debates, and how to worship in spirit and truth.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
