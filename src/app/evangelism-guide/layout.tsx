import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evangelism: A Comprehensive Guide to Sharing Your Faith | Vine",
  description:
    "A comprehensive guide to Christian evangelism — the biblical theology of sharing the faith, the message of the gospel, how to start spiritual conversations, common objections and responses, compassion evangelism, the relationship between evangelism and social justice, and how to build a culture of witness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
