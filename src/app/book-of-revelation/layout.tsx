import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Understanding Revelation | Vine",
  description:
    "A plain-language guide to the Book of Revelation — apocalyptic genre, the four major interpretive views, key symbols, and what it means for Christians today.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
