import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Lamp to My Feet: Christian Bible Study | The Vine",
  description:
    "A guide to studying Scripture well — hermeneutics for non-scholars, the difference between exegesis and eisegesis, devotional and study reading, and letting the Word of Christ dwell richly.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
