import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Doubt: When Faith Wavers — A Biblical Guide | Vine",
  description:
    "A compassionate guide to Christian doubt — the difference between doubt and unbelief, how Scripture handles honest questioning, how Jesus responded to doubters, and how doubt can deepen faith rather than destroy it.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
