import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go and Make Disciples: Christian Evangelism | The Vine",
  description:
    "A guide to sharing your faith — what the gospel actually is, the Great Commission, the role of the Holy Spirit in evangelism, and why every Christian is called to be a witness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
