import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prophecy Today",
  description: "The most trusted voices in biblical prophecy — tracking Israel, global persecution, and the signs of the times through the lens of Scripture. Real ministries. Real reporting. Biblically grounded.",
  openGraph: {
    title: "Prophecy Today — Vine",
    description: "The most trusted voices in biblical prophecy — tracking Israel, global persecution, and the signs of the times through the lens of Scripture. Real ministries. Real reporting. Biblically grounded.",
    images: ["/api/og?title=Prophecy+Today"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prophecy Today — Vine",
    description: "The most trusted voices in biblical prophecy — tracking Israel, global persecution, and the signs of the times through the lens of Scripture. Real ministries. Real reporting. Biblically grounded.",
    images: ["/api/og?title=Prophecy+Today"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
