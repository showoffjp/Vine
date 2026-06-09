import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Theology of Prayer: A Comprehensive Guide | Vine",
  description:
    "A comprehensive theological guide to prayer — why pray if God is sovereign, the biblical models of prayer, types of prayer, the Lord's Prayer as structure, unanswered prayer, prayer and fasting, intercession, and how to develop a sustained prayer life.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
