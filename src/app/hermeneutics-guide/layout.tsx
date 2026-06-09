import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hermeneutics: How to Read the Bible | Vine",
  description:
    "A guide to biblical hermeneutics — the principles and methods for interpreting Scripture. Genre, context, original meaning, application, the role of tradition, and common interpretation errors to avoid.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
