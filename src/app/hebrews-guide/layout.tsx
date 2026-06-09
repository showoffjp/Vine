import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book of Hebrews: A Comprehensive Study Guide | Vine",
  description:
    "A comprehensive guide to the Book of Hebrews — Jesus as the superior High Priest, the new covenant, the warning passages, the Hall of Faith (Hebrews 11), and the perseverance that comes from fixing our eyes on Jesus.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
