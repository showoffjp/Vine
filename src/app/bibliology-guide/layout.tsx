import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibliology: The Doctrine of Scripture — A Comprehensive Guide | Vine",
  description:
    "A comprehensive guide to the Christian doctrine of Scripture — inspiration, inerrancy, infallibility, the canon, the authority of the Bible, perspicuity (clarity), sufficiency, and how to defend and apply a high view of Scripture.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
