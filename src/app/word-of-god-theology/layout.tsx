import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of the Word of God | Vine",
  description:
    "A comprehensive theology of Scripture — what the Bible is, how it was inspired, what inerrancy and infallibility mean, the canon, the authority of Scripture, and how to understand the relationship between Word, Spirit, and the church.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
