import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Marriage: A Comprehensive Biblical Guide | Vine",
  description:
    "A comprehensive biblical guide to Christian marriage — the theology of covenant marriage, headship and submission debates, communication, conflict, intimacy, parenting together, and marriage in crisis.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
