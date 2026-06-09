import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Theology of Work: A Comprehensive Christian Guide | Vine",
  description:
    "A comprehensive guide to a Christian theology of work — vocation as calling, the cultural mandate, work as worship, the theology of rest, career vs. calling, work after the fall, and labor in the new creation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
